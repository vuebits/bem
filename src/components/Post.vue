<template>
  <article :class="$bem({})">
    <h1 :class="$bem({e: 'title'})">
      I am title
    </h1>
    <h2 :class="$bem({e: 'subtitle'})">
      I am subtitle
    </h2>
    <p :class="$bem({e: 'content', m: contentModifiers})">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis enim ornare libero vulputate pellentesque.
      Sed rutrum magna vel aliquet dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Fusce vestibulum lobortis mi. Aenean commodo et lacus non rutrum. Aliquam luctus finibus hendrerit.
      In eu ipsum nisl. Aliquam pharetra sagittis odio ut dignissim. Suspendisse id dui felis.
      Nullam augue felis, tempor nec sapien at, sodales tincidunt purus. Integer tempor vehicula nisl, eu mattis leo viverra nec.
      Integer iaculis convallis elit. Quisque aliquet ornare massa, in fermentum est commodo at. Sed condimentum a purus et luctus.
    </p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Post',
  data () {
    return {
      contentModifiers: {
        light: true,
        underlined: false
      }
    };
  }
});
</script>

<style scoped lang="scss">
.post {
  &__content {
    &--light {
      color: #555;
    }
    &--underlined {
      text-decoration: underline;
    }
  }
}
</style>
