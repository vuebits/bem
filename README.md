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
    Hello world!
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'hello-world'
});
</script>

<style lang="scss">
.hello-world {
  // some styles here
}
</style>

```

### Using hyphenated component name:

If you use PascalCase naming convence you should init library with `hyphenate` option:

```js
import { createBem } from '@vuebits/bem';

createApp(App).use(createBem({
  hyphenate: true
})).mount('#app');
```

and then:

```vue
<template>
  <div :class="$bem({})"> <!-- returns ['hello-world'] -->
    Hello world!
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld'
});
</script>

<style lang="scss">
.hello-world {
  // some styles here
}
</style>

```

### Custom block name:

```vue
<template>
  <div :class="$bem({b: 'custom-block'})"> <!-- returns ['custom-block'] -->
    Hello world!
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld'
});
</script>

<style lang="scss">
.custom-block {
  // some styles here
}
</style>

```

### Element name:

```vue
<template>
  <div :class="$bem({})"> <!-- (or $bem({b: 'hello-world'})) - return ['hello-world'] -->
    <h1 :class="$bem({e: 'title'})"> <!-- (or $bem({b: 'hello-world', e: 'title'})) - returns ['hello-world__title'] -->
      Hello world!
    </h1>
    <p :class="$bem({e: 'description'})"> <!-- (or $bem({b: 'hello-world', e: 'description'})) - returns ['hello-world__description'] -->
      This is a description
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld'
});
</script>

<style lang="scss">
.hello-world {
  // some styles here
  &__title {
    // some styles here
  }
  &__description {
    // some styles here
  }
}
</style>

```

### Inline modfiers:

```vue
<template>
  <div :class="$bem({})"> <!-- returns ['hello-world'] -->
    <p :class="$bem({e: 'text', m: ['underlined']})"> <!-- returns ['hello-world__text', 'hello-world__text--underlined'] -->
      This is a description
    </p>
    <p :class="$bem({e: 'text', m: ['underlined', 'highlighted']})"> <!-- returns ['hello-world__text', 'hello-world__text--underlined', 'hello-world__text--highlighted'] -->
      This is a description
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld'
});
</script>

<style lang="scss">
.hello-world {
  // some styles here
  &__title {
    // some styles here
  }
  &__text {
    // some styles here
    &--underlined {
      // some styles here
    }
    &--highlighted {
      // some styles here
    }
  }
}
</style>

```
