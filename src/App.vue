<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <section>
      <p>
        Print only values (<code>print-keys</code> option set to false)
      </p>
      <TailwindcssVueSelect
        v-model="value2"
        :items="arrayData"
        :print-keys="false"
        :divider="'-'"
        :width="'300px'"
      >
        Label go here
      </TailwindcssVueSelect>
      <p>
        Value: {{ value2 }}
      </p>
    </section>

    <section>
      <p>
        Print pair key-value (<code>print-keys</code> option set to true)
      </p>
      <TailwindcssVueSelect
        v-model="value1"
        :items="arrayData"
        :print-keys="true"
        :divider="'-'"
        :width="'300px'"
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
        { 'third': '3s' }
      ],
      value1: ' ',
      value2: ' '
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
