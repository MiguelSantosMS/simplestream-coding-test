import { shallowMount } from '@vue/test-utils'
import VideoCarrousel from '@/components/VideoCarousel.vue'

let wrapper = null

beforeEach(() => {
    wrapper = shallowMount(VideoCarrousel)
})

afterEach(() => {
    wrapper.destroy()
})

describe('VideoCarousel.vue', () => {
    it('renders props.carouselTitle when passed', () => {
        const carouselTitle = 'new title'
        const wrapper = shallowMount(VideoCarrousel, {
            propsData: { carouselTitle }
        })
        expect(wrapper.text()).toMatch(carouselTitle)
    })
})
