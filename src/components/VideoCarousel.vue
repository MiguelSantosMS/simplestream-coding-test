<template>
    <div class="video-carousel">
        <div class="video-carousel__carousel-container">
            <base-icon v-if="leftArrowVisible"
                       class="carousel-container__arrow left-arrow"
                       icon-name="left-arrow"
                       @icon-clicked="slideListRight"></base-icon>
            <ul :id="carouselListId" class="video-carousel__carousel-list">
                <li :id="`carousel-container__carousel-item-${index}`"
                    class="carousel-container__carousel-item"
                    v-for="(video, index) in carouselVideos"
                    :key="index">
                    <router-link class="carousel-item__container"
                                 :to="{ name: 'WatchVideo', params: { videoToWatch: video }}">
                        <base-video-thumbnail :video="video"></base-video-thumbnail>
                    </router-link>
                </li>
            </ul>
            <base-icon v-if="rightArrowVisible"
                       class="carousel-container__arrow right-arrow"
                       icon-name="right-arrow"
                       @icon-clicked="slideListLeft"></base-icon>
        </div>
    </div>
</template>

<script>
    import BaseVideoThumbnail from '@/components/Base/BaseVideoThumbnail'
    import BaseIcon from '@/components/Base/BaseIcon'

    export default {
        name: 'VideoCarousel',
        components: { BaseIcon, BaseVideoThumbnail },
        data () {
            return {
                carouselListId: this.carouselListIdentifier,
                leftArrowVisible: false,
                rightArrowVisible: true,
                translatePosition: 0
            }
        },
        props: {
            carouselListIdentifier: {
                type: String
            },
            carouselVideos: {
                type: Array
            }
        },
        computed: {
            listElement () {
                return document.getElementById(this.carouselListId)
            },
            listItemWidth () {
                const firstListItem = this.listElement.getElementsByClassName(
                    'carousel-container__carousel-item'
                )[0]
                return firstListItem.getBoundingClientRect().width
            }
        },
        methods: {
            slideListRight () {
                this.translatePosition -= this.listItemWidth
                this.listElement.style.transform = `translateX(-${this.translatePosition}px)`

                this.handleArrowsVisibility()
            },
            slideListLeft () {
                this.translatePosition += this.listItemWidth
                this.listElement.style.transform = `translateX(-${this.translatePosition}px)`

                this.handleArrowsVisibility()
            },
            handleArrowsVisibility () {
                const listElementDimensions = this.listElement.getBoundingClientRect()

                // As long as the translate is not 0 the left arrow will be visible
                this.leftArrowVisible = this.translatePosition > 0

                // The right arrow will be invisible once we transform the list up to its entire width
                // minus the clientWidth. If we don't take this in consideration the entire list
                // can slide off screen and only then will the button be invisible
                const finalTransformPosition = listElementDimensions.width - document.body.clientWidth
                this.rightArrowVisible = this.translatePosition < finalTransformPosition
            }
        }
    }
</script>
