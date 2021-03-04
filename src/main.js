import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App';
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(Antd)
// import { Button } from 'ant-design-vue';
// Vue.component(Button.name, Button)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
