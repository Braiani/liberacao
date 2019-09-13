import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import VueLoading from 'vuejs-loading-plugin';
import VueSwal from 'vue-sweetalert2';

Vue.config.productionTip = false;

Vue.use(VueLoading, {
  dark: false,
  text: 'Carregando', // default 'Loading'
});

Vue.use(VueSwal);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
