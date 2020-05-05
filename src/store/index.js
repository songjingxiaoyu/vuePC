//vuex最核心的管理对象：store

import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
//声明使用vuex插件
Vue.use(Vuex);


const mutations = {
    test2(state){//总的state

    }
};
const actions = {

};
const getters = {

};



export default new Vuex.Store({
    // state,
    mutations,
    actions,
    getters,
    modules,
});

//vuex的store管理的总state是什么结构：对象