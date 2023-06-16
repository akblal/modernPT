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
app.get('/getLastMessage/:message_id', controller.getLastMessage)
app.get('/getChatHistory/:id', controller.getChatHistory)

// const request = require('request');
// var muscle = 'biceps';
// request.get({
//   url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
//   headers: {
//     'X-Api-Key': ''
//   },
//   offset: 1,
// }, function(error, response, body) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });

app.post('/saveChat', controller.saveChat)

app.put('/editChat', controller.editChat)
app.put('/reduceOptions', controller.reducedOptions)
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
