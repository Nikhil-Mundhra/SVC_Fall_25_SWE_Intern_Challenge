import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      all: true,
      provider: 'v8',
      thresholds: { lines: 100, functions: 100, statements: 100, branches: 100 },
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: ['**/*.d.ts']
    }
  }
});
