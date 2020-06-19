<template>
  <div class="flash flash-error">
    <div class="h4 mb-2">{{ title }}</div>
    <div>
      <ul class="m-3" v-if="Array.isArray(errors)">
        <li v-for="err in errors" :key="err">{{ err }}</li>
      </ul>
      <p class="mt-3 mb-2" v-else>
        {{ errors }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Errors extends Vue {
  @Prop({ required: true }) readonly errors!: string[] | string;
  @Prop({ default: 'Something Went Wrong!' }) title!: string;
}
</script>
