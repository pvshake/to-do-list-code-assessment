import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  //@ts-ignore
  test: {
    browser: {
      enabled: true,
      name: 'chromium',
      provider: 'playwright',
      include: ['**/spec.{ts,tsx}']
    }
  }
})
