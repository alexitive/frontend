/* eslint-disable @typescript-eslint/no-var-requires */
// const CracoLessPlugin = require('craco-less');

module.exports = {
  // plugins: [
  //   {
  //     plugin: CracoLessPlugin,
  //     options: {
  //       lessLoaderOptions: {
  //         lessOptions: {
  //           // modifyVars: { '@primary-color': '#1DA57A' },
  //           modules: true,
  //           javascriptEnabled: true
  //         }
  //       }
  //     }
  //   }
  // ],
  devServer: {
    proxy: { // 反向代理，http:localhost:3000/api => http:localhost:8080/
      '/api': {
        target: 'http://127.0.0.1:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // babel: {
  //   plugins: [
  //     ['@babel/plugin-proposal-decorators', { legacy: true }],
  //     [
  //       'import',
  //       {
  //         libraryName: 'antd',
  //         libraryDirectory: 'es',
  //         style: true
  //       }
  //     ]
  //   ]
  // }
};
