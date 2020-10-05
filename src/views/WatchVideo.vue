<template>
    <div class="watch-video">
        <h1 class="watch-video__title view-title">Watch Video</h1>
        <h2 class="watch-video__video-title">{{ videoToWatch.title }}</h2>
        <div class="watch-video__thumbnail-container">
            <base-video-thumbnail class="watch-video-thumbnail" :video="videoToWatch"></base-video-thumbnail>
            <base-icon class="watch-video__play-icon"
                       icon-name="btn-play"
                       icon-extension="png"
                       :click-action="playVideo"></base-icon>
        </div>
    </div>
</template>

<script>
    import BaseVideoThumbnail from '@/components/Base/BaseVideoThumbnail'
    import BaseIcon from '@/components/Base/BaseIcon'

    export default {
        name: 'WatchVideo',
        components: { BaseIcon, BaseVideoThumbnail },
        props: {
            videoToWatch: {
                type: Object
            }
        },
        methods: {
            playVideo () {
                return true
            }
        }
    }
</script>
