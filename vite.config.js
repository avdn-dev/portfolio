import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      react({
        babel: {
          plugins: ['styled-jsx/babel'],
        },
      }),
    ],
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/portfolio/'
  }

  return config
})
