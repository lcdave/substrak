module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Substrak'
      return args
    })
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/scss/_variables.scss";`
      }
    }
  },
}
