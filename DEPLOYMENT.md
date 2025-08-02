# ProcOS.ai Deployment Guide

## Vercel Deployment (Recommended)

### One-Time Setup

1. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account (laserpointlabs)

2. **Import Project**:
   - Click "Add New" → "Project"
   - Select your `procos-ai` repository
   - Set **Root Directory** to `website`
   - Vercel will auto-detect Next.js configuration

3. **Deploy**:
   - Click "Deploy"
   - Your site will be live at `https://procos-ai-[random].vercel.app`

### Automatic Deployments

After setup, every push to the `master` branch automatically deploys:
```bash
git add .
git commit -m "Update website"
git push origin master
# Vercel automatically deploys in ~30 seconds
```

### Custom Domain Setup (procos.ai)

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Click "Domains"
   - Add `procos.ai`
   - Add `www.procos.ai`

2. **Update DNS Records**:
   At your domain registrar, add these DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61

   Type: CNAME  
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**:
   - Automatically provisioned by Vercel
   - Usually ready within 10-15 minutes

## Alternative: GitHub Pages (Static Only)

For a static version without server-side features:

```bash
cd website
npm run export
# Deploy the `out` folder to GitHub Pages
```

Note: This loses Next.js dynamic features but works for basic static hosting.

## Development

Local development server:
```bash
cd website
npm run dev -- --port=9999
# Visit http://localhost:9999
```

## Production Build Test

Test production build locally:
```bash
cd website
npm run build
npm run start
```

## Environment Variables

If you need environment variables in production:
1. Add them to Vercel dashboard under "Environment Variables"
2. Or create `.env.local` (never commit this file)

## Performance

The website is optimized for:
- Static generation where possible
- Image optimization
- CSS/JS minification
- Global CDN delivery via Vercel Edge Network

Expected performance:
- Initial load: < 2 seconds
- Page transitions: < 500ms
- Lighthouse score: 95+ across all metrics