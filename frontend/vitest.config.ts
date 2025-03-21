import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: 'node_modules/.cache/vite',
  test: {
    environment: 'jsdom',
    globals: true,
    pool: 'forks',
    isolate: false,
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/.git/**'],
    testTransformMode: {
      web: ['.[jt]sx']
    },
    testTimeout: 5000,
    deps: {
      optimizer: {
        web: {
          include: ['@testing-library/react']
        }
      },
      interopDefault: true,
    },
  }
}) 