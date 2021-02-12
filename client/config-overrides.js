const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@': 'src',
    '@components': 'src/components',
    '@layouts' : 'src/layouts',
    '@store' : 'src/store',
    '@http' : 'src/http',
    '@utils' : 'src/utils',
    '@assets' : 'src/assets',
    '@routes' : 'src/routes',
    '@styles' : 'src/styles'
  })(config)

  return config
}