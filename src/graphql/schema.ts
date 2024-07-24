import { gql } from "apollo-server-micro";

export const typeDefs = gql`
type User {
  id: Int!
  name: String!
  email: String!
}

type Task {
  id: Int!
  title: String!
  done: Boolean!
  user: User!
}

type Query {
  tasks: [Task!]!
}
`
