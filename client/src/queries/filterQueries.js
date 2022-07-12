import { gql } from "@apollo/client";

// Query for a keyword filter
const FILTER_TRANSACTION = gql`
  query FilterQuery($filter: String!) {
    category(filter: $filter) {
      id
      dateAdded
      products {
        id
        description
        price
        title
        dateAdded
        category
      }
    }
  }
`;

export { FILTER_TRANSACTION };
