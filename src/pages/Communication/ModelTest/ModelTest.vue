<template>
  <div>
    <h2>深入v-model</h2>
    <!-- 原生v-model -->
    <input type="text" v-model="name1">
    <span>{{name1}}</span>
    <br>
    <br>
    <!-- v-model本质是动态的value属性与原生的input事件监听 -->
    <input type="text" :value="name2" @input="name2=$event.target.value">
    <span>{{name2}}</span>
    <br>
    <br>
    <!-- 自定义v-model -->
    <CustomInput v-model="name3"/>
    <span>{{name3}}</span>
    <br>
    <br>
    <!-- v-model本质是动态的value属性与自定义的input事件监听 -->
    <CustomInput :value="name4" @input="name4=$event"/>
    <span>{{name4}}</span>
    <br>
    <br>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data() {
      return {
        name1:'haha1',
        name2:'haha2',
        name3:'haha3',
        name4:'haha4',
      }
    },
    components: {
      CustomInput
    }
  }
</script>
