<template lang="pug">
  #app
    router-view
</template>

<style lang="scss">
html,
body {
  overflow: hidden;
  height: 100%;
  width: 100%;
}

* {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background: #202123;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  border: 1px solid rgba(255, 255, 255, 0.16);
  background-color: rgba(0, 0, 0, 0.64);
  border-radius: 4px;
}

::-webkit-scrollbar-corner,
::-webkit-resizer {
  background: #202123;
}

#app {
  font-family: "Roboto", "SF Pro SC", "SF Pro Text", "SF Pro Icons",
    "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 12px;
}
</style>
