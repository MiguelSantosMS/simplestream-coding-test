import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import routes from '@/routes'
import VideoCarrousel from '@/components/VideoCarousel.vue'

describe('VideoCarousel.vue', () => {
    let router
    let wrapper
    const carouselTitle = 'new title'
    const carouselVideos = [
        {
            title: 'video1',
            poster: 'http://hybridtv.ss7.tv/techtest/assets/posters/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
        },
        {
            title: 'video2'
        },
        {
            title: 'video3'
        }
    ]

    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(VueRouter)
        router = new VueRouter(routes)

        wrapper = shallowMount(VideoCarrousel, {
            localVue,
            router,
            stubs: ['router-link'],
            propsData: { carouselTitle, carouselVideos }
        })

        wrapper.setData({ carouselListId: 'video-carousel-list' })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('renders carousel elements', () => {
        const carouselVideoElements = wrapper.findAll('.carousel-container__carousel-item')
        expect(carouselVideoElements.length).toBe(carouselVideos.length)
    })

    it('renders right arrow', async () => {
        const rightArrow = wrapper.find('.right-arrow')
        expect(rightArrow.exists()).toBeTruthy()
    })
})
