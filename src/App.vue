<template>
  <main :class="$bem({})">
    <Post :class="$bem({e: 'post'})" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Post from './components/Post.vue';

export default defineComponent({
  name: 'App',
  components: {
    Post
  }
});
</script>
