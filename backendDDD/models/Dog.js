const mongoose = require("mongoose");

let Dog = new mongoose.Schema({
  name: String,
  age: String,
  sex: Number,
  breed: String,
  album: [String],
  profileDesc: [String],
  profilePic: String,
  profileVid: String,
  profileVidThumbnail: String,
  availableTimes: [Date]
})

module.exports = mongoose.model('dog', Dog);
