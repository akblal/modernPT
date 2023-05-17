const model = require ('./model.js');

module.exports = {
  user(req, res) {
    const email = req.params.address;
    model.user(email)
    .then((result) => {
      console.log(result)
      res.send(result).status(200)
    })
    .catch(err => console.log(err, 'in controller--> user function'))
  }
}