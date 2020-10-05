<template>
    <div class="base-video-thumbnail-container thumbnail">
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
        }
    }
</script>
