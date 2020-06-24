<template>
  <div class="mb-2">
    <div class="rounded-2 p-2 bg-blue text-white text-center">
      <div class="mt-2">
        <h3 class="">{{ student.name }}</h3>
      </div>
      <div class="mt-2">
        <a
          :href="`mailto:${student.email}`"
          class="text-white text-underline f4"
          >{{ student.email }}</a
        >
      </div>
      <div class="mt-3">
        <span
          class="Label bg-blue-light text-gray-dark mr-1 mb-1 p-2 text-normal f4"
          v-for="skill in student.skills"
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
};
</script>
