# TicsAPI
API creada para la gestion de datos que se recibirá de un sensor de temperatura y humedad y para mostrarla en una dascboard online



# Query database tics
USE tics;

CREATE TABLE lecturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    nombre_usuario VARCHAR(100) NOT NULL,
    
    temperatura DECIMAL(5,2) NOT NULL,
    
    humedad DECIMAL(5,2) NOT NULL,
    
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
);