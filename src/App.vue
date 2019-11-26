<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <section
      class="m-6"
    >
      <p
        class="m-2"
      >
        Print only values (<code>print-keys</code> option set to false)
      </p>
      <TailwindcssVueSelect
        v-model="value2"
        :items="arrayData"
        :print-keys="false"
        :divider="'-'"
      >
        Label go here
      </TailwindcssVueSelect>
      <p>
        Value: {{ value2 }}
      </p>
    </section>

    <section
      class="m-6"
    >
      <p
        class="m-2"
      >
        Print pair key-value (<code>print-keys</code> option set to true)
      </p>
      <TailwindcssVueSelect
        v-model="value1"
        :items="arrayData"
        :print-keys="true"
        :divider="'-'"
      >
        Label go here
      </TailwindcssVueSelect>
      <p>
        Value: {{ value1 }}
      </p>
    </section>
  </div>
</template>

<script>
import TailwindcssVueSelect from './components/TailwindcssVueSelect.vue'

export default {
  name: 'App',
  components: {
    TailwindcssVueSelect
  },
  data () {
    return {
      arrayData: [
        { 'first': '1s' },
        { 'second': '2s' },
        { 'third': false },
        { 'first': '1s' },
        { 'second': '2s' },
        { 'third': false },
        { 'first': '1s' },
        { 'second': '2s' },
        { 'third': false },
        { 'first': '1s' },
        { 'second': '2s' },
        { 'third': false },
        { 'first': '1s' },
        { 'second': '2s' },
        { 'third': false },
        { 'first': '1s' },
        { 'second': '2s' },
        { 'third': false }
      ],
      value1: ' ',
      value2: ' '
    }
  }
}
</script>

<style lang="scss">
img {
  margin: 30px auto
}
blockquote,
p {
  text-align: left
}
code {
  padding: 2px;
  background-color: #efefef;
  border-radius: 4px
}
</style>
