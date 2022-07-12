const mongoose = require("mongoose");

const TransactionDateSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  dateAdded: { type: String },
});

module.exports = mongoose.model("TransactionDate", TransactionDateSchema);
