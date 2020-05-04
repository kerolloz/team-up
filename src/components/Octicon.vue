<template>
  <div v-html="octicon" class="d-inline-block"></div>
</template>

<script>
import octicons from '@primer/octicons';

export default {
  props: ['name', 'options'],
  data() {
    return {
      octicon: octicons[this.name].toSVG(this.options),
    };
  },
};
</script>

<style></style>
