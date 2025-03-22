# Sprint 3: Gestión de Jugadores
**Período:** [14-04-2025] - [25-04-2025]

## Objetivos del Sprint
1. Implementar CRUD completo de jugadores
2. Desarrollar sistema de asignación de jugadores a equipos
3. Crear perfil de jugador con estadísticas básicas
4. Implementar gestión de fichajes
5. Mejorar la documentación de API

## Tareas Específicas

### 1. Implementar CRUD completo de jugadores
#### Backend
- [x] Desarrollar modelo de datos para jugadores
  - [x] Diseñar esquema con campos básicos (nombre, posición, edad, etc.)
  - [x] Añadir campos para estadísticas individuales
  - [x] Implementar relaciones con equipos y usuarios
- [x] Crear controlador con métodos CRUD
  - [x] Implementar método de creación (POST)
  - [x] Desarrollar método de consulta (GET) con filtros
  - [x] Añadir método de actualización (PUT)
  - [x] Implementar método de eliminación (DELETE)
- [x] Configurar rutas REST para jugadores
  - [x] Definir endpoints básicos CRUD
  - [x] Configurar middleware de autenticación
  - [x] Implementar validación de permisos por rol
- [x] Implementar validación avanzada
  - [x] Validar datos obligatorios y tipos
  - [x] Añadir validación personalizada para campos específicos
  - [x] Configurar mensajes de error descriptivos

#### Frontend
- [x] Crear slice de Redux para jugadores
  - [x] Implementar acciones para operaciones CRUD
  - [x] Desarrollar reducers para estado de jugadores
  - [x] Añadir selectores para filtrado eficiente
  - [x] Implementar thunks para operaciones asíncronas
- [x] Implementar hook personalizado useJugadores
  - [x] Crear métodos para acciones comunes
  - [x] Implementar manejo de estado de carga y errores
  - [x] Añadir funciones para filtrado y búsqueda
- [x] Desarrollar página de administración
  - [x] Crear tabla de listado con paginación
  - [x] Implementar filtros avanzados por posición, equipo, etc.
  - [x] Añadir acciones de gestión (editar, eliminar, ver detalle)
  - [x] Desarrollar modal de confirmación para eliminación
- [x] Implementar formulario de creación/edición
  - [x] Crear campos con validación (nombre, posición, número, etc.)
  - [x] Añadir selector de equipo
  - [x] Implementar subida de foto de perfil
  - [x] Manejar errores de API y feedback visual

### 2. Desarrollar sistema de asignación de jugadores a equipos
#### Backend
- [x] Implementar endpoints para gestión de plantillas
  - [x] Crear endpoint para añadir jugadores a equipos
  - [x] Desarrollar endpoint para eliminar jugadores de equipos
  - [x] Añadir validación de límites de jugadores por equipo
- [x] Implementar lógica de asignación
  - [x] Validar que un jugador solo pertenezca a un equipo
  - [x] Añadir verificación de categoría y edad
  - [x] Implementar control de fechas de asignación

#### Frontend
- [x] Crear componente de gestión de plantilla
  - [x] Desarrollar listado de jugadores en equipo
  - [x] Implementar búsqueda de jugadores disponibles
  - [ ] Añadir funcionalidad de arrastrar y soltar para asignación
- [x] Implementar interfaz de administración de plantillas
  - [x] Crear vista de plantilla por equipo
  - [x] Añadir acciones para añadir/eliminar jugadores
  - [x] Implementar visualización por posiciones
  - [x] Desarrollar filtros por características

### 3. Crear perfil de jugador con estadísticas básicas
#### Backend
- [ ] Desarrollar endpoints para perfil de jugador
  - [ ] Crear endpoint para consulta detallada de jugador
  - [ ] Implementar endpoint para historial de equipos
  - [ ] Añadir endpoint para estadísticas acumuladas
- [ ] Implementar sistema de estadísticas básicas
  - [ ] Diseñar modelo para almacenar estadísticas
  - [ ] Crear endpoints para actualizar estadísticas
  - [ ] Desarrollar métodos para cálculos automáticos

#### Frontend
- [ ] Diseñar página de perfil de jugador
  - [ ] Crear layout responsivo con secciones principales
  - [ ] Implementar cabecera con datos personales y foto
  - [ ] Añadir sección de estadísticas con gráficos
  - [ ] Desarrollar visualización de historial de equipos
- [ ] Implementar componentes visuales para estadísticas
  - [ ] Crear gráficos para visualización de datos
  - [ ] Implementar comparativas con promedios
  - [ ] Añadir filtros por temporada/período

### 4. Implementar gestión de fichajes
#### Backend
- [ ] Desarrollar sistema de fichajes
  - [ ] Crear modelo para registrar transferencias
  - [ ] Implementar endpoints para proceso de fichaje
  - [ ] Añadir validación de fechas y períodos
