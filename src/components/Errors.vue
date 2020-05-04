<template>
  <div class="flash flash-error">
    <div class="h4 mb-2">{{ title }}</div>
    <ul class="m-3">
      <li v-for="err in errors" :key="err">{{ err }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Errors extends Vue {
  @Prop({ required: true }) readonly errors!: string[];
  @Prop({ default: 'Something Went Wrong!' }) title!: string;
}
</script>
