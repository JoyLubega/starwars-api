module.exports = {
    Query: {
      allPeople: (_, __, { dataSources }) =>
        dataSources.starWarsAPI.getAllPeople(),
      people: (_, { page }, { dataSources }) =>
        dataSources.starWarsAPI.getPeopleByPage({ page: page }),
      person: (_, { name }, { dataSources }) =>
        dataSources.starWarsAPI.getPeopleByName({ search: name }),
    },
  };