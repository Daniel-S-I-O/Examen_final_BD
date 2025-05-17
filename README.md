# 📚 API Gestión para Consultorio Médico

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Una API RESTful moderna para Gestión para Consultorio Médico, construida con Node.js, Express y MySQL.

## 🚀 Características

- **Acceso Seguro a Base de Datos**: Utiliza variables de entorno para proteger credenciales sensibles
- **Agrupación de Conexiones**: Conexiones eficientes a la base de datos utilizando el pool de MySQL2
- **API RESTful**: Endpoints bien estructurados para la gestión de recursos de biblioteca
- **JavaScript Moderno**: Sintaxis ES6+ con import/export

## 🛠️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Daniel-S-I-O/Examen_final_BD.git
   cd api-biblioteca-bd-2025
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear un archivo `.env` en el directorio raíz con la siguiente estructura:
   ```
   DB_HOST=localhost
   DB_USER=tunombredeusuario
   DB_PASSWORD=tucontraseña
   DB_NAME=tubasededatos
   DB_PORT=3306
   PORT=3000
   ```

4. Iniciar el servidor:
   ```bash
   npm run dev
   ```

## 🔌 Endpoints de la API

### Endpoints por recurso

### 🧑‍🤝‍🧑 Pacientes (`/api/patients`)

- `GET /api/patients` → Listar todos los pacientes
- `GET /api/patients/:id` → Obtener un paciente por ID
- `POST /api/patients` → Crear nuevo paciente
- `PUT /api/patients/:id` → Actualizar paciente
- `DELETE /api/patients/:id` → Eliminar paciente

### 🧑‍⚕️ Médicos (`/api/doctors`)

- `GET /api/doctors` → Listar todos los médicos
- `GET /api/doctors/:id` → Obtener un médico por ID
- `POST /api/doctors` → Crear nuevo médico
- `PUT /api/doctors/:id` → Actualizar médico
- `DELETE /api/doctors/:id` → Eliminar médico

### 📆 Citas (`/api/appointments`)

- `GET /api/appointments` → Listar todas las citas
- `GET /api/appointments/:id` → Obtener una cita por ID
- `POST /api/appointments` → Crear nueva cita
- `PUT /api/appointments/:id` → Actualizar cita
- `DELETE /api/appointments/:id` → Eliminar cita

### 📝 Consultas Médicas (`/api/consultations`)

- `GET /api/consultations` → Listar todas las consultas
- `GET /api/consultations/:id` → Obtener una consulta por ID
- `POST /api/consultations` → Crear nueva consulta
- `PUT /api/consultations/:id` → Actualizar consulta
- `DELETE /api/consultations/:id` → Eliminar consulta


## 📦 Estructura del Proyecto

```
api-gestion academica-2025/
├── config.js                          # Configuración de conexión a la base de datos
├── index.js                           # Punto de entrada principal de la aplicación
├── .env                               # Variables de entorno (no incluido en git)
├── routes/                            # Rutas de la API 
│   └── estudiantesRoute.js                 # Rutas de libros
├── controllers/                       # Controladores de la API
│   └── estudiantesController.js            # Controladores de libros
├── db/                                # Consultas de la base de datos
│   └── librosQuery.js                 # Consultas de libros
└── package.json                       # Dependencias del proyecto
```

## 🔒 Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| DB_HOST  | Dirección del host de la base de datos |
| DB_USER  | Nombre de usuario de la base de datos |
| DB_PASSWORD | Contraseña de la base de datos |
| DB_NAME  | Nombre de la base de datos |
| DB_PORT  | Puerto de la base de datos |
| PORT     | Puerto de la aplicación |

## 📝 Licencia

[MIT](./LICENSE)

## 👥 Colaboradores

- Madeling - Trabajo inicial
- Carlos Andres Perez Ubeda - Ajustes adicionales

---

⭐️ ¡Dale una estrella a este repositorio si lo encuentras útil! 