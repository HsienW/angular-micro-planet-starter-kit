const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
    optimization: {
        runtimeChunk: false
    },
    // externals: {
    //   lodash: '_',
    //   rxjs: 'rxjs', 'rxjs/operators': 'rxjs.operators',
    // },
    plugins: [new WebpackAssetsManifest()]
};
