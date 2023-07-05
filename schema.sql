 DROP TABLE IF EXISTS patient_note CASCADE;

-- DROP TABLE IF EXISTS patient CASCADE;
-- DROP TABLE IF EXISTS therapist CASCADE;
DROP TABLE IF EXISTS chat_with_therapist CASCADE;
DROP TABLE IF EXISTS hep CASCADE;



-- CREATE TABLE patient (
--   id SERIAL PRIMARY KEY,
--   patient_name TEXT NOT NULL,
--   birthdate TEXT NOT NULL,
--   referringPhysician TEXT NOT NULL,
--   diagnosis TEXT NOT NULL,
--   email TEXT NOT NULL
-- );

-- CREATE TABLE therapist (
--   id SERIAL PRIMARY KEY,
--   therapist_name TEXT NOT NULL,
--   therapist_profile_pic TEXT NOT NULL
-- );

CREATE TABLE patient_note (
  id SERIAL PRIMARY KEY,
  date_written DATE DEFAULT NOW(),
  subjective TEXT NOT NULL,
  objective TEXT NOT NULL,
  assessment TEXT NOT NULL,
  treatment_provided TEXT NOT NULL,
  hep_update json NOT NULL,
  billing TEXT NOT NULL,
  patient_id INT NOT NULL,
  therapist_id INT NOT NULL,
  appointment_type VARCHAR (100) NOT NULL,
  chat_selection_type json,
  CONSTRAINT fk_patient
    FOREIGN KEY(patient_id)
      REFERENCES patient(id),
  CONSTRAINT fk_therapist
    FOREIGN KEY (therapist_id)
      REFERENCES therapist(id)
);

CREATE TABLE chat_with_therapist(
  chat_id SERIAL PRIMARY KEY,
  -- date_written DATE DEFAULT NOW(),
  chat_message TEXT NOT NULL,
  patient_id INT NOT NULL,
  therapist_id INT NOT NULL,
  note_id INT NOT NULL,
  comment_type TEXT NOT NULL,
  CONSTRAINT fk_patient
    FOREIGN KEY(patient_id)
      REFERENCES patient(id),
  CONSTRAINT fk_therapist
    FOREIGN KEY (therapist_id)
      REFERENCES therapist(id)
);

CREATE TABLE hep (
  hep_id  SERIAL PRIMARY KEY,
  patient_id INT NOT NULL,
  date TEXT NOT NULL,
  exercises json NOT NULL,
  completed boolean NOT NULL
);



