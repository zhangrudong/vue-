module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://mobileway.lecuntao.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
