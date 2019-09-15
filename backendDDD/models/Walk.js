const mongoose = require("mongoose");

const Walk = new mongoose.Schema({
  time: Date,
  walkers: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}],
  dog: {type: mongoose.Schema.Types.ObjectId, ref: "Dog"}
})

module.exports = mongoose.model('walk', Walk);
