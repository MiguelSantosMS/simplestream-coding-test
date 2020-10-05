<template>
    <div class="video-player-container" @click="togglePlayState">
        <video ref="videoPlayer" class="video-js"></video>
        <base-icon class="watch-video__icon"
                   :icon-name="iconName"
                   icon-extension="png"></base-icon>
    </div>
</template>

<script>
    import videojs from 'video.js'
    import BaseIcon from '@/components/Base/BaseIcon'

    export default {
        name: 'VideoPlayer',
        components: { BaseIcon },
        props: {
            videoPoster: {
                type: String
            },
            options: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data () {
            return {
                player: null,
                iconName: 'btn-play'
            }
        },
        methods: {
            togglePlayState () {
                this.iconName = this.player.paused() ? 'btn-play' : 'btn-pause'
            }
        },
        mounted () {
            this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady () {
                return true
            })

            this.player.poster(this.videoPoster)
        },
        beforeDestroy () {
            if (this.player) {
                this.player.dispose()
            }
        }
    }
</script>
