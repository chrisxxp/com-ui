import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '@/counter/counter.vue'

describe('Counter.vue', () => {
  it('increments count when button is clicked', (done) => {
    const wrapper = shallowMount(Counter)
    wrapper.find('button').trigger('click')
    setTimeout(() => {
        console.log('值：', wrapper.find('div').text())
        expect(wrapper.find('div').text()).contains('1')
        done()
    }, 200)
  })
})