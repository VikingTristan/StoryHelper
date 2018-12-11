module.exports = {
    chainWebpack: config => {
        // Raw Loader
        config.module
            .rule('txt')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    }
}