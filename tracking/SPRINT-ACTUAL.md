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
- [ ] Crear middlewares personalizados
  - [ ] Middleware para manejo de errores de API
  - [ ] Middleware para logging de acciones (desarrollo)
- [x] Implementar hooks personalizados para Redux
  - [x] Crear useAppSelector y useAppDispatch tipados
  - [x] Crear hooks para operaciones comunes (useAuth, useUsers, etc.)
- **Estado:** En progreso
- **Notas:** Se ha implementado la configuración base de Redux Toolkit, el slice de autenticación y el slice de usuarios con acciones, thunks y selectores. Se han creado hooks personalizados para la autenticación y gestión de usuarios. El slice de equipos y su hook personalizado también han sido implementados.

### 2. Desarrollar CRUD completo de usuarios
#### Backend
- [ ] Implementar endpoints para gestión de usuarios
  - [ ] Crear controlador para usuarios con métodos CRUD
  - [ ] Implementar validación de datos con middleware
  - [ ] Configurar rutas REST para usuarios
  - [ ] Implementar paginación y filtrado en listados
  - [ ] Añadir manejo de roles y permisos

#### Frontend
- [ ] Crear página de administración de usuarios
  - [ ] Implementar tabla de listado con paginación y filtros
  - [ ] Añadir acciones de edición/eliminación en la tabla
  - [ ] Implementar modal de confirmación para eliminación
- [ ] Implementar formularios para creación/edición de usuarios
  - [ ] Crear formulario con validación de campos
  - [ ] Implementar manejo de errores de API
  - [ ] Añadir feedback visual durante operaciones (loading, success, error)
- [ ] Añadir funcionalidad para cambio de contraseña
  - [ ] Crear formulario específico para cambio de contraseña
  - [ ] Implementar validación de contraseña segura
- [ ] Implementar gestión de roles de usuario
  - [ ] Crear selector de roles en formularios
  - [ ] Añadir comprobación de permisos en UI
- **Estado:** Pendiente
- **Notas:** Ya está implementado el slice de Redux para la gestión de estado de usuarios. El siguiente paso es desarrollar la interfaz de usuario y los endpoints en backend.

### 3. Implementar gestión de equipos
#### Backend
- [ ] Desarrollar endpoints para equipos
  - [ ] Crear modelo de datos para equipos
  - [ ] Implementar controlador con métodos CRUD
  - [ ] Configurar rutas REST para equipos
  - [ ] Añadir relaciones con usuarios (entrenadores/manager)
  - [ ] Implementar paginación y filtrado

#### Frontend
- [ ] Crear página de listado de equipos
  - [ ] Implementar tabla con paginación y filtros
  - [ ] Añadir acciones de gestión (editar, eliminar, ver detalle)
  - [ ] Implementar búsqueda avanzada
- [ ] Implementar formulario para creación/edición de equipos
  - [ ] Crear campos con validación
  - [ ] Añadir selector de categoría y tipo
  - [ ] Implementar subida de logo/imagen del equipo
- [ ] Crear página de detalle de equipo
  - [ ] Mostrar información general del equipo
  - [ ] Listar jugadores asociados
  - [ ] Implementar estadísticas básicas
- [ ] Implementar asignación de entrenadores a equipos
  - [ ] Crear selector de entrenadores disponibles
  - [ ] Implementar gestión de roles en el equipo
- **Estado:** Pendiente
- **Notas:** Utilizar los slices de Redux implementados para la gestión del estado. Ya está implementado el slice de Redux para la gestión de estado de equipos y el hook personalizado useTeams.

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

#### Backend
- [ ] Mejorar cobertura de pruebas en backend
  - [ ] Implementar tests para controladores
  - [ ] Crear tests para middleware
  - [ ] Añadir tests de integración para rutas principales
  - [ ] Implementar mocks para servicios externos
- **Estado:** En progreso
- **Notas:** Se han implementado pruebas para los slices de Redux y hooks personalizados. Actualmente la cobertura de pruebas en el frontend es del 80%.

## Registro Diario

### [31-03-2025]
- **Avances:**
  - Inicio oficial del Sprint 2
  - Análisis detallado de requisitos para implementación de Redux
  - Revisión del código existente para planificar la integración
- **Problemas encontrados:**
  - Ninguno por el momento
- **Plan para mañana:**
  - Instalar dependencias de Redux Toolkit
  - Crear estructura inicial del store
  - Implementar configuración base de Redux

