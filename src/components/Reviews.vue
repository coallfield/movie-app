<template>
<div class="reviews">
            <h4 class="reviews-title">Отзывы</h4>
            <div v-for='review in reviews' @click="toReviewPage(review)" class="review-data">
                <h6>Автор: {{ review.author }}</h6>
                <p class="review">{{ review.description.split(' ').splice(null, 15).join(' ') + '...' }}</p>
            </div>
            <div class="reviews-btns">
                <button @click="fetchReviews(page)" :class="{ 'current-page': page === pageNumber }" class="number-page"
                    v-for="page in totalPages"> {{ page }}</button>
            </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            pageNumber: 1,
            reviews: [],
            totalPages: 10
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

.reviews-title {
    margin-top: 30px;
}
 .reviews {
        margin-left: 90px;
        width: 900px;
    }

    .review-data {
   
   margin-top: 20px;
   transition: ease 0.5s;
   cursor: pointer;
}

.review-data:hover {
   color: white;
}


.reviews-btns {
    margin-top: 5px;
    
    height: 50px;
    
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    
}


.number-page {
    font-size: 1.5rem;
    transition: 0.5s ease;
}

.number-page:hover {
    scale: 120%;
    color: white;
}

.current-page {
    scale: 120%;
    color:#bf6470;
}

</style>