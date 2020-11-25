<h1 align="center">Vue 3 BEM</h1>

<h4 align="center">*** Maintainers & Contributors welcome ***</h4>

<p align="center">
  <a href="https://vuejs.org/">
    <img alt="Vue.js" src="https://user-images.githubusercontent.com/18534115/100093526-f2794b80-2e57-11eb-9b2a-e24202e2904b.png" height="192">
    <img alt="BEM" src="https://user-images.githubusercontent.com/18534115/100067249-512dcd80-2e36-11eb-8f12-84b0fc1abfa1.png" height="192">
  </a>
</p>

<h4 align="center">Simple implementation of <a href="http://getbem.com/">BEM</a> in Vue 3.x</h4>
<p>Based on Vue 2.x library <a href="https://github.com/c01nd01r/vue-bem-cn">vue-bem-cn</a></p>

---

## Table of Contents

* [Installation](#installation)
* [API](#api)
* [Documentation](#documentation)


## Installation

`npm i @vuebits/bem` / `yarn add @vuebits/bem`

And install in your entry file (e.g. `main.js`):

```javascript
import { createBem } from '@vuebits/bem';

createApp(App).use(createBem({ /* your config here */ })).mount('#app');
```

## API

### Available functions:

* `createBem (options: BemOptions)`:

```ts
interface BemOptions {
  hyphenate?: boolean;
}
```

### Vue instance properties and methods:

* `$bem ({ b, e, m }: BemItem): string[]`:

```ts
interface BemItem {
  b?: string;
  e?: string;
  m?: string | string[] | {[key in string]: boolean};
}
```

## Examples

### Using component name by default:

```vue
<template>
  <div :class="$bem({})"> <!-- $bem({}) will return 'hello-world' -->
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'hello-world',
  props: {
    msg: {
      type: String as PropType<string>,
      default: ''
    }
  }
});
</script>

<style lang="scss">
.hello-world {
  // some styles here
}
</style>

```
