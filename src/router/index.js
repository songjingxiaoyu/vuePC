import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
//声明使用vue插件
Vue.use(VueRouter);

//缓存原型上的push方法
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
//重新制定原型上的push方法
VueRouter.prototype.push = function (location, onComplete, onAbort){
    console.log('push()',location, onComplete, onAbort);
    //this是路由器对象 $router
    //如果调用push,传递了成功或者失败的回调函数
    if(onComplete || onAbort){
        //让原来的push方法进行处理
        originPush.call(this,location,onComplete,onAbort)
    }else{
        return originPush.call(this, location).catch(() => {
            console.log('catch error');
        })
    }
    
}
VueRouter.prototype.replace = function(location,onComplete,onAbort){
    if(onComplete || onAbort){
        originReplace.call(this,location,onComplete,onAbort)
    }else{
        return originReplace.call(this,location).catch(() => {
            console.log('catch error2');
        })
    }
}



export default new VueRouter({
    mode:'history',//不带#模式
    routes,//配置所有路由
});