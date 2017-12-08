<template lang="pug">
  .app-redirect {{ message }}
</template>

<script>
export default {
  name: 'redirect',
  data () {
    return {
      message: '页面即将跳转...'
    }
  },
  beforeMount () {
    this.backTimer = setTimeout(() => {
      this.$router.replace('/login')
    }, 3000)
  },
  beforeDestroy () {
    clearTimeout(this.backTimer)
  }
}
</script>
