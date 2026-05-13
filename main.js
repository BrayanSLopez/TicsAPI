const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar conexión SQLite
const sequelize = require('./config/database');

// Importar modelo
require('./models/tics_model');

// Importar controlador
const controller = require('./controllers/tics_controller');

const app = express();

app.use(cors());
app.use(express.json());

/*
|--------------------------------------------------------------------------
| RUTAS
|--------------------------------------------------------------------------
*/

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API Tics funcionando correctamente'
    });
});

app.post('/api/lecturas', controller.crearLectura);

app.get('/api/lecturas', controller.obtenerLecturas);

app.get('/api/lecturas/ultimas', controller.obtenerUltimasLecturas);

/*
|--------------------------------------------------------------------------
| INICIAR SERVIDOR Y BASE DE DATOS
|--------------------------------------------------------------------------
*/

const PORT = process.env.PORT || 3000;

// Crear tablas automáticamente
sequelize.sync()
    .then(() => {
        console.log('SQLite conectado correctamente');
        console.log('Tablas sincronizadas');

        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error conectando SQLite:', error);
    });