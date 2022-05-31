<template>
  <div class="HomePage">
    <h1 class="HomePage-title">Welcome to the Star Wars registry of people</h1>
    <SortableTable :headers="headers" :items="people" v-loading="isLoading">
      <template v-slot:table-title>
        <BannerText>May the force be with you...</BannerText>
      </template>
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template v-slot:column.homeworld_name="{ content }">
        <a
          :href="`/planet/${content}`"
          @click.prevent="showPlanetInfo(content)"
          >{{ content }}</a
        >
      </template>
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template v-slot:column.created="{ content }">
        {{ new Date(content).toUTCString() }}
      </template>
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template v-slot:column.edited="{ content }">
        {{ new Date(content).toUTCString() }}
      </template>
    </SortableTable>
    <ModalWindow v-model="showModal" @close="$router.push({ name: 'home' })">
      <router-view></router-view>
    </ModalWindow>
  </div>
</template>

<script>
import PeopleService from "@/services/People.service";
import SortableTable from "@/components/SortableTable.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import BannerText from "@/components/BannerText.vue";

export default {
  name: "HomePage",

  components: {
    SortableTable,
    ModalWindow,
    BannerText,
  },

  watch: {
    async ["$route.params.planet"](newValue) {
      this.showModal = newValue ? true : false;
    },
  },

  data() {
    return {
      isLoading: false,
      isPlanetLoading: false,
      showModal: false,
      people: [],
      headers: {
        name: "Name",
        height: "Height",
        mass: "Mass",
        created: "Created",
        edited: "Edited",
        homeworld_name: "Planet Name",
      },
    };
  },

  async mounted() {
    this.loadPeople();

    if (this.$route.params.planet) {
      this.showModal = true;
    }
  },

  methods: {
    async loadPeople() {
      this.isLoading = true;
      const result = await PeopleService.getAllPeople();
      this.people = result;
      this.isLoading = false;
    },

    async showPlanetInfo(planet) {
      this.showModal = true;
      this.$router.push({
        name: "planet",
        params: {
          planet: planet,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.HomePage {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  &-title {
    align-self: baseline;
    background: $primary;
    color: $secondary;
  }
}
</style>
