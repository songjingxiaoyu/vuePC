//管理购物车相关数据vuex模块

import {reqCartList, reqCheckCartItem,reqAddToCart,reqDeleteCartItem} from '@/api';

export default {
    state:{
        cartList:[],//购物项列表
    },
    mutations:{
        // RECEIVE_CART_LIST(state,cartList){
        RECEIVE_CART_LIST(state,{cartList}){
            state.cartList = cartList
        }
        
    },
    actions:{
        //获取购物车列表数据的异步action
       async  getCartList({commit}){
            const result = await reqCartList()
            if(result.code===200){
                const cartList = result.data
                // commit('RECEIVE_CART_LIST',cartList)
                commit('RECEIVE_CART_LIST',{cartList})
            }
        },
        //改变购物车项的勾选状态的异步
        async checkCartItem({},{skuId,isChecked}){
            const result = await reqCheckCartItem(skuId,isChecked)
            if(result.code!==200){
                throw new Error(result.message || '勾选状态操作成功')
            }
        },
        //对所有购物项实现全选/全不选
        // async checkAllCartItems(context,checked){
        async checkAllCartItems({state, commit, dispatch, getters}, checked) {
            const isChecked = checked ? 1 : 0
            const promises = []
            state.cartList.forEach(item => {
                if(item.isChecked===isChecked) return
                const promise = dispatch('checkCartItem',{skuId:item.skuId,isChecked})
                promises.push(promise)
            })
            return Promise.all(promises)
        },
        

        //
        async addToCart({commit}, {skuId,skuNum,callback}){
            const result = await reqAddToCart(skuId,skuNum)
            if(result.code===200){
                //添加到购物车成功
                console.log('添加购物车成功')
                callback()
                // callback({status: 0, message:'添加购物车成功'})     
            }else{
                //添加到购物车失败
                console.log('添加购物车失败')
                callback('添加购物车失败')
                // callback({status:1,message:'添加购物车失败'})
            }
        },
        async addToCart2({commit},{skuId,skuNum}){
            const result = await reqAddToCart(skuId,skuNum)
            if(result.code===200){
                //添加到购物车成功
                return ''
            }else{
                //添加到购物车失败
                return '添加购物车失败'
            }
        },
        //添加商品到购物车异步acyion,如果有就是修改商品的数量异步action
        async addToCart3({commit},{skuId,skuNum}){
            const result = await reqAddToCart(skuId,skuNum)
            if(result.code!==200){
                throw new Error ('添加购物车失败')
            }
        },
        //删除指定一个商品
        async deleteCartItem(context,skuId){
            const result = await reqDeleteCartItem(skuId)
            if(result.code!==200){
                throw new Error('删除商品失败')
            }
        },
        //删除所有选中的商品
        async deleteCheckedCartItems({state,dispatch}){
            const promises = state.cartList.reduce((pre,item) => {
                if(item.isChecked===1){
                    pre.push(dispatch('deleteCartItem',item.skuId))
                }
                return pre
            },[])
            return Promise.all(promises)
        },
       
    },
    getters:{
        //已选中的商品总数量
        totalCount(state){
            //方法1:原始方法
            let total = 0
            state.cartList.forEach(item=>{
                const {isChecked,skuNum} = item
                if(isChecked === 1){
                    total += skuNum
                }
            })
            return total
            //方法2：使用数组的reduce()
            // return state.cartList.reduce((pre,item)=>{
            //     return item.isChecked === 1 ? pre + item.skuNum : pre 
            // },0)
        },
        //已选商品的总价格
        totalPrice(state){
            //方法1：原始方法
            let total = 0
            state.cartList.forEach(item=>{
                const {isChecked,cartPrice,skuNum} = item
                if(isChecked === 1){
                    total += cartPrice * skuNum
                }
            })
            return total
            //方法2：使用数组的reduce()
            // return state.cartList.reduce((pre,item)=>{
            //     return item.isChecked === 1 ? pre + item.skuNum*item*cartPrice : pre 
            // },0)
        }

    },
}