<template>
  <div id="app">
     <router-view />
        <Home/>
        <Favorites/>
  </div>
</template>
<!-- On remarque ici que j'ai mis, ici dans l'élement racine, le router-view dans view 2 c'est la premiere étape pour implémenter le changement de page  -->
<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
    
Vue.use(VueRouter);
import Home from '../src/pages/Home'
import Favorites from '../src/pages/Favorites'

export default {
  name: 'App',
  components: {
    Home,
    Favorites
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
