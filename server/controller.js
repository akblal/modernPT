const model = require ('./model.js');

module.exports = {
  user(req, res) {
    const email = req.params.address;
    model.user(email)
    .then((result) => {
      res.send(result).status(200)
    })
    .catch(err => console.log(err, 'in controller--> get user function'))
  },
  getPatientNotes(req, res) {
    const id = req.params.id;
    model.getPatientNotes(id)
    .then((result) => {
      res.send(JSON.stringify(result.rows)).status(200)
    })
    .catch(err => console.log(err, 'in controller--> get patient notes function'))
  },
  getLastMessage(req, res) {
    const message_id = req.params.message_id;
    model.getLastMessage(message_id)
    .then((result) => {
      res.send(result)
      res.status(200)
    })
    .catch((err) => console.log(err, 'in controller--> get last message'))
  },
  saveChat(req, res) {
    const data = req.body;
    // console.log (data, 'in controller')
    model.saveChat(data)
    .then((result) => {
      res.status(201)
      // console.log(result, 'result in controller')
      res.send(result)
    })
    .catch((err) => console.log(err, 'in controller--> save chat'))
  },
  getChatHistory(req,res) {
    const noteID = req.params.id;
    model.getChatHistory(noteID)
    .then((result) => {
      // console.log(result, ' in controller hello')
      res.send(result)
      res.status(201)
    })
    .catch((err) => console.log (err, 'in controller --> get Chat history'))
  },
  editChat(req, res) {
    // console.log(req.body)
    const data = req.body;
    model.editChat(data)
    .then((result) => {
      res.send(result)
      res.status(200)
    })
    .catch((err) => console.log (err, 'in controller--> edit chat'))
  },
  reducedOptions(req, res) {
    const data = req.body;
    model.reducedOptions(data)
    .then((results) => {
      res.send(results)
      res.status(201)
    })
    .catch((err) => console.log(err, 'in controller --> reduce options'))
  }
}