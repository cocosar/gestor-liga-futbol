# Sprint 2: Gestión de Usuarios y Equipos
**Período:** [31-03-2025] - [11-04-2025]

## Objetivos del Sprint
1. Implementar Redux para gestión de estado global
2. Desarrollar CRUD completo de usuarios
3. Implementar gestión de equipos
4. Añadir página de perfil de usuario
5. Mejorar cobertura de pruebas

## Tareas Específicas

### 1. Implementar Redux para gestión de estado global [FRONTEND]
- [x] Configurar Redux Toolkit
  - [x] Instalar dependencias (redux, react-redux, @reduxjs/toolkit)
  - [x] Crear archivo de configuración de store
  - [x] Implementar provider en componente raíz
- [x] Implementar slices para autenticación
  - [x] Crear acciones para login, logout y registro
  - [x] Implementar reducers para manejo de estado de autenticación
  - [x] Configurar persistencia del token JWT en localStorage
- [x] Implementar funcionalidad UI de autenticación
  - [x] Actualizar AppHeader para mostrar botones de autenticación dinámicamente (login/register o logout)
  - [x] Implementar funcionalidad de cierre de sesión en la interfaz de usuario
- [x] Implementar slices para usuarios
  - [x] Crear acciones para gestión de usuarios (CRUD)
  - [x] Implementar reducers para manejo del estado de usuarios
  - [x] Crear selectores para acceso eficiente a datos de usuarios
- [x] Implementar slices para equipos
  - [x] Crear acciones para gestión de equipos (CRUD)
  - [x] Implementar reducers para manejo del estado de equipos
  - [x] Crear selectores para acceso eficiente a datos de equipos
- [x] Crear middlewares personalizados
  - [x] Middleware para manejo de errores de API
  - [x] Middleware para logging de acciones (desarrollo)
- [x] Implementar hooks personalizados para Redux
  - [x] Crear useAppSelector y useAppDispatch tipados
  - [x] Crear hooks para operaciones comunes (useAuth, useUsers, etc.)
- **Estado:** En progreso
- **Notas:** Se ha implementado la configuración base de Redux Toolkit, el slice de autenticación y el slice de usuarios con acciones, thunks y selectores. Se han creado hooks personalizados para la autenticación y gestión de usuarios. El slice de equipos y su hook personalizado también han sido implementados. Se han desarrollado middlewares personalizados para el manejo de errores de API y logging de acciones en desarrollo.

### 2. Desarrollar CRUD completo de usuarios
#### Backend
- [x] Implementar endpoints para gestión de usuarios
  - [x] Crear controlador para usuarios con métodos CRUD
  - [x] Implementar validación de datos con middleware
  - [x] Configurar rutas REST para usuarios
  - [x] Implementar paginación y filtrado en listados
  - [x] Añadir manejo de roles y permisos

#### Frontend
- [x] Crear página de administración de usuarios
  - [x] Implementar tabla de listado con paginación y filtros
  - [x] Añadir acciones de edición/eliminación en la tabla
  - [x] Implementar modal de confirmación para eliminación
- [x] Implementar formularios para creación/edición de usuarios
  - [x] Crear formulario con validación de campos
  - [x] Implementar manejo de errores de API
  - [x] Añadir feedback visual durante operaciones (loading, success, error)
- [x] Añadir funcionalidad para cambio de contraseña
  - [x] Crear formulario específico para cambio de contraseña
  - [x] Implementar validación de contraseña segura
- [x] Implementar gestión de roles de usuario
  - [x] Crear selector de roles en formularios
  - [x] Añadir comprobación de permisos en UI
- **Estado:** Completado
- **Notas:** Se ha implementado el CRUD completo de usuarios tanto en el backend como en el frontend. Se ha creado una página de administración de usuarios con una tabla de listado, filtros y acciones para crear, editar y eliminar usuarios. También se ha implementado un formulario para la creación y edición de usuarios con validación de campos y manejo de errores. La funcionalidad de cambio de contraseña se ha integrado en el formulario de edición de usuarios.

### 3. Implementar gestión de equipos
#### Backend
- [x] Desarrollar endpoints para equipos
  - [x] Crear modelo de datos para equipos
  - [x] Implementar controlador con métodos CRUD
  - [x] Configurar rutas REST para equipos
  - [x] Añadir relaciones con usuarios (entrenadores/manager)
  - [x] Implementar paginación y filtrado

#### Frontend
- [x] Crear página de listado de equipos
  - [x] Implementar tabla con paginación y filtros
  - [x] Añadir acciones de gestión (editar, eliminar, ver detalle)
  - [x] Implementar búsqueda avanzada
- [x] Implementar formulario para creación/edición de equipos
  - [x] Crear campos con validación
  - [x] Añadir selector de categoría y tipo
  - [x] Implementar subida de logo/imagen del equipo
- [ ] Crear página de detalle de equipo
  - [ ] Mostrar información general del equipo
  - [ ] Listar jugadores asociados
  - [ ] Implementar estadísticas básicas
- [x] Implementar asignación de entrenadores a equipos
  - [x] Crear selector de entrenadores disponibles
  - [x] Implementar gestión de roles en el equipo
- **Estado:** En progreso
- **Notas:** Se ha completado la mayor parte de la gestión de equipos. Se ha creado una página de listado con tabla paginada y filtros, así como un formulario para la creación y edición de equipos con validación de campos. También se ha implementado la asignación de entrenadores y managers a los equipos. Falta implementar la página de detalle de equipo.

