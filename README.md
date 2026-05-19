# TicsAPI
API creada para la gestión de datos que se recibirá de un sensor de temperatura y humedad y para mostrarla en una dashboard online.

## Construcción y arquitectura

- Lenguaje: JavaScript (Node.js)
- Framework: Express 5
- ORM: Sequelize
- Base de datos: SQLite para almacenamiento local
- Gestión de variables de entorno: dotenv
- CORS habilitado a través de `cors`
- Ejecución:
  - `npm start` para producción
  - `npm run dev` para desarrollo con `nodemon`

### Arquitectura del proyecto

- `main.js`: punto de entrada de la aplicación, configura el servidor y monta las rutas.
- `config/database.js`: configuración de la conexión a la base de datos y la instancia de Sequelize.
- `models/tics_model.js`: definición del modelo de datos para las lecturas de temperatura y humedad.
- `repositories/tics_repository.js`: capa de acceso a datos, encapsula consultas y operaciones sobre la base de datos.
- `services/tics_service.js`: lógica de negocio, validación y procesamiento de los datos antes de persistir o consultar.
- `controllers/tics_controller.js`: recibe las solicitudes HTTP, llama al servicio correspondiente y devuelve la respuesta.

### Comunicación entre capas

- El cliente envía solicitudes HTTP a los endpoints definidos en `main.js`.
- El router/recurso en `main.js` delega el request al controlador `tics_controller.js`.
- El controlador usa `tics_service.js` para aplicar reglas de negocio y validar los datos.
- El servicio se apoya en `tics_repository.js` para leer o escribir datos en la base de datos.
- `tics_repository.js` utiliza `models/tics_model.js` y Sequelize para mapear la información a la base de datos.
- La respuesta viaja de vuelta desde la capa de datos hacia el servicio, luego al controlador y finalmente al cliente.

### Flujo de petición típico

1. `POST /api/lecturas` recibe JSON con `nombre_usuario`, `temperatura` y `humedad`.
2. El controlador valida la petición y la envía al servicio.
3. El servicio prepara la entidad y manda guardar en el repositorio.
4. El repositorio ejecuta la operación en SQLite usando Sequelize.
5. Se devuelve un JSON con el registro creado y `success: true`.

### Consideraciones técnicas

- Asegúrate de que `.env` contenga `PORT=3000` para el puerto del servidor.
- La base de datos local se guarda en `database.sqlite` por defecto.
- Si añades nuevas entidades, sigue el patrón `model -> repository -> service -> controller`.
- Para depuración activa usa `npm run dev`.

## Configuración
- Puerto por defecto: `3000`
- Base de datos: `SQLite`
- Archivo de almacenamiento: `database.sqlite`

## Endpoints válidos

### 1) Obtener todas las lecturas
- Método: `GET`
- URL: `http://localhost:3000/api/lecturas`

#### Respuesta esperada
- Status: `200`
- Cuerpo: JSON con todas las lecturas ordenadas por fecha descendente.

### 2) Obtener las últimas lecturas
- Método: `GET`
- URL: `http://localhost:3000/api/lecturas/ultimas`

#### Respuesta esperada
- Status: `200`
- Cuerpo: JSON con las últimas 20 lecturas ordenadas por fecha descendente.

### 3) Crear una nueva lectura
- Método: `POST`
- URL: `http://localhost:3000/api/lecturas`
- Headers:
  - `Content-Type: application/json`

#### Body válido (JSON)
```json
{
  "nombre_usuario": "usuario_prueba",
  "temperatura": 23.75,
  "humedad": 55.20
}
```

#### Ejemplo alternativo
```json
{
  "nombre_usuario": "sensor_oficina",
  "temperatura": 29.40,
  "humedad": 42.10
}
```

#### Respuesta esperada
- Status: `201`
- Cuerpo: JSON con los datos guardados y el `id` generado.

## Pruebas con Postman
1) Abre Postman.
2) Crea una request `POST` a `http://localhost:3000/api/lecturas`.
3) Selecciona `Body > raw > JSON`.
4) Copia el ejemplo de JSON de prueba.
5) Envía la request y verifica que el servidor responda con `success: true`.
6) Luego prueba las requests `GET` a `/api/lecturas` y `/api/lecturas/ultimas`.

## Notas
- Si el servidor está en otro puerto, reemplaza `3000` por el puerto correspondiente.
- El endpoint `POST /api/lecturas` requiere los campos `nombre_usuario`, `temperatura` y `humedad`.
- `temperatura` y `humedad` deben ser valores numéricos.
