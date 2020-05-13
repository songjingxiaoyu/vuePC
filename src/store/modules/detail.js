//管理商品详情信息的vue子模块
import { reqProduct } from '@/api'

const state = {
    detailInfo:{},//当前商品详情信息对象
}
const mutations = {
    //接收保存新的商品列表数据
    RECEIVE_DETAIL_INFO(state,detailInfo){
        state.detailInfo = detailInfo
    }
}
const actions = {
    //获取商品列表数据的异步action
    async getDetailInfo({commit},skuId){
        const result = await reqProduct(skuId)
        if(result.code===200){
            const detailInfo = result.data
            commit('RECEIVE_DETAIL_INFO',detailInfo)
        }
    },
    

}
const getters = {
    //包含3级分类名称数据的对象
    categoryView(state){
        const categoryView = state.detailInfo.categoryView
        return categoryView || {}
        // return categoryView === undefined ? {} : categoryView
    },
    //商品信息
    skuInfo(state){
        const skuInfo = state.detailInfo.skuInfo
        return skuInfo || {}
    },
    //图片列表
    skuImageList(state){
        const skuInfo = state.detailInfo.skuInfo
        return skuInfo ? skuInfo.skuImageList : []
    },
    //返回商品SPU销售属性列表
    spuSaleAttrList(state){
        const spuSaleAttrList = state.detailInfo.spuSaleAttrList
        return spuSaleAttrList || []
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}