<template>
  
    <main>
      <div class="no-fav" v-if="$store.state.favMovies.length === 0"><h2 >У вас пока нет любимых фильмов</h2></div>
      <div class="no-fav" v-else><h2 >Любимые фильмы</h2></div>
          <div class="main-fav-wrapper">
              <MovieCard :movies="$store.state.favMovies"></MovieCard>              
          </div>
      </main>
</template>

<script>
</script>

<style scoped>
.main {
  flex-grow: 1;
 
}

.no-fav {
  text-align: center;
  color:white
}

.main-fav-wrapper {
  margin-top: 50px;
}
</style>