import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import router from './router';
import './assets/global.stylus';

Vue.config.productionTip = false;
Vue.use(VueMaterial);

Vue.material.registerTheme({
  blue: {
    primary: 'blue',
  },
  teal: {
    primary: 'teal',
  },
  brown: {
    primary: 'brown',
  },
  indigo: {
    primary: 'indigo',
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});