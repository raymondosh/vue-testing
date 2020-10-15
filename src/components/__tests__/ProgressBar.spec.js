import ProgressBar from '../ProgressBar.vue'
import { shallowMount } from '@vue/test-utils'

describe('ProgressBar.vue', () => {
  test('is hidden on initial render', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
  })

  test('initialize with a 0% width', () => {
    const wrapper = shallowMount(ProgressBar)
    // console.log(wrapper.element.style)
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('display the bar when start is called', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
    wrapper.vm.start()
    expect(wrapper.classes()).not.toContain('hidden')
  })

  test('sets the bar to 100% width when the finish is called', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.style.width).toBe('0%')
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(wrapper.element.style.width).toBe('100%')
  })

  test('hide the bar when finish is called', () => {
    const wrapper = shallowMount(ProgressBar)
    // expect(wrapper.classes()).not.toContain('hidden')
    // expect(wrapper.element.style.width).toBe('100%')
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(wrapper.classes()).toContain('hidden')
  })

  test('resets to 0% width when start is called', () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.finish()
    wrapper.vm.start()
    expect(wrapper.element.style.width).toBe('0%')
    expect(wrapper.classes()).toContain('hidden')
  })
})
