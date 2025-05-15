-- Create the database
CREATE DATABASE gestion_academica;
\c gestion_academica;

-- Table profesores
CREATE TABLE IF NOT EXISTS profesores (
  id_profesor SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefono VARCHAR(15)
);

INSERT INTO profesores (nombre, apellido, email, telefono) VALUES
  ('Carlos', 'Ubeda', '123@web.com', '45674567'),
  ('Jose', 'Perez', '1234@web.com', '87658765'),
  ('Mario', 'Zapata', '555@web.com', '43258765');

-- Table estudiantes
CREATE TABLE IF NOT EXISTS estudiantes (
  id_estudiante SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  telefono VARCHAR(15)
);

INSERT INTO estudiantes (nombre, apellido, fecha_nacimiento, email, telefono) VALUES
  ('Daniel', 'inestroza', '1994-03-21', 'lavidaesunalenteja@web.com', '12345678'),
  ('maria', 'lopez', '2000-04-10', 'marialopez@web.com', '12341234'),
  ('Marcos', 'Agurcia', '2001-04-10', 'MarcosAG@web.com', '98766789');

-- Table cursos
CREATE TABLE IF NOT EXISTS cursos (
  id_curso SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  id_profesor INT,
  FOREIGN KEY (id_profesor) REFERENCES profesores(id_profesor)
);

INSERT INTO cursos (nombre, descripcion, id_profesor) VALUES
  ('POO', 'Programacion orientada a objetos', 1),
  ('enfermeria', 'enfermeria profesional', 2),
  ('Derecho', 'Derecho Penal', 3);

-- Table inscripciones
CREATE TABLE IF NOT EXISTS inscripciones (
  id_inscripcion SERIAL PRIMARY KEY,
  id_estudiante INT,
  id_curso INT,
  fecha_inscripcion DATE NOT NULL,
  FOREIGN KEY (id_estudiante) REFERENCES estudiantes(id_estudiante),
  FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);

INSERT INTO inscripciones (id_estudiante, id_curso, fecha_inscripcion) VALUES
  (1, 1, '2025-03-21'),
  (2, 2, '2025-04-10'),
  (3, 3, '2025-04-10');

-- Table calificaciones
CREATE TABLE IF NOT EXISTS calificaciones (
  id_calificacion SERIAL PRIMARY KEY,
  id_inscripcion INT,
  calificacion DECIMAL(5,2) NOT NULL,
  fecha_calificacion DATE NOT NULL,
  FOREIGN KEY (id_inscripcion) REFERENCES inscripciones(id_inscripcion)
);

INSERT INTO calificaciones (id_inscripcion, calificacion, fecha_calificacion) VALUES
  (1, 2.00, '2025-03-21'),
  (2, 3.00, '2025-04-10'),
  (3, 2.00, '2025-04-10');