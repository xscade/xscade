# Vercel Deployment Guide for Xscade

## If deploying xscade as a separate project:

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Set **Root Directory** to: `xscade`
   - Framework Preset: **Next.js**
   - Build Command: `npm run build` (or leave default)
   - Output Directory: `.next` (or leave default)
   - Install Command: `npm install` (or leave default)

2. **Environment Variables:**
   - No environment variables required for basic deployment

3. **Deploy:**
   - Push to your repository
   - Vercel will automatically detect and deploy

## If deploying from monorepo root:

If your repository root is `/Users/ravi/development/Nxtbeing` and xscade is a subdirectory:

1. **In Vercel Dashboard:**
   - Set **Root Directory** to: `xscade`
   - Framework Preset: **Next.js**
   - Build Command: `cd xscade && npm run build`
   - Output Directory: `xscade/.next`
   - Install Command: `cd xscade && npm install`

## Common Issues:

### 404 Error
- **Cause**: Wrong root directory or build failing
- **Solution**: 
  - Check Vercel build logs
  - Ensure Root Directory is set to `xscade`
  - Verify `package.json` exists in xscade folder

### Build Errors
- Check that all dependencies are in `package.json`
- Ensure `next.config.ts` is properly configured
- Verify TypeScript compilation passes locally: `npm run build`

### Image Loading Issues
- Verify `next.config.ts` has correct `remotePatterns` for Unsplash and Spline
- Check that image URLs are accessible

## Verify Deployment:

1. Run build locally:
```bash
cd xscade
npm run build
```

2. If build succeeds locally, the issue is likely Vercel configuration
3. Check Vercel deployment logs for specific errors
