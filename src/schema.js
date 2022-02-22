const { gql } = require("apollo-server");

const typeDefs = gql`
  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }
  type Response{
    count: Int
    next: String
    previous:String
    results:[Person]
     }
  type Query {
    allPeople: [Response]!
    people(page: Int): [Response]!
    person(name: String): [Response]!
  }
`;

module.exports = typeDefs;
