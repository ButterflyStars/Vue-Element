<template>
  <div class id>
    <nav-menu></nav-menu>
    <router-view />
  </div>
</template>

<script>
import NavMenu from "./common/NavMenu";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: { NavMenu }
};
</script>

<style scoped>
</style>