## Engineering Challenge: Product List App

### Overview

Hey!, welcome to the product list transaction app. This project displays mock data for products grouped by dates of transaction.

A filter category group button(s) at the top level, if clicked returns the products in that category, grouped by the dates of transaction.

There is a top level search bar component to help users search products, but doesn't work currently.

Product Lists are grouped by date and each product displays

- id (not displayed on the frontend)
- title
- description
- dateAdded
- price
- category

### Features

- Fullstack Project built with `React Js` for the Frontend and `Nodejs` for the Backend
- Tailwind
- Graphql
- MongoDB

### Installation & Usage

1 Clone from GitHub `https://github.com/samdsg/product-app-grapql.git`
2 Run `npm install` on the root folder and client folder from your cli
3 Run `npm run dev` on the root folder to start the project

### Suggestions

- UI Design can be improved to reduce the data displayed by Using Accordion Dropdowns for each date groups containing products.
- Search component should work to query products faster.
- App only retrieves data, making it a complete CRUD App can increase interaction and keep users.
- UI is focused on mobile viewports but can be improved with a beautiful design for different screens.

### Graphql Queries

```graphql
{
  transactions {
    # list of transaction
    id # id of each transaction
    dateAdded # date of each transaction -> relation transaction and product dates
    products {
      # list of all the products
      title # title of product
      dateAdded # date of product reaction
      category # category of product
      description # description of product
      price # price of product
    }
  }
}
```

```graphql
{
  products {
    # list of products
    id
    title
    description
    price
    dateAdded
    category
  }
}
```

```graphql
{
  category(filter: "phones") {
    # list of product with same category filter keyword
    id # category unique id
    dateAdded # date used for group data return from product list
    products #product list of same category
  }
}
```

```graphql
mutation {
  addProduct(
    title: "Title"
    description: "description"
    dateAdded: "date(ISO)"
    price: "price"
    category: "category name"
  ) {
    id
    title
    description
    dateAdded
  }
}
```

```graphql
mutation {
  addTransaction(dateAdded: "date") {
    dateAdded
  }
}
```

_All the above queries works -> `http://localhost:5000/graphql`_.

#### Reference(s)

[useLazyQuery Hook with React Apollo](https://www.howtographql.com/react-apollo/7-filtering-searching-the-list-of-links/)

[How to use GraphQl Custom Scalar from Egghead.io](https://egghead.io/lessons/apollo-define-a-custom-scalar-type-for-a-graphql-api)

[Creating a custom DateTime scalar type 11 - Adonis Masterey](https://www.youtube.com/watch?v=kvJuHGUNqww)

```

```
