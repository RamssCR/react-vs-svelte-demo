import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import tscofigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    tscofigPaths()
  ],
  resolve: {
    alias: {
      "@": resolve(fileURLToPath(import.meta.url), 'src')
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['test/**/*.test.{tsx,ts}'],
    reporters: ['default', 'html', 'dot'],
    coverage: {
      exclude: [
        'node_modules', 
        'tests',
        'vite.config.ts',
        'tailwind.config.ts',
        'eslint.config.js',
        'src/main.tsx',
        'src/types',
        'src/vite-env.d.ts',
        'src/App.tsx',
        'html',
      ],
      reporter: ['text', 'html'],
    },
    benchmark: {
      include: ['benchmark/**/*.{bench,benchmark}.?(c|m)[jt]s?(x)']
    }
  }
})
