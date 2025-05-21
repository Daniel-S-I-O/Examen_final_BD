import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load env variables
dotenv.config()

const app = express()

// Importar las rutas de los estudiantes
import citasRoute from './routes/citasRoute.js';
// Importar las rutas de los profesores
import consultasRoute from './routes/consultasRoute.js'
// Importar las rutas de los cursos
import medicosRoute from './routes/medicosRoute.js'
// Importar las rutas de calificaciones
import pascientesRoute from './routes/pascientesRoute.js'


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//Usar las rutas
app.use('/citas', citasRoute); 
app.use('/consultas', consultasRoute); 
app.use('/medicos', medicosRoute); 
app.use('/pascientes', pascientesRoute);
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`)
})