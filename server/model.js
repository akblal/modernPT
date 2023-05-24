const pool = require ('./pool.js');

module.exports = {
  user (email) {
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
  },
  getPatientNotes(id) {
    console.log(id, 'in model');
    return new Promise ((resolve, reject) => {
      const queryStatement= `SELECT patient.id, patient.patient_name, patient_note.*, therapist.therapist_name, therapist.therapist_profile_pic
      FROM patient
      JOIN patient_note
      ON (patient_id = ${id} AND patient_note.patient_id = patient.id)
      JOIN therapist
      ON (therapist.id = patient_note.therapist_id);`

      pool.query (queryStatement, (err, result) => {
        if(err) {
          return reject (err)
        }
        console.log(result, 'result in model')
        resolve(result)
      })
    })
  }
}