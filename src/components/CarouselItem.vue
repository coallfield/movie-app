<template>
    <div class="carousel-item">
        <img @click="showShot($event)" class="item" :src="photo.imageUrl">
    </div>

</template>

<script>
export default {
    props: {
        photo: {
            type: Object
        }
    },
    methods: {
        showShot(event) {
            this.$store.commit('setCurrentPhoto', event.target.src)
            this.$store.commit('photoVisible')
        }
    }
}
</script>

<style scoped>


.item {
    margin-left: 10px;
    width: 230px;
    height: 141px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid white;;
    transition: ease 0.5s;
    cursor: pointer;
    
    
}



.item:hover {
    scale: 105%;
    box-shadow: 2px 2px 10px white;
}
</style>