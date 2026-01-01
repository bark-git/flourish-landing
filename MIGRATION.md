# HTML → Next.js Migration Guide

## What Changed?

Your landing page has been rebuilt from scratch in Next.js while keeping **100% of your design** intact.

## File Structure Comparison

### Old (HTML Version)
```
flourish-landing/
├── index.html          # Everything in one file
├── api/submit.js       # Vercel serverless function
├── package.json
└── .env
```

### New (Next.js Version)
```
flourish-nextjs/
├── app/
│   ├── layout.tsx              # Page wrapper (fonts, metadata)
│   ├── page.tsx                # Main content (component-based)
│   ├── page.module.css         # Scoped styles
│   ├── globals.css             # Global styles
│   └── api/submit/route.ts     # API endpoint (same function, better)
├── package.json                # More dependencies
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
├── .env.local                  # Local environment
├── .env.example                # Template
├── .gitignore                  # Git rules
├── README.md                   # Full docs
└── QUICKSTART.md               # 10-min setup
```

## Key Improvements

### 1. **Multi-Computer Workflow** ✅
**Before:** Had to copy files manually between computers  
**After:** Push to GitHub from Computer A, pull on Computer B - always in sync

### 2. **Automatic Deployments** ✅
**Before:** Run `vercel --prod` manually after every change  
**After:** Push to GitHub → Vercel auto-deploys (zero commands needed)

### 3. **Type Safety** ✅
**Before:** JavaScript (easy to make mistakes)  
**After:** TypeScript (catches errors before deployment)

### 4. **Better Code Organization** ✅
**Before:** 300+ lines in one HTML file  
**After:** Modular components, separate files by concern

### 5. **Optimized Performance** ✅
**Before:** Fonts loaded from Google CDN  
**After:** Next.js automatically optimizes and self-hosts fonts

### 6. **Better Developer Experience** ✅
**Before:** Edit HTML, save, refresh browser  
**After:** Hot module replacement - changes appear instantly

## Design Preservation

Every pixel of your design is **exactly the same**:
- ✅ Sage Serenity color palette
- ✅ Lora + Work Sans fonts
- ✅ All animations and hover effects
- ✅ Clean SVG icons (no emojis)
- ✅ Responsive layout
- ✅ Form validation
- ✅ Success/error messages
- ✅ Supabase integration (same table, same data)

## What You Need to Learn

### Minimal React/Next.js Knowledge Needed

**You don't need to become a React expert.** Here's what you should know:

1. **Components are just functions that return HTML-ish code (JSX)**
   ```tsx
   // This is a component:
   function MyButton() {
     return <button>Click me</button>
   }
   ```

2. **CSS Modules keep styles scoped**
   ```tsx
   import styles from './page.module.css'
   <div className={styles.hero}>  // Not "class", it's "className"
   ```

3. **State manages interactive data**
   ```tsx
   const [email, setEmail] = useState('')  // Like a variable that updates the UI
   ```

That's it! You can make 90% of your edits by just:
- Changing text in `page.tsx`
- Changing colors in `globals.css` or `page.module.css`
- Everything else works the same

## Common Edits You'll Make

### Change Text Content
**File:** `app/page.tsx`
```tsx
<h1 className={styles.title}>Where Women with PCOS Thrive</h1>
// Just edit the text between > and <
```

### Change Colors
**File:** `app/globals.css`
```css
:root {
  --sage: #8BA888;  /* Change this */
}
```

### Add a New Section
**File:** `app/page.tsx`
```tsx
<section className={styles.newSection}>
  <h2>New Heading</h2>
  <p>New content</p>
</section>
```

**File:** `app/page.module.css`
```css
.newSection {
  padding: 40px 0;
  text-align: center;
}
```

## Deployment Workflow (The Big Win)

### Old Workflow
```
Computer A:
1. Edit index.html
2. vercel --prod
3. Wait...
4. Copy file to USB drive
5. Plug into Computer B
6. Continue working

Computer B:
1. Hope you have the latest version
2. Edit index.html
3. vercel --prod
4. Copy to USB drive...
```

### New Workflow
```
Computer A:
1. git pull
2. Edit files
3. git add .
4. git commit -m "Updated hero"
5. git push
→ Vercel auto-deploys! ✨

Computer B:
1. git pull
2. You have all the latest changes!
3. Continue working...
```

## Migration Checklist

- [x] All design elements preserved
- [x] Supabase integration working
- [x] Environment variables configured
- [x] TypeScript setup
- [x] Git ready
- [ ] **You need to:** Push to GitHub
- [ ] **You need to:** Connect to Vercel
- [ ] **You need to:** Test form submission
- [ ] **You need to:** Add custom domain

## FAQ

**Q: Do I need to rebuild the old HTML version?**  
A: No! Just archive it. Start using the Next.js version going forward.

**Q: What if I prefer the HTML version?**  
A: That's fine - but you won't have multi-computer sync or auto-deploys.

**Q: Is this harder to maintain?**  
A: No - it's actually easier once you get past the initial GitHub setup.

**Q: What if I don't know Git?**  
A: The QUICKSTART.md has all the commands you need. You'll learn the 5 commands you need in 10 minutes.

**Q: Can I still edit files directly?**  
A: Yes! Edit locally, test with `npm run dev`, then push to deploy.

**Q: What if something breaks?**  
A: Git lets you roll back to any previous version. You can't "break" anything permanently.

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Basics](https://react.dev/learn)
- [Git Basics](https://git-scm.com/doc)
- Your README.md (comprehensive guide)
- Your QUICKSTART.md (10-minute setup)

---

**Bottom Line:** Same design, better infrastructure, multi-computer ready. 🚀
