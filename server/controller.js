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

    console.log(id, 'in controller for getting patient notes')
    model.getPatientNotes(id)
    .then((result) => {
      res.send(JSON.stringify(result.rows)).status(200)
    })
    .catch(err => console.log(err, 'in controller--> get patient notes function'))
  }
}