import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load env variables
dotenv.config()

const app = express()

// Importar las rutas de los estudiantes
import CitasRoute from './routes/CitasRoute.js';
// Importar las rutas de los profesores
import ConsultasRoute from './routes/ConsultasRoute.js'
// Importar las rutas de los cursos
import MedicosRoute from './routes/MedicosRoute.js'
// Importar las rutas de calificaciones
import PascientesRoute from './routes/PascientesRoute.js'


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//Usar las rutas
app.use('/Citas', CitasRoute); 
app.use('/Consultas', consultasRoute); 
app.use('/Medicos', MedicosRoute); 
app.use('/Pascientes', PascientesRoute);
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
})