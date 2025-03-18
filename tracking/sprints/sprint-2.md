# Sprint 2: Gestión de Usuarios y Equipos
**Período:** [31-03-2025] - [11-04-2025]

## Objetivos del Sprint
1. Implementar Redux para gestión de estado global
2. Desarrollar CRUD completo de usuarios
3. Implementar gestión de equipos
4. Añadir página de perfil de usuario
5. Mejorar cobertura de pruebas

## Tareas Específicas

### 1. Implementar Redux para gestión de estado global
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
- **Estado:** Pendiente
- **Notas:** Prioridad alta. Esta tarea es fundamental para las demás funcionalidades del sprint.

### 2. Desarrollar CRUD completo de usuarios
- [ ] Implementar endpoints en backend para gestión de usuarios
- [ ] Crear página de administración de usuarios
- [ ] Implementar formularios para creación/edición de usuarios
- [ ] Añadir funcionalidad para cambio de contraseña
- [ ] Implementar gestión de roles de usuario
- **Estado:** Pendiente
- **Notas:** Depende de la implementación de Redux para la gestión de estado.

### 3. Implementar gestión de equipos
- [ ] Desarrollar endpoints en backend para equipos
- [ ] Crear página de listado de equipos
- [ ] Implementar formulario para creación/edición de equipos
- [ ] Crear página de detalle de equipo
- [ ] Implementar asignación de entrenadores a equipos
- **Estado:** Pendiente
- **Notas:** Utilizar los slices de Redux implementados para la gestión del estado.

### 4. Añadir página de perfil de usuario
- [ ] Diseñar e implementar página de perfil
- [ ] Crear formulario para edición de datos de perfil
- [ ] Implementar funcionalidad de cambio de contraseña
- [ ] Añadir historial de actividad del usuario
- **Estado:** Pendiente
- **Notas:** Esta página debe ser accesible para todos los usuarios autenticados.

### 5. Mejorar cobertura de pruebas
- [ ] Añadir pruebas para componentes de UI principales
- [ ] Implementar pruebas para slices de Redux
- [ ] Crear pruebas para hooks personalizados
- [ ] Mejorar cobertura de pruebas en backend
- **Estado:** Pendiente
- **Notas:** Objetivo: alcanzar al menos 70% de cobertura en el código frontend y backend.

## Registro Diario

### [31-03-2025]
- **Avances:**
  - Planificación detallada del sprint
  - Configuración inicial del entorno para Redux
- **Problemas encontrados:**
  - Ninguno por el momento
- **Plan para mañana:**
  - Comenzar implementación de Redux Toolkit
  - Configurar store inicial

## Métricas del Sprint
- **Completado:** 0%
- **Velocidad:** Por determinar
- **Calidad de código:** Por evaluar

## Retrospectiva (al finalizar)
- **Lo que salió bien:**
  - Por determinar
- **Lo que podría mejorar:**
  - Por determinar
- **Acciones para el próximo sprint:**
  - Por determinar 