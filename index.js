const express = require("express");
const path = require("path");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");

const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(cors());

app.use(express.static("client/build"));
app.use("/", express.static(path.join(__dirname, "client/build")));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server Running on port ${port}`));
