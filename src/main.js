import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import Home from './Views/Home.vue';
import Curso from './Views/Curso.vue';
import Escola from './Views/Escola.vue';

Vue.config.productionTip = false


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router = new VueRouter ({
  routes: [{
    path: '/',
    component: Home
  },
  {
    path: '/Curso',
    component: Curso
  },
  {
    path: '/Escola',
    component: Escola
  }
]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
