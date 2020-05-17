
// import Home from '@/pages/Home';
// import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';

import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';


import GroupBuy from '@/pages/Center/GroupBuy';
import MyOrder from '@/pages/Center/MyOrder';


import Register from '@/pages/Register';
import Login from '@/pages/Login';

import store from '@/store'
import router from '@/router'


export default [
    {
        path:'/',
        // component:Home,
        //路由懒加载
        //动态引入，单独打包，第一次访问对应路由才会执行
        component:() => import('@/pages/Home'),
    },
    {
        name:'search',
        path:'/search/:keyword?',
        // component:Search,
        component:() => import('@/pages/Search'),
        props: route => ({keyword3:route.params.keyword,keyword4:route.query.keyword2})
    },
    {
        name:'detail',
        path:'/detail/:skuId',
        component:Detail,
    },
    {
        path:'/addcartsuccess',
        component:AddCartSuccess,
        beforeEnter (to, from, next) {
            // const route = router.currentRoute
            const skuNum = to.query.skuNum
            const skuInfo = JSON.parse( window.sessionStorage.getItem('SKU_INFO_KEY'))
            if(skuNum && skuInfo){
              next()
            }else{
              next('/')
            }
        }
    },
    {
        path:'/shopcart',
        component:ShopCart,
    },


    
    {
        path:'/trade',
        component:Trade,
        beforeEnter(to,from,next){
            if(from.path==='/shopcart'){
                next()
            }else{
                next('/shopcart')
            }
        }
    },
    {
        path:'/pay',
        component:Pay,
        //将query映射成props传递给路由组件
        props:route => ({orderId:route.query.orderId}),
        beforeEnter(to,from,next){
            if(from.path==='/trade'){
                next()
            }else{
                next('/trade')
            }
        }
    },
    {
        path:'/paysuccess',
        component:PaySuccess,
        beforeEnter(to,from,next){
            if(from.path==='/pay'){
                next()
            }else{
                next('/pay')
            }
        }
    },
    {
        path:'/center',
        component:Center,
        children:[
            {
                path:'groupbuy',
                component:GroupBuy,
            },
            {
                path:'myorder',
                component:MyOrder,
            },
            {
                path:'',
                redirect:'myorder',
            },
        ]
    },



    {
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        },
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
        },
        //登录了去登录页面，没有登录去首页
        //路由守卫
        // beforeEnter: (to, from, next) => {
        //     if(!store.state.user.userInfo.token){
        //         next()
        //     }else{
        //         next('/')
        //     }
        // },
        
    },
]