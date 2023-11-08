<template>
    <header>
        <div class="head-wrapper">
            <div class="head">
                <div class="navigation-wrapper">
                    <div class="nav-btns">
                        <div class="main-btn">
                            <button @click="this.$router.push('/')" class="nav-btn" >Главная</button>
                            
                        </div>
                        <div class="favourite-btn nav-btn">
                            <button @click="this.$router.push('/favourite')" class="nav-btn">Любимые</button>
                            <div v-if="$store.state.favMovies.length > 0" class="count-wrapper"> 
                                <div class="counter"><h6 class="counter">{{ $store.state.favMovies.length }}</h6></div>
                            </div>
                        </div>
                        <div class="delay-btn nav-btn">
                            <button @click="this.$router.push('/delay')" class="nav-btn">Отложенные</button>
                            <div v-if="$store.state.delayMovies.length > 0" class="count-wrapper"> 
                                <div class="counter"><h6 class="counter">{{ $store.state.delayMovies.length }}</h6></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
</template>

<script>
</script>

<style scoped>
.head {
    width: 100%;
    height: 100px;
    
}
.favourite-btn {
    position: relative;
}

.delay-btn {
    position: relative;
}

.count-wrapper {
    width: 20px;
    position: absolute;
    left: 90%;
    bottom: -80%;
    animation: 0.5s ease-in-out show;

}

@keyframes show {
    from {opacity: 0%;}
    to {opacity: 100%;}
}



.counter {
    color: white;
    text-align: center;
    border-radius: 10px;
    background-color:#bf6470;
}

.nav-btn:hover {
    color: white;
}
.nav-btns {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    grid-gap: 20px;
    margin-left: 45px;
    height: 100px;
    font-size: 0.9rem;
}

</style>