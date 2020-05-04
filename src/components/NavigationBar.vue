<template>
  <!-- Navbar -->
  <div class="Header bg-blue flex-justify-between mb-5 p-1">
    <NavigationItem to="/registration">
      Register
    </NavigationItem>
    <NavigationItem to="/" class="h3">
      TEAM UP
    </NavigationItem>
    <NavigationItem to="/students">
      Students
    </NavigationItem>
  </div>
</template>

<script>
import NavigationItem from '@/components/NavigationItem';
export default {
  components: { NavigationItem },
};
</script>
