<template>
    <div class="skeleton-container">
        <div class="skeleton-movie-card"  v-for="n in 20"></div>
    </div>
    
</template>

<style scoped>

.skeleton-container {
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 160px;
  margin-top: 40px;
 
  
}
.skeleton-movie-card {
    width: 400px;
    height: 600px;
    box-shadow: 2px 2px 30px #ACB4DF;
    background-color: #24273A;
    animation-name: flashing;
    animation-iteration-count: infinite;
    animation-duration:1s;
    animation-direction: alternate;
    opacity: 50%;
  
}

@keyframes flashing {
    from {
        box-shadow: 2px 2px 30px #ACB4DF;
    }
    to {    
        box-shadow: 4px 4px 60px #ACB4DF;
    }
   
}

</style>