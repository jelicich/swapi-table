<template>
  <article class="GreetingScreen">
    <h1>Star Wars characters database</h1>
    <p>
      In this table you can find all the characters from Star Wars and some
      information related to them and their home planet.
    </p>
    <p>
      This project was made using
      <a href="https://swapi.dev" target="_blank">SWAPI</a>. Disclaimer:
      Sometimes the API takes longer than expected to provide the data, please
      be patient.
    </p>
    <p>
      The idea behind this project is to experiment with this 3rd party API, to
      show how this application handles dealing with the API constraints as well
      as to showcase some other skills (such as architecture, testing, styling,
      framework knowledge, etc).
    </p>
    <p>
      <label>
        <button @click="$emit(EVENTS.DESTROY)">
          OK, DON'T SHOW THIS AGAIN
        </button>
      </label>
    </p>
  </article>
</template>
<script>
import EVENTS from "@/constants/events";

export default {
  name: "GreetingScreen",

  data() {
    return {
      EVENTS,
    };
  },
};
</script>
<style scoped lang="scss"></style>
