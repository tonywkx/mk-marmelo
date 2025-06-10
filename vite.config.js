import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Включить минификацию
    minify: 'terser',
    // Настройки Terser для более агрессивной минификации
    terserOptions: {
      compress: {
        drop_console: true, // Удалить console.log
        drop_debugger: true, // Удалить debugger
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Удалить определенные функции
        passes: 2, // Количество проходов оптимизации
      },
      mangle: {
        safari10: true, // Совместимость с Safari 10
      },
      format: {
        comments: false, // Удалить комментарии
      }
    },
    // Целевая версия браузера
    target: 'es2020',
    // Увеличить лимит размера чанка
    chunkSizeWarningLimit: 1000,
  }
})
