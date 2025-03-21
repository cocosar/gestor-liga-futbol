import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['**/__tests__/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    // Configuración para acelerar las pruebas
    bail: 1, // Detener las pruebas después del primer error
    testTimeout: 10000, // Tiempo máximo por prueba en milisegundos (10 segundos)
    // Establecer un límite de memoria más bajo para detectar fugas rápidamente
    poolOptions: {
      threads: {
        singleThread: false,
        maxThreads: 3
      }
    }
  }
}); 