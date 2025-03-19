# Middlewares de Redux

Este directorio contiene los middlewares personalizados para Redux utilizados en el proyecto.

## Estructura de Archivos

- `errorMiddleware.ts`: Middleware para el manejo centralizado de errores de API
- `loggerMiddleware.ts`: Middleware para logging de acciones durante el desarrollo
- `index.ts`: Archivo que exporta todos los middlewares desde un único punto

## Middlewares Implementados

### Error Middleware

El middleware de errores intercepta todas las acciones rechazadas (rejected) de los thunks de Redux Toolkit y proporciona un manejo centralizado de errores.

**Funcionalidades:**
- Registro de errores en consola
- Manejo específico según el código de estado HTTP:
  - 401: Error de autenticación (redirección al login)
  - 403: Error de permisos
  - 500+: Errores de servidor

**Implementación futura:**
- Despachar acciones para mostrar mensajes de error en la interfaz de usuario
- Integración con un servicio de monitoreo de errores

### Logger Middleware

El middleware de logging registra todas las acciones de Redux y los cambios de estado, facilitando la depuración durante el desarrollo.

**Funcionalidades:**
- Solo funciona en entorno de desarrollo (`import.meta.env.MODE !== 'production'`)
- Muestra en consola:
  - La acción despachada
  - El estado anterior
  - El estado posterior
- Coloriza diferentes tipos de acciones:
  - Acciones pending: Azul
  - Acciones fulfilled: Verde
  - Acciones rejected: Rojo

## Cómo Probar Manualmente

### Probar el Logger Middleware

El middleware de logging está diseñado para ser utilizado durante el desarrollo. Para probarlo:

1. Asegúrate de estar en entorno de desarrollo (`import.meta.env.MODE !== 'production'`)
2. Abre la consola del navegador (F12 > pestaña Console)
3. Realiza alguna acción en la aplicación que despache una acción de Redux:
   - Iniciar sesión/cerrar sesión
   - Cargar una lista de usuarios o equipos
   - Crear/editar/eliminar usuarios o equipos

Deberías ver en la consola grupos de mensajes coloreados que muestran:
- La acción despachada (en azul para pending, verde para fulfilled, rojo para rejected)
- El estado anterior (en gris)
- El estado después de la acción (en verde)

### Probar el Error Middleware

Para probar el middleware de manejo de errores:

1. Abre la consola del navegador (F12 > pestaña Console)
2. Provoca un error intencionalmente:
   - Intenta acceder a un recurso protegido sin autenticación (error 401)
   - Intenta realizar una acción para la que no tienes permisos (error 403)
   - Configura temporalmente una URL de API incorrecta para provocar un error de servidor (error 500)

Deberías ver en la consola:
- Mensajes de error detallados
- Mensajes específicos según el código de error (401, 403, 500, etc.)
- En una implementación futura, estos errores también mostrarían notificaciones en la interfaz

## Tests Automatizados

Los middlewares tienen pruebas automatizadas que verifican su correcto funcionamiento:
- `src/store/__tests__/middleware/errorMiddleware.test.ts`
- `src/store/__tests__/middleware/loggerMiddleware.test.ts`
- `src/store/__tests__/middleware/index.test.ts`

Para ejecutar las pruebas:
```bash
npm test -- middleware
``` 