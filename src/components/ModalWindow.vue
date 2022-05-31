<template>
  <div class="ModalWindow" v-if="show">
    <div class="ModalWindow-overlay" @click="$emit(EVENTS.CLOSE, false)"></div>
    <div class="ModalWindow-frame">
      <button class="ModalWindow-button" @click="$emit(EVENTS.CLOSE, false)">
        X
      </button>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import EVENTS from "@/constants/events";

export default {
  name: "ModalWindow",

  model: {
    prop: "show",
    event: EVENTS.CLOSE,
  },

  props: {
    show: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      EVENTS: EVENTS,
    };
  },

  mounted() {},
};
</script>
<style scoped lang="scss">
@import "@/styles/variables.scss";

.ModalWindow {
  display: flex;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;

  &-overlay {
    background-color: $secondary;
    background-image: url("@/assets/modal-background.png");
    box-shadow: inset 0 0 10vw $black;
    height: 100vh;
    left: 0;
    opacity: 0.95;
    position: absolute;
    top: 0;
    width: 100vw;
  }

  &-frame {
    background: $secondary;
    border: $border;
    border-radius: $border-radius-lg;
    box-shadow: 0 0 5vw $black;
    height: 75vh;
    margin: auto;
    padding: $gap;
    position: relative;
    width: 75vw;
  }

  &-button {
    position: absolute;
    right: $gap;
    top: $gap;
  }
}
</style>
