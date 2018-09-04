const { resolve } = require('path')

module.exports = function module (moduleOptions) {
  const options = this.options['google-analytics'] || moduleOptions

  // see https://github.com/nuxt-community/analytics-module/issues/2
  if (options.ua) {
    options.id = options.ua
    delete options.ua
  }

  // Don't include when no analytics id is given
  if (!options.id) {
    // eslint-disable-next-line no-console
    console.warn('GA id not set. Google Analytics module disabled')
    return
  }

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'google-analytics.js',
    options,
    ssr: false
  })
}
