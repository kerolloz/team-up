<template>
  <router-link
    :to="to"
    :class="{ active: to === $route.path }"
    class="Header-link p-3 rounded-2 link flex-self-center"
  >
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NavigationItem extends Vue {
  @Prop({ required: true, type: String }) readonly to!: string;
}
</script>

<style scoped>
.active {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgba(255, 255, 255, 0.7);
}

.link,
.link:hover,
.link:active {
  outline: none;
}
</style>
