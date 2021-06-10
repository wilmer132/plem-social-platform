const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let User = new Schema ({
  name: String,
  age: Number,
});

module.exports = mongoose.model('User', User);