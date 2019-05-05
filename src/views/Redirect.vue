<template lang="pug">
  .app-redirect {{ message }}
</template>

<style scoped lang="scss">
.app-redirect {
  padding: 15px;
  text-align: center;
  font-size: 14px;
}
</style>

<script>
import { getCookie } from "@/utils/cookie";

export default {
  name: "redirect",
  data() {
    return {
      message: ""
    };
  },
  beforeMount() {
    const { $router } = this;
    const userInfo = getCookie("userinfo");
    if (!userInfo) {
      this.message = "未登录或登录失效，请先登录！";
      this.backTimer = setTimeout(() => {
        $router.replace("/login");
      }, 3000);
    } else {
      $router.replace("/main");
    }
  },
  beforeDestroy() {
    clearTimeout(this.backTimer);
  }
};
</script>
