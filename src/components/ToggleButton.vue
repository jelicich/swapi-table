<template>
  <div class="ToggleButton">
    <button
      class="ToggleButton-action ToggleButton-action--asc"
      :class="{ 'ToggleButton-action--active': currentState === ASC }"
      title="Ascending"
      @click="toggleState(ASC)"
    >
      &#9650;
    </button>
    <button
      class="ToggleButton-action ToggleButton-action--desc"
      :class="{ 'ToggleButton-action--active': currentState === DESC }"
      title="Descending"
      @click="toggleState(DESC)"
    >
      &#9660;
    </button>
  </div>
</template>
<script>
import EVENTS from "@/constants/events";
import CONSTANTS from "@/constants/constants";

export default {
  name: "ToggleButton",

  model: {
    prop: "state",
    event: EVENTS.CHANGE,
  },

  props: {
    state: {
      type: String,
      required: false,
      default: null,
    },
  },

  watch: {
    state(newValue) {
      this.currentState = newValue;
    },
  },

  data() {
    return {
      EVENTS: EVENTS,
      ASC: CONSTANTS.ASC,
      DESC: CONSTANTS.DESC,
      currentState: this.state,
    };
  },

  methods: {
    toggleState(state) {
      this.currentState = this.currentState === state ? null : state;
      this.$emit(EVENTS.CHANGE, this.currentState);
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/styles/variables.scss";

.ToggleButton {
  &-action {
    display: block;
    font-size: 0.5rem;
    opacity: 0.3;

    &--active {
      opacity: 1;
      box-shadow: $box-shadow;
    }
  }
}
</style>
