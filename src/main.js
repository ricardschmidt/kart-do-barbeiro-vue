/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import store from './store';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
require('dotenv/config');

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VeeValidate, {
	errorBagName: 'vErrors'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
