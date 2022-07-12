const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: String },
  dateAdded: { type: String },
  category: { type: String },
});

module.exports = mongoose.model("Product", ProductSchema);
