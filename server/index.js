const express = require('express');
require('dotenv').config();
const controller = require('./controller.js')
const axios = require('axios')


const path = require("path");
const app = express();

//middleware
//app.use(cors());
app.use(express.static('client/dist'));
app.use(express.json());

app.get(`/user/:address`, controller.user)
app.get('/getPatientNotes/:id', controller.getPatientNotes)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(Number(process.env.PORT),()=>{
  console.log(`listening on port ${process.env.PORT}`);
})
