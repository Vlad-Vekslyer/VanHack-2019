const express = require("express")
const app = express();
const mongoose = require("mongoose");

const Dog = require("./models/Dog");
const User = require("./models/User");
const Walk = require("./models/Walk");
mongoose.connect('mongodb://localhost:27017/go_doggy', {useNewUrlParser: true});

User.findOne({name: "Vlad"}, (err, user) => {
  if(err){
    console.error(err)
  } else {
    Dog.findById(user.dogsWalked[1], (err, dog) => {
      if(err){
        console.error(err);
      } else {
        Walk.findOne({dog: dog.id}, (err, walk) => {
          if(err){
            console.error(err)
          } else {
            console.log("walk found")
            walk.walkers.push(user);
            walk.save((err) => {
              if(err){
                console.error(err)
              } else {
                console.log("Updated user");
              }
            })
          }
        })
      }
    })
  }
})

app.use(async function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/names', (req, res) => {
    const names = [
      {id: 1, name: 'Lui'},
      {id: 2, name: 'Tiger'},
      {id: 3, name: 'Max'},
    ]
  res.json(names)
})


const port = 5000
app.listen(port, () => console.log(`Server started on port ${port}`))
