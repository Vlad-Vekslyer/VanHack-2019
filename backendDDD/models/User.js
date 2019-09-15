const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  age: Number,
  dogsWalked: [{type: mongoose.Schema.Types.ObjectId, ref: "dog"}],
  profilePic: String
})

module.exports = mongoose.model('user', User);
