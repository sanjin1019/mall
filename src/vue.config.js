module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'src': '@',
                'assets': 'src/assets',
                'views': 'src/views'
            }
        }
    }
}