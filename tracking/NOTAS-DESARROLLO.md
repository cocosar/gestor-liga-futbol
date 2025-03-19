# Notas de Desarrollo

Este documento contiene notas técnicas, decisiones de diseño, problemas encontrados y sus soluciones. Sirve como un diario técnico del proyecto.

## Decisiones Arquitectónicas

### Frontend
- **Framework UI:** Material UI, seleccionado por su compatibilidad con React y componentes predefinidos
- **Gestión de estado:** Redux Toolkit, elegido por su facilidad para manejar estado global
- **Estructura de carpetas:**
  - `/src/components/` - Componentes reutilizables
  - `/src/pages/` - Páginas principales
  - `/src/features/` - Características organizadas por dominio
  - `/src/api/` - Llamadas a API
  - `/src/hooks/` - Hooks personalizados
  - `/src/utils/` - Funciones utilitarias

### Backend
- **Estructura API:** REST con Express
- **Autenticación:** JWT con refresh tokens
- **Estructura de carpetas:**
  - `/src/controllers/` - Controladores por entidad
  - `/src/models/` - Modelos Mongoose
  - `/src/routes/` - Definición de rutas
  - `/src/middleware/` - Middleware personalizado
  - `/src/utils/` - Funciones utilitarias

## Problemas Técnicos y Soluciones

