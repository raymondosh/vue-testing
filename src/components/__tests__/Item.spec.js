// import Vue from 'vue'
import Item from '../Item.vue'
// import { mount } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  //   test('sanity test', () => {
  //     const Ctor = Vue.extend(Item)
  //     const vm = new Ctor().$mount()
  //     expect(vm.$el.textContent).toContain('item')
  //   })

  //   test("render 'item'", () => {
  //     const Ctor = Vue.extend(Item)
  //     const vm = new Ctor().$mount()
  //     expect(vm.$el.textContent).toContain('item')
  //   })

  //   test("render 'item' from vue-test-utils", () => {
  //     // const wrapper = mount(Item)
  //     const wrapper = shallowMount(Item)
  //     // debugger
  //     expect(wrapper.text()).toBe('item')
  //   })

  //   test('renders item.url', () => {
  //     const item = { url: '10' }
  //     const wrapper = shallowMount(Item, {
  //       propsData: { item }
  //     })
  //     expect(wrapper.text()).toContain(item.url)
  //   })

  test('renders item.author', () => {
    const item = { by: 'Emmanuel' }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.by)
  })

  test('renders item.count', () => {
    const item = { score: 1 }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.score)
  })

  test('renders a link to the item.url with item.title as text', () => {
    const item = { url: 'https://google.com', title: 'Google' }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    const tag = wrapper.find('a')
    // const tag = wrapper.find('')
    // expect(tag.attributes('href')).toBe(item.url)
    expect(tag.attributes().href).toBe(item.url)
    expect(tag.text()).toBe(item.title)
  })
})
