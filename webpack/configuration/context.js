/* eslint-disable import/no-extraneous-dependencies */
// dependencies
const path = require('path')

module.exports = type =>
  type === 'server'
    ? path.resolve(__dirname, '../../src/server')
    : path.resolve(__dirname, '../../src/app')
