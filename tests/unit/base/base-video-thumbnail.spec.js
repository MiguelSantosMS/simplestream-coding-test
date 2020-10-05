import { createLocalVue, shallowMount } from '@vue/test-utils'
import BaseVideoThumbnail from '@/components/Base/BaseVideoThumbnail.vue'

describe('BaseVideoThumbnail.vue', () => {
    let wrapper

    const video = {
        title: 'video1',
        poster: 'http://hybridtv.ss7.tv/techtest/assets/posters/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
    }

    beforeEach(() => {
        const localVue = createLocalVue()

        wrapper = shallowMount(BaseVideoThumbnail, {
            localVue,
            propsData: { video }
        })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('renders the thumbnail', () => {
        expect(wrapper.find('img').exists()).toBeTruthy()
    })

    it('emits the click', () => {
        wrapper.vm.thumbnailClicked()
        expect(wrapper.emitted()['thumbnail-clicked']).toEqual([[]])
    })
})
