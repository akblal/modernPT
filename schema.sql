DROP TABLE IF EXISTS patient_note CASCADE;
DROP TABLE IF EXISTS patient CASCADE;
DROP TABLE IF EXISTS therapist CASCADE;


CREATE TABLE patient (
  id SERIAL PRIMARY KEY,
  patient_name TEXT NOT NULL,
  birthdate TEXT NOT NULL,
  referringPhysician TEXT NOT NULL,
  diagnosis TEXT NOT NULL,
  email TEXT NOT NULL
);

CREATE TABLE therapist (
  id SERIAL PRIMARY KEY,
  therapist_name TEXT NOT NULL,
  therapist_profile_pic TEXT NOT NULL
);

CREATE TABLE patient_note (
  id SERIAL PRIMARY KEY,
  date_written DATE DEFAULT NOW(),
  subjective TEXT NOT NULL,
  objective TEXT NOT NULL,
  assessment TEXT NOT NULL,
  treatment_provided TEXT NOT NULL,
  billing TEXT NOT NULL,
  patient_id INT NOT NULL,
  therapist_id INT NOT NULL,
  appointment_type VARCHAR (100) NOT NULL,
  CONSTRAINT fk_patient
    FOREIGN KEY(patient_id)
      REFERENCES patient(id),
  CONSTRAINT fk_therapist
    FOREIGN KEY (therapist_id)
      REFERENCES therapist(id)
);

INSERT INTO patient (patient_name, birthdate, referringPhysician, diagnosis, email) VALUES ('Sandy Hsu', '4/20/1991', 'Dr. Bob', 'Left hip pain', 'brandon@gmail.com');
INSERT INTO patient (patient_name, birthdate, referringPhysician, diagnosis, email) VALUES ('Joanie Hsu', '3/22/1991', 'Dr. Joe', 'Left elbow pain', 'joanie@gmail.com');
INSERT INTO patient (patient_name, birthdate, referringPhysician, diagnosis, email) VALUES ('Andrew Hsu', '5/27/1991', 'Dr. Smith', 'low back pain', 'andrew@gmail.com');
INSERT INTO patient (patient_name, birthdate, referringPhysician, diagnosis, email) VALUES ('Darren Hsu', '3/26/1991', 'Dr. Greg', 'right shoulder pain', 'darren@gmail.com');
INSERT INTO therapist (therapist_name, therapist_profile_pic) VALUES ('Brandon Hsu', '../../images/therapist_profile_pic/brandon_hsu.png');
INSERT INTO therapist (therapist_name, therapist_profile_pic) VALUES ('Erik Murata', '../../images/therapist_profile_pic/erik_murata.png');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective3', 'this is the objective3', 'this is the assessment3', 'this is the treatment provided3', 'this is the billing3', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective3', 'this is the objective3', 'this is the assessment3', 'this is the treatment provided3', 'this is the billing3', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective3', 'this is the objective3', 'this is the assessment3', 'this is the treatment provided3', 'this is the billing3', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective3', 'this is the objective3', 'this is the assessment3', 'this is the treatment provided3', 'this is the billing3', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective2', 'this is the objective2', 'this is the assessment2', 'this is the treatment provided2', 'this is the billing2', 1, 2, 'Flareup');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective3', 'this is the objective3', 'this is the assessment3', 'this is the treatment provided3', 'this is the billing3', 1, 1, 'Scheduled Visit');
INSERT INTO patient_note (subjective, objective, assessment, treatment_provided, billing, patient_id, therapist_id, appointment_type) VALUES ('this is the subjective', 'this is the objective', 'this is the assessment', 'this is the treatment provided', 'this is the billing', 1, 1, 'Scheduled Visit');


-- SELECT patient.id, patient.name, patient_note.*, therapist.*
--   FROM patient
--   JOIN patient_note
--   ON (patient_id = 1 AND patient_note.patient_id = patient.id)
--   JOIN therapist
--   ON (therapist.id = patient_note.therapist_id);