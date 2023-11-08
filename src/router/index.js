import MainPage from '@/pages/MainPage.vue'
import AboutMovie from '@/pages/AboutMovie.vue'
import FavouritePage from '@/pages/FavouritePage.vue'
import DelayPage from '@/pages/DelayPage.vue'
import ReviewPage from '@/pages/ReviewPage.vue'
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/about/:filmId',
        component: AboutMovie
    },
    {
        path: '/favourite',
        component: FavouritePage
    }, 
    {
        path: '/delay',
        component: DelayPage

    },
    {
        path: '/review/:filmId',
        component: ReviewPage
    }


]

const router = createRouter({
    routes,
    history: createWebHistory()

})

export default router