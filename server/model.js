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
        resolve(result)
      })
    })
  },
  saveChat(data) {
    return new Promise ((resolve, reject) => {
      const queryStatement= `INSERT INTO chat_with_therapist (chat_message, patient_id, therapist_id, note_id) VALUES ('${data.message}', ${data.patient_id}, ${data.therapist_id}, ${data.note_id}) RETURNING chat_id, chat_message, note_id;`
      pool.query (queryStatement, (err, result) => {
        if(err) {
          return reject (err)
        }
        resolve(result)
      })
    })
  },
  getChatHistory(id) {
    console.log (id, 'id in model')
    return new Promise ((resolve, reject) => {
      const queryStatement = `SELECT * FROM chat_with_therapist WHERE note_id = ${id};`
      pool.query(queryStatement, (err, result) => {
        if (err) {
          return reject(err)
        }
        //console.log(result, 'result in model')
        resolve(result)
      })
    })
  }
}