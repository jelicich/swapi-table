<template>
  <article class="PlanetInformation" v-loading="isLoading">
    <h1 class="PlanetInformation-title">Planet Information</h1>
    <dl v-if="planetInfo" class="PlanetInformation-list">
      <div class="PlanetInformation-set">
        <dt>Name:</dt>
        <dd>{{ planetInfo.name }}</dd>
      </div>
      <div class="PlanetInformation-set">
        <dt>Diameter:</dt>
        <dd>{{ planetInfo.diameter }}</dd>
      </div>
      <div class="PlanetInformation-set">
        <dt>Climate:</dt>
        <dd>{{ planetInfo.climate }}</dd>
      </div>
      <div class="PlanetInformation-set">
        <dt>Population:</dt>
        <dd>{{ planetInfo.population }}</dd>
      </div>
    </dl>
  </article>
</template>
<script>
import PlanetService from "@/services/Planet.service";

export default {
  name: "PlanetInformation",

  props: {
    planet: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isLoading: false,
      planetInfo: null,
    };
  },

  async mounted() {
    await this.getPlanetInfo();
  },

  methods: {
    async getPlanetInfo() {
      this.isLoading = true;
      this.planetInfo = await PlanetService.getPlanetInfo(this.planet);
      this.isLoading = false;
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/styles/variables.scss";

.PlanetInformation {
  &-set {
    margin-bottom: $gap;
    display: flex;

    dt {
      background: $primary;
      color: $secondary;
      display: inline-block;
      margin-right: $gap / 2;
    }
  }
}
</style>
