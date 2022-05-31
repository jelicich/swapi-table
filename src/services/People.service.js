import RestService from "@/services/Rest.service";
import PlanetService from "@/services/Planet.service";

/**
 * Add planet name to the people data.
 * @param {Array} people
 * @returns {Array} mapped array
 */
async function _mapPeopleData(people) {
  const planetMap = await PlanetService.getPlanetsMap();
  return people.map((character) => {
    character.homeworld_name = planetMap[character.homeworld];
    return character;
  });
}

const PeopleService = {
  /**
   * Get all people with planet name included
   * @returns {Array}
   */
  async getAllPeople() {
    const people = await RestService.getAll("people");
    const mappedData = await _mapPeopleData(people);
    return mappedData;
  },
};

export default PeopleService;
