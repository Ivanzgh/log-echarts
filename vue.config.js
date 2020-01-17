const path = require('path')

module.exports = {

    devServer: {
        contentBase: path.join(__dirname, './'),
        open: true,
        port: 8081,
        host: '0.0.0.0',
        hot: true,
        proxy: {
            '/': {
                target: 'http://130.10.8.206:10000/mock/5df1e0f011350a000b63ab3b',
                ws: true,
                changeOrigin: true
            }
        },
    }
}