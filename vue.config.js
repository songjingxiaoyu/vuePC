module.exports = {
    lintOnSave:false,//关闭eslint规则检查
    devServer:{
        proxy:{//配置代理
            '/api':{
                target: 'http://182.92.128.115', // 转发的目标地址
                changeOrigin:true,//支持跨域
            }

        }
    }
}