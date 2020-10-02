<template>
    <div class="home">
        <video-carousel carousel-title="Available Videos"
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
                carouselVideos: []
            }
        }
    }
</script>
