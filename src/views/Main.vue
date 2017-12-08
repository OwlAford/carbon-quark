<template lang="pug">
  .app-main-view
    router-view
    app-footer
</template>

<script>
import AppFooter from '^/Footer'

export default {
  name: 'main',
  components: {
    AppFooter
  }
}
</script>
