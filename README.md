<h1 align="center">Vue BEM</h1>

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

## Installation

`npm i @vuebits/bem` / `yarn add @vuebits/bem`

And install in your entry file (e.g. `main.js`):

```javascript
import { createBem } from '@vuebits/bem';

createApp(App).use(createBem({ /* your config here */ })).mount('#app');
```
