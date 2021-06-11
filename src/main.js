import Vue from 'vue';
import App from './App.vue';
import router from './router'
import { Search, Icon  } from 'vant';


import './assets/css/normalize.css';
import './assets/css/base.css';
import 'vant/lib/index.less';

Vue.config.productionTip = false

Vue.use(Search);
Vue.use(Icon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
