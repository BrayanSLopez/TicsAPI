const service = require('../services/tics_services');

const crearLectura = async (req, res) => {

    try {

        const nuevaLectura = await service.crearLectura(req.body);

        res.status(201).json({
            success: true,
            message: 'Lectura guardada correctamente',
            data: nuevaLectura
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const obtenerLecturas = async (req, res) => {

    try {

        const lecturas = await service.listarLecturas();

        res.status(200).json({
            success: true,
            data: lecturas
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const obtenerUltimasLecturas = async (req, res) => {

    try {

        const lecturas = await service.listarUltimasLecturas();

        res.status(200).json({
            success: true,
            data: lecturas
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    crearLectura,
    obtenerLecturas,
    obtenerUltimasLecturas
};