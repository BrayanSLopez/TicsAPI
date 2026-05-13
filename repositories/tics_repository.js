const Lectura = require('../models/tics_model');

const guardarLectura = async (nombre_usuario, temperatura, humedad) => {
    return await Lectura.create({
        nombre_usuario,
        temperatura,
        humedad
    });
};

const obtenerLecturas = async () => {
    return await Lectura.findAll({
        order: [['fecha', 'DESC']]
    });
};

const obtenerUltimasLecturas = async () => {
    return await Lectura.findAll({
        order: [['fecha', 'DESC']],
        limit: 20
    });
};

module.exports = {
    guardarLectura,
    obtenerLecturas,
    obtenerUltimasLecturas
};