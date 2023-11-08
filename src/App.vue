<template>
  <div class="app">
      <MyHeader></MyHeader>
      <router-view></router-view>      
  </div>
</template>


<script>
import MyHeader from '@/components/MyHeader.vue'

export default {
  components: { MyHeader },
  

  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header {
  
  color: #C9CDDF;
  width: 100%;
}



body {
  background: #20222D ;
}

button { 
  outline: none;
  background: none;
  border: none;
  color: #C9CDDF;
}

.app {
  display: flex;
  flex-direction: column;
}


@media (max-height: 745px) {
    div.to-top {
      top: 85% !important
    }
}

@media(max-width: 1766px) {
  div.movie-list {
    justify-content: space-around !important;
   
  }
  div.movie {
    margin-left: -10px !important;
  }
}


@media(max-width: 1348px) {
  div.movie-list {
    justify-content: space-around !important;
   
  }
  div.movie {
    margin-left: 50px !important;
  }
}

</style>