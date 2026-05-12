const db = require('../config/database');

const guardarLectura = async (nombre_usuario, temperatura, humedad) => {

    const query = `
        INSERT INTO lecturas
        (nombre_usuario, temperatura, humedad)
        VALUES (?, ?, ?)
    `;

    const [result] = await db.execute(query, [
        nombre_usuario,
        temperatura,
        humedad
    ]);

    return result;
};

const obtenerLecturas = async () => {

    const query = `
        SELECT *
        FROM lecturas
        ORDER BY fecha DESC
    `;

    const [rows] = await db.execute(query);

    return rows;
};

const obtenerUltimasLecturas = async () => {

    const query = `
        SELECT *
        FROM lecturas
        ORDER BY fecha DESC
        LIMIT 20
    `;

    const [rows] = await db.execute(query);

    return rows;
};

module.exports = {
    guardarLectura,
    obtenerLecturas,
    obtenerUltimasLecturas
};