# Flourish Landing Page - Next.js Version

Modern, production-ready Next.js landing page for the Flourish PCOS app with Supabase integration.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
flourish-nextjs/
├── app/
│   ├── api/
│   │   └── submit/
│   │       └── route.ts          # API endpoint for form submissions
│   ├── layout.tsx                # Root layout with fonts & metadata
│   ├── page.tsx                  # Main landing page component
│   ├── page.module.css           # Page-specific styles
│   └── globals.css               # Global styles & CSS variables
├── .env.local                    # Environment variables (DO NOT COMMIT)
├── .env.example                  # Template for environment variables
├── .gitignore                    # Git ignore rules
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## 🔧 Environment Variables

Already configured in `.env.local`:

```env
SUPABASE_URL=https://omfexjytievmkqurfxgr.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
```

## 🗄️ Database

Uses existing Supabase project with `landing_waitlist` table:
- name (text)
- email (text, unique)
- features (text[])
- created_at (timestamp)

## 📦 Deployment Options

### Option 1: Deploy to Vercel with GitHub (RECOMMENDED)

This is the **best option for working from multiple computers** - any changes you push to GitHub automatically deploy.

#### First Time Setup:

1. **Create GitHub Repository**
   ```bash
   # In your flourish-nextjs folder:
   git init
   git add .
   git commit -m "Initial Next.js landing page"
   ```

2. **Push to GitHub**
   - Go to [github.com](https://github.com) and create a new repository called "flourish-landing"
   - Follow the instructions to push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/flourish-landing.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js
   - Add environment variables in Vercel dashboard:
     - `SUPABASE_URL`
     - `SUPABASE_ANON_KEY`
   - Click "Deploy"

#### Updates from Any Computer:

```bash
# Make your changes, then:
git add .
git commit -m "Description of changes"
git push

# Vercel automatically redeploys when you push to GitHub!
```

### Option 2: Direct Vercel CLI (No GitHub)

```bash
npm install -g vercel
vercel login
vercel

# For production:
vercel --prod
```

> ⚠️ With CLI-only deployment, you'll need to redeploy from each computer manually. **GitHub sync is strongly recommended.**

## 🔄 Working from Multiple Computers

### Initial Setup on Each Computer:

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/flourish-landing.git
cd flourish-landing

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local
# (Edit .env.local with your Supabase credentials)

# Start development
npm run dev
```

### Making Changes:

**Computer 1:**
```bash
git pull                    # Get latest changes first
# Make your edits
git add .
git commit -m "Updated hero section"
git push
# Vercel auto-deploys!
```

**Computer 2:**
```bash
git pull                    # Gets changes from Computer 1
# Continue working
```

## 🎨 Features

- ✅ Modern Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Responsive design (mobile-first)
- ✅ Google Fonts (Lora + Work Sans) optimized
- ✅ Supabase integration
- ✅ Form validation
- ✅ Clean SVG icons (no emojis)
- ✅ Smooth animations
- ✅ CSS Modules for scoped styles
- ✅ Server-side API routes
- ✅ **Git-friendly for multi-computer workflow**

## 📝 Available Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## 🎯 Next Steps

1. ✅ **Set up GitHub** - Enable multi-computer workflow
2. ✅ **Deploy to Vercel** - Connect your GitHub repo  
3. **Custom Domain** - Add flourishpcos.com in Vercel settings
4. **Test Form** - Submit test entries to verify Supabase
5. **Analytics** - Add Vercel Analytics (optional)

## 💡 Key Differences from HTML Version

| Feature | HTML Version | Next.js Version |
|---------|-------------|-----------------|
| Framework | Vanilla JS | React + Next.js |
| Styling | Inline CSS | CSS Modules |
| Fonts | CDN Link | Next.js Font Optimization |
| API | Serverless Function | Next.js API Route |
| Type Safety | None | TypeScript |
| **Git Workflow** | ❌ | ✅ |
| **Multi-computer** | ❌ | ✅ |
| **Auto-deploy** | ❌ | ✅ |

## 🆘 Troubleshooting

**Build errors?**
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Form not submitting?**
- Check Vercel environment variables are set
- Check Supabase RLS policies allow inserts
- Check browser console for errors

**Can't pull/push to GitHub?**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Port 3000 already in use?**
```bash
# Next.js will automatically try 3001, 3002, etc.
# Or kill the process:
lsof -ti:3000 | xargs kill
```

## 📧 Support

Questions? Email hello@flourishpcos.com

---

**Built with** ❤️ **for women with PCOS**
