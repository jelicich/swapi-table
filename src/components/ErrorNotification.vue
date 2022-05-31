<template>
  <span v-if="show" class="ErrorNotification">
    Error: {{ $errors }}
    <button
      class="ErrorNotification-button"
      @click="$emit(EVENTS.CLOSE, false)"
    >
      X
    </button>
  </span>
</template>
<script>
import EVENTS from "@/constants/events";

export default {
  name: "ErrorNotification",

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
};
</script>
<style scoped lang="scss">
@import "@/styles/variables.scss";

.ErrorNotification {
  background: $primary;
  color: $secondary;
  position: fixed;
  right: 0;
  top: 0;

  &-button {
    border-color: $secondary;
    color: $secondary;
  }
}
</style>
