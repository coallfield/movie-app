<template>
    <div class="movie-list">
        <div v-for="movie in movies" :key="movie.filmId || movie.kinopoiskId" class="movie">
            <div class="poster-img">
                <img @click="$router.push({ path: `/about/${movie.kinopoiskId || movie.filmId}`, params: movie.kinopoiskId || movie.filmId })" :src="movie.posterUrl"
                    class="poster">
                <div @click="deleteMovie(movie)" v-if="this.$route.path !== '/'" class="delete"><img class="delete-button" src="@\img\delete.png"></div>    
                
            </div>
            <div class="movie-small-info">
                <div class="main-info">
                <div class="title-rate-container">
                    <div class="title">
                    <h3 v-if="movie.nameRu.length <= 22">{{ movie.nameRu }}</h3>
                    <h3 v-else>{{ movie.nameRu.split('').splice(null, 22).join('') + '...' }}</h3>
                </div>
                <div class="title rate">
                    <p>Рейтинг:</p>
                    <p>{{ movie.ratingImdb || movie.rating}}</p>
                </div>
                </div>   
            </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        movies: {
            type: Array,
            required: true
        }
    },
    methods: {
        deleteMovie(movie) {
            if(this.movies === this.$store.state.favMovies) {
                this.$store.state.favMovies = this.$store.state.favMovies.filter(mov => mov.kinopoiskId !== movie.kinopoiskId)
                localStorage.setItem('favMovies', JSON.stringify(this.$store.state.favMovies)) 
                
            } else {
                this.$store.state.delayMovies = this.$store.state.delayMovies.filter(mov => mov.kinopoiskId !== movie.kinopoiskId)
                localStorage.setItem('delayMovies', JSON.stringify(this.$store.state.delayMovies))
            }
            
        }
    }
    
    
   
}
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 160px;
  margin-top: 40px;
}

.movie {
    width: 400px;
    height: 600px;
    box-shadow: 2px 2px 30px #ACB4DF;
    background-color: #24273A;

    transition: 0.3s ease;
}

.movie:hover {
  box-shadow: 2px 2px 40px white; scale: 105%;
}

.movie-small-info {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    width: 100%;
}

.poster-img {
  height: 600px;
  overflow-y: hidden;
  position: relative;

 
}

.delete {
    position: absolute;
    left: 90%;
    bottom: 93%;
    filter:invert(100%);
    
    
}

.delete-button {
    width: 25px;
    height: 25px;
    
    
}

.poster {
  height: 600px;
  width: 400px;
  
}

.main-info {
  height: 50%;

  
}

.title {
 
  color: #C9CDDF;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 5px
}

.settings-btns {

 display: flex;
 justify-content: space-between;
 align-items: center;
}

.late-about {
 
 display: flex;

 
 
}

#about {
 margin-bottom: 10px;
 transition: 0.3s ease;

}
#about:hover {
 scale: 105%;
 color: #bf6470;
}

.title-rate-container {

    width: 100%;
    display: flex;
    grid-gap:3px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
   
}




</style>