-- INSERT INTO patient (patient_name, birthdate, referringPhysician, diagnosis, email) VALUES ('Sandy Hsu', '4/20/1991', 'Dr. Bob', 'Left hip pain', 'brandon@gmail.com');
-- INSERT INTO patient (patient_name, birthdate, referringPhysician, diagnosis, email) VALUES ('Joanie Hsu', '3/22/1991', 'Dr. Joe', 'Right knee pain', 'joanie@gmail.com');
-- INSERT INTO patient (patient_name, birthdate, referringPhysician, diagnosis, email) VALUES ('Andrew Hsu', '5/27/1991', 'Dr. Smith', 'low back pain', 'andrew@gmail.com');
-- INSERT INTO patient (patient_name, birthdate, referringPhysician, diagnosis, email) VALUES ('Darren Hsu', '3/26/1991', 'Dr. Greg', 'right shoulder pain', 'darren@gmail.com');
-- INSERT INTO therapist (therapist_name, therapist_profile_pic) VALUES ('Brandon Hsu', '../../images/therapist_profile_pic/brandon_hsu.png');
-- INSERT INTO therapist (therapist_name, therapist_profile_pic) VALUES ('Erik Murata', '../../images/therapist_profile_pic/erik_murata.png');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('Joanie reports that she continues to have R knee pain, although the pain has decreased when she is going up and down stairs. Down hurts worse than up. Describes the pain as dull in the R ant lat compartment. Was sharper a couple weeks ago. She has been working on the HEP on a daily basis without symptoms.', 'this is the objective', 'Joanie is responding well to progressive loading of the knee joint. Introduced SL stsbilization exercises today and pt was able to perform cpt morgan and dynamic lunging without limitation. Required VC to maintain neutral LE posture, but was able to quickly adjust without visual or mirror cues. Continue to progress as appropriate.', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective3', 'this is the objective3', 'this is the assessment3', 'this is the treatment provided3', 'this is the billing3', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective3', 'this is the objective3', 'this is the assessment3', 'this is the treatment provided3', 'this is the billing3', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective3', 'this is the objective3', 'this is the assessment3', 'this is the treatment provided3', 'this is the billing3', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective3', 'this is the objective3', 'this is the assessment3', 'this is the treatment provided3', 'this is the billing3', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective3', 'this is the objective3', 'this is the assessment3', 'this is the treatment provided3', 'this is the billing3', 1, 1, 'Scheduled Visit');
-- INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type, chat_selection_type, hep_update) VALUES ('Joanie reports that she continues to have R knee pain, although the pain has decreased when she is going up and down stairs. Down hurts worse than up. Describes the pain as dull in the R ant lat compartment. Was sharper a couple weeks ago. She has been working on the HEP on a daily basis without symptoms.', 'this is the objective', 'Joanie is responding well to progressive loading of the knee joint. Introduced SL stsbilization exercises today and pt was able to perform cpt morgan and dynamic lunging without limitation. Required VC to maintain neutral LE posture, but was able to quickly adjust without visual or mirror cues. Continue to progress as appropriate.', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit', '[
    {
      "value": "",
      "title": "Select"
    },
    {
      "value": "Visit",
      "title": "Visit"
    },
    {
      "value": "Flare Up",
      "title": "Flare Up"
    },
    {
      "value": "Change in Goal",
      "title": "Change in Goal"
    },
    {
      "value": "HEP",
      "title": "HEP"
    },
    {
      "value": "Other",
      "title": "Other"
    }
  ]',
  '[{
      "name": "Incline Hammer Curls",
      "muscle": "biceps",
      "reps": 12,
      "sets": 3,
      "hold": "",
      "video": "video",
      "description": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.",
      "status": "added",
      "date": "2023-02-01"
    },
    {
      "name": "Leg Press",
      "muscle": "quads",
      "reps": 12,
      "sets": 3,
      "hold": "",
      "video": "video",
      "description": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.",
      "status": "added",
      "date": "2023-02-01"
    },
    {
      "name": "Captain Morgan",
      "muscle": "glutes",
      "reps": 12,
      "sets": 3,
      "hold": "30 seconds",
      "video": "video",
      "description": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.",
      "status": "added",
      "date": "2023-02-01"
    }]'
  );
  INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type, chat_selection_type, hep_update) VALUES ( 'this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup', '[
    {
      "value": "",
      "title": "Select"
    },
    {
      "value": "Visit",
      "title": "Visit"
    },
    {
      "value": "Flare Up",
      "title": "Flare Up"
    },
    {
      "value": "Change in Goal",
      "title": "Change in Goal"
    },
    {
      "value": "HEP",
      "title": "HEP"
    },
    {
      "value": "Other",
      "title": "Other"
    }
  ]',
  '[{
      "name": "Incline Hammer Curls",
      "muscle": "biceps",
      "reps": 12,
      "sets": 3,
      "hold": "",
      "video": "video",
      "description": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.",
      "status": "removed",
      "date": "2023-12-01"
    },
    {
      "name": "Leg Press",
      "muscle": "quads",
      "reps": 12,
      "sets": 3,
      "hold": "",
      "video": "video",
      "description": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.",
      "status": "added",
      "date": "2023-12-01"
    },
    {
      "name": "Captain Morgan",
      "muscle": "glutes",
      "reps": 12,
      "sets": 3,
      "hold": "10 sec",
      "video": "video",
      "description": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.",
      "status": "added",
      "date": "2023-12-01"
    }]');

INSERT INTO hep (patient_id, date, exercises, completed) VALUES (1, '2023-06-30',
'
  [{
      "name": "Incline Hammer Curls",
      "muscle": "biceps",
      "reps": 12,
      "sets": 3,
      "hold": "",
      "video": "video",
      "description": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
    },
    {
      "name": "Leg Press",
      "muscle": "quads",
      "reps": 12,
      "sets": 3,
      "hold": "",
      "video": "video",
      "description": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
    },
    {
      "name": "Captain Morgan",
      "muscle": "glutes",
      "reps": 12,
      "sets": 3,
      "hold": "10 sec",
      "video": "video",
      "description": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
    }

  ]',
  false
);

INSERT INTO hep (patient_id, date, exercises, completed) VALUES (1, '2023-07-01','[{"name": "leg press"}]',false);
INSERT INTO hep (patient_id, date, exercises, completed) VALUES (1, '2023-07-02',
'[
  {
    "name": "tricep push down"
  }
  ]',
  false
);
INSERT INTO hep (patient_id, date, exercises, completed) VALUES (1, '2023-07-03',
'[
  {
    "name": "RFESS"
  }
  ]',
  false
);


-- INSERT INTO chat_with_therapist (chat_message, patient_id, therapist_id) VALUES ('testing', 1, 1);

-- INSERT INTO chat_with_therapist (chat_message, patient_id, therapist_id) VALUES ('testing2', 1, 1);