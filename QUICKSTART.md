# Quick Start - Get Live in 10 Minutes

## Prerequisites
- GitHub account ([signup here](https://github.com/signup))
- Vercel account ([signup here](https://vercel.com/signup)) - use your GitHub to sign in
- Terminal/Command Line access

## Step 1: Install Dependencies (2 min)

```bash
cd flourish-nextjs
npm install
```

## Step 2: Test Locally (1 min)

```bash
npm run dev
```

Visit http://localhost:3000 - you should see your landing page!

## Step 3: Push to GitHub (3 min)

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub.com (name it "flourish-landing")
# Then connect it:
git remote add origin https://github.com/YOUR_USERNAME/flourish-landing.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel (4 min)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..." → "Project"**
3. **Import** your `flourish-landing` repository
4. Vercel detects Next.js automatically
5. Add **Environment Variables**:
   - `SUPABASE_URL` = `https://omfexjytievmkqurfxgr.supabase.co`
   - `SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tZmV4anl0aWV2bWtxdXJmeGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NzE1NTAsImV4cCI6MjA4MjU0NzU1MH0.HqDeaaIytWo1ItnNks1Tml6qpQLWX-Joqs73ESwH-Lw`
6. Click **"Deploy"**

## ✅ Done!

Your site is live at: `https://flourish-landing-XXXXX.vercel.app`

---

## 🔄 Making Updates from Any Computer

### First time on a new computer:
```bash
git clone https://github.com/YOUR_USERNAME/flourish-landing.git
cd flourish-landing
npm install
cp .env.example .env.local  # Then add your Supabase keys
npm run dev
```

### Every time you make changes:
```bash
git pull           # Get latest
# Make your changes...
git add .
git commit -m "Updated X"
git push           # Vercel auto-deploys!
```

---

## 🎯 What's Next?

- Add custom domain in Vercel settings
- Test the waitlist form
- Share the URL and collect signups!

That's it! 🚀
