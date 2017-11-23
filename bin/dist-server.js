const ip = require('ip')
const opn = require('opn')
const chalk = require('chalk')
const express = require('express')
const settings = require('../settings/core')
const history = require('connect-history-api-fallback')
const proxyMiddleware = require('http-proxy-middleware')
const proxyTable = settings.dev.proxyTable

const app = express()
const port = settings.build.distServerPort
const publicPath = settings.build.assetsPublicPath
const distServerPath = settings.build.distServerPath
const uri = `http://${ip.address()}:${port}${publicPath}`

app.use(publicPath, express.static(distServerPath))
app.use(publicPath, express.static('./public'))

app.use('/mock', express.static('./mock'))

app.use(history({
  index: `${publicPath}index.html`
}))

app.listen(port, error => {
  if (error) {
    throw error
  }
  console.log(chalk.green(`Server is running at ${uri}`))
  process.env.npm_config_opn && opn(uri)
})

Object.keys(proxyTable).forEach(context => {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  options.onProxyReq = (proxyReq, req, res) => {
    console.log(`[${chalk.gray('proxy')}]: ${chalk.yellow(proxyReq.path)}`)
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

app.use(require('connect-livereload')())
