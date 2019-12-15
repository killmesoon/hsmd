
module.exports = {
    publicPath: './',
    assetsDir: 'static',
    configureWebpack: (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: [{
                loader: 'sass-loader'
            }]
        });
    }
}