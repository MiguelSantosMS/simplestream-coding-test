<template>
    <div class="hello">
        <h1>{{ carouselTitle }}</h1>
        <ul>
            <li v-for="video in carouselVideos" :key="video">
                <router-link to="/">
                    Home
                </router-link>
            </li>
            <li>
                <router-link to="/watch-video">Watch Video</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'VideoCarousel',
        props: {
            carouselTitle: String,
            carouselVideos: Array
        }
    }
</script>

<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
