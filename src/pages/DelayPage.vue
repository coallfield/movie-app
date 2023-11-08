<template>
    <main>
      <div class="no-delay" v-if="$store.state.delayMovies.length === 0"><h2>Вы пока не запланировали посмотреть какой-либо фильм</h2></div>
      <div class="no-delay" v-else><h2>Посмотреть позже</h2></div>
          <div class="main-delay-wrapper">
              <MovieCard :movies="$store.state.delayMovies"></MovieCard>              
          </div>
      </main>
</template>

<script>
</script>

<style scoped>
.main {
  flex-grow: 1;
 
}

.no-delay {
  text-align: center;
  color:white
}

.main-delay-wrapper {
  margin-top: 50px;
}
</style>