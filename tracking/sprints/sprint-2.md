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
- [x] Configurar Redux Toolkit
  - [x] Instalar dependencias (redux, react-redux, @reduxjs/toolkit)
  - [x] Crear archivo de configuración de store
  - [x] Implementar provider en componente raíz
- [x] Implementar slices para autenticación
  - [x] Crear acciones para login, logout y registro
  - [x] Implementar reducers para manejo de estado de autenticación
  - [x] Configurar persistencia del token JWT en localStorage
- [ ] Implementar funcionalidad UI de autenticación
  - [ ] Actualizar AppHeader para mostrar botones de autenticación dinámicamente (login/register o logout)
  - [ ] Implementar funcionalidad de cierre de sesión en la interfaz de usuario
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
- [x] Implementar hooks personalizados para Redux
  - [x] Crear useAppSelector y useAppDispatch tipados
  - [x] Crear hooks para operaciones comunes (useAuth, useTeam, etc.)
- **Estado:** En progreso
- **Notas:** Se ha implementado la configuración base de Redux Toolkit y el slice de autenticación con acciones, thunks y selectores. Se ha creado un hook personalizado para la autenticación.

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
  - Implementada la configuración base de Redux Toolkit
  - Creados los tipos compartidos para la autenticación
  - Implementado el slice de autenticación con acciones, reducers, thunks y selectores
  - Creado hook personalizado useAuth para facilitar el uso de Redux en componentes
  - Actualizado el componente raíz para incluir el Provider de Redux
- **Problemas encontrados:**
  - Algunos errores de linting que se han corregido
  - Problema al usar useAppSelector dentro de un callback en el hook personalizado (resuelto con un enfoque diferente)
- **Plan para mañana:**
  - Implementar slices para usuarios
  - Comenzar la implementación del CRUD de usuarios en el backend

## Métricas del Sprint
- **Completado:** 15%
- **Velocidad:** 3 subtareas completadas en 1 día
- **Calidad de código:** Alta - Buena estructura, bien tipado y documentado

## Retrospectiva (al finalizar)
- **Lo que salió bien:**
  - Por determinar
- **Lo que podría mejorar:**
  - Por determinar
- **Acciones para el próximo sprint:**
  - Por determinar 