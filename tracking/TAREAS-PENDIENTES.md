# Tareas Pendientes

## Sprint 2: Gestión de Usuarios y Equipos (Semanas 3-4)

### Backend

#### Usuarios
- [ ] Implementar endpoints CRUD para usuarios
- [ ] Mejorar validación de datos
- [ ] Añadir funcionalidad para cambio de contraseña
- [ ] Implementar recuperación de contraseña (opcional)
- [ ] Crear pruebas para endpoints de usuario

#### Equipos
- [ ] Implementar modelo y controlador para equipos
- [ ] Crear endpoints CRUD para equipos
- [ ] Añadir validación de datos para equipos
- [ ] Implementar asignación de entrenadores a equipos
- [ ] Crear pruebas para endpoints de equipos

### Frontend

#### Redux
- [ ] Configurar Redux Toolkit
  - [ ] Instalar dependencias (redux, react-redux, @reduxjs/toolkit)
  - [ ] Crear archivo de configuración de store
  - [ ] Implementar provider en componente raíz
- [ ] Implementar slices para autenticación
  - [ ] Crear acciones para login, logout y registro
  - [ ] Implementar reducers para manejo de estado de autenticación
  - [ ] Configurar persistencia del token JWT en localStorage
- [ ] Implementar slices para usuarios
  - [ ] Crear acciones para gestión de usuarios (CRUD)
  - [ ] Implementar reducers para manejo del estado de usuarios
  - [ ] Crear selectores para acceso eficiente a datos de usuarios
- [ ] Implementar slices para equipos
  - [ ] Crear acciones para gestión de equipos (CRUD)
  - [ ] Implementar reducers para manejo del estado de equipos
  - [ ] Crear selectores para acceso eficiente a datos de equipos
- [ ] Crear middlewares personalizados
  - [ ] Middleware para manejo de errores de API
  - [ ] Middleware para logging de acciones (desarrollo)
- [ ] Implementar hooks personalizados para Redux
  - [ ] Crear useAppSelector y useAppDispatch tipados
  - [ ] Crear hooks para operaciones comunes (useAuth, useTeam, etc.)

#### Funcionalidades de usuario
- [ ] Crear página de perfil de usuario
- [ ] Implementar formulario para edición de perfil
- [ ] Añadir página de administración de usuarios (admin)
- [ ] Implementar lógica para gestión de roles

#### Gestión de equipos
- [ ] Crear página para listado de equipos
- [ ] Implementar formulario para creación/edición de equipos
- [ ] Crear página de detalle de equipo
- [ ] Implementar asignación de entrenadores a equipos
- [ ] Añadir funcionalidad para carga de logo/imagen de equipo

### DevOps
- [ ] Mejorar pipeline CI/CD
- [ ] Añadir análisis de cobertura de código
- [ ] Configurar despliegue automático a entorno de desarrollo

### Pruebas y Refactorización (Sprint Actual)
- [ ] Implementar pruebas unitarias para servicios de autenticación
- [ ] Implementar pruebas de componentes para formularios de login/registro
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