const chalk = require("chalk");
const proxyLog = require("debug")("proxy");

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
  devServer: {
    proxy: {
      "/inmanage_lb": {
        target: "http://flameapp.cn",
        changeOrigin: true,
        onProxyReq: ({ method, path }, req, { statusCode }) => {
          proxyLog(
            `${chalk.cyanBright(method)} ${chalk.yellow(statusCode)} ${path}`
          );
        }
      }
    }
  }
};
