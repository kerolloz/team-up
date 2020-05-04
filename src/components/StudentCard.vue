<template>
  <div class="mb-2">
    <div class="rounded-2 p-2 bg-blue text-white text-center width-full">
      <div class="mt-2">
        <h3 class="">{{ name }}</h3>
      </div>
      <div class="mt-2">
        <a :href="`mailto:${email}`" class="text-white text-underline f4">{{
          email
        }}</a>
      </div>
      <div class="mt-3">
        <span
          class="Label bg-blue-light text-gray-dark mr-1 mb-1 p-2 text-normal f4"
          v-for="skill in skills"
          :key="skill"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['student'],
  data() {
    const { name, email, skills } = this.student;
    return { name, email, skills };
  },
};
</script>
