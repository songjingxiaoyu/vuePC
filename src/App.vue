<template>
  <div>
    <Header></Header>
    <router-vue></router-vue>
    <!-- <Footer v-show="$router.path !== './register' && $router.path !== './login'"></Footer> -->
    <Footer v-show="!$router.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components:{
    Header,
    Footer,
  }
}
</script>

<style scoped>

</style>
