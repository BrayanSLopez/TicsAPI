# TicsAPI
API creada para la gestión de datos que se recibirá de un sensor de temperatura y humedad y para mostrarla en una dashboard online.

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
