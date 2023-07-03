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
      const queryStatement= `INSERT INTO chat_with_therapist (chat_message, patient_id, therapist_id, note_id, comment_type) VALUES ($$${data.message}$$, ${data.patient_id}, ${data.therapist_id}, ${data.note_id}, '${data.comment_type}') RETURNING chat_id, chat_message, note_id, comment_type;`
      pool.query (queryStatement, (err, result) => {
        if(err) {
          return reject (err)
        }
        resolve(result)
      })
    })
  },
  getChatHistory(id) {
    return new Promise ((resolve, reject) => {
      const queryStatement = `SELECT * FROM chat_with_therapist WHERE note_id = ${id} ORDER BY chat_id ASC;`
      pool.query(queryStatement, (err, result) => {
        if (err) {
          return reject(err)
        }
        resolve(result)
      })
    })
  },
  editChat(chat) {
    return new Promise((resolve, reject) => {
      const queryStatement= `UPDATE chat_with_therapist SET chat_message = $$${chat.message}$$ WHERE chat_id = ${chat.chat_id};`
      pool.query(queryStatement, (err, result) => {
        if (err) {
          return reject(err)
        }
        resolve(result)
      })
    })
  },
  reducedOptions(options) {
    console.log(options, 'options in model')
    return new Promise((resolve, reject) => {
      console.log(options)
      const queryStatement= `UPDATE patient_note SET chat_selection_type = '${options.selection_options}' WHERE id = ${options.note_id};`
      pool.query(queryStatement, (err, result) => {
        if (err) {
          return reject(err)
        }
        resolve(result)
      })
    })
  },
  getLatestHEP(data) {
    return new Promise ((resolve, reject) => {
      const queryStatement = `SELECT * FROM hep WHERE patient_id = ${data.patient_id} ORDER BY date DESC LIMIT 1;`
      pool.query(queryStatement, (err, result) => {
        if (err) {
          return reject (err)
        }
        resolve(result)
      })
    })
  },
  getLatestHEPBeforeDate(data) {
    return new Promise ((resolve, reject) => {
      const queryStatement = `SELECT * FROM hep WHERE patient_id = ${data.patient_id} AND date <= '${data.date}' ORDER BY hep_id DESC LIMIT 1;`
      pool.query(queryStatement, (err, result) => {
        if (err) {
          return reject (err)
        }
        resolve(result)
      })
    })
  },
  getHEPOnSelectedDate(data) {
    return new Promise((resolve, reject) => {
      const queryStatement= `SELECT exercises from hep WHERE date = '${data.date}';`
      pool.query(queryStatement, (err, result) => {
        if (err) {
          return reject(err)
        }
        resolve(result.rows)
      })
    })
  }
}