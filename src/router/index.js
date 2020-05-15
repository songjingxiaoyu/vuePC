
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
import store from '@/store'

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
        //让原来的push方法处理
        originPush.call(this,location,onComplete,onAbort)
    }else{
        return originPush.call(this, location).catch((error) => {
            console.log('catch 到重复请求的error');
            return new Promise(() => {});
        })
    } 
}
VueRouter.prototype.replace = function(location,onComplete,onAbort){
    if(onComplete || onAbort){
        originReplace.call(this,location,onComplete,onAbort)
    }else{
        return originReplace.call(this,location).catch(() => {
            console.log('catch error2');
            return new Promise(() => {});
        })
    }
}



const router =  new VueRouter({
    mode:'history',//不带#模式
    routes,//配置所有路由
    scrollBehavior(to,from,savedPosition){
        return {x:0,y:0}
    }
});

//注册全局前置守卫
// router.beforeEach((to,from,next)=>{
//     console.log('beforeEach',to,from)
//     //放行
//     next()
// })
//注册全局后置守卫
// router.afterEach((to,from)=>{
//     console.log('afterEach')
// })

//所有需要登录检查的路由路径
const checkPaths = ['/trade','/pay','/center']

//只有登录了，才能查看交易/支付/个人中心界面
router.beforeEach((to,from,next)=>{
    const targetPath = to.path
    // const isCheckPath = !!checkPaths.find(path => targetPath.indexOf(path)===0)
    const isCheckPath = checkPaths.some(path => targetPath.indexOf(path)===0)
    if(isCheckPath){
        if(store.state.user.userInfo.name){
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }

})


export default router


