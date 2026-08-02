import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your GitHub repo name for GitHub Pages to load assets correctly.
// If your repo is https://github.com/Abhinayrasamsetti/portfolio, keep base as '/portfolio/'.
// If you rename the repo, change this to '/your-repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
