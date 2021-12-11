<template>
  <div>
    <h2>Voici les pokemon , choisi</h2>
    <p v-if="favoriteListLength < maximumList">
      Un peu d'aide ? <button
        class="nes-btn is-success"
        @click="startInterval"
      >
        Choisir un pokemon
      </button>
    </p>
    <template>
      <p
        v-for="(pokemonName, index) in favorites"
        :key="index"
        class="chosen-pokemon"
      >
        <img
          src="../assets/pokeball.png"
          alt="pokeball"
        >
        {{ pokemonName }}
      </p>
    </template>
    <p v-if="favoriteListLength > 1 && favoriteListLength < maximumList">
      Vous pouvez ajouer {{ maximumList - favoriteListLength }} plus de  Pokémon :)
    </p>
    <p v-if="favoriteListLength > 9">
    Votre liste est pleine
    </p>
    <p v-if="favoriteListLength > 9">
      Do you want to <button
        class="nes-btn is-error"
        @click="emptyFavoritePokemonList"
      >
        Supprimer 
      </button> la  liste?
    </p>
    <router-link
      v-if="favoriteListLength > 0"
      class="nes-btn"
      to="/favorites"
    >
      Voir vos pokemon favoris
    </router-link>
  </div>
</template>

<script>
    export default {
        name: 'SummaryFavorites',
        props: {
          pokemonList: {
            type: Array,
            required: true
          },
          favorites: {
            type: Array,
            required: true
          }
        },
        data: function() {
            return {
                maximumList: 8
            }
        },
        computed: {
            favoriteListLength() {
                return this.favorites.length
            }
        },
        methods: {
          startInterval() {
            const self = this
            const intervalID = window.setInterval(pickRandomPokemonOrClearInterval, 500)
            function pickRandomPokemonOrClearInterval() {
              if(self.favoriteListLength < self.maximumList) {
                self.pickRandomPokemon()
              } else {
                clearInterval(intervalID)
              }
            }
          },
          pickRandomPokemon() {
            const list = this.pokemonList.filter(function(pokemon){
              return !this.favorites.includes(pokemon.name)
            }, this)
            
            const number = Math.floor(Math.random() * Math.floor(list.length))
            this.$emit('addFavorite', list[number].name)
          },
          emptyFavoritePokemonList() {
            this.$emit('eraseFavoritePokemonList')
          }
        }
    }
</script>
<!-- J'aime beaucoup la fonction nous permet de sélectionner dans la liste des 150 Pokemons 8 pokemon. 
MathFloor (c'est pour avoir des nombres entiers), et Math random permet de chercher dans la liste des nombres entiers que vous lui sumettez-->
<style scoped>
.chosen-pokemon {
    text-transform: capitalize;
}
</style>