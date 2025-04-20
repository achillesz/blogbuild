import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createHtmlPlugin } from 'vite-plugin-html'
import importToCDN from 'vite-plugin-cdn-import'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueDevTools(),
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://stc.yxt.com/assets/29567b5c/278752ac/vue.js',
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'https://stc.yxt.com/assets/29567b5c/6b03a7da/vuerouter.js',
        },
        {
          name: 'pinia',
          var: 'Pinia',
          path: 'https://raw.githubusercontent.com/achillesz/blogbuild/refs/heads/master/pinia.js',
        },
      ],
      // prodUrl: mode === 'production' ? '' : undefined,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'Vue',
      // vuex: 'Vuex',
      // axios: 'axios',
      'vue-router': 'VueRouter',
      pinia: 'Pinia',
    },
  },
  build: {
    // target: ['es2015'],
    rollupOptions: {
      // 确保不打包 Vue 和 Vue Router 到最终产物
      external: ['vue', 'vue-router', 'pinia'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          pinia: 'Pinia',
        },
      },
    },
  },
})
