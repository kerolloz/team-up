import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { localize, setInteractionMode } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';

localize({ en });
setInteractionMode('lazy');

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
