import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// Au lieu de muter l'état, les actions commettent des mutations. 
//Les actions peuvent contenir des opérations asynchrones arbitraires.
//Vuex est un modèle de gestion d'état + une bibliothèque pour les applications Vue.js. 
//Il sert de magasin centralisé pour tous les composants d'une application, avec des règles garantissant que l'état ne peut être muté que de manière prévisible.

export default new Vuex.Store({
  state: {
    statePokemonDataList: [],
    stateFavoritePokemonList: []
  },
  actions: {
    setPokemonData(context, payload) {
      context.commit("setPokemonData", payload);
    },
    setFavoritePokemonList(context, payload) {
      context.commit("setFavoritePokemonList", payload);
    },
    addFavorite(context, payload) {
      context.commit("addFavorite", payload);
    },
    deleteFavorite(context, payload) {
      context.commit("deleteFavorite", payload);
    },
    eraseFavoritePokemonList(context) {
      context.commit("eraseFavoritePokemonList");
    }
  },
  mutations: {
    setPokemonData(state, list) {
      state.statePokemonDataList = list;
    },
    setFavoritePokemonList(state, list) {
      state.stateFavoritePokemonList = list;
    },
    addFavorite(state, name) {
      state.stateFavoritePokemonList.push(name);
    },
    deleteFavorite(state, item) {
      state.stateFavoritePokemonList.splice(item, 1);
    },
    eraseFavoritePokemonList(state) {
      state.stateFavoritePokemonList = [];
    }
  }
});

//Un exemple concret d'application serait une action pour vider un panier d'achats, ce qui implique d'appeler une API asynchrone et d'acter de multiples mutations :
//Et ce qu'on fait avec la liste de nos pokemon pour la vider


/*
Propager des actions dans les composants
Vous pouvez propager des actions dans les composants avec this.$store.dispatch('xxx'), 
ou en utilisant la fonction utilitaire mapActions qui attache les méthodes du composant aux appels de store.dispatch (nécessite l'injection de store à la racine) :
*/