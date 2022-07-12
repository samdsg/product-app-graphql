import { gql } from "@apollo/client";

// get all the transaction
const GET_TRANSACTIONS = gql`
  query getTransactions {
    transactions {
      id
      dateAdded
      products {
        id
        title
        description
        price
        category
      }
    }
  }
`;

// Gets a single transaction
const GET_TRANSACTION = gql`
    query getTransaction($id: ID!){
       transaction(id: ID) {
        id
        dateAdded
        products {
          id
          description
          price
          title
          category
        }
      }
    }
`;

export { GET_TRANSACTIONS, GET_TRANSACTION };
