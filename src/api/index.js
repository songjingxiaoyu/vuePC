//包含所有接口请求模块

import ajax from './ajax';
import mockAjax from './mockAjax';

//请求获取3级分类列表
export function reqBaseCategoryList(){
    // return ajax('/product/getBaseCategoryList');
    // return ajax.get('/product/getBaseCategoryList');
    return ajax({
        method:"GET",
        url:'/product/getBaseCategoryList',
    });
};


//mock接口对应的接口请求函数
export const reqBanners = () => mockAjax('/banners');
export const reqFloors = () => mockAjax('/floors');

//根据搜索条件参数对象，获取商品列表数据
export const reqProductList = (searchParams) => ajax({
    url:'/list',
    method:'POST',
    data: searchParams
})


//请求获取指定id的商品信息
export const reqProduct = (skuId) => ajax(`/item/${skuId}`)




//添加到购物车
export const reqAddToCart = (skuId, skuNumChange) => ajax.post(`/cart/addToCart/${skuId}/${skuNumChange}`)

//获取购物车列表
export const reqCartList=()=>ajax('/cart/cartList')

//切换商品选中的状态
export const reqCheckCartItem = (skuId, isChecked) => ajax(`/cart/checkCart/${skuId}/${isChecked}`)

 //删除购物车商品
 export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)

 
 //请求登录
export function reqLogin(mobile, password){
    return ajax({
        method:'POST',
        url:'/user/passport/login',
        data:{mobile,password}
    });
    // return ajax.post('/user/passport/login',{mobile,password})
};


//请求注册
// export const reqRegister = () => ajax.post(`/user/passport/register`,{mobile,password,code})
export const reqRegister = (userInfo) => ajax.post(`/user/passport/register`,userInfo)

//退出登录
export const reqLogout = () => ajax(`/user/passport/logout`)

//获取订单列表
export const reqMyOrders = (page,limit) =>ajax(`/order/auth/${page}/${limit}`)







