const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let detail = new Schema({
  Question: {
    type: String
  },
  Options: {
    type: Array
  }
});

module.exports = mongoose.model("detail", detail);