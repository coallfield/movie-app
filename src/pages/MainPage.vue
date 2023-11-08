<template>
    <div>     
        <LoadAttention v-if="isLoading"></LoadAttention>
        <div v-if="!isLoaded" class="attention"><h1>Произошла ошибка</h1> </div> 
        <MyMain :isLoading="isLoading" :isLoaded="isLoaded"></MyMain>
        <div ref="observer" class="observer"></div>
        <ScrollButton v-if="isLoaded && !isLoading"></ScrollButton>   
        <LoadAttention style="margin-top: 50px;" v-if="isMoreMovies"></LoadAttention>    
    </div>
  </template>
  
  
  <script>
  import MyMain from '@/components/MyMain.vue'
  import ScrollButton from '@/components/ScrollButton.vue'
  import LoadAttention from '@/components/LoadAttention.vue'
  export default {
    components: { MyMain, ScrollButton, LoadAttention },
    data() {
      return {
        url: `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&ratingFrom=5&ratingTo=10&yearFrom=1000&yearTo=3000`,
        isLoaded: true,
        isLoading: true,
        isMoreMovies: false
  
      }
    },
    methods: {
      fetchData(url, key) {
        fetch(url, {
          method: 'GET',
          headers: {
            'X-API-KEY': key,
            'Content-Type': 'application/json',
          }
        })
          .then(async response => {
            
            this.isLoading = false
            if(!response.ok) {
              this.isLoaded = false
            }
            const data = await response.json()
            this.$store.state.movies = data.items
          })
          .catch(error => console.error(error))
      },
      fetchMoreMovies() {  
        this.isMoreMovies = true
        this.$store.commit('incrementPage')  
        let url = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&ratingFrom=5&ratingTo=10&yearFrom=1000&yearTo=3000&page=${this.$store.state.page}`
        fetch(url, {         
          method: 'GET',
          headers: {
            'X-API-KEY': `${this.$store.state.key}`,
            'Content-Type': 'application/json',
          }
        })
          .then(async response => {
            const data = await response.json()
            this.$store.state.movies = this.$store.state.movies.concat(data.films || data.items)
            this.isMoreMovies = false
            console.log(this.$store.state.movies)
          })
          .catch(error => console.error(error))
      }
      
    },
  
    mounted() {
      this.fetchData(this.url, this.$store.state.key)
      const options = {
        rootMargin: "0px",
        threshold: 1.0,
      };
      const callback = (entries, observer) => {
        if(entries[0].isIntersecting && this.isLoaded && !this.isLoading) {
         
          this.fetchMoreMovies()
        }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer)
    }
  }
  </script>
  
<style scoped>
.attention {
  color: white;
  text-align: center;
}

</style>