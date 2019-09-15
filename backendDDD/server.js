const express = require("express")
const app = express();

app.use(function(req, res, next) {
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
app.listen(port, () => console.log(`server started on port ${port}`))