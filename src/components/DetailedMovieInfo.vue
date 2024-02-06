<template>
    <div class="detailed-info">
        <div class="rate">
            <h4>Рейтинг: {{ currentFilm.ratingImdb }}</h4>
        </div>
        <div class="length">
            <h4>Продолжительность: {{ currentFilm.filmLength }} минут(ы)</h4>
        </div>
        <div class="year">
            <h4>Год: {{ currentFilm.year }}</h4>
        </div>
        <div class="countries">
            <h4>Страны: <span v-for="country in currentFilm.countries"> {{ `${country.country} ` }} </span></h4>
        </div>
        <div class="description">
            <h4>Синопсис:</h4>
            <h5 class="descr">{{ currentFilm.description }}</h5>
        </div>
        <div class="shots-wrapper">
            <h4 class="shots">Кадры</h4>
            <Carousel :photos="photos"></Carousel>
        </div>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
export default {
    components: {Carousel},
    data() {
        return {
            pageNumber: 1,
            reviews: [],
            totalPages: 10
        }
    },
    props: {
        currentFilm: {
            type: Object,
            required: true
        },
        photos: {
            type: Array,
            required: true
        }
    },
    methods: {
        fetchReviews(page = 1) {  
            this.pageNumber = page       
            fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${this.$route.params.filmId}/reviews?page=${page}&order=DATE_DESC`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': `${this.$store.state.key}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(async response => {
                const data = await response.json()
                this.reviews = data.items
                this.reviews.forEach(review => {
                    review.description = review.description.replace(/(<([^>]+)>)/gi, '');
                })
                
                if(data.totalPages < 10) {
                    this.totalPages = data.totalPages
                }
                
            })
            .catch(error => console.error(error))
        },
        toReviewPage(review) {
            this.$store.commit('setCurrentReview', review)
            this.$router.push(`/review/${review.kinopoiskId}`)
        }
    },
    created() {
        this.fetchReviews()
        
    }
}
</script>

<style scoped>
.detailed-info {
    display: flex;
    grid-gap: 10px;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 20px;

}


.description {

    width: 500px;
    word-wrap: break-word;
    
}

.descr {
    margin-top: 2px;
}







.prev {
    transform: rotate(180deg);
}
.arrow {
    width: 30px;
    height: 30px;
    filter: invert(50%);
    transition: ease 0.5s;
    
}

.arrow:hover {
    scale: 105%;
    filter: invert(100%);
}






</style>