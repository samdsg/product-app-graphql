const _ = require("lodash");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLScalarType,
  GraphQLNonNull,
} = require("graphql");

/* Mongoose modesl */
const Product = require("../models/Product");
const TransactionDate = require("../models/TransactionDate");

// Date Scalar
const Date = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  parseValue(value) {
    return new Date(value); // value from the client
  },
  serialize(value) {
    return value.substring(0, 10); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(+ast.value); // ast value is always in string format
    }
    return null;
  },
});

// products type
const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    price: { type: GraphQLString },
    dateAdded: { type: Date },
    category: { type: GraphQLString },
  }),
});

// transactions type
const TransactionDateType = new GraphQLObjectType({
  name: "Transaction",
  fields: () => ({
    id: { type: GraphQLID },
    dateAdded: { type: Date },
    products: {
      type: new GraphQLList(ProductType),
      async resolve(parent, args) {
        // return products.filter((p) => p.dateAdded === parent.dateAdded);
        const products = await Product.find();
        return products.filter(
          (product) => product.dateAdded === parent.dateAdded
        );
      },
    },
  }),
});

const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: { type: GraphQLID },
    dateAdded: { type: Date },
    products: { type: new GraphQLList(ProductType) },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      async resolve(parent, args) {
        // return products; // returns all products
        return await Product.find();
      },
    },
    transactions: {
      type: new GraphQLList(TransactionDateType),
      async resolve(parent, args) {
        return await TransactionDate.find();
      },
    },
    category: {
      type: new GraphQLList(CategoryType),
      args: { filter: { type: GraphQLString } },
      async resolve(parent, args) {
        const { filter } = args;
        const products = await Product.find();
        const productsByCategory = products.filter(
          (product) => product.category === filter
        );
        let grouped_by_date = _.groupBy(productsByCategory, "dateAdded");
        let dates = Object.keys(grouped_by_date);
        let allProducts = dates.map((dateAdded, id) => ({
          id,
          dateAdded,
          products: grouped_by_date[dateAdded],
        }));
        return allProducts;
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProduct: {
      type: ProductType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        price: { type: GraphQLNonNull(GraphQLString) },
        dateAdded: { type: GraphQLNonNull(GraphQLString) },
        category: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const product = new Product({
          title: args.title,
          description: args.description,
          price: args.price,
          dateAdded: args.dateAdded,
          category: args.category,
        });

        return product.save();
      },
    },
    addTransaction: {
      type: ProductType,
      args: {
        dateAdded: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const trx = new TransactionDate({
          dateAdded: args.dateAdded,
        });

        return trx.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
