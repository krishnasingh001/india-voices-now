# Deploying to GitHub Pages

This guide will help you deploy your India Voices Now app to GitHub Pages.

## Prerequisites

1. Make sure your code is pushed to a GitHub repository
2. The repository should be named `india-voices-now` (or update the base URL in `vite.config.ts`)

## Method 1: Automatic Deployment (Recommended)

### Step 1: Enable GitHub Pages
1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. This will use the workflow we've configured in `.github/workflows/deploy.yml`

### Step 2: Push Your Changes
```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### Step 3: Monitor Deployment
1. Go to your repository on GitHub
2. Click on "Actions" tab
3. You should see the "Deploy to GitHub Pages" workflow running
4. Once completed, your app will be available at: `https://[your-username].github.io/india-voices-now/`

## Method 2: Manual Deployment

### Step 1: Install Dependencies
```bash
npm install
# or if using bun
bun install
```

### Step 2: Build the Project
```bash
npm run build
# or if using bun
bun run build
```

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
# or if using bun
bun run deploy
```

## Configuration Details

### Vite Configuration
The `vite.config.ts` file has been updated with:
- `base: '/india-voices-now/'` for production builds
- This ensures all assets are loaded correctly from the GitHub Pages URL

### GitHub Actions Workflow
The `.github/workflows/deploy.yml` file:
- Triggers on pushes to the main branch
- Installs dependencies
- Builds the project
- Deploys to GitHub Pages using the `gh-pages` branch

## Troubleshooting

### If assets don't load correctly:
1. Check that the repository name matches the base URL in `vite.config.ts`
2. Ensure the build completed successfully
3. Clear your browser cache

### If the deployment fails:
1. Check the GitHub Actions logs for errors
2. Ensure all dependencies are properly installed
3. Verify the repository has the correct permissions

### If you change the repository name:
Update the base URL in `vite.config.ts`:
```typescript
base: process.env.NODE_ENV === 'production' ? '/your-new-repo-name/' : '/',
```

## Your App URL
Once deployed, your app will be available at:
`https://[your-username].github.io/india-voices-now/`

Replace `[your-username]` with your actual GitHub username. 