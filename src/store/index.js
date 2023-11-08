import {createStore} from 'vuex'

export default createStore({
    state: {
        key: '54db0fe5-68c2-429f-be42-81490afc37f5',
        movies: [],
        moreMovies:  [],
        favMovies: JSON.parse(localStorage.getItem('favMovies')) || [],
        delayMovies: JSON.parse(localStorage.getItem('delayMovies')) || [],
        page: 1,
        isPhoto: false,
        currentPhoto: '',
        currentReview: {},
    },
    mutations: {
        incrementPage(state) {
            state.page++
        },
        photoVisible(state) {
            state.isPhoto = !state.isPhoto
        },
        setCurrentPhoto(state, photo) {
            state.currentPhoto = photo
        },
        setCurrentReview(state, review) {
            state.currentReview = review
        },
        
    },
})