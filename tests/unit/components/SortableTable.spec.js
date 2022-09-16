import { shallowMount } from "@vue/test-utils";
import SortableTable from "@/components/SortableTable.vue";
import constants from "@/constants/constants"
import people from "../__fixtures__/people";

const { ASC, DESC } = constants;

describe("SortableTable.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SortableTable, {
      propsData: {
        items: people,
        headers: {
          name: "Name",
          height: "Height",
          mass: "Mass",
          created: "Created",
          edited: "Edited",
          homeworld_name: "Planet Name",
        },
      }
    });
  });

  it("should create and mount component", () => {
    expect(wrapper.exists()).toBe(true);
  });


  describe("when sorting the table", () => {
    it("should call the resetSortButtons fn", () => {
      const resetButtonsSpy = jest.spyOn(wrapper.vm, "resetSortButtons");
      wrapper.vm.toggleSort();
      expect(resetButtonsSpy).toHaveBeenCalledTimes(1);
    });

    describe("and when column and direction are provided", () => {
      beforeEach(async () => {
        await wrapper.setProps({
          items: [{ name: "aaron", lastName: "zabka" }, { name: "zack", lastName: "allen" }]
        });
      });

      it("should call the sort method", () => {
        wrapper.vm.toggleSort("name", DESC);
        expect(wrapper.vm.currentItems).toStrictEqual([{ name: "zack", lastName: "allen" }, { name: "aaron", lastName: "zabka" }])
        
        wrapper.vm.toggleSort("lastName", ASC);
        expect(wrapper.vm.currentItems).toStrictEqual([{ name: "zack", lastName: "allen" }, { name: "aaron", lastName: "zabka" }])
      });
    });

    describe("and when no column or direction are provided", () => {
      it("should reset current items to be unsorted", () => {
        wrapper.setData({
          currentItems: [{ name: "zack", height: 10 }, { name: "aaron", height: 20 }]
        });
        wrapper.vm.toggleSort();
        expect(wrapper.vm.currentItems).toStrictEqual(wrapper.vm.currentItemsUnsorted);
      });
    });

    describe("and when the column to sort has numbers", () => {
      it("should sort the array properly", () => {
        wrapper.setData({
          currentItems: [{ age: 1 }, { age: 11 }, { age: 2 }, { age: 111 }, { age: 50 }]
        });
        wrapper.vm.toggleSort("age", ASC);
        expect(wrapper.vm.currentItems).toStrictEqual([
          { age: 1 },
          { age: 2 },
          { age: 11 },
          { age: 50 },
          { age: 111 }
        ]);
      })
    })
  });

  describe("when searching", () => {
    beforeEach(async () => {
      await wrapper.setProps({
        items: [
          { name: "Luke Skywalker" },
          { name: "Anakin Skywalker" },
          { name: "Rugor Nass" },
          { name: "Gasgano" },
          { name: "Mas Amedda" },
          { name: "Jocasta Nu" },
          { name: "Bossk" },
        ]
      });
    });

    it("should reset the sorting", () => {
      const toggleSortSpy = jest.spyOn(wrapper.vm, "toggleSort");
      wrapper.vm.searchByName('test');
      expect(toggleSortSpy).toHaveBeenCalledWith(); // no args
    });

    it.each([
      ['as', [{ name: "Rugor Nass" }, { name: "Gasgano" }, { name: "Mas Amedda" }, { name: "Jocasta Nu" }]],
      ['gas', [{ name: "Gasgano" }]],
      ['sK', [{ name: "Luke Skywalker" }, { name: "Anakin Skywalker" }, { name: "Bossk" }]],
      ['sSk', [{ name: "Bossk" }]],
      ['LUKE', [{ name: "Luke Skywalker" }]],
    ])("should filter the items", (query, expected) => {
      wrapper.vm.searchByName(query);
      expect(wrapper.vm.currentItems).toStrictEqual(expected);
    });
  });
});
