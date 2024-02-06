<template>
    <div class="carousel">
        
        <div class="car-wrapper" :style="{ 'margin-left': '-' + (100 * currentSlideIndex) + '%' }">           
            <CarouselItem v-for="photo in photos" :photo="photo"></CarouselItem>
        </div>
        <div class="slider-btns">
                <button class="prev-btn" @click="prevSlide()"><img class="arrow prev" src="@/img/slider-arrow.png"></button>
                <button class="next-btn" @click="nextSlide()"><img class="arrow" src="@/img/slider-arrow.png"></button>
        </div>
    </div>
</template>

<script>
import CarouselItem from '@/components/CarouselItem.vue';


export default {
    
    components: { CarouselItem },
    data() {
        return {
            currentSlideIndex: 0
        }
    },
    props: {
        photos: {
            type: Array,
            requred: true
        }
    },
    methods: {
        prevSlide() {
            if(this.currentSlideIndex > 0) {
                this.currentSlideIndex--
            }
            else {
                this.currentSlideIndex = Math.floor((this.photos.length - 1) / 4)
            }
            
        },
        nextSlide() {
            if(this.currentSlideIndex >= Math.floor((this.photos.length - 1) / 4)) {
                this.currentSlideIndex = 0
            } else {
                this.currentSlideIndex++
            }
           
        }
    }

}
</script>

<style scoped>

.carousel{
    margin-top: 10px;
    width: 1000px;
    overflow-x: hidden;
   
}
.car-wrapper {
    transition: 0.5s ease;
    display: flex;
    flex-direction: row;
    grid-gap: 10px;
    margin-top: 5px;
    height: 150px;  
    
}


.slider-btns {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    width: 40px;
    height: 40px;
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