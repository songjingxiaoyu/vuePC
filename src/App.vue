<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- <Footer v-show="$router.path !== './register' && $router.path !== './login'"></Footer> -->
    <Footer v-show="!$route.meta.isHideFooter"/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import {reqBaseCategoryList,reqLogin} from '@/api';
import {reqBanners} from '@/api';
import {reqFloors} from '@/api';
export default {
  name: 'App',
  async mounted() {
    //测试接口请求函数
    // const result = await reqBaseCategoryList();
    // console.log('result',result);
    // const result2 = await reqLogin('13700000000','111111');
    // console.log('result2',result2);
    // console.log(this.$store.state);
    //测试通过异步action获取异步数据到vuex的state中
    // this.$store.dispatch('getBaseCategoryList');
    

    this.$store.dispatch('getBaseCategoryList');
  },
  components:{
    Header,
    Footer,
  }
}
</script>

<style scoped>

</style>
