import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Views/Home.vue'
import Curso from './Views/Curso.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter ({
  routes: [{
    path: '/Home',
    component: Home
  },{
    path: 'Curso',
    component: Curso
  }
]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
