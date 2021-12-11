<template>
  <div>
    <h1 class="overview-favorite-pokemon__title">
     Vos pokemon favoris
    </h1>
    <router-link
      class="nes-btn"
      to="/"
    >
     Retour
    </router-link>
    <div class="overview-favorite-pokemon">
      <pokemon-card
        v-for="(pokemon, index) in stateFavoritePokemonList"
        :key="index"
        :pokemon-name="pokemon"
      />
    </div>
  </div>
</template>
<!--V for :
Nous pouvons utiliser la directive v-for pour afficher une liste d'éléments basée sur un tableau.
 La directive v-for nécessite une syntaxe spéciale sous la forme d'élément dans éléments, où éléments est le tableau de données source 
  -->
<script>
import { mapState } from 'vuex'
import PokemonCard from '@/components/PokemonCard'

    export default {
        components: {
            PokemonCard
        },
        computed: {
            ...mapState([
            'stateFavoritePokemonList'
            ])
        }
    }
</script>

<style scoped>
.overview-favorite-pokemon {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.overview-favorite-pokemon__title {
  margin-top: 10px;
  text-align: center;
}
</style>