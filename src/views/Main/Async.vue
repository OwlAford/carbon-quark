<template lang="pug">
  async-module
</template>

<script>
import config from "@/config/asyncLoad";

export default {
  name: "async-main",
  components: {
    AsyncModule: () => ({
      component: import("./Main" /* webpackChunkName: 'main' */),
      ...config
    })
  }
};
</script>
