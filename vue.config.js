module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
    configureWebpack: {
        devtool: 'source-map'
    },
    productionSourceMap:false
}