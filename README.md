# TailwindCss Vue Select

> Simple Vue.js `<Select>` component, styled with TailWind Css framework.

## Installation

```bash
$ npm install tailwindcss-vue-select
```

Register the component globaly

```js
import Vue from 'vue'
import tailVueSelect from 'tailwindcss-vue-select'
Vue.component('tail-vue-select', tailVueSelect)
```
...or directly in your component
```
...
import tailVueSelect from 'tailwindcss-vue-select'

export default {
  components: {
    tailVueSelect
  }
...
```


Now you can use the component in your markup

```html
<tail-vue-select
	v-model="value"
	:items="arrayOfArguments"
>
	Here you can add label to your select
</tail-vue-select>
```

## Available props

- `items` - Array of objects of the type `key: <String>, value: <Any>`
> -  type: Array,
> -  default: null

------------



- `isPrintKeys` -  Define how object will be rendered in list
> - type: Boolean
> - default: false
	- `false` - Render just values
	- `true` - Render pair of `key` - `value`

------------



- `divider` - Define which character should be print between pairs `key` - `value` (if `isPrintKeys` set to `true`)
> -  type: String,
> -  default: '-'

------------



- `isDisabled` - Disable component
> -  type: boolean,
> -  default: `false`

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

### Run unit tests
```
npm run test:unit
```