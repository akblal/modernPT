const pool = require ('./pool.js');

module.exports = {
  user (email) {
    console.log(typeof email, 'in model')
    return new Promise ((resolve, reject) => {
      const queryArguments = [email];
      const queryStatement= `SELECT * FROM patient WHERE email = '${email}';`

      pool.query(queryStatement, (err, result) => {
        if (err) {
          return reject (err)
        }

        resolve(result)
      })
    })
  }
}