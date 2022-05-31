<template>
  <form @submit.prevent="$emit(EVENTS.CHANGE, query)" class="SearchBox">
    <label class="SearchBox-label">
      Search:
      <input
        type="text"
        v-model="query"
        placeholder="Type a name"
        class="SearchBox-input"
      />
    </label>
    <button type="submit" class="SearchBox-button">Go!</button>
  </form>
</template>
<script>
import EVENTS from "@/constants/events";

export default {
  name: "SearchBox",

  data() {
    return {
      EVENTS: EVENTS,
      query: "",
    };
  },
};
</script>
<style scoped lang="scss">
@import "@/styles/variables.scss";

.SearchBox {
  &-input {
    padding: $gap / 3;
  }

  &-button {
    padding: $gap / 3;
  }
}
</style>
