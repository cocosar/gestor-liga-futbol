# Pruebas Manuales: CRUD de Usuarios

Este documento describe las pruebas manuales para verificar el funcionamiento correcto de las operaciones CRUD de usuarios a través de la API REST.

## Requisitos Previos

- [Postman](https://www.postman.com/downloads/) o [Insomnia](https://insomnia.rest/download) instalado.
- Servidor backend ejecutándose en `http://localhost:5000`
- MongoDB corriendo localmente o en Atlas.
- Un usuario administrador creado en la base de datos.

## Configuración de Pruebas

1. Antes de iniciar las pruebas, asegúrate de tener un token JWT válido para un usuario con rol de administrador.
2. Para obtenerlo, inicia sesión con un administrador usando el endpoint `/api/auth/login`.
3. Guarda el token JWT recibido para usarlo en las siguientes pruebas.

## Pruebas

### 1. Obtener Lista de Usuarios

**Objetivo:** Verificar que se puede obtener un listado de usuarios con filtros y paginación.

#### Petición básica:

```
GET http://localhost:5000/api/usuarios
Headers:
  Authorization: Bearer <token_jwt>
```

#### Petición con paginación y filtros:

```
GET http://localhost:5000/api/usuarios?page=1&limit=10&search=test&sortBy=nombre&sortOrder=asc&rol=admin&activo=true
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "usuarios": [...],
    "totalUsuarios": 10,
    "paginaActual": 1,
    "totalPaginas": 1,
    "limite": 10
  }
  ```

**Pruebas adicionales:**
- Intenta acceder sin un token JWT (debería devolver 401)
- Intenta acceder con un token que no tiene rol de administrador (debería devolver 403)
- Prueba diferentes combinaciones de filtros y verificar resultados

### 2. Obtener Usuario por ID

**Objetivo:** Verificar que se puede obtener la información de un usuario específico.

#### Petición:

```
GET http://localhost:5000/api/usuarios/<id_usuario>
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "usuario": {
      "_id": "...",
      "nombre": "...",
      "apellido": "...",
      "email": "...",
      "rol": "...",
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Intenta obtener un usuario que no existe (debería devolver 404)
- Como usuario regular, intenta obtener información de otro usuario (debería devolver 403)
- Como usuario regular, obtén tu propia información (debería funcionar)

### 3. Crear Usuario

**Objetivo:** Verificar que un administrador puede crear un nuevo usuario.

#### Petición:

```
POST http://localhost:5000/api/usuarios
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "nombre": "Nuevo",
    "apellido": "Usuario",
    "email": "nuevo@example.com",
    "password": "password123",
    "rol": "usuario",
    "activo": true
  }
```

**Resultados esperados:**
- Código 201 Created
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Usuario creado exitosamente",
    "usuario": {
      "_id": "...",
      "nombre": "Nuevo",
      "apellido": "Usuario",
      "email": "nuevo@example.com",
      "rol": "usuario",
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Intenta crear un usuario con un email ya existente (debería devolver 400)
- Intenta crear un usuario con un rol inválido (debería devolver 400)
- Como usuario no administrador, intenta crear un administrador (debería devolver 403)
- Omite campos obligatorios como nombre, apellido, email o password (debería devolver 400)

### 4. Actualizar Usuario

**Objetivo:** Verificar que se puede actualizar la información de un usuario existente.

#### Petición:

```
PUT http://localhost:5000/api/usuarios/<id_usuario>
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "nombre": "Nombre Actualizado",
    "apellido": "Apellido Actualizado",
    "email": "actualizado@example.com",
    "rol": "manager",
    "activo": true
  }
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Usuario actualizado exitosamente",
    "usuario": {
      "_id": "...",
      "nombre": "Nombre Actualizado",
      "apellido": "Apellido Actualizado",
      "email": "actualizado@example.com",
      "rol": "manager",
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Como usuario no administrador, intenta actualizar a otro usuario (debería devolver 403)
- Como usuario no administrador, actualiza tu propio perfil (debería funcionar)
- Como usuario no administrador, intenta cambiar tu rol (debería devolver 403)
- Como usuario regular, intenta desactivar tu cuenta (debería devolver 403)
- Como administrador, intenta quitarte a ti mismo los privilegios de administrador (debería devolver 403)
- Intenta actualizar con un email ya usado por otro usuario (debería devolver 400)

### 5. Cambiar Contraseña

**Objetivo:** Verificar que se puede cambiar la contraseña de un usuario.

#### Petición (como administrador):

```
PUT http://localhost:5000/api/usuarios/<id_usuario>/password
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "password": "nuevaContraseña123"
  }
```

#### Petición (como el propio usuario):

```
PUT http://localhost:5000/api/usuarios/<tu_id>/password
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "currentPassword": "contraseñaActual",
    "password": "nuevaContraseña123"
  }
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Contraseña actualizada exitosamente"
  }
  ```

**Pruebas adicionales:**
- Como usuario regular, intenta cambiar tu contraseña sin proporcionar la contraseña actual (debería devolver 400)
- Como usuario regular, intenta cambiar tu contraseña con una contraseña actual incorrecta (debería devolver 401)
- Como usuario regular, intenta cambiar la contraseña de otro usuario (debería devolver 403)

### 6. Eliminar Usuario

**Objetivo:** Verificar que un administrador puede eliminar un usuario.

#### Petición:

```
DELETE http://localhost:5000/api/usuarios/<id_usuario>
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Usuario eliminado exitosamente"
  }
  ```

**Pruebas adicionales:**
- Como administrador, intenta eliminarte a ti mismo (debería devolver 403)
- Como usuario regular, intenta eliminar un usuario (debería devolver 403)
- Intenta eliminar un usuario que no existe (debería devolver 404)

## Verificación de Integridad

Después de realizar las pruebas, verifica la integridad del sistema:

1. Accede a la lista de usuarios para asegurarte de que los cambios se reflejan correctamente.
2. Intenta iniciar sesión con un usuario eliminado (debería fallar).
3. Intenta iniciar sesión con las credenciales actualizadas (debería funcionar).
4. Verifica que un usuario desactivado no pueda iniciar sesión.

## Notas sobre Posibles Errores

- **400 Bad Request**: Indica un problema con los datos enviados (por ejemplo, email duplicado, rol inválido, datos de validación que fallan).
- **401 Unauthorized**: Indica problemas de autenticación (token faltante o inválido).
- **403 Forbidden**: Indica problemas de permisos (el usuario no tiene el rol requerido).
- **404 Not Found**: Indica que el recurso solicitado no existe.
- **500 Internal Server Error**: Indica un problema en el servidor. Revisa los logs para más detalles.

## Consejos para Debugging

1. Revisa los encabezados de la solicitud, especialmente el token JWT.
2. Verifica el formato del cuerpo de la solicitud, especialmente para POST y PUT.
3. Comprueba los logs del servidor para mensajes de error detallados.
4. Para problemas con ID de MongoDB, asegúrate de que son strings hexadecimales de 24 caracteres. 