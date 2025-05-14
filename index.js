import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load env variables
dotenv.config()

const app = express()

// Importar las rutas de los estudiantes
import EstudiantesRoute from './routes/EstudiantesRoute.js';
// Importar las rutas de los profesores
import ProfesoresRoute from './routes/ProfesoresRoute.js'
// Importar las rutas de los cursos
import CursosRoute from './routes/CursosRoute.js';
// Importar las rutas de inscripciones
import InscripcionesRoute from './routes/InscripcionesRoute.js'
// Importar las rutas de calificaciones
import CalificacionesRoute from './routes/CalificacionesRoute.js'


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//Usar las rutas
app.use('/Estudiantes', EstudiantesRoute); 
app.use('/Profesores', ProfesoresRoute); 
app.use('/Cursos', CursosRoute); 
app.use('/Inscripciones', InscripcionesRoute); 
app.use('/Calificaciones', CalificacionesRoute);
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
})