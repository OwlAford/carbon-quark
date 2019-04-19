const path = require("path");
const chalk = require("chalk");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: "/starry/",
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "~": resolve("src")
      }
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: "pug-plain-loader"
        }
      ]
    }
  },
  devServer: {
    proxy: {
      '/data': {
        'target': 'http://www.example.com',
        'changeOrigin': true,
        onProxyReq: proxyReq => {
          console.log(`[${chalk.gray('proxy')}]: ` +
            `${chalk.cyanBright(proxyReq.method)} ` +
            `${chalk.yellowBright(proxyReq.path)}`)
        }
      }
    }
  }
}
