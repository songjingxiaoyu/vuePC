<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 原生DOM事件监听 -->
    <button @click="text1">测试绑定原生DOM事件监听</button>
    <button @click="text1($event)">测试绑定原生DOM事件监听</button>
    <br>
    <br>
    <Event1 @click.native="text2"/>
    <!-- 自定义事件监听 -->
    <Event2 @click="text3" @xxx="text4"/>
    <Event2 @click="text3($event)"/>
    <Event2 @click="text3($event)" @xxx="text4($event)"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    components: {
      Event1,
      Event2,
    },

    methods: {
     text1(event){
       alert(event.target.innerHTML)
     },
     text2(event){
       alert('text2' + event.target.innerHTML)
     },
     text3(event){
       alert('text3()' + data)
     },
     text4(event){
       alert('text4()' + data.name)
     },
    }
  }
</script>
