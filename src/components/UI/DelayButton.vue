<template>
    <div class="later">
        <button @click="addToDelay(film)" id="later"><img :class="{'delayed': this.$store.state.delayMovies.find(movie => movie.posterUrl === film.posterUrl)}" class="watch-later-img" src="@\img\watchlater.png"></button>
     </div>

</template>

<script>
export default {
  name: 'DelayButton',
  props: {
    film: {
      type: Object
    }
  },
  methods: {
    addToDelay(mov) {
      if (this.$store.state.delayMovies.find(movie => movie.posterUrl === mov.posterUrl )) {
        this.$store.state.delayMovies = this.$store.state.delayMovies.filter(movie => movie.posterUrl !== mov.posterUrl)
      } else {
        this.$store.state.delayMovies = this.$store.state.delayMovies.filter(movie => movie.posterUrl !== mov.posterUrl)
        this.$store.state.delayMovies.push(mov)
      }
      localStorage.setItem('delayMovies', JSON.stringify(this.$store.state.delayMovies))
    },
   
  }

}
</script>


<style scoped>



.watch-later-img {
  width: 40px;
  height: 40px;
  filter: invert(100%);
  transition: 0.3s ease;
}
.watch-later-img:hover {
  scale: 110%;
}

.delayed {
  background-color: #E3BF12;
  box-shadow: 2px 2px 30px #E3BF12;
  border-radius: 15px;
  filter: invert(0%) !important;
}
</style>