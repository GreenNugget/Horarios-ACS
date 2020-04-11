// Framework and tools
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
require('dotenv').config();

// Libraries
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/sass/globals.scss';

// Configuration
Vue.config.productionTip = false;

// Dependencies
Vue.use(VueRouter);

// Create main instance
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
