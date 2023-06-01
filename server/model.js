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
      console.log(data, 'data')
      // if (data.comment_type.indexOf("'")) {
      //   console.log('has apostrophe')
      //   let index= data.comment_type.indexOf("'")
      //   let temp = data.comment_type.substring(0, index) + "'" + data.comment_type.substring(index)
      //   data.comment_type = temp;
      // }
      const queryStatement= `INSERT INTO chat_with_therapist (chat_message, patient_id, therapist_id, note_id, comment_type) VALUES ('${data.message}', ${data.patient_id}, ${data.therapist_id}, ${data.note_id}, '${data.comment_type}') RETURNING chat_id, chat_message, note_id, comment_type;`
      pool.query (queryStatement, (err, result) => {
        if(err) {
          console.log (err, 'inmodel')
          return reject (err)
        }
        console.log(result, 'in model')
        resolve(result)
      })
    })
  },
  getChatHistory(id) {
    // console.log (id, 'id in model')
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