import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

// Health check endpoint for pre-warming, probes, and container health monitors
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Serve static assets from the current directory
app.use(express.static(__dirname));

// Route all navigation to index.html with robust error handling
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err && !res.headersSent) {
      res.status(500).send('Error loading page');
    }
  });
});

// Start HTTP server
const server = app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});

// Align keep-alive timeout with reverse proxies (e.g. nginx)
server.keepAliveTimeout = 65000;
server.headersTimeout = 66000;

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.warn(`Port ${PORT} is temporarily in use. Retrying in 1s...`);
    setTimeout(() => {
      try {
        server.close();
      } catch (_) {}
      server.listen(PORT, HOST);
    }, 1000);
  } else {
    console.error('Server error encountered:', err);
  }
});

// Prevent unhandled errors or premature client disconnects from crashing the process
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server gracefully');
  server.close(() => {
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server gracefully');
  server.close(() => {
    process.exit(0);
  });
});
