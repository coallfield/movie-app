<template>
    <div class="main-info-container">
        <div class="main-info">
        <div class="movie-poster">
            <img class="poster" :src="currentFilm.posterUrl">
            <div class="settings-btns">
                <FavouriteButton :film="currentFilm" style="margin-top: 0;"></FavouriteButton>
                <DelayButton :film="currentFilm"></DelayButton>
                <button @click="this.$router.push('/')" class="back-btn">На главную</button>
            </div>
        </div>
        <DetailedMovieInfo :currentFilm="currentFilm" :photos="moviePhotos"></DetailedMovieInfo>
        
    </div>
    <Reviews></Reviews>
    </div>
    
</template>

<script>
import DetailedMovieInfo from '@/components/DetailedMovieInfo.vue'
import Reviews from '@/components/Reviews.vue';
export default {   
    components: { DetailedMovieInfo, Reviews },
    props: {
        currentFilm: {
            type: Object,
            required: true
        },
        moviePhotos: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.main-info-container{
        display: flex;
        flex-direction: column
       
    } 
.main-info{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    } 
    
    .poster {
        height: 600px;
        width: 400px;
        margin-left: 90px;
        margin-top: 10px;
        border-radius: 25px;
        box-shadow: 2px 2px 30px #ACB4DF;
        animation: 0.5s show ease-out
    }

    @keyframes show {
        from{opacity: 0%; margin-left: 200px;}
        to{opacity: 100%; margin-left: 90px;}
    }

   

    .settings-btns {
        display: flex;
        flex-direction: row;
        margin-left: 110px;
        margin-top: 10px;
        animation: 1s btns ease-in-out;

    }

    @keyframes btns {
        from{opacity: 0%;}
        to{opacity: 100%;}
    }

    .back-btn {
        margin-left: 140px;
        font-size: 1rem;
        border: 1px solid white;
        width: 110px;
        height: 30px;
        text-align: center;
        margin-top: 5px;
        padding-bottom: 5px;
        border-radius: 5px;
        transition: 0.5s ease;
    }
    .back-btn:hover {
        border: 1px solid #ACB4DF;
        color: #ACB4DF;
        box-shadow: 2px 2px 10px white;
        scale: 105%;
        
    }


   
</style>