const mongoose = require("mongoose");

const Walk = new mongoose.Schema({
  time: Date,
  walkers: [{type: mongoose.Schema.Types.ObjectId, ref:"user"}],
  dog: {type: mongoose.Schema.Types.ObjectId, ref: "dog"}
})

module.exports = mongoose.model('walk', Walk);
