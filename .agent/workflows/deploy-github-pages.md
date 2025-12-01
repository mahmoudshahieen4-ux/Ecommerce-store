# GitHub Pages Deployment Workflow

This workflow explains how to deploy the e-commerce React app to GitHub Pages.

## Prerequisites
- Ensure you have committed all your changes
- Make sure the repository is pushed to GitHub

## Steps

### 1. Build the project
```bash
npm run build
```

### 2. Deploy to GitHub Pages
// turbo
```bash
npm run deploy
```

### 3. Verify deployment
After deployment completes, your site will be available at:
`https://[your-username].github.io/Ecommerce-store/`

## Configuration Details

The following files are already configured for GitHub Pages:

- **vite.config.js**: `base: '/Ecommerce-store/'` - Sets the base path for production
- **main.jsx**: `<BrowserRouter basename="/Ecommerce-store">` - Configures React Router for GitHub Pages
- **package.json**: Contains `predeploy` and `deploy` scripts

## Troubleshooting

If the site doesn't load:
1. Check GitHub repository settings → Pages → ensure source is set to `gh-pages` branch
2. Wait a few minutes for GitHub to process the deployment
3. Clear your browser cache and try again

## Making Updates

After making changes to your code:
1. Commit your changes: `git add . && git commit -m "Your message"`
2. Push to GitHub: `git push origin main`
3. Deploy: `npm run deploy`
