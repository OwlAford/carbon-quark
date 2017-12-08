<template lang="pug">
  article.app-login
    input(type="text" placeholder="请输入用户名" v-model="userName")
    button(@click="onLogin") 登录
    button(@click="logout") 退出
</template>

<style lang="scss">
  article.app-login { 
    input, button {
      margin: 0.2rem;
      padding: 0.2rem 0.4rem;
      display: block;
    }

    input {
      background-color: #ccc;
    }

    button {
      border: 1px solid #999;
    }
  }
</style>

<script>
import { getLogin } from '~/config/api'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      userName: ''
    }
  },
  mounted () {
    getLogin().then(res => {
      console.log(res)
    })
  },
  methods: {
    ...mapActions({
      login: 'login',
      logout: 'logout'
    }),
    onLogin () {
      this.login(this.userName)
      this.$router.push('/main/home')
    }
  }
}
</script>
