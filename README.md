# Our Love Story ✦ A Private Journal

A private romantic journal and love story memory timeline with beautiful themes, password lock, audio/photo embed support, and relaxing ambiance.

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

This website is built with **pure static HTML, CSS, and Vanilla JavaScript**. It has **zero build steps** and requires **no backend server**, which makes it 100% compatible with GitHub Pages for free.

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and log in.
2. Click the **+** (plus icon) at the top right and select **New repository**.
3. Name your repository (e.g., `our-love-story`).
4. Keep it **Public** (free GitHub accounts support GitHub Pages on Public repositories; if you have GitHub Pro, you can choose Private).
5. Do NOT initialize with a new README (leave it blank).
6. Click **Create repository**.

### Step 2: Upload the Files
1. In your new repository page, click **"uploading an existing file"** or push via Git.
2. Upload the `index.html` file into the **root** (main folder) of the repository.
   *(The file MUST be named `index.html` at the top level).*
3. Commit the changes (`Commit changes`).

### Step 3: Enable GitHub Pages
1. In your GitHub repository, click on **Settings** (gear icon in the top tabs).
2. On the left sidebar menu, scroll down and click **Pages**.
3. Under **"Build and deployment"**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**.
5. Wait 1 to 2 minutes, then refresh the page. You will see a banner:
   > *"Your site is live at https://<your-username>.github.io/<repo-name>/"*

---

## 📊 How to Add Free, Legal & Ethical Visitor Analytics

We have integrated two ways to track visitors legally and ethically:

### Option A: Google Analytics 4 (Recommended for Live Charts & Geo Maps)
Tracks:
- Total unique visitors & total visits
- Time spent on the site per user
- Device category (Mobile phone, Tablet, Desktop) & exact screen resolutions
- Operating systems (iOS, Android, Windows, Mac)
- Countries & cities (approximate, anonymized)

**How to activate:**
1. Go to [analytics.google.com](https://analytics.google.com) and sign in with your Google account.
2. Click **Start measuring** and give your account a name.
3. In Property setup, enter your site name and select your timezone.
4. Under "Choose a platform", select **Web**.
5. Enter your GitHub Pages URL (e.g., `https://username.github.io/our-love-story`) and Stream name.
6. Copy your **Measurement ID** (it starts with `G-`, e.g., `G-1234567890`).
7. Open `index.html`, find **Line 18**, remove the `<!--` and `-->` comment tags, and replace `G-XXXXXXXXXX` with your ID:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-YOUR_ID', {
       cookie_flags: 'SameSite=None;Secure',
       anonymize_ip: true
     });
   </script>
   ```
8. Save and commit to GitHub. Your live dashboard on Google Analytics will start reporting visits, durations, and devices immediately!

### Option B: Built-in Local Session Tracker (Already Active)
Even without third-party accounts, `index.html` includes an ethical local session tracker that records:
- Device category (Desktop, Tablet, Mobile Phone)
- Browser name
- Screen resolution (e.g., 390x844 for iPhone, 1920x1080 for desktop)
- Language preference
- Duration spent in seconds
- Whether the journal was unlocked

To view this data anytime in your browser:
1. Press `F12` (or Right-click -> Inspect -> Console).
2. Type:
   ```javascript
   console.table(JSON.parse(localStorage.getItem('journal_visit_history')));
   ```
3. Press Enter to view a clean summary table of all recorded sessions.
