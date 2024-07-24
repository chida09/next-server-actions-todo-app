import { gql } from "apollo-server-micro";

export const AllTasksQuery = gql`
  query {
    tasks {
      id
      title
      done
      user {
        id
        name
        email
      }
    }
  }
`
