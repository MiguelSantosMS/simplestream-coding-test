<template>
    <div class="home">
        <h1 class="video-carousel__title view-title">{{ carouselTitle }}</h1>
        <video-carousel carousel-list-id="video-carousel-list"
                        :carousel-videos="carouselVideos"/>
    </div>
</template>

<script>
    import VideoCarousel from '@/components/VideoCarousel.vue'

    export default {
        name: 'Home',
        components: {
            VideoCarousel
        },
        data () {
            return {
                carouselTitle: 'Available Videos',
                carouselVideos: []
            }
        },
        async mounted () {
            try {
                const fetchMoviesResponse = await fetch(
                    'http://hybridtv.ss7.tv/techtest/movies.json'
                )
                const jsonMoviesResponse = await fetchMoviesResponse.json()
                this.carouselVideos = jsonMoviesResponse.data
            } catch (error) {
                console.log(error)
            }
        }
    }
</script>
