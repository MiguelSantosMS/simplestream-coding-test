<template>
    <div class="video-player-container" @click="togglePlayState">
        <video ref="videoPlayer" class="video-js"></video>
        <base-icon v-if="videoPaused"
                   class="watch-video__play-icon"
                   icon-name="btn-play"
                   icon-extension="png"></base-icon>
        <base-icon v-else
                   class="watch-video__pause-icon"
                   icon-name="btn-pause"
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
                videoPaused: true
            }
        },
        methods: {
            togglePlayState () {
                this.videoPaused = this.player.paused()
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
