import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN';
import VCharts from 'v-charts';
import "@/styles/index.scss";

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(ElementUI, {locale});
Vue.use(VCharts);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
