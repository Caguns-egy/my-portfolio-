import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // REMEMBER: Change this to match your exact GitHub repository name!
  // Example: if your repo is github.com/Caguns-egy/my-portfolio-
  // Then this should be: base: "/my-portfolio-/",
  base: "/YOUR-NEW-REPO-NAME/", 
})