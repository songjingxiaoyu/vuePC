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

export const reqBanners = () => mockAjax('/banners');
export const reqFloors = () => mockAjax('/floors');