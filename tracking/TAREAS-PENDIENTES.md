# Tareas Pendientes

## Sprint 2: Gestión de Usuarios y Equipos (Semanas 3-4)

### Backend

#### Usuarios
- [ ] Implementar endpoints para gestión de usuarios
  - [ ] Crear controlador para usuarios con métodos CRUD
  - [ ] Implementar validación de datos con middleware
  - [ ] Configurar rutas REST para usuarios
  - [ ] Implementar paginación y filtrado en listados
  - [ ] Añadir manejo de roles y permisos
- [ ] Mejorar validación de datos
- [ ] Añadir funcionalidad para cambio de contraseña
- [ ] Implementar recuperación de contraseña (opcional)
- [ ] Crear pruebas para endpoints de usuario

#### Equipos
- [ ] Desarrollar endpoints para equipos
  - [ ] Crear modelo de datos para equipos
  - [ ] Implementar controlador con métodos CRUD
  - [ ] Configurar rutas REST para equipos
  - [ ] Añadir relaciones con usuarios (entrenadores/manager)
  - [ ] Implementar paginación y filtrado
- [ ] Añadir validación de datos para equipos
- [ ] Implementar asignación de entrenadores a equipos
- [ ] Crear pruebas para endpoints de equipos

### Frontend

#### Redux
- [x] Configurar Redux Toolkit
  - [x] Instalar dependencias (redux, react-redux, @reduxjs/toolkit)
  - [x] Crear archivo de configuración de store
  - [x] Implementar provider en componente raíz
- [x] Implementar slices para autenticación
  - [x] Crear acciones para login, logout y registro
  - [x] Implementar reducers para manejo de estado de autenticación
  - [x] Configurar persistencia del token JWT en localStorage
- [x] Implementar funcionalidad UI de autenticación
  - [x] Actualizar AppHeader para mostrar botones de autenticación dinámicamente
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
  - [x] Crear hooks para operaciones comunes (useAuth, useUsers, useTeams)

#### Funcionalidades de usuario
- [ ] Crear página de administración de usuarios
  - [ ] Implementar tabla de listado con paginación y filtros
  - [ ] Añadir acciones de edición/eliminación en la tabla
  - [ ] Implementar modal de confirmación para eliminación
- [ ] Implementar formularios para creación/edición de usuarios
  - [ ] Crear formulario con validación de campos
  - [ ] Implementar manejo de errores de API
  - [ ] Añadir feedback visual durante operaciones (loading, success, error)
- [ ] Añadir página de perfil de usuario
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
- [ ] Implementar lógica para gestión de roles

#### Gestión de equipos
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

### DevOps
- [ ] Mejorar pipeline CI/CD
- [ ] Añadir análisis de cobertura de código
  - [ ] Configurar herramientas de medición de cobertura (Jest/Vitest)
  - [ ] Implementar pipeline para validar cobertura de pruebas antes de cada commit
  - [ ] Establecer umbrales mínimos de cobertura (80% para código crítico)
  - [ ] Generar informes de cobertura en el pipeline de CI/CD
- [ ] Configurar despliegue automático a entorno de desarrollo

### Pruebas y Refactorización
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
- [ ] Mejorar cobertura de pruebas en backend
  - [ ] Implementar tests para controladores
  - [ ] Crear tests para middleware
  - [ ] Añadir tests de integración para rutas principales
  - [ ] Implementar mocks para servicios externos
- [ ] Refactorizar código de autenticación para mejorar mantenibilidad
- [ ] Configurar análisis estático de código en GitHub Actions
- [ ] Documentar decisiones técnicas tomadas durante el sprint

## Backlog para Sprints Futuros

### Sprint 3: Gestión de Jugadores (Semanas 5-6)
- [ ] CRUD de jugadores
- [ ] Asignación de jugadores a equipos
- [ ] Perfil de jugador
- [ ] Gestión de fichajes

### Sprint 4: Calendario y Partidos (Semanas 7-8)
- [ ] Creación de calendario
- [ ] Gestión de partidos
- [ ] Asignación de equipos a partidos
- [ ] Visualización de calendario

### Sprint 5: Tabla de Posiciones (Semanas 9-10)
- [ ] Registro de resultados
- [ ] Cálculo de posiciones
- [ ] Visualización de tabla

## Tareas Prioritarias (Para implementar en próximos sprints)

### Fase 1: MVP
- [ ] **Alta**: Implementar sistema de autenticación con roles
- [ ] **Alta**: Crear CRUD de equipos
- [ ] **Alta**: Desarrollar gestión básica de jugadores
- [ ] **Media**: Implementar calendario de partidos
- [ ] **Media**: Desarrollar sistema de tabla de posiciones

### Fase 2: Funcionalidades Core
- [ ] **Alta**: Sistema de estadísticas por partido
- [ ] **Media**: Gestión de árbitros
- [ ] **Media**: Sistema de sanciones automáticas
- [ ] **Media**: Generador automático de calendario
- [ ] **Baja**: Dashboard administrativo básico

## Mejoras Técnicas

- [ ] Optimización de consultas MongoDB
- [ ] Implementar caché en lado cliente
- [ ] Mejorar sistema de logging
- [ ] Implementar pruebas automatizadas principales
- [ ] Configurar CI/CD básico

## Ideas para el Futuro

### Fase 3-5
- Implementar galería multimedia
- Sistema de notificaciones
- Integración de pagos
- Aplicación móvil básica
- Funcionalidades premium para ligas
- Multi-tenancy completo

## Bugs Conocidos

### Frontend
- Ninguno por el momento

### Backend
- Ninguno por el momento 