### [18-03-2025] - Migración de Create React App a Vite
**Problema:** Incompatibilidad entre TypeScript 5.x y react-scripts (Create React App). Al intentar instalar las dependencias en el frontend, se producían errores debido a que react-scripts tiene dependencias peer que requieren TypeScript ^3.2.1 o ^4.x, pero no es compatible con TypeScript 5.x.
**Análisis:** Create React App (CRA) ya no se mantiene activamente y presenta problemas de compatibilidad con las versiones más recientes de TypeScript. Esto impide el uso de las características más modernas de TypeScript y otras dependencias actualizadas.
**Solución:** Se migró el proyecto de Create React App a Vite, que ofrece mejor compatibilidad con TypeScript 5.x, mayor velocidad de desarrollo y mejor mantenimiento. Pasos realizados:
1. Creación de un nuevo proyecto con Vite usando la plantilla React + TypeScript
2. Migración de la estructura de directorios y archivos del proyecto anterior
3. Adaptación de los archivos de configuración (package.json, tsconfig.json)
4. Creación de un nuevo sistema de pruebas con Vitest en lugar de Jest
5. Actualización de las importaciones y estructura de archivos para adaptarse a Vite
**Referencias:** 
- [Documentación oficial de Vite](https://vitejs.dev/guide/)
- [Guía de migración de CRA a Vite](https://vitejs.dev/guide/migration-from-cra.html)

### [31-03-2025] - Plan de Implementación de Redux Toolkit
**Análisis:** Después de completar el Sprint 1 con éxito, es necesario implementar una solución robusta para la gestión del estado global. La aplicación necesitará manejar datos de autenticación, usuarios, equipos y más adelante jugadores y partidos. Redux Toolkit ofrece una solución moderna con menos código boilerplate que Redux tradicional.
**Enfoque:** Se ha decidido seguir un enfoque por dominios (feature-based) para organizar el código de Redux, con los siguientes componentes:
1. **Store central** configurado con Redux Toolkit
2. **Slices por dominio:** 
   - `auth`: Para gestión de autenticación (login, registro, logout)
   - `users`: Para gestión de usuarios y perfiles
   - `teams`: Para gestión de equipos
3. **Middleware personalizado** para:
   - Manejo de errores de API
   - Logging (solo en desarrollo)
   - Persistencia del token JWT
4. **Hooks tipados** para facilitar el uso de Redux en componentes:
   - `useAppDispatch` y `useAppSelector`
   - Hooks específicos por dominio (por ejemplo, `useAuth`, `useTeam`)
**Estructura de archivos prevista:**
```
/src/store/
  ├── index.ts              # Configuración principal del store
  ├── middleware/           # Middlewares personalizados
  │   ├── api.ts            # Middleware para manejo de API
  │   ├── logger.ts         # Middleware para logging
  │   └── index.ts          # Exportación de middlewares
  └── slices/               # Slices por dominio
      ├── auth/             # Slice de autenticación
      │   ├── authSlice.ts  # Definición del slice
      │   ├── selectors.ts  # Selectores
      │   └── thunks.ts     # Thunks para acciones asíncronas
      ├── users/            # Slice de usuarios
      ├── teams/            # Slice de equipos
      └── index.ts          # Exportación de reducers
```
**Referencias:**
- [Documentación oficial de Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
- [RTK Query para llamadas a API](https://redux-toolkit.js.org/rtk-query/overview)

### [01-04-2025] - Implementación de Redux Toolkit - Slice de Autenticación
**Implementación:** Se ha creado la estructura base para Redux Toolkit según el plan definido e implementado el slice de autenticación, que incluye:
1. **Configuración del store** con Redux Toolkit
2. **Definición de tipos** compartidos para autenticación (`Usuario`, `LoginData`, `RegisterData`, etc.) 
3. **Slice de autenticación** con:
   - Reducers para login, registro, logout y actualización de perfil 
   - Thunks para operaciones asíncronas (login, registro, obtención de perfil)
   - Selectores para acceder eficientemente a los datos de autenticación
4. **Hook personalizado** `useAuth` para facilitar el uso del slice de autenticación en componentes
5. **Provider de Redux** en el componente raíz

**Problemas encontrados:**
1. **Error al usar useAppSelector dentro de callbacks**: Al implementar el hook personalizado `useAuth`, se intentó usar `useAppSelector` dentro de un callback, lo que React no permite. Solución: Se cambió el enfoque para almacenar el estado necesario en variables y utilizarlas dentro del callback.
2. **Errores de linting**: Variables no utilizadas en bloques catch. Solución: Se utilizó la sintaxis de catch sin parámetro.

**Siguientes pasos:**
1. Implementar slices para usuarios y equipos
2. Crear middlewares personalizados para manejo de errores y logging
3. Integrar los servicios API con los slices de Redux

**Referencias:**
- [Redux Toolkit: Async Logic and Data Fetching](https://redux-toolkit.js.org/tutorials/rtk-query)
- [React-Redux Hooks API](https://react-redux.js.org/api/hooks)

### [Fecha] - [Título del problema]
**Problema:** Descripción detallada del problema.
**Análisis:** Análisis de causas.
**Solución:** Solución implementada.
**Referencias:** Enlaces o recursos utilizados.

## Ideas y Mejoras Pendientes

- **Rendimiento:** Implementar memoización para componentes pesados
- **Seguridad:** Considerar implementación de rate limiting
- **UX:** Mejorar feedback visual en formularios
- **Estado Global:** Implementar Redux en Sprint 2
  - Prioridad: Alta
  - Beneficios esperados:
    - Mejor gestión del estado global de la aplicación
    - Facilitar el manejo de datos entre componentes no relacionados
    - Mejorar la trazabilidad de cambios en la aplicación
    - Facilitar la implementación de persistencia de datos
  - Consideraciones técnicas:
    - Usar Redux Toolkit para reducir el boilerplate
    - Organizar slices por dominio (auth, users, teams, etc.)
    - Implementar middleware personalizado para manejo de errores
    - Crear hooks tipados para mejorar la experiencia de desarrollo

## Referencias y Recursos Útiles

- [Documentación oficial de React](https://reactjs.org/docs/getting-started.html)
- [Guía de Material UI](https://mui.com/getting-started/usage/)
- [Mejores prácticas MongoDB](https://www.mongodb.com/developer/products/mongodb/mongodb-schema-design-best-practices/) 