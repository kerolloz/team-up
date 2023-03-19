<template>
  <input />
</template>

<script>
import Tagify from '@yaireo/tagify';
import '@yaireo/tagify/dist/tagify.css';

function getRandomColor() {
  function rand(min, max) {
    return min + Math.random() * (max - min);
  }

  const h = rand(1, 360) | 0,
    s = rand(40, 70) | 0,
    l = rand(65, 72) | 0;

  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

function transformTag(tagData) {
  tagData.value = tagData.value.toLowerCase();
  tagData.style = '--tag-bg:' + getRandomColor();
}

export default {
  methods: {
    getTags() {
      return this.tagify.value.map((t) => t.value);
    },
    getTagify() {
      return this.tagify;
    },
  },
  mounted() {
    const input = this.$el;
    this.tagify = new Tagify(input, {
      pattern: /^[a-z][a-z0-9\-+.]{1,20}$/,
      editTags: 1, // single click to edit a tag
      maxTags: 20,
      delimiters: ' ',
      trim: false,
      transformTag,
    });
    this.tagify.on('keydown', (e) => {
      if (e.detail.event.key === 'Enter') {
        this.$emit('search');
      }
    });

    this.tagify.on('add', () => this.$emit('search'));
    this.tagify.on('remove', () => this.$emit('search'));
  },
};
</script>

<style>
.tagify {
  --placeholder-color: #646a72;
}

/** hide placeholder text after 2 tags are entered */
.tagify__tag + .tagify__tag + .tagify__input::before,
.tagify__tag + .tagify__tag + .tagify__input:focus:empty::before {
  display: none;
}
</style>
