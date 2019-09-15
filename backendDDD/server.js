const express = require("express")
const app = express();
const mongoose = require("mongoose");

const Dog = require("./models/Dog");
const User = require("./models/User");
const Walk = require("./models/Walk");
mongoose.connect('mongodb://localhost:27017/go_doggy', {useNewUrlParser: true});

app.use(async function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/dogs', async (req, res) => {
  try {
    let dogs = await Dog.find({})
    res.json(dogs)
  } catch(e){
    res.send(e);
  }
});

app.get('/api/dogs/:id/schedule', async (req, res) => {
  try {
    let foundDog = await Dog.findById(req.params.id);
    let walks = await Walk.find({dog: foundDog.id});
    let responseObject = {
      dog: foundDog,
      walks: walks
    }
    res.json(responseObject);
  } catch(e){
    res.send(e);
  }
});

app.get('/api/users/:id/dogs', async (req, res) => {
  User.findById(req.params.id).populate('dogsWalked').exec((err, user) => {
    if(err){
      res.send(err)
    } else {
      res.json(user);
    }
  });
})

const port = 5000
app.listen(port, () => console.log(`Server started on port ${port}`))
