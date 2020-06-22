<template>
  <div
    :style="{ borderColor: currentColor }"
    class="box-shadow-medium m-3 p-3 rounded-2 card-border f4"
  >
    <h2 class="mb-2">{{ title }}</h2>
    <slot> Empty Info Card </slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];

let index = 0;

@Component
export default class InfoCard extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string;
  currentColor = colors[index % colors.length];
  created() {
    index++;
  }
}
</script>

<style scoped>
.card-border {
  border-top: 2px solid;
}
</style>
