# Pruebas Manuales - API de Jugadores

Este documento contiene ejemplos para probar manualmente los endpoints de la API de jugadores utilizando herramientas como Postman o Insomnia.

## Configuración previa

1. Asegúrate de tener el servidor backend en ejecución
2. Obtén un token de autenticación válido haciendo una solicitud a `/api/auth/login`
3. Usa ese token en el header `Authorization: Bearer <token>` para las peticiones que requieran autenticación

## 1. Obtener todos los jugadores

**Endpoint:** `GET /api/jugadores`

**Parámetros de consulta opcionales:**
```
?nombre=Juan
?apellido=Perez
?posicion=delantero
?equipo=64f7a3b2c32e5a8d97b1e2f0 (ID del equipo)
?activo=true
?page=1
?limit=10
```

**Respuesta exitosa (200 OK):**
```json
{
  "players": [
    {
      "_id": "64f7a3b2c32e5a8d97b1e2f1",
      "nombre": "Juan",
      "apellido": "Perez",
      "numeroIdentificacion": "A123456",
      "posicion": "delantero",
      "activo": true,
      "estadisticas": {
        "goles": 5,
        "asistencias": 3,
        "tarjetasAmarillas": 2,
        "tarjetasRojas": 0,
        "partidosJugados": 10,
        "minutos": 850
      },
      "equipo": {
        "_id": "64f7a3b2c32e5a8d97b1e2f0",
        "nombre": "Real Madrid",
        "categoria": "senior"
      },
      "createdAt": "2023-05-10T15:30:45.123Z",
      "updatedAt": "2023-05-15T18:20:30.456Z"
    }
    // ... más jugadores
  ],
  "pagination": {
    "totalPlayers": 25,
    "totalPages": 3,
    "currentPage": 1,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

## 2. Obtener un jugador por ID

**Endpoint:** `GET /api/jugadores/:id`

**Ejemplo:** `GET /api/jugadores/64f7a3b2c32e5a8d97b1e2f1`

**Respuesta exitosa (200 OK):**
```json
{
  "_id": "64f7a3b2c32e5a8d97b1e2f1",
  "nombre": "Juan",
  "apellido": "Perez",
  "fechaNacimiento": "1995-05-15T00:00:00.000Z",
  "fotoPerfil": "/profiles/juan-perez.jpg",
  "numeroIdentificacion": "A123456",
  "posicion": "delantero",
  "numeroCamiseta": 9,
  "equipo": {
    "_id": "64f7a3b2c32e5a8d97b1e2f0",
    "nombre": "Real Madrid",
    "categoria": "senior"
  },
  "equiposAnteriores": [
    {
      "_id": "64f7a3b2c32e5a8d97b1e2f2",
      "nombre": "Barcelona",
      "categoria": "senior"
    }
  ],
  "activo": true,
  "altura": 182,
  "peso": 78,
  "piePreferido": "derecho",
  "estadisticas": {
    "goles": 5,
    "asistencias": 3,
    "tarjetasAmarillas": 2,
    "tarjetasRojas": 0,
    "partidosJugados": 10,
    "minutos": 850
  },
  "createdAt": "2023-05-10T15:30:45.123Z",
  "updatedAt": "2023-05-15T18:20:30.456Z"
}
```

**Respuesta de error (404 Not Found):**
```json
{
  "message": "Jugador no encontrado"
}
```

## 3. Crear un nuevo jugador

**Endpoint:** `POST /api/jugadores`  
**Autenticación requerida:** Sí (admin, manager o coach)

**Cuerpo de la solicitud:**
```json
{
  "nombre": "Carlos",
  "apellido": "González",
  "fechaNacimiento": "1998-08-23",
  "numeroIdentificacion": "B789012",
  "posicion": "mediocampista",
  "numeroCamiseta": 8,
  "equipo": "64f7a3b2c32e5a8d97b1e2f0",
  "altura": 175,
  "peso": 70,
  "piePreferido": "izquierdo"
}
```

**Respuesta exitosa (201 Created):**
```json
{
  "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
  "nombre": "Carlos",
  "apellido": "González",
  "fechaNacimiento": "1998-08-23T00:00:00.000Z",
  "fotoPerfil": "/default-player.png",
  "numeroIdentificacion": "B789012",
  "posicion": "mediocampista",
  "numeroCamiseta": 8,
  "equipo": "64f7a3b2c32e5a8d97b1e2f0",
  "activo": true,
  "altura": 175,
  "peso": 70,
  "piePreferido": "izquierdo",
  "estadisticas": {
    "goles": 0,
    "asistencias": 0,
    "tarjetasAmarillas": 0,
    "tarjetasRojas": 0,
    "partidosJugados": 0,
    "minutos": 0
  },
  "createdAt": "2023-06-20T10:15:30.123Z",
  "updatedAt": "2023-06-20T10:15:30.123Z"
}
```

**Respuestas de error:**
- 400 Bad Request: Datos inválidos o faltantes
- 401 Unauthorized: Token no proporcionado o inválido
- 403 Forbidden: No tiene permisos para crear jugadores

## 4. Actualizar un jugador

**Endpoint:** `PUT /api/jugadores/:id`  
**Autenticación requerida:** Sí (admin, manager o coach)

**Ejemplo:** `PUT /api/jugadores/65a1b2c3d4e5f6g7h8i9j0k1`

**Cuerpo de la solicitud:**
```json
{
  "numeroCamiseta": 10,
  "altura": 176,
  "estadisticas": {
    "goles": 1,
    "asistencias": 2,
    "partidosJugados": 2,
    "minutos": 180
  }
}
```

**Respuesta exitosa (200 OK):**
```json
{
  "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
  "nombre": "Carlos",
  "apellido": "González",
  "fechaNacimiento": "1998-08-23T00:00:00.000Z",
  "fotoPerfil": "/default-player.png",
  "numeroIdentificacion": "B789012",
  "posicion": "mediocampista",
  "numeroCamiseta": 10,
  "equipo": {
    "_id": "64f7a3b2c32e5a8d97b1e2f0",
    "nombre": "Real Madrid",
    "categoria": "senior"
  },
  "activo": true,
  "altura": 176,
  "peso": 70,
  "piePreferido": "izquierdo",
  "estadisticas": {
    "goles": 1,
    "asistencias": 2,
    "tarjetasAmarillas": 0,
    "tarjetasRojas": 0,
    "partidosJugados": 2,
    "minutos": 180
  },
  "createdAt": "2023-06-20T10:15:30.123Z",
  "updatedAt": "2023-06-20T11:30:45.789Z"
}
```

## 5. Actualizar estadísticas de un jugador

**Endpoint:** `PATCH /api/jugadores/:id/estadisticas`  
**Autenticación requerida:** Sí (admin, manager o coach)

**Ejemplo:** `PATCH /api/jugadores/65a1b2c3d4e5f6g7h8i9j0k1/estadisticas`

**Cuerpo de la solicitud:**
```json
{
  "estadisticas": {
    "goles": 2,
    "asistencias": 3,
    "tarjetasAmarillas": 1,
    "partidosJugados": 3,
    "minutos": 270
  }
}
```

**Respuesta exitosa (200 OK):**
```json
{
  "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
  "nombre": "Carlos",
  "apellido": "González",
  "estadisticas": {
    "goles": 2,
    "asistencias": 3,
    "tarjetasAmarillas": 1,
    "tarjetasRojas": 0,
    "partidosJugados": 3,
    "minutos": 270
  },
  // ... resto de campos
}
```

## 6. Eliminar un jugador

**Endpoint:** `DELETE /api/jugadores/:id`  
**Autenticación requerida:** Sí (admin o manager)

**Ejemplo:** `DELETE /api/jugadores/65a1b2c3d4e5f6g7h8i9j0k1`

**Respuesta exitosa (200 OK):**
```json
{
  "message": "Jugador eliminado correctamente"
}
```

**Respuestas de error:**
- 400 Bad Request: ID de jugador inválido
- 401 Unauthorized: Token no proporcionado o inválido
- 403 Forbidden: No tiene permisos para eliminar jugadores
- 404 Not Found: Jugador no encontrado

## Notas adicionales

- La eliminación de jugadores es lógica (se establece `activo: false`), no física
- Los jugadores inactivos no aparecen en las consultas a menos que se especifique `?activo=false`
- Al cambiar un jugador de equipo, el equipo anterior se guarda en el historial automáticamente
- Las estadísticas se pueden actualizar tanto con el endpoint `PUT /api/jugadores/:id` como con el endpoint específico `PATCH /api/jugadores/:id/estadisticas` 

# Plan de Pruebas Manual para la Gestión de Jugadores

## Objetivos

- Validar la funcionalidad completa del módulo de gestión de jugadores
- Verificar la correcta integración con el backend 
- Comprobar que la interfaz de usuario funciona correctamente

## Casos de Prueba

### Caso 1: Acceso a la página de jugadores

1. Navegar a la página principal
2. Iniciar sesión como administrador
3. Acceder a la sección de jugadores
4. Verificar que se carga correctamente la tabla de jugadores

### Caso 2: Filtrado de jugadores

1. Probar filtro por nombre
2. Probar filtro por posición
3. Probar filtro por equipo
4. Probar filtro por estado (activo/todos)
5. Verificar que la paginación funciona correctamente

### Caso 3: Creación de jugador

1. Hacer clic en "Nuevo Jugador"
2. Rellenar el formulario con datos válidos
3. Guardar el formulario
4. Verificar que el jugador aparece en la tabla

### Caso 4: Edición de jugador

1. Seleccionar un jugador existente
2. Hacer clic en el botón de editar
3. Modificar algunos datos
4. Guardar los cambios
5. Verificar que los cambios se reflejan en la tabla

### Caso 5: Eliminación de jugador

1. Seleccionar un jugador existente
2. Hacer clic en el botón de eliminar
3. Confirmar la eliminación
4. Verificar que el jugador ya no aparece en la tabla