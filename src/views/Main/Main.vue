<template lang="pug">
  .app-main
    Header
    Sidebar
    section.app-content
</template>

<script>
import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar.vue";

export default {
  name: "maintain",
  components: {
    Header,
    Sidebar
  }
};
</script>

<style lang="scss">
section.app-content {
  position: absolute;
  top: 60px;
  right: 0;
  left: 220px;
  bottom: 0;
}
</style>
