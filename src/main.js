import Vue from 'vue';
import  'swiper/css/swiper.min.css'
// import App from './App.vue';
import App from '@/App';
import router from './router';
import store from './store';
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination'
import './mock/mockServer';
import './validate'
import * as API from '@/api'


Vue.config.productionTip = false//去掉生产环境的提示

Vue.prototype.$API = API

//注册全局组件
Vue.component('TypeNav',TypeNav);
Vue.component('Carousel',Carousel);
Vue.component('Pagination',Pagination);

// Vue.prototype.$bus = new Vue();

new Vue({
  beforeCreate() {
    //当前vm对象
    Vue.prototype.$bus = this;
  },
  render: h => h(App),
  router,//配置路由器
  store,//配置Vuex的store
}).$mount('#app');
