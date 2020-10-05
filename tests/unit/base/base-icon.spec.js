import { createLocalVue, shallowMount } from '@vue/test-utils'
import BaseIcon from '@/components/Base/BaseIcon.vue'

describe('BaseIcon.vue', () => {
    let wrapper

    beforeEach(() => {
        const localVue = createLocalVue()

        wrapper = shallowMount(BaseIcon, {
            localVue,
            propsData: { iconName: 'left-arrow' }
        })
    })

    afterEach(() => {
        wrapper.destroy()
    })

    it('renders the icon', () => {
        expect(wrapper.find('img').exists()).toBeTruthy()
    })

    it('emits the click', () => {
        wrapper.vm.iconClicked()
        expect(wrapper.emitted()['icon-clicked']).toEqual([[]])
    })
})
