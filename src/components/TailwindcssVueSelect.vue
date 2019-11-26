<template>
  <div
    ref="select"
    :class="['relative cursor-pointer text-left drop-down',
             {
               'drop-down--disabled': isDisabled,
               'drop-down--active': isOpenList
             }]"
    :value="selectedValue"
  >
    <div
      class="relative"
    >
      <span
        v-if="$slots.default"
        :class="['drop-down__label text-base pointer-events-none',
                 {
                   'drop-down__label--floated': selectedValue || isOpenList
                 }]"
      >
        <slot />
      </span>
      <input
        :class="[
          'bg-white focus:outline-none focus:shadow-outline border rounded-lg py-4 px-4 block w-full appearance-none leading-none',
          {
            'drop-down__input--active': isOpenList
          }
        ]"
        :value="selectedValue"
        readonly
        @blur="closeWithBlur"
        @click="isOpenList = !isOpenList"
        @keyup.esc="clearWithClosing"
        @keyup.tab="isOpenList = true"
      >
    </div>
    <transition name="drop-down-toogle">
      <ul
        v-show="isOpenList"
        ref="selectList"
        class="drop-down__list scroll absolute w-full m-0 p-0 rounded-sm border z-10"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          class="drop-down__item m-0 text-base "
          @click.stop="setValue(item)"
        >
          {{ printKeys ? Object.keys(item)[0] : null }}
          {{ printKeys ? divider : null }}
          {{ Object.values(item)[0] }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TailwindVueSelect',
  props: {
    items: {
      type: Array,
      default: null
    },
    arrayList: {
      type: Boolean,
      default: false
    },
    printKeys: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    divider: {
      type: String,
      default: '-'
    }
  },
  data () {
    return {
      isOpenList: false,
      selectedValue: ''
    }
  },
  methods: {
    setValue (item) {
      this.selectedValue = this.printKeys ? Object.keys(item)[0] + ` ${this.divider} ` + Object.values(item)[0] : Object.values(item)[0] + ''
      this.$emit('input', item)
    },
    closeWithBlur () {
      this.isOpenList = false
    },
    clearWithClosing () {
      this.selectedValue = undefined
      this.$emit('input', undefined)
      this.closeWithBlur()
    }
  }
}
</script>

<style lang="sass">
@import "tailwindcss/base"
@import "tailwindcss/components"
@import "tailwindcss/utilities"

@import './variables.sass'
@import './styles.sass'
</style>
