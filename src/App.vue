<template>
  <div id="app">
    <router-view />
    <ModalWindow v-model="showGreeting">
      <GreetingScreen @destroy="destroyGreeting" />
    </ModalWindow>
    <ErrorNotification v-model="showErrors" />
  </div>
</template>
<script>
import ModalWindow from "@/components/ModalWindow.vue";
import GreetingScreen from "@/components/GreetingScreen.vue";
import ErrorNotification from "@/components/ErrorNotification.vue";
import CONSTANTS from "@/constants/constants";

const { SWAPI_FLAG } = CONSTANTS;

export default {
  name: "App",

  components: {
    ModalWindow,
    GreetingScreen,
    ErrorNotification,
  },

  data() {
    return {
      showGreeting: false,
      showErrors: false,
    };
  },

  watch: {
    $errors(newValue) {
      this.showErrors = newValue ? true : false;
    },
  },

  created() {
    const isFirstTime = !localStorage.getItem(SWAPI_FLAG);
    this.showGreeting = isFirstTime;
  },

  methods: {
    destroyGreeting() {
      this.showGreeting = false;
      localStorage.setItem(SWAPI_FLAG, JSON.stringify(true));
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/variables.scss";

#app {
  border: $border;
  border-radius: $border-radius-lg;
  height: calc(100vh - #{$gap * 2});
  overflow: hidden;
  padding: $gap;
}
</style>
