import Vue from 'vue'
import App from './App.vue'
import app1 from './app1.vue'
//import app2 from './app2.vue'
import app3 from './app3.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

new Vue({
  vuetify,
  render: h => h(app1)
}).$mount('#app1')

//new Vue({
 // vuetify,
 // render: h => h(app2)
//}).$mount('#app2')

new Vue({
  vuetify,
  render: h => h(app3)
}).$mount('#app3')