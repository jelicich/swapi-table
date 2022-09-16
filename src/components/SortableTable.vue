<template>
  <div class="SortableTable">
    <div class="SortableTable-title">
      <div class="SortableTable-titleSlot">
        <slot name="table-title"></slot>
      </div>
      <SearchBox @change="searchByName" class="SortableTable-searchBox" />
    </div>

    <div class="SortableTable-tableWrapper">
      <table class="SortableTable-table">
        <thead class="SortableTable-tableHead">
          <tr class="SortableTable-row">
            <th
              class="SortableTable-header"
              v-for="(key, i) in headerKeys"
              :key="i"
            >
              <span class="SortableTable-headerContent">
                {{ headers[key] }}
              </span>
              <ToggleButton
                ref="toggleButtons"
                v-model="sortButtons[key]"
                class="SortableTable-toggleButton"
                @change="toggleSort(key, $event)"
              ></ToggleButton>
            </th>
          </tr>
        </thead>
        <tbody class="SortableTable-tableBody">
          <tr
            class="SortableTable-row"
            v-for="(item, i) in currentItems"
            :key="i"
          >
            <td
              class="SortableTable-item"
              v-for="(column, j) in headerKeys"
              :key="j"
            >
              <slot :name="`column.${column}`" :content="item[column]">
                {{ item[column] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import SearchBox from "@/components/SearchBox.vue";
import ToggleButton from "@/components/ToggleButton.vue";
import NumberUtil from "@/utils/NumberUtil.utils";
import CONSTANTS from "@/constants/constants";

const { ASC } = CONSTANTS;

export default {
  name: "SortableTable",

  components: {
    SearchBox,
    ToggleButton,
  },

  data() {
    return {
      currentItems: [...this.items],
      currentItemsUnsorted: this.items,
      sortButtons: {},
      query: "",
    };
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
    headers: {
      type: Object,
      required: true,
    },
  },

  computed: {
    headerKeys() {
      return Object.keys(this.headers);
    },
  },

  watch: {
    items(newValue) {
      this.currentItems = [...newValue];
      this.currentItemsUnsorted = newValue;
    },
  },

  methods: {
    toggleSort(column = null, direction = null) {
      this.resetSortButtons(column);
      if (direction === null || column === null) {
        this.currentItems = [...this.currentItemsUnsorted];
      } else {
        this.currentItems.sort(this.sortByColumn(column, direction));
      }
    },

    /**
     * Sort array by column and direction taking into account numbers
     * @param {string} column column to be used to filter
     * @param {string} direction asc or desc
     * @returns {function}
     */
    sortByColumn(column, direction) {
      return (a, b) => {
        if (NumberUtil.isNumber(a[column]) && NumberUtil.isNumber(b[column])) {
          const numA = +a[column];
          const numB = +b[column];
          return direction === ASC ? numA - numB : numB - numA;
        } else {
          const sortOrder = direction === ASC ? 1 : -1;
          const A =
            typeof a[column] === "string" ? a[column].toUpperCase() : a[column];
          const B =
            typeof b[column] === "string" ? b[column].toUpperCase() : b[column];
          if (A < B) {
            return sortOrder * -1;
          } else if (A > B) {
            return sortOrder * 1;
          } else {
            return 0;
          }
        }
      };
    },

    /**
     * Filer the items by the given name
     * @param {string} name
     */
    searchByName(name) {
      this.toggleSort();
      if (name) {
        this.currentItems = this.items.filter((item) => {
          let searchRegex = new RegExp(name, "i");
          return item.name.match(searchRegex) !== null;
        });
        this.currentItemsUnsorted = [...this.currentItems];
      } else {
        this.currentItems = [...this.items];
        this.currentItemsUnsorted = this.items;
      }
    },

    resetSortButtons(currentKey = null) {
      Object.keys(this.sortButtons).forEach((key) => {
        if (key !== currentKey) {
          this.sortButtons[key] = null;
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/styles/variables.scss";

.SortableTable {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  &-title {
    border: $border;
    border-radius: $border-radius-sm;
    display: flex;
    justify-content: space-between;
    padding: $gap / 2;
    margin-bottom: $gap;
  }

  &-titleSlot {
    align-items: center;
    display: flex;
    flex: 1;
    width: 100%;
  }

  &-searchBox {
    margin-left: auto;
  }

  &-tableWrapper {
    border: $border;
    border-radius: $border-radius-sm;
    overflow-y: scroll;
  }

  &-table {
    border-collapse: collapse;
    padding: $gap / 2;
    text-align: left;
    width: 100%;
    overflow: scroll;
    position: relative;
  }

  &-tableHead {
    background: $secondary;
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
  }

  &-header {
    font-weight: normal;
    padding: $gap / 3;
    position: relative;
    border-right: $border;
    border-right-style: dashed;

    &:last-child {
      border: none;
    }
  }

  &-headerContent {
    background: $primary;
    color: $secondary;
    font-size: 1.5rem;
  }

  &-toggleButton {
    display: inline-block;
    position: absolute;
    right: $gap / 3;
  }

  &-row {
    border-bottom: $border;
    border-bottom-style: dashed;
  }

  &-item {
    padding: $gap / 3;
    border-right: $border;
    border-right-style: dashed;

    &:last-child {
      border-right: none;
    }
  }
}
</style>
