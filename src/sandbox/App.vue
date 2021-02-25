<template>
  <main :class="$bem({})">
    <div
      v-for="modifier in modifiers"
      :key="modifier.name"
      :class="$bem({e: 'checkbox'})"
    >
      <input
        v-model="modifier.value"
        type="checkbox"
        :name="modifier.name"
        :class="$bem({e: 'checkbox-input'})"
      >
      <label
        :for="modifier.name"
        :class="$bem({e: 'checkbox-label'})"
      >
        {{ modifier.label }}
      </label>
    </div>
    <Post :class="$bem({e: 'post', m: selectedModifiers})" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Post from './components/Post.vue';

export default defineComponent({
  name: 'VApp',
  components: {
    Post
  },
  data () {
    return {
      modifiers: [
        {
          name: 'highlighted',
          value: false,
          label: 'Highlighted'
        },
        {
          name: 'bordered',
          value: false,
          label: 'Boredered'
        }
      ]
    };
  },
  computed: {
    selectedModifiers (): string[] {
      return this.modifiers.filter(f => f.value).map(f => f.name);
    }
  }
});
</script>

<style lang="scss">
.v-app {
  &__post {
    &--highlighted {
      background-color: #ff0;
    }
    &--bordered {
      border: 1px solid #ccc;
    }
  }
}
</style>
