const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      args[0].title = 'Good 交易所'
      return args
    })
  },
  devServer: {
    port: 9999,
    host: "0.0.0.0",
    allowedHosts: 'all'
  }
})
