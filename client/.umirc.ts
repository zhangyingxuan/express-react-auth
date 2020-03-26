import { defineConfig } from 'umi';
import { resolve } from 'upath';

export default defineConfig({
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  proxy: {
    "/web": {
      "target": "http://localhost:9003",
      "ws": true,
      "changeOrigin": true
    }
  },
  antd: {},
  dva: {},
  alias: {
    '@': resolve(__dirname, './src')
  }
});
