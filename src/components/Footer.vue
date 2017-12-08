<template lang="pug">
  footer
    .footer
      router-link(to="/main/home" active-class="active") 首页
      router-link(to="/main/state" active-class="active") 状态
      router-link(to="/login" active-class="active") 返回登录
</template>

<style lang="scss">
  footer .footer {
    z-index: 999;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;

    a {
      margin: 0 0.3rem;
    }
  }
</style>

<script>
export default {
  name: 'footer'
}
</script>
