const repository = require('../repositories/tics_repository');

const crearLectura = async (data) => {

    const {
        nombre_usuario,
        temperatura,
        humedad
    } = data;

    if (!nombre_usuario || temperatura == null || humedad == null) {
        throw new Error('Todos los campos son obligatorios');
    }

    if (isNaN(temperatura) || isNaN(humedad)) {
        throw new Error('Temperatura y humedad deben ser numéricos');
    }

    const result = await repository.guardarLectura(
        nombre_usuario,
        temperatura,
        humedad
    );

    return {
        id: result.insertId,
        nombre_usuario,
        temperatura,
        humedad
    };
};

const listarLecturas = async () => {

    return await repository.obtenerLecturas();
};

const listarUltimasLecturas = async () => {

    return await repository.obtenerUltimasLecturas();
};

module.exports = {
    crearLectura,
    listarLecturas,
    listarUltimasLecturas
};