import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

require('./assets/styles.css')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')


/* 
Le main.js
C'est généralement le fichier JavaScript qui va initialiser des composants racine dans un élément de votre page. 
Il est également responsable de la configuration des plugins et des composants tiers, tel que le router ou le store dans notre cas */