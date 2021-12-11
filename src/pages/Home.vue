<template>
  <div class="select-pokemon-page">
    <img
      src="./../assets/logo-pixel.gif"
      alt="pokémon"
    > <!-- on a rajouter -->
    <div class="select-pokemon-content">
      <pokemon-list
        :pokemon-list="statePokemonDataList"
        :favorites="stateFavoritePokemonList"
        @deleteFavorite="deleteFavorite"
        @addFavorite="addFavorite"
      />
      <summary-favorites
        :pokemon-list="statePokemonDataList"
        :favorites="stateFavoritePokemonList"
        @addFavorite="addFavorite"
        @eraseFavoritePokemonList="eraseFavoritePokemonList"
      />
    </div>
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList'
import SummaryFavorites from '@/components/SummaryFavorites'
import { mapState, mapActions } from 'vuex'

// le component homeview permet plusieurs choses,on peut voir grâce à la fonction GetPokemonData qui permet de récupérer l'api pokemon
// ensuite les données sont mises dans des tableaux on peut le voir notament au methodes MapState []. Map State génére des fonctions getter calculé car on va manipuler plusieurs fois
// Nos données récuperées

// On a limiter la liste de pokémon à 151 seulement
 
export default {
    components: {
        PokemonList,
        SummaryFavorites,
    },
    computed: {
        ...mapState(['statePokemonDataList', 'stateFavoritePokemonList']),
    },
    async created() {
        const pokemonData = await this.getPokemonData()
        this.setPokemonData(pokemonData)
    },
    methods: {
        async getPokemonData() {
            const data = await fetch(
                'https://pokeapi.co/api/v2/pokemon?limit=151'
            )
            const json = await data.json()
            return json.results
        },
        ...mapActions(['setPokemonData', 'addFavorite', 'deleteFavorite', 'eraseFavoritePokemonList']),
    },
}
//utilisez mapActions pour lier des actions aux méthodes du composant

</script>

<style scoped>
.select-pokemon-page {
    text-align: center;
}
.select-pokemon-content {
    text-align: left;
    display: flex;
    justify-content: space-evenly;
}
</style>