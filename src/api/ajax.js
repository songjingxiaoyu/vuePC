//对axios进行二次封装

import axios from 'axios';
import Nprogress from 'nprogress';//加载nprogress的nprogress.js
import 'nprogress/nprogress.css';//加载nprogress的nprogress.css
import  store from  '@/store'
Nprogress.configure({ showSpinner: false });
//1 创建一个新的axios（Axios功能上实例）函数:功能与axios类似
const instance = axios.create({
    // baseURL:'http://182.92.128.115/api/',//具体请求不用再写/api
    baseURL:'/api',
    timeout:15000,
});

//axios请求拦截器
instance.interceptors.request.use(config => {
    //2 显示请求进度条
    Nprogress.start()
    //5 每次请求带userTempId请求头
    // config.headers.userTempId = store.state.user.userTempId
    config.headers['userTempId'] = store.state.user.userTempId
    //6 每次请求带token请求头
    const token = store.state.user.userInfo.token
    if(token){
        config.header['token'] = token
    }
    
    return config;
});


//axios响应拦截器
instance.interceptors.response.use(
    response => {
        //2.1 请求成功结束，隐藏进度条
        Nprogress.done();
        //3 成功返回response.data
        return response.data;
    },
    error => {
        //2.2 请求失败结束，隐藏进度条
        Nprogress.done();
        //4 统一处理请求错误
        alert(`请求出错：${error.message || "未知错误"}`);
        return Promise.reject(error);
    },
);

export default instance;