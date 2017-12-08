<template lang="pug">
  article.page-home 当前路径为{{ route }}
</template>

<style lang="scss">
  article.page-home {
    background-color: blue;
    color: #fff;
  }
</style>

<script>
import { getHome } from '~/config/api'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      route: 'routePath'
    })
  },

  mounted () {
    getHome().then(res => {
      console.log(res)
    })
  },

  beforeDestroy () {
  },

  methods: {
  }
}
</script>
