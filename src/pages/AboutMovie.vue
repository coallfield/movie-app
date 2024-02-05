<template>
    <div class="movie-info">
        <div class="not-full-photo">
            <div class="title-info">
                <h1 class="title">{{ currentFilm.nameRu }}</h1>
                <div class="genres">
                    <h6 v-for="genre in currentFilm.genres">{{ genre.genre }}</h6>
                </div>
            </div>
            <MainMovieInfo :moviePhotos=moviePhotos :currentFilm="currentFilm"></MainMovieInfo>
        </div>
        <div @click="$store.commit('photoVisible')" v-if="$store.state.isPhoto" class="full-photo-wrapper">
            <div class="ff-container">
                <img @click.stop :src="$store.state.currentPhoto" class="full-photo">
            </div>
            
        </div>
    </div>
</template>

<script>
import MainMovieInfo from '@/components/MainMovieInfo.vue'
export default {   
    components: {MainMovieInfo},
    data() {
        return {
            currentFilm: null,
            moviePhotos: [],
        }
    },
    created() {
        this.getMovieByID(),
        this.getMoviePhotos()
    },
    methods: {
        getMovieByID() {
            fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$route.params.filmId}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': this.$store.state.key,
                    'Content-Type': 'application/json',
                }
            })
                .then(async response => {
                    const data = await response.json()
                    this.currentFilm = data
                  
                })
                .catch(error => console.error(error))
        },
        getMoviePhotos() {
            fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$route.params.filmId}/images?type=STILL&page=1`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': this.$store.state.key,
                    'Content-Type': 'application/json',
                }
            })
                .then(async response => {
                    const data = await response.json()
                    this.moviePhotos = data.items                   
                })
                .catch(error => console.error(error))
        },
    },

}

</script>


<style scoped>
* {
    color:#C9CDDF
}

.title-info {
    width: 100%;
}
    .title {
        color: #C9CDDF;
        margin-left: 90px;
        margin-top: 30px;
    }
    .genres {
        grid-gap: 10px;
        width: 500px;
        display: flex;
        flex-direction: row;
        color: #C9CDDF;
        margin-left: 90px;
    }

    
   

.full-photo-wrapper {
    position: fixed;
    
    right: 0;
    bottom: 0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    

}

.full-photo{
    max-width: 1080px;
    max-height: 720px;
   
    margin: auto;
    border-radius: 15px;
    object-fit:cover;
}

.ff-container {
    margin: auto;
    width: auto;
    height: auto;
   
}



</style>