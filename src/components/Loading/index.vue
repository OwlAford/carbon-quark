<template lang="pug">
  .app-loading
    .triangle
</template>

<style scoped lang="scss">
@keyframes triangleRotate {
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 1080deg);
  }
}

.app-loading {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  min-height: 2rem;

  .triangle {
    width: 0.6rem;
    height: 0.6rem;
    margin: 0 auto;
    background: url(./img/triangle.svg) center center no-repeat;
    background-size: 100% auto;
    animation: triangleRotate 3s infinite;
  }
}
</style>

<script>
export default {
  name: "loading"
};
</script>
