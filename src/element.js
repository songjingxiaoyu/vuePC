//element
import Vue from 'vue';

//完整引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

//按需引入
import {
    Pagination,
    MessageBox,
    Message
} from 'element-ui'
//注册全局组件
//标签组件  <el-pagination></el-pagination>
Vue.component(Pagination.name, Pagination);
//函数/对象组件
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;


