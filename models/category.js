const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CatagorySchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  description: { type: String, maxLength: 70 },
});

CategorySchema.virtual("url").get(function() {
  return `/catalog/category/${this._id}`;
});

module.exports = mongoose.model("Category", CatagorySchema);