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




@media(max-width: 1510px) {
  div.main-info {
    justify-content: center;
    align-items: center;
    flex-direction: column !important;
  }

  div.movie-info {
  
    flex-direction: row;
    display: flex;
    overflow: hidden;
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
    margin-left: 0px !important;
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


@media(max-width: 1090px) {
  .reviews {
    width: 900px;
    margin-top: -10px !important;
  }
  .shots-wrapper {
    scale: 90%;
  }
}
@media(max-width: 600px) {
    .find-movie {
      width: 400px !important;
    }
}
@media (max-width: 500px) {
  .find-movie {
    width: 200px !important;
  }
  .movie-list {
    grid-gap: 30px !important;
    margin-top: 0px !important;
  }
  .movie {
    scale: 80%;
   
  }
  .movie:hover {
    scale: 81% !important;
  }
  .poster {
    object-fit: contain;
  }
  .skeleton-movie-card {
     scale: 80% !important
  }
  .skeleton-container {
    grid-gap: 30px !important;
    margin-top: 0px !important;
  }
  .nav-btns {
    justify-content: center !important;
    margin-left: 0px !important;
  }
}

@media (max-width: 940px) {
  .reviews {
    width: 700px;
  }
  
 
}

@media (max-width: 770px) {
  .reviews {
    width: 600px;
  }
  
}



</style>