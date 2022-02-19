const { RESTDataSource } = require("apollo-datasource-rest");

class PeopleData extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async getAllPeople() {
    const response = await this.get("people");
    return Array.isArray(response.results)
      ? response.results.map((person) => this.personReducer(person))
      : [];
  }

  async getPeopleByPage({ pageNumber }) {
    const response = await this.get("people/", { page: pageNumber });
    return Array.isArray(response.results)
      ? response.results.map((person) => this.personReducer(person))
      : [];
  }

  async getPeopleByName({ str }) {
    const response = await this.get("people/", { search: str });
    return Array.isArray(response.results)
      ? response.results.map((person) => this.personReducer(person))
      : [];
  }

  personObject(person) {
    return {
      name: person.name,
      height: person.height,
      mass: person.mass,
      gender: person.gender,
      homeworld: person.homeworld,
    };
  }
}

module.exports = PeopleData;