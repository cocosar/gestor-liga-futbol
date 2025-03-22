# Pruebas Manuales: CRUD de Equipos

Este documento describe las pruebas manuales para verificar el funcionamiento correcto de las operaciones CRUD de equipos a través de la API REST.

## Requisitos Previos

- [Postman](https://www.postman.com/downloads/) o [Insomnia](https://insomnia.rest/download) instalado.
- Servidor backend ejecutándose en `http://localhost:5000`
- MongoDB corriendo localmente o en Atlas.
- Un usuario administrador o manager creado en la base de datos.

## Configuración de Pruebas

1. Antes de iniciar las pruebas, asegúrate de tener un token JWT válido para un usuario con rol de administrador o manager.
2. Para obtenerlo, inicia sesión con un administrador o manager usando el endpoint `/api/auth/login`.
3. Guarda el token JWT recibido para usarlo en las siguientes pruebas.

## Pruebas

### 1. Obtener Lista de Equipos

**Objetivo:** Verificar que se puede obtener un listado de equipos con filtros y paginación.

#### Petición básica:

```
GET http://localhost:5000/api/equipos
Headers:
  Authorization: Bearer <token_jwt>
```

#### Petición con paginación y filtros:

```
GET http://localhost:5000/api/equipos?page=1&limit=10&search=team&sortBy=nombre&sortOrder=asc&categoria=adulto&tipo=futbol&activo=true
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "equipos": [...],
    "totalEquipos": 10,
    "paginaActual": 1,
    "totalPaginas": 1,
    "limite": 10
  }
  ```

**Pruebas adicionales:**
- Intenta acceder sin un token JWT (debería devolver 401)
- Prueba diferentes combinaciones de filtros y verifica resultados

### 2. Obtener Equipo por ID

**Objetivo:** Verificar que se puede obtener la información de un equipo específico.

#### Petición:

```
GET http://localhost:5000/api/equipos/<id_equipo>
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "equipo": {
      "_id": "...",
      "nombre": "...",
      "descripcion": "...",
      "categoria": "...",
      "tipo": "...",
      "entrenador": { ... },
      "manager": { ... },
      "jugadores": [ ... ],
      "logo": "...",
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Intenta obtener un equipo que no existe (debería devolver 404)
- Intenta acceder sin un token JWT (debería devolver 401)

### 3. Crear Equipo

**Objetivo:** Verificar que un administrador o manager puede crear un nuevo equipo.

#### Petición:

```
POST http://localhost:5000/api/equipos
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "nombre": "Nuevo Equipo",
    "descripcion": "Descripción del equipo",
    "categoria": "adulto",
    "tipo": "futbol",
    "entrenador": "<id_entrenador>",
    "manager": "<id_manager>",
    "logo": "https://example.com/logo.png"
  }
```

**Resultados esperados:**
- Código 201 Created
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Equipo creado exitosamente",
    "equipo": {
      "_id": "...",
      "nombre": "Nuevo Equipo",
      "descripcion": "Descripción del equipo",
      "categoria": "adulto",
      "tipo": "futbol",
      "entrenador": { ... },
      "manager": { ... },
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Intenta crear un equipo sin un campo obligatorio como nombre o categoría (debería devolver 400)
- Intenta crear un equipo con una categoría o tipo inválido (debería devolver 400)
- Intenta crear un equipo como usuario regular (debería devolver 403)
- Intenta asignar un manager o entrenador inexistente (debería devolver 404)
- Intenta asignar como manager/entrenador a un usuario con rol no adecuado (debería devolver 400)

### 4. Actualizar Equipo

**Objetivo:** Verificar que se puede actualizar la información de un equipo existente.

#### Petición:

```
PUT http://localhost:5000/api/equipos/<id_equipo>
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "nombre": "Nombre Actualizado",
    "descripcion": "Descripción actualizada",
    "categoria": "juvenil",
    "entrenador": "<id_nuevo_entrenador>"
  }
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Equipo actualizado exitosamente",
    "equipo": {
      "_id": "...",
      "nombre": "Nombre Actualizado",
      "descripcion": "Descripción actualizada",
      "categoria": "juvenil",
      "entrenador": { ... },
      "manager": { ... },
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Intenta actualizar un equipo como usuario no administrador o no manager del equipo (debería devolver 403)
- Intenta actualizar con una categoría o tipo inválido (debería devolver 400)
- Intenta actualizar un equipo que no existe (debería devolver 404)
- Intenta como manager cambiar el estado "activo" del equipo (debería ignorar el cambio, solo admin puede hacerlo)

### 5. Añadir/Eliminar Jugadores

**Objetivo:** Verificar que se pueden añadir o eliminar jugadores de un equipo.

#### Petición para añadir jugadores:

```
PUT http://localhost:5000/api/equipos/<id_equipo>/jugadores
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "jugadores": ["<id_jugador1>", "<id_jugador2>"],
    "accion": "agregar"
  }
```

#### Petición para eliminar jugadores:

```
PUT http://localhost:5000/api/equipos/<id_equipo>/jugadores
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "jugadores": ["<id_jugador1>", "<id_jugador2>"],
    "accion": "eliminar"
  }
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Jugadores añadidos exitosamente", // o "Jugadores eliminados exitosamente"
    "equipo": {
      "_id": "...",
      "nombre": "...",
      "jugadores": [ ... ],
      // otros campos
    }
  }
  ```

**Pruebas adicionales:**
- Intenta modificar jugadores como usuario no autorizado (debería devolver 403)
- Intenta añadir jugadores no existentes (debería devolver 404)
- Intenta usar una acción inválida diferente de "agregar" o "eliminar" (debería devolver 400)
- Intenta añadir jugadores que ya están en el equipo (debería funcionar sin duplicados)
- Intenta eliminar jugadores que no están en el equipo (debería funcionar sin errores)

### 6. Eliminar Equipo

**Objetivo:** Verificar que un administrador puede eliminar un equipo.

#### Petición:

```
DELETE http://localhost:5000/api/equipos/<id_equipo>
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Equipo eliminado exitosamente"
  }
  ```

**Pruebas adicionales:**
- Intenta eliminar un equipo como usuario no administrador (debería devolver 403)
- Intenta eliminar un equipo que no existe (debería devolver 404)

## Verificación de Integridad

Después de realizar las pruebas, verifica la integridad del sistema:

1. Accede a la lista de equipos para asegurarte de que los cambios se reflejan correctamente.
2. Verifica que los usuarios asignados como entrenadores y managers se reflejen correctamente.
3. Comprueba que los jugadores añadidos o eliminados se actualizan correctamente en el equipo.

## Notas sobre Posibles Errores

- **400 Bad Request**: Indica un problema con los datos enviados (por ejemplo, categoría inválida, datos de validación que fallan).
- **401 Unauthorized**: Indica problemas de autenticación (token faltante o inválido).
- **403 Forbidden**: Indica problemas de permisos (el usuario no tiene el rol requerido).
- **404 Not Found**: Indica que el recurso solicitado (equipo, jugador, etc.) no existe.
- **500 Internal Server Error**: Indica un problema en el servidor. Revisa los logs para más detalles.

## Consejos para Debugging

1. Revisa los encabezados de la solicitud, especialmente el token JWT.
2. Verifica el formato del cuerpo de la solicitud, especialmente para POST y PUT.
3. Comprueba los logs del servidor para mensajes de error detallados.
4. Para problemas con los ID de MongoDB, asegúrate de que son strings hexadecimales de 24 caracteres.
5. Si hay problemas al añadir jugadores, verifica que los usuarios existan y estén activos. 