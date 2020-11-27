<template>
  <Bem />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Bem from './components/Bem.vue';

export default defineComponent({
  name: 'App',
  components: {
    Bem
  }
});
</script>
