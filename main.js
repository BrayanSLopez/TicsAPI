const express = require('express');
const cors = require('cors');
require('dotenv').config();

const controller = require('./controllers/tics_controller');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'API Tics funcionando correctamente'
    });
});

app.post('/api/lecturas', controller.crearLectura);

app.get('/api/lecturas', controller.obtenerLecturas);

app.get('/api/lecturas/ultimas', controller.obtenerUltimasLecturas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});