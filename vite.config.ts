import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 指定解析路径
import { resolve } from 'path'

//组件配置
// import Components from 'unplugin-vue-components/vite'
// import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

const pathResolve = (dir: string) => resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   //ui库解析器，可自定义
    //   resolvers: [
    //     AntDesignVueResolver()
    //   ]
    // })
  ],
  base: './', // 设置公共基础路径
  server: {
    port: 8888,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',    // 后台服务地址
        changeOrigin: true, // 是否允许不同源
        secure: false,      // 支持https
        rewrite: path => path.replace(/^api/, '')
      }
    },
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),  // 设置 `@` 指向 `src` 目录
      views: pathResolve('./src/views'), // 设置 `views` 指向 `./src/views` 目录，下同
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets'),
    }
  },
  build: {
    outDir: 'dist',
    minify: "terser",
    terserOptions: {
      compress: {
        keep_infinity: true,  // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true,   // 生产环境去除 console
        drop_debugger: true   // 生产环境去除 debugger
      },
    },
    chunkSizeWarningLimit: 1500   // chunk 大小警告的限制（以 kbs 为单位）
  }
})
