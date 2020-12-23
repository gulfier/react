// configuration
const { extensions, modules, rules, performance } = require('./configuration')

module.exports = type => ({
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions,
    modules,
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  performance: performance(type)
})
