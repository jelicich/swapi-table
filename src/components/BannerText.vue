<template>
  <div class="BannerText">
    <div class="BannerText-contentWrapper">
      <span class="BannerText-content"><slot></slot></span>
    </div>
    <span class="BannerText-placeHolder"><slot></slot></span>
  </div>
</template>
<script>
export default {
  name: "BannerText",
};
</script>
<style scoped lang="scss">
.BannerText {
  position: relative;
  overflow: hidden;
  width: 100%;
  font-size: 1.5rem;

  &-contentWrapper {
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
  }

  &-content {
    display: inline-block;
    padding-left: 100%;
    animation: slide 5s linear infinite;
  }

  &-placeHolder {
    visibility: hidden;
  }
}

@keyframes slide {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
</style>
