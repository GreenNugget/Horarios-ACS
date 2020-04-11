module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  devServer: { port: process.env.VUE_APP_PORT },
  outputDir: 'dist',
};