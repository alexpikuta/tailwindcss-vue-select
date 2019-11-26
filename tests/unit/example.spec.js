import { mount } from '@vue/test-utils'
import TailwindcssVueSelect from '@/components/TailwindcssVueSelect.vue'

describe('Tailwind Select', () => {
  const wrapper = mount(TailwindcssVueSelect)

  it('компонент рендерится', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('список аргументов не рендерится без переданых props', () => {
    expect(wrapper.contains('ul')).toBe(false)
  })

  // const propsWrapper = mount(TailwindcssVueSelect)
  it('компонент рендерится с предустановленным v-model', () => {
    const input = wrapper.find('input')
    input.setValue('Some value')
    expect(wrapper.exists()).toBe(true)
  })
})
