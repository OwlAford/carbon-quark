const path = require('path')
const env = require('./env')

const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  build: {
    env: env.prod,
    extCSS: [],
    extJS: [
      'https://cdn.bootcss.com/axios/0.17.1/axios.min.js'
    ],
    index: resolve('dist/index.html'),
    assetsRoot: resolve('dist'),
    assetsSubDir: '',
    assetsPublicPath: '/quark/',
    projectName: 'Carbon Quark',
    productionSourceMap: false,
    lint: false,
    gzip: false,
    distServerPort: 3001,
    distServerPath: 'dist',
    gzipExtensions: ['js', 'css'],
    isMobile: true
  },
  dev: {
    env: env.dev,
    extCSS: [],
    extJS: [
      'https://cdn.bootcss.com/axios/0.17.1/axios.min.js'
    ],
    port: 3000,
    lint: true,
    autoOpenBrowser: true,
    projectName: 'Carbon Quark',
    assetsSubDir: '',
    assetsPublicPath: '/',
    proxyTable: {
      '/WechatBank': {
        target: '//test.hccb.cc',
        changeOrigin: true
      }
    },
    isMobile: true,
    cssSourceMap: true
  }
}
