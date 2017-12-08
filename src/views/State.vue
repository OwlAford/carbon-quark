<template lang="pug">
  article.page-state
    div(v-if="state") 已登录
    div(v-if="!state") 未登录
    div 登录用户名为：{{ name }}
</template>

<style lang="scss">
  article.page-state {
    background-color: red;
    color: #fff;
  }
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'state',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      state: 'loginState',
      name: 'loginUserName'
    })
  }
}
</script>
