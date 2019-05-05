<template lang="pug">
  .app-error(@click="refresh")
    .fail-icon
    .title {{ msg || "页面错误，点击页面刷新！" }}
</template>

<style scoped lang="scss">
.app-error {
  width: 100%;
  padding: 0.4rem 0;

  .title {
    text-align: center;
    padding: 0.3rem;
    color: #aeb7c7;
    font-size: 0.28rem;
  }

  .fail-icon {
    height: 2.8rem;
    background: url(./img/fail-icon.svg) no-repeat center center;
    background-size: auto 100%;
  }
}
</style>

<script>
export default {
  name: "error",
  props: {
    msg: String
  },
  methods: {
    refresh() {
      window.location.reload();
    }
  }
};
</script>
