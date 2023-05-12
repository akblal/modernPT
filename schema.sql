DROP TABLE IF EXISTS patient;
DROP TABLE IF EXISTS provider;

CREATE TABLE patient (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  birthdate TEXT NOT NULL,
  referringPhysician TEXT NOT NULL,
  diagnosis TEXT NOT NULL
);

CREATE TABLE provider (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

INSERT INTO patient (id, name, birthdate, referringPhysician, diagnosis) VALUES (0, 'Brandon Hsu', '8/22/1991', 'Dr. Bob', 'Left hip pain');
INSERT INTO patient (id, name, birthdate, referringPhysician, diagnosis) VALUES (1, 'Joanie Hsu', '3/22/1991', 'Dr. Joe', 'Left elbow pain');
INSERT INTO patient (id, name, birthdate, referringPhysician, diagnosis) VALUES (2, 'Andrew Hsu', '8/22/1991', 'Dr. Smith', 'low back pain');
INSERT INTO patient (id, name, birthdate, referringPhysician, diagnosis) VALUES (3, 'Darren Hsu', '8/22/1991', 'Dr. Greg', 'right shoulder pain');