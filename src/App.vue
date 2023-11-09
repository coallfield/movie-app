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
    margin-left: 50px !important;
  }
 
}


@media(max-width: 1586px) {
  div.movie-info {
    width: 1586px !important;
  }
}


@media(max-width: 1562px) {
  div.movie {
    margin-left: 0px !important;
  }
  div.not-full-photo {
    scale: 90%;
    margin-left: -100px;
    margin-top: -80px;
    height: 700px;
    
  }

  body {
    overflow-x: hidden !important;
  }
}




@media(max-width: 1352px) {
 
  div.not-full-photo {
    scale: 85%;
    margin-left: -150px;
    margin-top: -100px;
    height: 700px;
  }
  
  .full-photo {
    width: 620px !important;
    height: 430px !important;
  }
}

@media(max-width: 1280px) {
  div.movie-list {
    padding: 50px;

  }
}



@media(max-width: 1248px) {
 
 div.not-full-photo {
   scale: 75%;
   margin-left: -190px;
   margin-top: -130px;
   height: 700px;
 }
 
 .full-photo {
   width: 620px !important;
   height: 430px !important;
 }

}



@media(max-width: 863px) {
  body {
    width: 863px !important;
  }
}



</style>