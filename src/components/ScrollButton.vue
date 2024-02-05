<template>
    <div class="to-top">
        <div class="top-btn-wrap">
            <button @click="scrollToTop()"><img class="top-btn" src="@\img\up-arrow.png"></button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
        }
    }
}
</script>

<style scoped>

.to-top {
  bottom: 3%;
  right: 3%;
  position: fixed;
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 35px ;
  box-shadow: 2px 2px 20px #ACB4DF;
  text-align: center;
  
}

.top-btn {
  margin-top: 15px;
  width: 40px;
  height: 40px;
}

</style>