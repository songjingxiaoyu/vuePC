import Vue from 'vue';
// import App from './App.vue';
import App from '@/App';
import router from './router';
import store from './store';
import TypeNav from '@/components/TypeNav';
import './mock/mockServer';


Vue.config.productionTip = false//去掉生产环境的提示
Vue.component('TypeNav',TypeNav);

new Vue({
  render: h => h(App),
  router,//配置路由器
  store,//配置Vuex的store
}).$mount('#app');
