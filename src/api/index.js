//包含所有接口请求模块

import ajax from './ajax';
import mockAjax from './mockAjax';

//GET请求
export function reqBaseCategoryList(){
    // return ajax('/product/getBaseCategoryList');
    // return ajax.get('/product/getBaseCategoryList');
    return ajax({
        method:"GET",
        url:'/product/getBaseCategoryList',
    });
};

//POST请求
export function reqLogin(mobile, password){
    return ajax({
        method:'POST',
        url:'/user/passport/login',
        data:{mobile,password}
    });
    // return ajax.post('/user/passport/login',{mobile,password})
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
export const reqCheckCartItem = (skuId,isChecked) => ajax(`/cart/checkCart/${skuId}/${isChecked}`)

 //删除购物车商品
 export const reqDeleteCartItem = (skuId) => ajax(`/cart/deleteCart/${skuId}`)



 