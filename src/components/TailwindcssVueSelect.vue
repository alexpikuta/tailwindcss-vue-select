<template>
  <div
    ref="select"
    :class="['drop-down', {'drop-down--disabled': isDisabled, 'drop-down--active': isOpenList}]"
    :style="{width: width}"
    :value="selectedValue"
  >
    <div
      class="drop-down__input-wrapper"
    >
      <span
        v-if="$slots.default"
        :class="['drop-down__label', {'drop-down__label--floated': selectedValue || isOpenList}]"
      >
        <slot />
      </span>
      <input
        :class="[
          'drop-down__input',
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
        class="drop-down__list scroll"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          class="drop-down__item"
          @click.stop="setValue(item)"
        >
          {{ !printKeys ? null : Object.keys(item)[0] }}
          {{ !printKeys ? null : divider }}
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
    width: {
      type: String,
      default: '300px'
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
      this.selectedValue = !this.printKeys ? Object.values(item)[0] : Object.keys(item)[0] + ` ${this.divider} ` + Object.values(item)[0]
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
@import './variables.sass'
@import './styles.sass'
</style>
