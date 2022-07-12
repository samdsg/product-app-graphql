import React, { Component } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

/* Components */
import Layout from "./components/Layout";
import ProductsContainer from "./components/ProductsContainer";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
}); // establish a connection to your server to interact with express graphql

class App extends Component {
  render() {
    return (
      <ApolloProvider {...{ client }}>
        <Layout>
          <ProductsContainer />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default App;
