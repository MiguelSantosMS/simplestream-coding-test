import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import VideoCarrousel from '@/components/VideoCarousel.vue'

describe('VideoCarousel.vue', () => {
    it('renders props.carouselTitle when passed', () => {
        const carouselTitle = 'new title'
        const wrapper = shallowMount(VideoCarrousel, {
            propsData: { carouselTitle }
        })
        expect(wrapper.text()).toMatch(carouselTitle)
    })

    it('renders carousel elements', () => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        const router = new VueRouter()
        const carouselVideos = [{ title: 'video1' }, { title: 'video2' }, { title: 'video3' }]
        const wrapper = shallowMount(VideoCarrousel, {
            localVue,
            router,
            propsData: { carouselVideos }
        })

        const carouselVideoElements = wrapper.findAll('.video-carousel__item')
        expect(carouselVideoElements.length).toBe(carouselVideos.length)
    })
})