- [ ] Implementar lógica de negocio
  - [ ] Desarrollar proceso de solicitud y aprobación
  - [ ] Crear sistema de notificaciones básicas
  - [ ] Implementar registro histórico de movimientos

#### Frontend
- [ ] Crear interfaz para gestión de fichajes
  - [ ] Desarrollar página de mercado de fichajes
  - [ ] Implementar proceso de solicitud paso a paso
  - [ ] Añadir panel de solicitudes pendientes
  - [ ] Crear visualización de historial de transferencias
- [ ] Implementar componentes de interacción
  - [ ] Desarrollar modales de confirmación
  - [ ] Crear indicadores de estado del proceso
  - [ ] Implementar notificaciones visuales

### 5. Mejorar documentación de API
- [ ] Implementar Swagger/OpenAPI
  - [ ] Configurar integración con Express
  - [ ] Documentar endpoints principales
  - [ ] Añadir ejemplos de uso y respuestas
- [ ] Crear documentación para desarrolladores
  - [ ] Desarrollar guía de uso de la API
  - [ ] Documentar modelos de datos
  - [ ] Añadir explicación de flujos principales

### 6. Mejorar cobertura de pruebas
#### Backend
- [ ] Implementar pruebas para controladores
  - [ ] Crear tests para controlador de jugadores
  - [ ] Desarrollar tests para endpoints de asignación
  - [ ] Añadir pruebas para validación de datos
- [ ] Añadir pruebas de integración
  - [ ] Desarrollar tests para flujo completo de jugadores
  - [ ] Implementar pruebas para asignación a equipos
  - [ ] Crear tests para proceso de fichajes

#### Frontend
- [ ] Implementar pruebas para componentes UI
  - [ ] Crear tests para formulario de jugadores
  - [ ] Desarrollar pruebas para tabla de listado
  - [ ] Añadir tests para perfil de jugador
- [ ] Añadir pruebas para slices de Redux
  - [ ] Implementar tests para reducers de jugadores
  - [ ] Crear pruebas para selectores
  - [ ] Desarrollar tests para thunks

## Registro Diario

### Día 1 [14-04-2025]
- Implementado el modelo de datos para jugadores
- Desarrollado el controlador con métodos CRUD completos para jugadores
- Configuradas las rutas REST con autenticación y autorización
- Creado documento de pruebas manuales para la API de jugadores
- Pendiente: Implementación del frontend para jugadores

### Día 2 [15-04-2025]
- Creado el servicio de API para jugadores en el frontend
- Implementado el slice de Redux para jugadores (acciones, reducers, selectores y thunks)
- Desarrollado el hook personalizado usePlayers para facilitar la interacción con el estado
- Integrado el módulo de jugadores en el store global
- Pendiente: Implementación de las páginas de administración y formularios

### Día 3 [16-04-2025]
- Implementada la página de administración de jugadores con tabla de listado y paginación 
- Desarrollados filtros avanzados por posición, equipo y estado
- Implementadas acciones de gestión (editar, eliminar, ver detalle)
- Creado formulario completo para creación/edición de jugadores
- Implementada validación de datos y manejo de errores
- Añadida funcionalidad para gestionar fotos de jugadores

### Día 4 [17-04-2025]
- Implementados endpoints para la gestión de plantillas en el backend (asignar/remover jugadores de equipos)
- Desarrollada la lógica de asignación con validaciones para garantizar que un jugador solo pertenezca a un equipo
- Creado el componente TeamPlayersManager para la gestión visual de asignación de jugadores
- Implementada la integración del componente en la página de detalle de equipo
- Desarrollados filtros de búsqueda por posición y texto en la interfaz de gestión de plantillas
- Añadido feedback visual con mensajes de éxito/error en las operaciones de asignación
- Implementada lógica para mostrar solamente jugadores sin equipo en la lista de disponibles
- Mejorado el manejo de errores en las peticiones de API relacionadas con plantillas

### Día 5 [18-04-2025]
- Por completar

### Día 6 [21-04-2025]
- Por completar

### Día 7 [22-04-2025]
- Por completar

### Día 8 [23-04-2025]
- Por completar

### Día 9 [24-04-2025]
- Por completar

### Día 10 [25-04-2025]
- Por completar

## Progreso general
- **Tareas completadas:** 34/50 (68%)
- **Puntos de historia:** 45/60 (75%)
- **Bloqueantes:** Ninguno por el momento
- **Próximos pasos:** Implementar el perfil de jugador con estadísticas básicas y comenzar con la documentación de API

## Métricas del Sprint
- **Completado:** 65%
- **Velocidad:** Buena, avance por encima de lo planificado
- **Calidad de código:** Buena, siguiendo patrones establecidos
- **Cobertura de pruebas:** Pendiente de implementar pruebas para los nuevos componentes

## Retrospectiva (al finalizar)
- **Lo que salió bien:**
  - Por determinar
- **Lo que podría mejorar:**
  - Por determinar
- **Acciones para el próximo sprint:**
  - Por determinar 