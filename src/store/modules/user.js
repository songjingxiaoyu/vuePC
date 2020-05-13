//管理用户数据

import {getUserTempId} from '@/utils'
export default {
    state:{
        userInfo:{},
        userTempId:getUserTempId() //用户临时id，获取函数只执行一次
    },
    mutations:{},
    actions:{},
    getters:{},
}