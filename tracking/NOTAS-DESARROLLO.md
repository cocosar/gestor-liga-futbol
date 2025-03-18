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