import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite';
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss(), tsconfigPaths(
    { projects: ['tsconfig.app.json'] }
  ), svelteTesting()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ["test/**/*.ts"],
    reporters: ["default", "html", "dot"],
    coverage: {
      exclude: [
        "svelte.config.js",
        "tailwind.config.ts",
        "vite.config.ts",
        "src/main.ts",
        "src/App.svelte",
        "src/vite-env.d.ts",
        "src/lib/types",
        "coverage/",
        "html/",
        "test",
      ],
      reporter: ["text", "html"]
    },
    benchmark: {
      include: ['benchmark/**/*.{bench,benchmark}.?(c|m)[jt]s?(x)']
    }
  }
})
