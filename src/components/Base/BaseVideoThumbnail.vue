<template>
    <div class="base-video-thumbnail-container thumbnail" @click="this.thumbnailClicked">
        <img class="base-video-thumbnail__image" :src="video.poster" :alt="video.title"/>
    </div>
</template>

<script>
    export default {
        name: 'BaseVideoThumbnail',
        props: {
            video: {
                type: Object
            }
        },
        methods: {
            thumbnailClicked () {
                this.$emit('thumbnail-clicked')
            }
        }
    }
</script>
