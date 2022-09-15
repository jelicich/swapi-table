import RestService from "@/services/Rest.service";
import PlanetService from "@/services/Planet.service";
import endpointsNames from "@/constants/endpoints";

const { PEOPLE } = endpointsNames;

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
   * Get people with planet name included
   * @returns {Object}
   */

  async getPeople(params) {
    const response = await RestService.get(PEOPLE, params);
    response.data.results = await _mapPeopleData(response.data.results);
    return response;
  },
};

export default PeopleService;
