const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

const db = require("./config/database.js");
const Kites = require('./models/kites.js');

// use tools for parsing of JSON-body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//admin route 1: check database connection
app.get("/admin/check", (req, res) => {
  db.authenticate()
  .then(() => res.send("database connection succeeded"))
  .catch(err => console.log('Error: ' + err));
});

// admin route 2: initialize database (force: drop tables)
app.post('/admin/init', (req, res) => {
  db.sync({force: true})
  .then(() => res.send('database initialized succesfully'))
  .catch(err => console.log('Error: ' + err));
});


app.get('/', (req, res) => {
  res.send('De kite verzameling van Ralph!')
});

app.get('/kites', (req, res) => {
  console.log("endpoint /kites")
  Kites.findAll()
    .then(kites => res.json(kites))
    .catch(err => res.send(`error finding all kites: ${err}`));
});

//Body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log("POST endpoint /kites")
    const kite = req.body;
    kites.push(kite);
  
    res.send(`Kite ${kite.name} has been added succesfully!`);
});

// return kite with specified id
app.get('/kite/:id', (req, res) => {
  Kites.findByPk(req.params.id)
      .then(kite => res.json(kite))
      .catch(err => res.send(`error finding kite ${req.params.id}: ${err}`));
});

// post new kite
app.post('/kite', (req, res) => {
  const {name, brand, type, image, alt} = req.body;
  console.log(req.body);
  // TODO this check has te be implemented
  const exists = false;
  if (!exists) {
  Kites.create({
    name,
    brand,
    type,
    image,
    alt
  })
    .then(kite => res.json(kite))
    .catch(err => res.status(400).send(err));
  } else {
    console.log("Kite already exists");
  }
});

// delete kite with specified id
app.delete('/kite/:id', (req, res) => {
  console.log('deleting by id');
  Kites.findByPk(req.params.id)
    .then(kite => kite.destroy()
      .then (() => res.send(`deleted kite with id ${req.params.id}`))
      .catch(err => res.status(400).send(err)))
    .catch(err => res.status(404).send(`error finding kite ${req.params.id}: ${err}`));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});