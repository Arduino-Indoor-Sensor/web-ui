const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/beta': {
        target: 'http://localhost:3000',
        ws:true,
        changeOrigin: true,
        pathRewrite: {
          '^/beta':'/'
        }
      }
    }
  }
})