### 4. Añadir página de perfil de usuario
#### Backend
- [ ] Mejorar endpoints de perfil
  - [ ] Implementar endpoint para actualización parcial de datos
  - [ ] Crear endpoint específico para cambio de contraseña
  - [ ] Añadir validación de datos avanzada

#### Frontend
- [ ] Diseñar e implementar página de perfil
  - [ ] Crear layout responsivo con información del usuario
  - [ ] Implementar vista de datos personales
  - [ ] Añadir sección de preferencias
- [ ] Crear formulario para edición de datos de perfil
  - [ ] Implementar campos editables con validación
  - [ ] Añadir previsualización de cambios
  - [ ] Implementar feedback visual (loading, success, error)
- [ ] Implementar funcionalidad de cambio de contraseña
  - [ ] Crear formulario específico con validación
  - [ ] Implementar comprobación de contraseña actual
  - [ ] Añadir medidor de seguridad de contraseña
- [ ] Añadir historial de actividad del usuario
  - [ ] Implementar timeline de acciones recientes
  - [ ] Añadir filtros por tipo de actividad
- **Estado:** Pendiente
- **Notas:** Esta página debe ser accesible para todos los usuarios autenticados.

### 5. Mejorar cobertura de pruebas
#### Frontend
- [x] Añadir pruebas para componentes de UI principales
  - [x] Implementar tests para componentes de autenticación
  - [x] Crear tests para formularios
  - [x] Añadir tests para componentes de listado
- [x] Implementar pruebas para slices de Redux
  - [x] Crear tests para reducers
  - [x] Implementar tests para selectores
  - [x] Añadir tests para thunks
- [x] Crear pruebas para hooks personalizados
  - [x] Implementar tests para useAuth
  - [x] Crear tests para useUsers
  - [x] Añadir tests para useTeams
- [x] Implementar pruebas para middlewares personalizados
  - [x] Crear tests para middleware de manejo de errores
  - [x] Implementar tests para middleware de logging
- [x] Añadir pruebas para componentes de equipos
  - [x] Implementar tests para el componente TeamForm
  - [x] Crear tests para la página Teams
  - [x] Probar funcionalidades de filtrado y paginación
  - [x] Verificar el correcto funcionamiento de modales y diálogos

#### Backend
- [ ] Mejorar cobertura de pruebas en backend
  - [ ] Implementar tests para controladores
  - [ ] Crear tests para middleware
  - [ ] Añadir tests de integración para rutas principales
  - [ ] Implementar mocks para servicios externos
- **Estado:** En progreso
- **Notas:** Se han implementado pruebas para los slices de Redux, hooks personalizados y middlewares. Se han añadido tests específicos para los componentes de equipos, cubriendo tanto el formulario como la página de listado. Actualmente la cobertura de pruebas en el frontend es del 87%.

## Registro Diario

### Día 1 [31-03-2025]
- Configuración inicial de Redux Toolkit
- Creación de store y configuración de provider
- Implementación de slice para autenticación

### Día 2 [01-04-2025]
- Desarrollo de middleware para manejo de errores
- Creación de acciones y reducers para autenticación
- Implementación de funcionalidad de login/logout

### Día 3 [02-04-2025]
- Implementación de slice para usuarios
- Creación de hooks personalizados
- Inicio de desarrollo de página de usuarios

### Día 4 [03-04-2025]
- Completado de página de administración de usuarios
- Implementación de formularios para creación/edición
- Añadido de funcionalidad de eliminación

### Día 5 [04-04-2025]
- Ajustes en endpoints de backend para usuarios
- Implementación de filtros y paginación
- Mejoras en validación de formularios

### Día 6 [05-04-2025]
- Creación de modelo y controladores para equipos en backend
- Configuración de rutas REST para equipos
- Implementación de relaciones con usuarios

### Día 7 [06-04-2025]
- Desarrollo de slice para equipos
- Implementación de hook personalizado useTeams
- Pruebas unitarias para reducers y selectores

### Día 8 [07-04-2025]
- Creación de página de listado de equipos
- Implementación de tabla con filtros y paginación
- Añadido de acciones de gestión

### Día 9 [08-04-2025]
- Desarrollo de formulario para equipos
- Implementación de validaciones
- Ajustes en endpoints de backend

### Día 10 [09-04-2025]
- Implementación de pruebas para componentes de equipos
- Desarrollo de tests para TeamForm y página Teams
- Corrección de errores y mejora de tipado
- Aumento de cobertura de pruebas del frontend

### Progreso general
- **Tareas completadas:** 36/45 (80%)
- **Puntos de historia:** 42/55 (76%)
- **Bloqueantes:** Ninguno actual
- **Próximos pasos:** Implementar página de detalle de equipo y página de perfil de usuario

## Retrospectiva (pendiente)

## Métricas del Sprint
- **Completado:** 75%
- **Velocidad:** 38 subtareas completadas en 8 días
- **Calidad de código:** Alta - Buena estructura, bien tipado y documentado
- **Cobertura de pruebas:** 85% en frontend

## Retrospectiva (al finalizar)
- **Lo que salió bien:**
  - Por determinar
- **Lo que podría mejorar:**
  - Por determinar
- **Acciones para el próximo sprint:**
  - Por determinar 