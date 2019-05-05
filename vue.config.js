const path = require("path");
const chalk = require("chalk");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  pwa: {
    name: "分析管理系统",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black"
  },
  publicPath: "/",
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "~": resolve("src/assets")
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
      "/inmanage_lb": {
        target: "http://flameapp.cn",
        changeOrigin: true,
        onProxyReq: proxyReq => {
          console.log(
            `[${chalk.gray("proxy")}]: ` +
              `${chalk.cyanBright(proxyReq.method)} ` +
              `${chalk.yellowBright(proxyReq.path)}`
          );
        }
      }
    }
  }
};
