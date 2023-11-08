<template>
    <div class="full-reiew-info">
        <h1 class="author"> {{ $store.state.currentReview.author }}</h1>
        <h4 class="review-title">{{ $store.state.currentReview.title }}</h4>
        <p class="decription">{{ $store.state.currentReview.description }}</p>
        <button @click="$router.back()" class="back-btn">Назад</button>
    </div>
</template>

<script>
</script>

<style scoped>
* {
    color: #C9CDDF;
    margin-left: 70px;
    margin-top: 30px;
    width: 80%;
}

.review-title {
    margin-top: 5px;
}

.back-btn {
        margin-left: 70%;
        margin-top: 30px;
        font-size: 1rem;
        border: 1px solid white;
        width: 110px;
        height: 30px;
        text-align: center;
        padding-bottom: 5px;
        border-radius: 5px;
        transition: 0.5s ease;
    }
    .back-btn:hover {
        border: 1px solid #ACB4DF;
        color: #ACB4DF;
        box-shadow: 2px 2px 10px white;
        scale: 105%;
        
    }

</style>