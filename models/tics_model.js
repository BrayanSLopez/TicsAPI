const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Lectura = sequelize.define('Lectura', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre_usuario: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    temperatura: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },

    humedad: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },

    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

}, {
    tableName: 'lecturas',
    timestamps: false
});

module.exports = Lectura;