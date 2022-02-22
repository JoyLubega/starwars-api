const { RESTDataSource } = require("apollo-datasource-rest");

class PeopleData extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async getAllPeople() {
    const response = await this.get("people");
    return Array.isArray(response.results)
      ? new Array(response)
      : [];
  }

  async getPeopleByName({search }) {

    const response = await this.get("people/", { search: search });
    
    return Array.isArray(response.results)
      ? new Array(response)
      : [];
  }

  async getPeopleByPage({ page }) {
    const response = await this.get("people/", { page: page });
    return Array.isArray(response.results)
      ? new Array(response)
      : [];
  }


  personObject(result) {
      return {
        count: result.count , 
        next: result.next, 
        previous: result.previous, 
        results: result.results
      }
  }
}

module.exports = PeopleData;