### [01-04-2025]
- **Avances:**
  - Implementada la configuración base de Redux Toolkit [FRONTEND]
  - Creados los tipos compartidos para la autenticación [FRONTEND]
  - Implementado el slice de autenticación con acciones, reducers, thunks y selectores [FRONTEND]
  - Creado hook personalizado useAuth para facilitar el uso de Redux en componentes [FRONTEND]
  - Actualizado el componente raíz para incluir el Provider de Redux [FRONTEND]
- **Problemas encontrados:**
  - Algunos errores de linting que se han corregido
  - Problema al usar useAppSelector dentro de un callback en el hook personalizado (resuelto con un enfoque diferente)
- **Plan para mañana:**
  - Implementar slices para usuarios [FRONTEND]
  - Comenzar la implementación del CRUD de usuarios en el backend [BACKEND]

### [02-04-2025]
- **Avances:**
  - Implementado el slice completo de usuarios con Redux Toolkit [FRONTEND]
  - Creadas las acciones, reducers, thunks y selectores para el CRUD de usuarios [FRONTEND]
  - Desarrollado el servicio de API para usuarios con axios [FRONTEND]
  - Implementado hook personalizado useUsers para facilitar el uso del slice [FRONTEND]
- **Problemas encontrados:**
  - Algunos errores de linting en los thunks que se han corregido
- **Plan para mañana:**
  - Implementar slices para equipos [FRONTEND]
  - Comenzar la implementación de endpoints para usuarios en el backend [BACKEND]
  - Iniciar el desarrollo de la interfaz de gestión de usuarios [FRONTEND]

### [03-04-2025]
- **Avances:**
  - Implementadas pruebas automatizadas para el slice de usuarios [FRONTEND]
  - Creados tests para reducers, selectores y thunks del slice de usuarios [FRONTEND]
  - Implementadas pruebas para el hook personalizado useUsers [FRONTEND]
  - Mejorada la organización de tareas en el sprint para distinguir claramente entre frontend y backend
- **Problemas encontrados:**
  - Dificultades con las pruebas del hook useUsers por problemas con redux-thunk en el entorno de pruebas (resuelto)
  - Advertencias sobre selectores no memorizados en las pruebas (a resolver en próxima tarea)
- **Plan para mañana:**
  - Comenzar la implementación de slices para equipos [FRONTEND]
  - Implementar endpoints básicos para usuarios en el backend [BACKEND]

### [04-04-2025]
- **Avances:**
  - Implementado el slice completo de equipos con Redux Toolkit [FRONTEND]
  - Creados tipos compartidos para modelos de equipos [FRONTEND]
  - Desarrollado el servicio de API para equipos con axios [FRONTEND]
  - Implementadas acciones, reducers, thunks y selectores para equipos [FRONTEND]
  - Creado hook personalizado useTeams para facilitar el uso del slice [FRONTEND]
- **Problemas encontrados:**
  - Ninguno relevante, la implementación se realizó sin problemas siguiendo el patrón ya establecido
- **Plan para mañana:**
  - Comenzar la implementación de middlewares personalizados [FRONTEND]
  - Iniciar el desarrollo de la interfaz de gestión de equipos [FRONTEND]
  - Continuar con la implementación de endpoints para usuarios y equipos [BACKEND]

### [05-04-2025]
- **Avances:**
  - Implementadas pruebas automatizadas para el slice de equipos [FRONTEND]
  - Creados tests para reducers, selectores y thunks del slice de equipos [FRONTEND]
  - Implementadas pruebas para el hook personalizado useTeams [FRONTEND]
  - Mejorada la cobertura de tests del frontend, llegando al 80%
- **Problemas encontrados:**
  - Algunos problemas menores con la configuración de los tests que fueron resueltos
- **Plan para mañana:**
  - Implementar middlewares personalizados para Redux [FRONTEND]
  - Comenzar el desarrollo de la interfaz de gestión de equipos [FRONTEND]
  - Avanzar con la implementación de endpoints en el backend [BACKEND]

## Métricas del Sprint
- **Completado:** 40%
- **Velocidad:** 16 subtareas completadas en 5 días
- **Calidad de código:** Alta - Buena estructura, bien tipado y documentado
- **Cobertura de pruebas:** 80% en frontend

## Retrospectiva (al finalizar)
- **Lo que salió bien:**
  - Por determinar
- **Lo que podría mejorar:**
  - Por determinar
- **Acciones para el próximo sprint:**
  - Por determinar 