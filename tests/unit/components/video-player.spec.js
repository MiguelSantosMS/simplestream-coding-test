import { createLocalVue, shallowMount } from '@vue/test-utils'
import VideoPlayer from '@/components/VideoPlayer.vue'

describe('VideoPlayer.vue', () => {
    let wrapper
    const videoPoster = 'http://hybridtv.ss7.tv/techtest/assets/posters/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
    const videoSrc = 'http://p.demo.flowplayer.netdna-cdn.com/vod/demo.flowplayer/bbb-800.mp4'
    const options = {
        autoplay: false,
        controls: true,
        height: 600,
        sources: [
            {
                src: videoSrc,
                type: `video/${videoSrc.slice(-3)}`
            }
        ]
    }

    beforeEach(() => {
        const localVue = createLocalVue()

        wrapper = shallowMount(VideoPlayer, {
            localVue,
            propsData: { videoPoster, options }
        })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('renders the video', () => {
        expect(wrapper.find('video').exists()).toBeTruthy()
    })

    it('renders the play icon', () => {
        expect(wrapper.find('.watch-video__icon').exists()).toBeTruthy()
    })

    it('creates the video.js instance', () => {
        expect(wrapper.vm.player).toBeDefined()
    })
})
