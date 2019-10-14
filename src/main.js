import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from 'vuex'
import 'materialize-css/dist/js/materialize.min.js'
import dateFilter from './filters/date.filter'

Vue.config.productionTip = false;
Vue.use(router);
Vue.use(Vuelidate);

Vue.filter('date', dateFilter);
new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app')