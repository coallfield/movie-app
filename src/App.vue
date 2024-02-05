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







@media(max-width: 1100px) {
  div.main-info {
    justify-content: center;
    align-items: center;
    flex-direction: column !important;
  }

  div.movie-info {
  
    flex-direction: row;
    display: flex;

    justify-content: center;
    align-items: center;
  }
  .movie-poster {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }
  img.poster {
    margin-left: 0px !important;
  }
  div.settings-btns {
    margin-left: 0px !important;
  }
  div.detailed-info {
    justify-content: center;
    align-items: center;
    margin-left: 0px !important;
  }
  div.description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .descr {
    text-align: center;
  }
  .title-info {
      display:  flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

    }
    .title {
      margin: 0 !important;
    }
    .genres {
      margin: 0 !important;
    }
  .genres {
    display: flex;
    justify-content: center;
  }
  .shots-wrapper {
   display: flex;
   flex-direction: column;
   justify-content: center;
    align-items: center;
  }
  .slider-btns {
    width: 100% !important;
    justify-content: center;
    align-items: center;
    margin-left: -2px !important;
  }
  .reviews {
    margin-top: 30px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .review-data {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .review {
    text-align: center;
  }
  .reviews-btns {
    grid-gap: 30px
  }
  .movie-list  {
    justify-content: center;
    grid-gap: 30px
  }
  .movie {
    margin-left: 0px !important;
  }

  
}


@media(max-width: 1000px) {
  .shots-wrapper {
    scale: 90%;
  }
}




</style>