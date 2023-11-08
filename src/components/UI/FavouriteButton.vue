<template>
    <div class="favourite">
            <button @click="addToFav(film)" id="like"><img  :class="{'fav': $store.state.favMovies.find(movie => movie.posterUrl === film.posterUrl)}" class="add-to-fav-img" src="@\img\favourite.png"></button>
    </div>
</template>

<script>
export default {
  name: 'FavouriteButton',
  props: {
    film: {
      type: Object
    }
  },
  methods: {
    addToFav(mov) {
      if(this.$store.state.favMovies.find(movie => movie.posterUrl === mov.posterUrl)) {
        this.$store.state.favMovies = this.$store.state.favMovies.filter(movie => movie.posterUrl !== mov.posterUrl)
      } else {
        this.$store.state.favMovies = this.$store.state.favMovies.filter(movie => movie.posterUrl !== mov.posterUrl)
        this.$store.state.favMovies.push(mov)
      }   
      localStorage.setItem('favMovies', JSON.stringify(this.$store.state.favMovies))  
    }

  }
}
</script>

<style scoped>
.favourite {
  margin-top: 30px;
  margin-right: 15px;
}

.fav  { 
  box-shadow: 2px 2px 30px #bf6470;
  background-color: #bf6470; 
  border-radius: 15px;
  filter: invert(0%) !important;
}
.add-to-fav-img {
  width: 40px;
  height: 40px;
  filter: invert(100%) ;
  transition: 0.3s ease;
}
.add-to-fav-img:hover {
  scale: 110%;
}
</style>