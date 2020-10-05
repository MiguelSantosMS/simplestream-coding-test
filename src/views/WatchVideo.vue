<template>
    <div class="watch-video">
        <h1 class="watch-video__title view-title">Watch Video</h1>
        <h2 class="watch-video__video-title">{{ videoToWatch.title }}</h2>
        <div class="watch-video__view-container">
            <video-player :options="videoOptions" :video-poster="videoToWatch.poster"/>
        </div>
    </div>
</template>

<script>
    import VideoPlayer from '@/components/VideoPlayer'

    export default {
        name: 'WatchVideo',
        components: { VideoPlayer },
        data () {
            return {
                videoOptions: {
                    autoplay: false,
                    controls: true,
                    height: 600,
                    sources: [
                        {
                            src: this.videoToWatch.video,
                            type: `video/${this.videoToWatch.video.slice(-3)}`
                        }
                    ]
                }
            }
        },
        props: {
            videoToWatch: {
                type: Object
            }
        }
    }
</script>
