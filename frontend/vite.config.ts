import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: 'node_modules/.cache/vite',
  server: {
    port: 3000,
    open: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    pool: 'forks',
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    setupFiles: ['./src/test/setup/test-setup.ts', './src/setupTests.ts'],
    environmentOptions: {
      jsdom: {
        resources: 'usable'
      }
    },
    deps: {
      inline: [
        '@testing-library/react',
        '@mui/material',
        'react-router-dom'
      ],
      moduleDirectories: ['node_modules']
    },
    mockReset: true,
    restoreMocks: true,
    isolate: false,
    exclude: [...configDefaults.exclude, '**/node_modules/**', '**/.{idea,git,cache}/**'],
    coverage: {
      enabled: false,
    },
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    css: true,
  }
})
