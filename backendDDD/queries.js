User.findOne({name:"Shota"})
.then(user => {
  Dog.findById(user.dogsWalked[1], (err, dog) => {
    if(err){
      console.error(err)
    } else {
      Walk.create({time: new Date('September 16, 2019 14:00:00'), walkers: [user], dog: dog}, (err, walk) => {
        if(err) {
          console.error(err)
        } else {
          console.log("Created A walk");
        }
      })
    }
  })
});

User.findOne({name: "Hiro"})
.then(user => {
  Dog.findOne({name: "Chewie"}, (err, dog) => {
    if(err){
      console.error(err);
    } else {
      user.dogsWalked.push(dog);
      user.save(err => {
        if(err){
          console.log(err)
        } else {
          console.log("user updated");
        }
      });
    }
  })
})
