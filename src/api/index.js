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

 