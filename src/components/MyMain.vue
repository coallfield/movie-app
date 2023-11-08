<template>
  <main>
    <div v-if="isLoaded && !isLoading"  class="main-wrapper">
      <div class="sort-settings">
        <div class="input-wrap">
          <input @input="getByName($event)"
            placeholder="Введите название..." class="find-movie">
        </div>
      </div>
      <MovieCard :movies="$store.state.movies"></MovieCard>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    isLoaded: {
      type: Boolean
    },
    isLoading: {
      type: Boolean
    }
  },
  methods: {
      getByName(event) {
          let url = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${event.target.value}&page=1`
          url = encodeURI(url)
          fetch(url, {
          method: 'GET',
          headers: {
            'X-API-KEY': this.$store.state.key,
            'Content-Type': 'application/json',
          }
        })
          .then(async response => {
            const data = await response.json()
            this.$store.state.movies = data.films
          })
          .catch(error => console.error(error))
      }
  },
  
}
</script>

<style scoped>
.main {
  flex-grow: 1;
 
}

.main-wrapper {
  margin-top: 50px;
}

.find-movie {
  padding-left: 20px;
  color: white;
  margin-left: 180px;
  height: 50px;
  width: 520px;
  border-radius: 25px;
  border: 1px solid #ACB4DF;
  background-color: #24273A;
  outline: none;
  box-shadow: 5px 2px 5px #ACB4DF;
  transition: 0.5s ease-in-out;
}

.find-movie:hover {
  scale: 101%;
  box-shadow: 5px 2px 5px white;
}


.sort-settings {
  display: flex;
  flex-direction: row;
  grid-gap: 30px
}




</style>