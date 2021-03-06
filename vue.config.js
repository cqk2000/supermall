
//Vue-cli3 
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{

        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('network',resolve('src/network'))
            .set('common',resolve('src/common'))
            .set('views',resolve('src/views'))
            .set('store',resolve('src/store'))
    }
}
