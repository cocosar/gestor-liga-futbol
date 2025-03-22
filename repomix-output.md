This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.
The content has been processed where content has been compressed (code blocks are separated by ⋮---- delimiter).

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: /rules
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Content has been compressed - code blocks are separated by ⋮---- delimiter
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
.cursor/rules/API-testing-instructions.mdc
.cursor/rules/coding-preferences.mdc
.github/workflows/ci.yml
.gitignore
.husky/pre-commit
backend/.eslintrc.js
backend/jest.config.js
backend/package.json
backend/README.md
backend/src/controllers/authController.ts
backend/src/controllers/playerController.ts
backend/src/controllers/teamController.ts
backend/src/controllers/userController.ts
backend/src/index.ts
backend/src/middleware/auth.ts
backend/src/models/index.ts
backend/src/models/League.ts
backend/src/models/Match.ts
backend/src/models/Player.ts
backend/src/models/Team.ts
backend/src/models/User.ts
backend/src/routes/authRoutes.ts
backend/src/routes/index.ts
backend/src/routes/playerRoutes.ts
backend/src/routes/teamRoutes.ts
backend/src/routes/userRoutes.ts
backend/src/tests/auth.test.ts
backend/src/tests/controllers/authController.test.ts
backend/src/tests/controllers/userController.test.ts
backend/src/tests/middleware/auth.test.ts
backend/src/tests/mocks/services.mock.ts
backend/src/types/index.d.ts
backend/src/utils/jwt.ts
backend/tsconfig.eslint.json
backend/tsconfig.json
docs/plan-de-implementacion.md
docs/plan-de-pruebas.md
docs/pruebas-manuales-equipos.md
docs/pruebas-manuales-jugadores.md
docs/pruebas-manuales-usuarios.md
frontend/eslint.config.js
frontend/index.html
frontend/package.json
frontend/README.md
frontend/src/api/authService.ts
frontend/src/api/index.ts
frontend/src/api/playerService.ts
frontend/src/api/teamService.ts
frontend/src/api/userService.ts
frontend/src/App.tsx
frontend/src/components/auth/ProtectedRoute.tsx
frontend/src/components/layout/__tests__/AppHeader.test.tsx
frontend/src/components/layout/__tests__/Footer.test.tsx
frontend/src/components/layout/__tests__/MainLayout.test.tsx
frontend/src/components/layout/__tests__/Sidebar.test.tsx
frontend/src/components/layout/AppHeader.tsx
frontend/src/components/layout/Footer.tsx
frontend/src/components/layout/MainLayout.tsx
frontend/src/components/layout/Sidebar.tsx
frontend/src/components/players/index.ts
frontend/src/components/players/PlayerForm.tsx
frontend/src/components/teams/__tests__/TeamForm.test.tsx
frontend/src/components/teams/index.ts
frontend/src/components/teams/RandomTeamsGenerator.tsx
frontend/src/components/teams/TeamForm.tsx
frontend/src/components/users/UserForm.tsx
frontend/src/hooks/__tests__/useAuth.test.tsx
frontend/src/hooks/__tests__/useTeams.test.tsx
frontend/src/hooks/__tests__/useUsers.test.tsx
frontend/src/hooks/index.ts
frontend/src/hooks/useAuth.ts
frontend/src/hooks/usePlayers.ts
frontend/src/hooks/useTeams.ts
frontend/src/hooks/useUsers.ts
frontend/src/index.css
frontend/src/main.tsx
frontend/src/pages/__tests__/App.test.tsx
frontend/src/pages/__tests__/Home.test.tsx
frontend/src/pages/__tests__/Login.test.tsx
frontend/src/pages/__tests__/Teams.test.tsx
frontend/src/pages/Dashboard.tsx
frontend/src/pages/Home.tsx
frontend/src/pages/Login.tsx
frontend/src/pages/Players.tsx
frontend/src/pages/Register.tsx
frontend/src/pages/TeamDetail.tsx
frontend/src/pages/Teams.tsx
frontend/src/pages/UserProfile.tsx
frontend/src/pages/Users.tsx
frontend/src/reportWebVitals.ts
frontend/src/setupTests.ts
frontend/src/store/__tests__/middleware/errorMiddleware.test.ts
frontend/src/store/__tests__/middleware/index.test.ts
frontend/src/store/__tests__/middleware/loggerMiddleware.test.ts
frontend/src/store/__tests__/slices/auth/authSlice.test.ts
frontend/src/store/__tests__/slices/auth/selectors.test.ts
frontend/src/store/__tests__/slices/auth/thunks.test.ts
frontend/src/store/__tests__/slices/teams/selectors.test.ts
frontend/src/store/__tests__/slices/teams/teamsSlice.test.ts
frontend/src/store/__tests__/slices/teams/thunks.test.ts
frontend/src/store/__tests__/slices/users/selectors.test.ts
frontend/src/store/__tests__/slices/users/thunks.test.ts
frontend/src/store/__tests__/slices/users/usersSlice.test.ts
frontend/src/store/index.ts
frontend/src/store/middleware/errorMiddleware.ts
frontend/src/store/middleware/index.ts
frontend/src/store/middleware/loggerMiddleware.ts
frontend/src/store/middleware/README.md
frontend/src/store/slices/auth/authSlice.ts
frontend/src/store/slices/auth/selectors.ts
frontend/src/store/slices/auth/thunks.ts
frontend/src/store/slices/index.ts
frontend/src/store/slices/players/index.ts
frontend/src/store/slices/players/playersSlice.ts
frontend/src/store/slices/players/selectors.ts
frontend/src/store/slices/players/thunks.ts
frontend/src/store/slices/teams/index.ts
frontend/src/store/slices/teams/selectors.ts
frontend/src/store/slices/teams/teamsSlice.ts
frontend/src/store/slices/teams/thunks.ts
frontend/src/store/slices/users/index.ts
frontend/src/store/slices/users/selectors.ts
frontend/src/store/slices/users/thunks.ts
frontend/src/store/slices/users/usersSlice.ts
frontend/src/test/setup.ts
frontend/src/test/setup/__mocks__/@mui_x-data-grid/index.js
frontend/src/test/setup/hooks/index.ts
frontend/src/test/setup/hooks/useUsersMock.ts
frontend/src/test/setup/index.ts
frontend/src/test/setup/mocks/index.ts
frontend/src/test/setup/mocks/ui-components.tsx
frontend/src/test/setup/test-helpers.tsx
frontend/src/test/setup/test-setup.ts
frontend/src/test/setup/test-utils.ts
frontend/src/test/setup/utils/index.ts
frontend/src/test/setup/utils/setupMocks.ts
frontend/src/test/setup/vitest.setup.ts
frontend/src/types/auth.ts
frontend/src/types/css.d.ts
frontend/src/types/index.ts
frontend/src/types/players.ts
frontend/src/types/teams.ts
frontend/src/types/users.ts
frontend/src/utils/dataGridLocale.ts
frontend/src/utils/randomTeamGenerator.ts
frontend/src/vite-env.d.ts
frontend/src/vitest.config.ts
frontend/tsconfig.app.json
frontend/tsconfig.json
frontend/tsconfig.node.json
frontend/vite.config.ts
frontend/vitest.config.ts
liga-futbol-prd.md
package.json
README.md
tracking/NOTAS-DESARROLLO.md
tracking/SPRINT-ACTUAL.md
tracking/sprints/sprint-1.md
tracking/sprints/sprint-2.md
tracking/sprints/sprint-template.md
tracking/TAREAS-PENDIENTES.md
tracking/TRACKING.md
tsconfig.json
```

# Files

## File: .cursor/rules/API-testing-instructions.mdc
````
---
description: Rest Api Testing
globs: 
alwaysApply: false
---
# REST API Testing Instructions

The `test_request` tool enables testing, debugging, and interacting with REST API endpoints. The tool provides comprehensive request/response information and handles authentication automatically.

## When to Use

- Testing specific API endpoints
- Debugging API responses
- Verifying API functionality
- Checking response times
- Validating request/response formats
- Testing local development servers
- Testing API sequences
- Verifying error handling

## Key Features

- Supports GET, POST, PUT, DELETE methods
- Handles authentication (Basic, Bearer, API Key)
- Normalizes endpoints automatically
- Provides detailed response information
- Configurable SSL verification and response limits

## Resources

The following resources provide detailed documentation:

- examples: Usage examples and common patterns
- response-format: Response structure and fields
- config: Configuration options and setup guide

Access these resources to understand usage, response formats, and configuration options.

## Important Notes

- Review API implementation for expected behavior
- Handle sensitive data appropriately
- Consider rate limits and API constraints
- Restart server after configuration changes
````

## File: .husky/pre-commit
````
npx lint-staged
````

## File: backend/jest.config.js
````javascript

````

## File: backend/README.md
````markdown
# Backend - Sistema de Gestión de Ligas de Fútbol 8v8

Este proyecto contiene el backend del Sistema de Gestión de Ligas de Fútbol 8v8, desarrollado con Node.js, Express, TypeScript y MongoDB.

## Requisitos

- Node.js 14.x o superior
- npm 6.x o superior
- MongoDB 4.4 o superior

## Instalación

1. Clona el repositorio
2. Navega a la carpeta del backend:
   ```bash
   cd backend
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Copia el archivo de variables de entorno:
   ```bash
   cp .env.example .env
   ```
5. Edita el archivo `.env` con tus variables de entorno

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El servidor estará disponible en [http://localhost:5000](http://localhost:5000).

## Comandos disponibles

- `npm run dev`: Inicia el servidor de desarrollo con hot-reload
- `npm start`: Inicia el servidor en modo producción
- `npm run build`: Compila el código TypeScript
- `npm test`: Ejecuta los tests
- `npm run lint`: Ejecuta el linter
- `npm run format`: Formatea el código

## Estructura del proyecto

- `/src/controllers`: Controladores por entidad
- `/src/models`: Modelos de MongoDB/Mongoose
- `/src/routes`: Definición de rutas
- `/src/middleware`: Middleware personalizado
- `/src/utils`: Funciones utilitarias

## API Endpoints

La documentación detallada de la API estará disponible en `/api/docs` una vez que el servidor esté en funcionamiento.
````

## File: backend/src/controllers/playerController.ts
````typescript
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Player from '../models/Player';
import Team from '../models/Team';
⋮----
/**
 * @desc    Obtener todos los jugadores
 * @route   GET /api/jugadores
 * @access  Privado
 */
export const getPlayers = async (req: Request, res: Response) =>
⋮----
// Filtros
⋮----
/**
 * @desc    Obtener un jugador por ID
 * @route   GET /api/jugadores/:id
 * @access  Privado
 */
export const getPlayerById = async (req: Request, res: Response) =>
⋮----
/**
 * @desc    Crear un nuevo jugador
 * @route   POST /api/jugadores
 * @access  Privado
 */
export const createPlayer = async (req: Request, res: Response) =>
⋮----
// Validaciones básicas
⋮----
// Verificar si ya existe un jugador con el mismo número de identificación
⋮----
// Si se especifica un equipo, verificar que exista
⋮----
// Crear el nuevo jugador
⋮----
/**
 * @desc    Actualizar un jugador
 * @route   PUT /api/jugadores/:id
 * @access  Privado
 */
export const updatePlayer = async (req: Request, res: Response) =>
⋮----
// Si se cambió el número de identificación, verificar que no exista otro jugador con ese número
⋮----
// Comprobar si es un jugador diferente
⋮----
// Si se está cambiando de equipo, guardar el equipo anterior en el historial
⋮----
// Asegurarse de que equiposAnteriores sea un array
⋮----
// Solo añadir el equipo anterior si no está ya en el historial
⋮----
/**
 * @desc    Eliminar un jugador
 * @route   DELETE /api/jugadores/:id
 * @access  Privado
 */
export const deletePlayer = async (req: Request, res: Response) =>
⋮----
// Opción 1: Eliminación física (definitiva)
// await Player.findByIdAndDelete(id);
⋮----
// Opción 2: Eliminación lógica (recomendada)
⋮----
/**
 * @desc    Actualizar estadísticas de un jugador
 * @route   PATCH /api/jugadores/:id/estadisticas
 * @access  Privado
 */
export const updatePlayerStats = async (req: Request, res: Response) =>
````

## File: backend/src/models/index.ts
````typescript
import User from './User';
import Team from './Team';
import Player from './Player';
import Match from './Match';
import League from './League';
````

## File: backend/src/models/League.ts
````typescript
import mongoose, { Document, Schema } from 'mongoose';
⋮----
export interface ILeague extends Document {
  nombre: string;
  temporada: string;
  fechaInicio: Date;
  fechaFin?: Date;
  descripcion?: string;
  logo?: string;
  equipos: mongoose.Types.ObjectId[];
  estado: 'preparacion' | 'en_curso' | 'finalizada' | 'cancelada';
  tipoCompeticion: 'liga' | 'copa' | 'torneo';
  configuracion: {
    puntosPorVictoria: number;
    puntosPorEmpate: number;
    puntosPorDerrota: number;
    criteriosDesempate: string[];
  };
  creador: mongoose.Types.ObjectId;
  activo: boolean;
}
⋮----
// Índices para búsquedas más rápidas
````

## File: backend/src/models/Match.ts
````typescript
import mongoose, { Document, Schema } from 'mongoose';
⋮----
export interface IMatch extends Document {
  fecha: Date;
  equipoLocal: mongoose.Types.ObjectId;
  equipoVisitante: mongoose.Types.ObjectId;
  estado: 'programado' | 'en_curso' | 'finalizado' | 'suspendido' | 'cancelado';
  resultadoLocal?: number;
  resultadoVisitante?: number;
  ubicacion?: string;
  liga: mongoose.Types.ObjectId;
  temporada?: string;
  jornada?: number;
  arbitros?: mongoose.Types.ObjectId[];
  eventos?: {
    tipo: 'gol' | 'amarilla' | 'roja' | 'sustitucion' | 'otro';
    minuto: number;
    jugador: mongoose.Types.ObjectId;
    equipoId: mongoose.Types.ObjectId;
    descripcion?: string;
    jugadorSustituto?: mongoose.Types.ObjectId; // Solo para sustituciones
  }[];
  alineacionLocal?: mongoose.Types.ObjectId[];
  alineacionVisitante?: mongoose.Types.ObjectId[];
  destacados?: {
    jugador: mongoose.Types.ObjectId;
    razon: string;
  }[];
  observaciones?: string;
}
⋮----
jugadorSustituto?: mongoose.Types.ObjectId; // Solo para sustituciones
⋮----
// Índices para mejorar la búsqueda y consultas frecuentes
````

## File: backend/src/routes/playerRoutes.ts
````typescript
import express from 'express';
import {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
  updatePlayerStats
} from '../controllers/playerController';
import { authenticate as protect, authorize } from '../middleware/auth';
⋮----
// Rutas públicas
⋮----
// Rutas protegidas para roles específicos
````

## File: backend/src/tests/controllers/userController.test.ts
````typescript

````

## File: backend/src/tests/middleware/auth.test.ts
````typescript

````

## File: backend/src/tests/mocks/services.mock.ts
````typescript
// Mock para servicios externos utilizados en la aplicación
⋮----
interface FileUpload {
  originalname: string;
  [key: string]: unknown;
}
⋮----
/**
 * Mock para servicios de almacenamiento de archivos
 */
⋮----
// Mock para subida de archivos
⋮----
// Mock para eliminación de archivos
⋮----
// Mock para generación de URL firmadas
⋮----
/**
 * Mock para servicios de envío de emails
 */
⋮----
// Mock para envío de emails genéricos
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
⋮----
// Mock para envío de emails de recuperación de contraseña
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
⋮----
// Mock para envío de emails de bienvenida
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
⋮----
/**
 * Mock para servicios de notificaciones push
 */
⋮----
// Mock para envío de notificaciones push
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
⋮----
// Mock para envío de notificaciones a múltiples usuarios
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
⋮----
/**
 * Mock para servicios de pago
 */
⋮----
// Mock para procesar pagos
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
⋮----
// Mock para reembolsos
⋮----
/**
 * Utilidad para resetear todos los mocks
 */
export const resetAllMocks = () =>
⋮----
// Resetear contadores y comportamiento de los mocks
````

## File: backend/src/types/index.d.ts
````typescript
// Declaraciones de tipos para la aplicación de backend
⋮----
export interface Request {
    usuario?: {
      id: string;
      [key: string]: any;
    };
  }
````

## File: backend/tsconfig.eslint.json
````json
{
  "extends": "./tsconfig.json",
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.json",
    "src/tests/**/*.ts"
  ]
}
````

## File: backend/tsconfig.json
````json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
````

## File: docs/pruebas-manuales-equipos.md
````markdown
# Pruebas Manuales: CRUD de Equipos

Este documento describe las pruebas manuales para verificar el funcionamiento correcto de las operaciones CRUD de equipos a través de la API REST.

## Requisitos Previos

- [Postman](https://www.postman.com/downloads/) o [Insomnia](https://insomnia.rest/download) instalado.
- Servidor backend ejecutándose en `http://localhost:5000`
- MongoDB corriendo localmente o en Atlas.
- Un usuario administrador o manager creado en la base de datos.

## Configuración de Pruebas

1. Antes de iniciar las pruebas, asegúrate de tener un token JWT válido para un usuario con rol de administrador o manager.
2. Para obtenerlo, inicia sesión con un administrador o manager usando el endpoint `/api/auth/login`.
3. Guarda el token JWT recibido para usarlo en las siguientes pruebas.

## Pruebas

### 1. Obtener Lista de Equipos

**Objetivo:** Verificar que se puede obtener un listado de equipos con filtros y paginación.

#### Petición básica:

```
GET http://localhost:5000/api/equipos
Headers:
  Authorization: Bearer <token_jwt>
```

#### Petición con paginación y filtros:

```
GET http://localhost:5000/api/equipos?page=1&limit=10&search=team&sortBy=nombre&sortOrder=asc&categoria=adulto&tipo=futbol&activo=true
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "equipos": [...],
    "totalEquipos": 10,
    "paginaActual": 1,
    "totalPaginas": 1,
    "limite": 10
  }
  ```

**Pruebas adicionales:**
- Intenta acceder sin un token JWT (debería devolver 401)
- Prueba diferentes combinaciones de filtros y verifica resultados

### 2. Obtener Equipo por ID

**Objetivo:** Verificar que se puede obtener la información de un equipo específico.

#### Petición:

```
GET http://localhost:5000/api/equipos/<id_equipo>
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "equipo": {
      "_id": "...",
      "nombre": "...",
      "descripcion": "...",
      "categoria": "...",
      "tipo": "...",
      "entrenador": { ... },
      "manager": { ... },
      "jugadores": [ ... ],
      "logo": "...",
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Intenta obtener un equipo que no existe (debería devolver 404)
- Intenta acceder sin un token JWT (debería devolver 401)

### 3. Crear Equipo

**Objetivo:** Verificar que un administrador o manager puede crear un nuevo equipo.

#### Petición:

```
POST http://localhost:5000/api/equipos
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "nombre": "Nuevo Equipo",
    "descripcion": "Descripción del equipo",
    "categoria": "adulto",
    "tipo": "futbol",
    "entrenador": "<id_entrenador>",
    "manager": "<id_manager>",
    "logo": "https://example.com/logo.png"
  }
```

**Resultados esperados:**
- Código 201 Created
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Equipo creado exitosamente",
    "equipo": {
      "_id": "...",
      "nombre": "Nuevo Equipo",
      "descripcion": "Descripción del equipo",
      "categoria": "adulto",
      "tipo": "futbol",
      "entrenador": { ... },
      "manager": { ... },
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Intenta crear un equipo sin un campo obligatorio como nombre o categoría (debería devolver 400)
- Intenta crear un equipo con una categoría o tipo inválido (debería devolver 400)
- Intenta crear un equipo como usuario regular (debería devolver 403)
- Intenta asignar un manager o entrenador inexistente (debería devolver 404)
- Intenta asignar como manager/entrenador a un usuario con rol no adecuado (debería devolver 400)

### 4. Actualizar Equipo

**Objetivo:** Verificar que se puede actualizar la información de un equipo existente.

#### Petición:

```
PUT http://localhost:5000/api/equipos/<id_equipo>
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "nombre": "Nombre Actualizado",
    "descripcion": "Descripción actualizada",
    "categoria": "juvenil",
    "entrenador": "<id_nuevo_entrenador>"
  }
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Equipo actualizado exitosamente",
    "equipo": {
      "_id": "...",
      "nombre": "Nombre Actualizado",
      "descripcion": "Descripción actualizada",
      "categoria": "juvenil",
      "entrenador": { ... },
      "manager": { ... },
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Intenta actualizar un equipo como usuario no administrador o no manager del equipo (debería devolver 403)
- Intenta actualizar con una categoría o tipo inválido (debería devolver 400)
- Intenta actualizar un equipo que no existe (debería devolver 404)
- Intenta como manager cambiar el estado "activo" del equipo (debería ignorar el cambio, solo admin puede hacerlo)

### 5. Añadir/Eliminar Jugadores

**Objetivo:** Verificar que se pueden añadir o eliminar jugadores de un equipo.

#### Petición para añadir jugadores:

```
PUT http://localhost:5000/api/equipos/<id_equipo>/jugadores
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "jugadores": ["<id_jugador1>", "<id_jugador2>"],
    "accion": "agregar"
  }
```

#### Petición para eliminar jugadores:

```
PUT http://localhost:5000/api/equipos/<id_equipo>/jugadores
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "jugadores": ["<id_jugador1>", "<id_jugador2>"],
    "accion": "eliminar"
  }
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Jugadores añadidos exitosamente", // o "Jugadores eliminados exitosamente"
    "equipo": {
      "_id": "...",
      "nombre": "...",
      "jugadores": [ ... ],
      // otros campos
    }
  }
  ```

**Pruebas adicionales:**
- Intenta modificar jugadores como usuario no autorizado (debería devolver 403)
- Intenta añadir jugadores no existentes (debería devolver 404)
- Intenta usar una acción inválida diferente de "agregar" o "eliminar" (debería devolver 400)
- Intenta añadir jugadores que ya están en el equipo (debería funcionar sin duplicados)
- Intenta eliminar jugadores que no están en el equipo (debería funcionar sin errores)

### 6. Eliminar Equipo

**Objetivo:** Verificar que un administrador puede eliminar un equipo.

#### Petición:

```
DELETE http://localhost:5000/api/equipos/<id_equipo>
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Equipo eliminado exitosamente"
  }
  ```

**Pruebas adicionales:**
- Intenta eliminar un equipo como usuario no administrador (debería devolver 403)
- Intenta eliminar un equipo que no existe (debería devolver 404)

## Verificación de Integridad

Después de realizar las pruebas, verifica la integridad del sistema:

1. Accede a la lista de equipos para asegurarte de que los cambios se reflejan correctamente.
2. Verifica que los usuarios asignados como entrenadores y managers se reflejen correctamente.
3. Comprueba que los jugadores añadidos o eliminados se actualizan correctamente en el equipo.

## Notas sobre Posibles Errores

- **400 Bad Request**: Indica un problema con los datos enviados (por ejemplo, categoría inválida, datos de validación que fallan).
- **401 Unauthorized**: Indica problemas de autenticación (token faltante o inválido).
- **403 Forbidden**: Indica problemas de permisos (el usuario no tiene el rol requerido).
- **404 Not Found**: Indica que el recurso solicitado (equipo, jugador, etc.) no existe.
- **500 Internal Server Error**: Indica un problema en el servidor. Revisa los logs para más detalles.

## Consejos para Debugging

1. Revisa los encabezados de la solicitud, especialmente el token JWT.
2. Verifica el formato del cuerpo de la solicitud, especialmente para POST y PUT.
3. Comprueba los logs del servidor para mensajes de error detallados.
4. Para problemas con los ID de MongoDB, asegúrate de que son strings hexadecimales de 24 caracteres.
5. Si hay problemas al añadir jugadores, verifica que los usuarios existan y estén activos.
````

## File: docs/pruebas-manuales-jugadores.md
````markdown
# Pruebas Manuales - API de Jugadores

Este documento contiene ejemplos para probar manualmente los endpoints de la API de jugadores utilizando herramientas como Postman o Insomnia.

## Configuración previa

1. Asegúrate de tener el servidor backend en ejecución
2. Obtén un token de autenticación válido haciendo una solicitud a `/api/auth/login`
3. Usa ese token en el header `Authorization: Bearer <token>` para las peticiones que requieran autenticación

## 1. Obtener todos los jugadores

**Endpoint:** `GET /api/jugadores`

**Parámetros de consulta opcionales:**
```
?nombre=Juan
?apellido=Perez
?posicion=delantero
?equipo=64f7a3b2c32e5a8d97b1e2f0 (ID del equipo)
?activo=true
?page=1
?limit=10
```

**Respuesta exitosa (200 OK):**
```json
{
  "players": [
    {
      "_id": "64f7a3b2c32e5a8d97b1e2f1",
      "nombre": "Juan",
      "apellido": "Perez",
      "numeroIdentificacion": "A123456",
      "posicion": "delantero",
      "activo": true,
      "estadisticas": {
        "goles": 5,
        "asistencias": 3,
        "tarjetasAmarillas": 2,
        "tarjetasRojas": 0,
        "partidosJugados": 10,
        "minutos": 850
      },
      "equipo": {
        "_id": "64f7a3b2c32e5a8d97b1e2f0",
        "nombre": "Real Madrid",
        "categoria": "senior"
      },
      "createdAt": "2023-05-10T15:30:45.123Z",
      "updatedAt": "2023-05-15T18:20:30.456Z"
    }
    // ... más jugadores
  ],
  "pagination": {
    "totalPlayers": 25,
    "totalPages": 3,
    "currentPage": 1,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

## 2. Obtener un jugador por ID

**Endpoint:** `GET /api/jugadores/:id`

**Ejemplo:** `GET /api/jugadores/64f7a3b2c32e5a8d97b1e2f1`

**Respuesta exitosa (200 OK):**
```json
{
  "_id": "64f7a3b2c32e5a8d97b1e2f1",
  "nombre": "Juan",
  "apellido": "Perez",
  "fechaNacimiento": "1995-05-15T00:00:00.000Z",
  "fotoPerfil": "/profiles/juan-perez.jpg",
  "numeroIdentificacion": "A123456",
  "posicion": "delantero",
  "numeroCamiseta": 9,
  "equipo": {
    "_id": "64f7a3b2c32e5a8d97b1e2f0",
    "nombre": "Real Madrid",
    "categoria": "senior"
  },
  "equiposAnteriores": [
    {
      "_id": "64f7a3b2c32e5a8d97b1e2f2",
      "nombre": "Barcelona",
      "categoria": "senior"
    }
  ],
  "activo": true,
  "altura": 182,
  "peso": 78,
  "piePreferido": "derecho",
  "estadisticas": {
    "goles": 5,
    "asistencias": 3,
    "tarjetasAmarillas": 2,
    "tarjetasRojas": 0,
    "partidosJugados": 10,
    "minutos": 850
  },
  "createdAt": "2023-05-10T15:30:45.123Z",
  "updatedAt": "2023-05-15T18:20:30.456Z"
}
```

**Respuesta de error (404 Not Found):**
```json
{
  "message": "Jugador no encontrado"
}
```

## 3. Crear un nuevo jugador

**Endpoint:** `POST /api/jugadores`  
**Autenticación requerida:** Sí (admin, manager o coach)

**Cuerpo de la solicitud:**
```json
{
  "nombre": "Carlos",
  "apellido": "González",
  "fechaNacimiento": "1998-08-23",
  "numeroIdentificacion": "B789012",
  "posicion": "mediocampista",
  "numeroCamiseta": 8,
  "equipo": "64f7a3b2c32e5a8d97b1e2f0",
  "altura": 175,
  "peso": 70,
  "piePreferido": "izquierdo"
}
```

**Respuesta exitosa (201 Created):**
```json
{
  "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
  "nombre": "Carlos",
  "apellido": "González",
  "fechaNacimiento": "1998-08-23T00:00:00.000Z",
  "fotoPerfil": "/default-player.png",
  "numeroIdentificacion": "B789012",
  "posicion": "mediocampista",
  "numeroCamiseta": 8,
  "equipo": "64f7a3b2c32e5a8d97b1e2f0",
  "activo": true,
  "altura": 175,
  "peso": 70,
  "piePreferido": "izquierdo",
  "estadisticas": {
    "goles": 0,
    "asistencias": 0,
    "tarjetasAmarillas": 0,
    "tarjetasRojas": 0,
    "partidosJugados": 0,
    "minutos": 0
  },
  "createdAt": "2023-06-20T10:15:30.123Z",
  "updatedAt": "2023-06-20T10:15:30.123Z"
}
```

**Respuestas de error:**
- 400 Bad Request: Datos inválidos o faltantes
- 401 Unauthorized: Token no proporcionado o inválido
- 403 Forbidden: No tiene permisos para crear jugadores

## 4. Actualizar un jugador

**Endpoint:** `PUT /api/jugadores/:id`  
**Autenticación requerida:** Sí (admin, manager o coach)

**Ejemplo:** `PUT /api/jugadores/65a1b2c3d4e5f6g7h8i9j0k1`

**Cuerpo de la solicitud:**
```json
{
  "numeroCamiseta": 10,
  "altura": 176,
  "estadisticas": {
    "goles": 1,
    "asistencias": 2,
    "partidosJugados": 2,
    "minutos": 180
  }
}
```

**Respuesta exitosa (200 OK):**
```json
{
  "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
  "nombre": "Carlos",
  "apellido": "González",
  "fechaNacimiento": "1998-08-23T00:00:00.000Z",
  "fotoPerfil": "/default-player.png",
  "numeroIdentificacion": "B789012",
  "posicion": "mediocampista",
  "numeroCamiseta": 10,
  "equipo": {
    "_id": "64f7a3b2c32e5a8d97b1e2f0",
    "nombre": "Real Madrid",
    "categoria": "senior"
  },
  "activo": true,
  "altura": 176,
  "peso": 70,
  "piePreferido": "izquierdo",
  "estadisticas": {
    "goles": 1,
    "asistencias": 2,
    "tarjetasAmarillas": 0,
    "tarjetasRojas": 0,
    "partidosJugados": 2,
    "minutos": 180
  },
  "createdAt": "2023-06-20T10:15:30.123Z",
  "updatedAt": "2023-06-20T11:30:45.789Z"
}
```

## 5. Actualizar estadísticas de un jugador

**Endpoint:** `PATCH /api/jugadores/:id/estadisticas`  
**Autenticación requerida:** Sí (admin, manager o coach)

**Ejemplo:** `PATCH /api/jugadores/65a1b2c3d4e5f6g7h8i9j0k1/estadisticas`

**Cuerpo de la solicitud:**
```json
{
  "estadisticas": {
    "goles": 2,
    "asistencias": 3,
    "tarjetasAmarillas": 1,
    "partidosJugados": 3,
    "minutos": 270
  }
}
```

**Respuesta exitosa (200 OK):**
```json
{
  "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
  "nombre": "Carlos",
  "apellido": "González",
  "estadisticas": {
    "goles": 2,
    "asistencias": 3,
    "tarjetasAmarillas": 1,
    "tarjetasRojas": 0,
    "partidosJugados": 3,
    "minutos": 270
  },
  // ... resto de campos
}
```

## 6. Eliminar un jugador

**Endpoint:** `DELETE /api/jugadores/:id`  
**Autenticación requerida:** Sí (admin o manager)

**Ejemplo:** `DELETE /api/jugadores/65a1b2c3d4e5f6g7h8i9j0k1`

**Respuesta exitosa (200 OK):**
```json
{
  "message": "Jugador eliminado correctamente"
}
```

**Respuestas de error:**
- 400 Bad Request: ID de jugador inválido
- 401 Unauthorized: Token no proporcionado o inválido
- 403 Forbidden: No tiene permisos para eliminar jugadores
- 404 Not Found: Jugador no encontrado

## Notas adicionales

- La eliminación de jugadores es lógica (se establece `activo: false`), no física
- Los jugadores inactivos no aparecen en las consultas a menos que se especifique `?activo=false`
- Al cambiar un jugador de equipo, el equipo anterior se guarda en el historial automáticamente
- Las estadísticas se pueden actualizar tanto con el endpoint `PUT /api/jugadores/:id` como con el endpoint específico `PATCH /api/jugadores/:id/estadisticas` 

# Plan de Pruebas Manual para la Gestión de Jugadores

## Objetivos

- Validar la funcionalidad completa del módulo de gestión de jugadores
- Verificar la correcta integración con el backend 
- Comprobar que la interfaz de usuario funciona correctamente

## Casos de Prueba

### Caso 1: Acceso a la página de jugadores

1. Navegar a la página principal
2. Iniciar sesión como administrador
3. Acceder a la sección de jugadores
4. Verificar que se carga correctamente la tabla de jugadores

### Caso 2: Filtrado de jugadores

1. Probar filtro por nombre
2. Probar filtro por posición
3. Probar filtro por equipo
4. Probar filtro por estado (activo/todos)
5. Verificar que la paginación funciona correctamente

### Caso 3: Creación de jugador

1. Hacer clic en "Nuevo Jugador"
2. Rellenar el formulario con datos válidos
3. Guardar el formulario
4. Verificar que el jugador aparece en la tabla

### Caso 4: Edición de jugador

1. Seleccionar un jugador existente
2. Hacer clic en el botón de editar
3. Modificar algunos datos
4. Guardar los cambios
5. Verificar que los cambios se reflejan en la tabla

### Caso 5: Eliminación de jugador

1. Seleccionar un jugador existente
2. Hacer clic en el botón de eliminar
3. Confirmar la eliminación
4. Verificar que el jugador ya no aparece en la tabla
````

## File: docs/pruebas-manuales-usuarios.md
````markdown
# Pruebas Manuales: CRUD de Usuarios

Este documento describe las pruebas manuales para verificar el funcionamiento correcto de las operaciones CRUD de usuarios a través de la API REST.

## Requisitos Previos

- [Postman](https://www.postman.com/downloads/) o [Insomnia](https://insomnia.rest/download) instalado.
- Servidor backend ejecutándose en `http://localhost:5000`
- MongoDB corriendo localmente o en Atlas.
- Un usuario administrador creado en la base de datos.

## Configuración de Pruebas

1. Antes de iniciar las pruebas, asegúrate de tener un token JWT válido para un usuario con rol de administrador.
2. Para obtenerlo, inicia sesión con un administrador usando el endpoint `/api/auth/login`.
3. Guarda el token JWT recibido para usarlo en las siguientes pruebas.

## Pruebas

### 1. Obtener Lista de Usuarios

**Objetivo:** Verificar que se puede obtener un listado de usuarios con filtros y paginación.

#### Petición básica:

```
GET http://localhost:5000/api/usuarios
Headers:
  Authorization: Bearer <token_jwt>
```

#### Petición con paginación y filtros:

```
GET http://localhost:5000/api/usuarios?page=1&limit=10&search=test&sortBy=nombre&sortOrder=asc&rol=admin&activo=true
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "usuarios": [...],
    "totalUsuarios": 10,
    "paginaActual": 1,
    "totalPaginas": 1,
    "limite": 10
  }
  ```

**Pruebas adicionales:**
- Intenta acceder sin un token JWT (debería devolver 401)
- Intenta acceder con un token que no tiene rol de administrador (debería devolver 403)
- Prueba diferentes combinaciones de filtros y verificar resultados

### 2. Obtener Usuario por ID

**Objetivo:** Verificar que se puede obtener la información de un usuario específico.

#### Petición:

```
GET http://localhost:5000/api/usuarios/<id_usuario>
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "usuario": {
      "_id": "...",
      "nombre": "...",
      "apellido": "...",
      "email": "...",
      "rol": "...",
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Intenta obtener un usuario que no existe (debería devolver 404)
- Como usuario regular, intenta obtener información de otro usuario (debería devolver 403)
- Como usuario regular, obtén tu propia información (debería funcionar)

### 3. Crear Usuario

**Objetivo:** Verificar que un administrador puede crear un nuevo usuario.

#### Petición:

```
POST http://localhost:5000/api/usuarios
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "nombre": "Nuevo",
    "apellido": "Usuario",
    "email": "nuevo@example.com",
    "password": "password123",
    "rol": "usuario",
    "activo": true
  }
```

**Resultados esperados:**
- Código 201 Created
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Usuario creado exitosamente",
    "usuario": {
      "_id": "...",
      "nombre": "Nuevo",
      "apellido": "Usuario",
      "email": "nuevo@example.com",
      "rol": "usuario",
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Intenta crear un usuario con un email ya existente (debería devolver 400)
- Intenta crear un usuario con un rol inválido (debería devolver 400)
- Como usuario no administrador, intenta crear un administrador (debería devolver 403)
- Omite campos obligatorios como nombre, apellido, email o password (debería devolver 400)

### 4. Actualizar Usuario

**Objetivo:** Verificar que se puede actualizar la información de un usuario existente.

#### Petición:

```
PUT http://localhost:5000/api/usuarios/<id_usuario>
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "nombre": "Nombre Actualizado",
    "apellido": "Apellido Actualizado",
    "email": "actualizado@example.com",
    "rol": "manager",
    "activo": true
  }
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Usuario actualizado exitosamente",
    "usuario": {
      "_id": "...",
      "nombre": "Nombre Actualizado",
      "apellido": "Apellido Actualizado",
      "email": "actualizado@example.com",
      "rol": "manager",
      "activo": true,
      "fechaCreacion": "..."
    }
  }
  ```

**Pruebas adicionales:**
- Como usuario no administrador, intenta actualizar a otro usuario (debería devolver 403)
- Como usuario no administrador, actualiza tu propio perfil (debería funcionar)
- Como usuario no administrador, intenta cambiar tu rol (debería devolver 403)
- Como usuario regular, intenta desactivar tu cuenta (debería devolver 403)
- Como administrador, intenta quitarte a ti mismo los privilegios de administrador (debería devolver 403)
- Intenta actualizar con un email ya usado por otro usuario (debería devolver 400)

### 5. Cambiar Contraseña

**Objetivo:** Verificar que se puede cambiar la contraseña de un usuario.

#### Petición (como administrador):

```
PUT http://localhost:5000/api/usuarios/<id_usuario>/password
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "password": "nuevaContraseña123"
  }
```

#### Petición (como el propio usuario):

```
PUT http://localhost:5000/api/usuarios/<tu_id>/password
Headers:
  Authorization: Bearer <token_jwt>
  Content-Type: application/json
Body:
  {
    "currentPassword": "contraseñaActual",
    "password": "nuevaContraseña123"
  }
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Contraseña actualizada exitosamente"
  }
  ```

**Pruebas adicionales:**
- Como usuario regular, intenta cambiar tu contraseña sin proporcionar la contraseña actual (debería devolver 400)
- Como usuario regular, intenta cambiar tu contraseña con una contraseña actual incorrecta (debería devolver 401)
- Como usuario regular, intenta cambiar la contraseña de otro usuario (debería devolver 403)

### 6. Eliminar Usuario

**Objetivo:** Verificar que un administrador puede eliminar un usuario.

#### Petición:

```
DELETE http://localhost:5000/api/usuarios/<id_usuario>
Headers:
  Authorization: Bearer <token_jwt>
```

**Resultados esperados:**
- Código 200 OK
- Respuesta JSON con la estructura:
  ```json
  {
    "success": true,
    "message": "Usuario eliminado exitosamente"
  }
  ```

**Pruebas adicionales:**
- Como administrador, intenta eliminarte a ti mismo (debería devolver 403)
- Como usuario regular, intenta eliminar un usuario (debería devolver 403)
- Intenta eliminar un usuario que no existe (debería devolver 404)

## Verificación de Integridad

Después de realizar las pruebas, verifica la integridad del sistema:

1. Accede a la lista de usuarios para asegurarte de que los cambios se reflejan correctamente.
2. Intenta iniciar sesión con un usuario eliminado (debería fallar).
3. Intenta iniciar sesión con las credenciales actualizadas (debería funcionar).
4. Verifica que un usuario desactivado no pueda iniciar sesión.

## Notas sobre Posibles Errores

- **400 Bad Request**: Indica un problema con los datos enviados (por ejemplo, email duplicado, rol inválido, datos de validación que fallan).
- **401 Unauthorized**: Indica problemas de autenticación (token faltante o inválido).
- **403 Forbidden**: Indica problemas de permisos (el usuario no tiene el rol requerido).
- **404 Not Found**: Indica que el recurso solicitado no existe.
- **500 Internal Server Error**: Indica un problema en el servidor. Revisa los logs para más detalles.

## Consejos para Debugging

1. Revisa los encabezados de la solicitud, especialmente el token JWT.
2. Verifica el formato del cuerpo de la solicitud, especialmente para POST y PUT.
3. Comprueba los logs del servidor para mensajes de error detallados.
4. Para problemas con ID de MongoDB, asegúrate de que son strings hexadecimales de 24 caracteres.
````

## File: frontend/eslint.config.js
````javascript
export default tseslint.config(
````

## File: frontend/index.html
````html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
````

## File: frontend/src/api/playerService.ts
````typescript
import axios from 'axios';
import { 
  Player, 
  PlayersResponse, 
  CreatePlayerData, 
  UpdatePlayerData, 
  PlayerFilters,
  UpdatePlayerStatsData
} from '../types';
⋮----
/**
 * Servicio para gestionar jugadores en el backend
 */
⋮----
/**
   * Obtiene un listado paginado de jugadores con filtros
   * @param filters Filtros de búsqueda y paginación
   * @returns Respuesta con listado de jugadores
   */
async getPlayers(filters: PlayerFilters =
⋮----
/**
   * Obtiene un jugador por su ID
   * @param playerId ID del jugador
   * @returns Datos del jugador
   */
async getPlayerById(playerId: string): Promise<Player>
⋮----
/**
   * Crea un nuevo jugador
   * @param playerData Datos del jugador
   * @returns Datos del jugador creado
   */
async createPlayer(playerData: CreatePlayerData): Promise<Player>
⋮----
/**
   * Actualiza un jugador existente
   * @param playerId ID del jugador
   * @param playerData Datos a actualizar
   * @returns Datos del jugador actualizado
   */
async updatePlayer(
    playerId: string,
    playerData: UpdatePlayerData
): Promise<Player>
⋮----
/**
   * Actualiza las estadísticas de un jugador
   * @param playerId ID del jugador
   * @param statsData Datos de estadísticas a actualizar
   * @returns Datos del jugador con estadísticas actualizadas
   */
async updatePlayerStats(
    playerId: string,
    statsData: UpdatePlayerStatsData
): Promise<Player>
⋮----
/**
   * Elimina un jugador (baja lógica)
   * @param playerId ID del jugador
   * @returns Mensaje de confirmación
   */
async deletePlayer(playerId: string): Promise<
````

## File: frontend/src/components/layout/Footer.tsx
````typescript
import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
````

## File: frontend/src/components/layout/MainLayout.tsx
````typescript
import React, { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';
import Footer from './Footer';
⋮----
const handleDrawerToggle = () =>
````

## File: frontend/src/components/players/index.ts
````typescript

````

## File: frontend/src/components/players/PlayerForm.tsx
````typescript
import { useState, useEffect } from 'react';
import { 
  Grid, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  FormHelperText, 
  Button, 
  Box, 
  CircularProgress, 
  Switch,
  Avatar,
  IconButton,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { useTeams } from '../../hooks/useTeams';
import { usePlayers } from '../../hooks/usePlayers';
import { CreatePlayerData, UpdatePlayerData } from '../../types';
⋮----
interface PlayerFormProps {
  playerId?: string;
  onClose: () => void;
  onSaved?: () => void; // Callback opcional para notificar cuando se guarda exitosamente
}
⋮----
onSaved?: () => void; // Callback opcional para notificar cuando se guarda exitosamente
⋮----
// Estados iniciales para el formulario
⋮----
// Estado para errores de validación
⋮----
// Estado para foto de perfil
⋮----
// Cargar equipos al montar
⋮----
// Si es edición, cargar datos del jugador
⋮----
// Actualizar formulario cuando se carga un jugador
⋮----
// Si el equipo es un objeto, extraer su ID
⋮----
// Si hay foto de perfil, establecer la preview
⋮----
// Manejar cambios en el formulario para inputs de texto
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
⋮----
// Limpiar error cuando se modifica un campo
⋮----
// Manejar cambios en selects
const handleSelectChange = (e: SelectChangeEvent) =>
⋮----
// Limpiar error cuando se modifica un campo
⋮----
// Manejar cambio en checkbox
const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) =>
⋮----
// Manejar cambio de foto
const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) =>
⋮----
// Generar preview
⋮----
// Validar campos del formulario
const validateForm = (): boolean =>
⋮----
// Manejar envío del formulario
const handleSubmit = async (e: React.FormEvent) =>
⋮----
// Aquí se manejaría la lógica para subir la foto y obtener URL
// Para este ejemplo, solo simulamos que se guarda la URL actual si existe
⋮----
// Eliminar el campo equipo si está vacío para evitar error de conversión a ObjectId
⋮----
// Si hay foto nueva, simular que tenemos una URL (en un caso real, se subiría)
⋮----
// En un caso real, aquí subiríamos la foto a un servicio como S3
// Y luego asignaríamos la URL resultante
playerData.fotoPerfil = fotoPreview; // Simulación
⋮----
// Mantener la foto existente
⋮----
// Actualizar jugador existente
⋮----
// Notificar al componente padre antes de cerrar
⋮----
// Cerrar el formulario después de guardar exitosamente
⋮----
// Crear nuevo jugador
// Eliminar activo para crear jugador (solo se usa en actualización)
⋮----
// Usar type assertion para asegurarse de que se puede acceder a 'activo'
⋮----
// Notificar al componente padre antes de cerrar
⋮----
// Cerrar el formulario después de guardar exitosamente
⋮----
{/* Foto de perfil */}
⋮----
accept="image/*"
                id="foto-input"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFotoChange}
              />
              <IconButton color="primary" component="span" aria-label="subir foto">
                <PhotoCamera />
              </IconButton>
            </label>
          </Box>
        </Grid>
        
        {/* Datos personales */}
⋮----
{/* Datos deportivos */}
⋮----
{/* Datos físicos */}
⋮----
{/* Estado (solo en edición) */}
⋮----
{/* Botones de acción */}
````

## File: frontend/src/components/teams/__tests__/TeamForm.test.tsx
````typescript
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TeamForm from '../TeamForm';
⋮----
// Mock de useTeams
⋮----
// Mock de useUsers
⋮----
// Limpiar campo obligatorio
const nombreInput = screen.getByLabelText('Nombre del Equipo');
userEvent.clear(nombreInput);
⋮----
// Intentar enviar el formulario
const submitButton = screen.getByText(/Crear Equipo/i);
userEvent.click(submitButton);
⋮----
// Verificar que aparece mensaje de error
await waitFor(() =>
⋮----
const cancelButton = screen.getByText('Cancelar');
fireEvent.click(cancelButton);
⋮----
expect(onCloseMock).toHaveBeenCalledTimes(1);
⋮----
// Este test verifica la presencia del selector de entrenadores
// Comprobar que podemos encontrar la opción Entrenador en algún lugar usando getAllByText
// ya que puede haber múltiples elementos con este texto
const entrenadorElements = screen.getAllByText('Entrenador');
expect(entrenadorElements.length).toBeGreaterThan(0);
⋮----
// Verificar que existe un elemento dialog para el formulario
````

## File: frontend/src/components/teams/RandomTeamsGenerator.tsx
````typescript
import React, { useState } from 'react';
import { 
  Button, 
  Box, 
  Typography, 
  CircularProgress, 
  Alert, 
  Paper, 
  Snackbar,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import randomTeamService from '../../utils/randomTeamGenerator';
import { TeamResponse } from '../../types';
⋮----
/**
 * Componente para generar equipos aleatorios para pruebas
 */
⋮----
/**
   * Maneja la generación de equipos aleatorios
   */
const handleGenerateTeams = async () =>
⋮----
const cantidad = 5; // Generamos 5 equipos como solicitó el usuario
⋮----
// Contamos cuántos equipos se crearon con éxito
⋮----
{/* Notificaciones */}
````

## File: frontend/src/hooks/__tests__/useAuth.test.tsx
````typescript
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { useAuth } from '../useAuth';
import authReducer from '../../store/slices/auth/authSlice';
⋮----
import { Usuario, LoginData, RegisterData } from '../../types';
⋮----
// Tipo para store preloaded state
interface PreloadedState {
  auth: {
    user: Usuario | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  };
}
⋮----
// Mock de las acciones asíncronas (thunks)
⋮----
// Mock del usuario para pruebas
⋮----
// Configuración de wrapper para renderHook con Redux Provider
const createWrapper = (initialState:
⋮----
// Estado inicial para tests
⋮----
// Resetear mocks entre pruebas
⋮----
// Verificar que el hook retorna los valores correctos
⋮----
// Mock de la función dispatch que retorna el thunk
⋮----
// Verificar que thunks.login fue llamado con los datos correctos
⋮----
// No podemos verificar que dispatch fue llamado con el thunk porque lo hemos mockeado
⋮----
// Mock de la función dispatch que retorna el thunk
⋮----
// Verificar que thunks.register fue llamado con los datos correctos
⋮----
// Mock de la función dispatch que retorna el thunk
⋮----
// Verificar que thunks.logout fue llamado
⋮----
// Mock de la función dispatch que retorna el thunk
⋮----
// Verificar que thunks.getCurrentUser fue llamado
⋮----
// Usuario con rol 'admin'
⋮----
// Estado con usuario que tiene un rol del backend
⋮----
// 'usuario' del backend debería mapearse a 'player' en el frontend
````

## File: frontend/src/hooks/usePlayers.ts
````typescript
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { playersSelectors, playersThunks } from '../store/slices/players';
import {
  PlayerFilters,
  CreatePlayerData,
  UpdatePlayerData,
  UpdatePlayerStatsData
} from '../types';
⋮----
/**
 * Hook personalizado para gestionar jugadores
 * @returns Métodos y estado relacionados con jugadores
 */
export const usePlayers = () =>
⋮----
// Seleccionar datos del estado
⋮----
// Métodos memorizados para reducir re-renderizados
⋮----
// Filtrar jugadores por equipo (memorizado)
⋮----
// Filtrar jugadores por posición (memorizado)
⋮----
// Filtrar jugadores activos (memorizado)
⋮----
// Estado
⋮----
// Acciones principales
⋮----
// Utilidades de filtrado
````

## File: frontend/src/hooks/useUsers.ts
````typescript
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { usersSelectors, usersThunks } from '../store/slices/users';
import { UserFormData, PaginationParams } from '../types';
⋮----
// Hook personalizado para la gestión de usuarios
export const useUsers = () =>
⋮----
// Obtener información del estado
⋮----
// Definir funciones para interactuar con el slice
⋮----
// Cargar usuarios
⋮----
// Cargar un usuario por ID
⋮----
// Crear un nuevo usuario
⋮----
// Actualizar un usuario existente
⋮----
// Eliminar un usuario
⋮----
// Retornar información y funciones
⋮----
// Datos del estado
⋮----
// Acciones
````

## File: frontend/src/pages/__tests__/Teams.test.tsx
````typescript
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { vi } from 'vitest';
import Teams from '../Teams';
import { BrowserRouter } from 'react-router-dom';
⋮----
// Mock de useTeams
⋮----
// Mock del hook useTeams
⋮----
// Mock de componentes
⋮----
const renderWithStoreAndRouter = (ui: React.ReactElement, state = initialState) =>
⋮----
// Verificar que los elementos principales están presentes
````

## File: frontend/src/pages/Dashboard.tsx
````typescript
import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar 
} from '@mui/material';
import {
  SportsSoccer as SoccerIcon,
  People as PeopleIcon,
  CalendarToday as CalendarIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';
⋮----
// Datos de ejemplo para el dashboard
⋮----
{/* Estadísticas rápidas */}
⋮----
{/* Próximos partidos */}
⋮----
{/* Tabla de posiciones resumida */}
````

## File: frontend/src/pages/Home.tsx
````typescript
import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Paper, 
  Typography,
  Card,
  CardContent
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link as RouterLink } from 'react-router-dom';
⋮----
{/* Hero Section */}
⋮----
{/* Features Section */}
````

## File: frontend/src/pages/Players.tsx
````typescript
import { useEffect, useState, useCallback } from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Button, 
  TextField, 
  IconButton, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  CircularProgress
} from '@mui/material';
import { 
  Add as AddIcon, 
  Delete as DeleteIcon, 
  Edit as EditIcon, 
  Info as InfoIcon
} from '@mui/icons-material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { usePlayers } from '../hooks/usePlayers';
import { useTeams } from '../hooks/useTeams';
import { PlayerFilters } from '../types';
import { TeamListItem } from '../types/teams';
import { useNavigate } from 'react-router-dom';
import { esESGrid } from '../utils/dataGridLocale';
import { PlayerForm } from '../components/players';
⋮----
// Función para aplicar los filtros a la petición - ahora memoizada
⋮----
// Intentamos determinar si es nombre o apellido
⋮----
// Solo aplicamos el filtro de activo cuando queremos ver específicamente los activos
⋮----
// Si soloActivos es false, no enviamos el parámetro activo para que el backend devuelva todos
⋮----
// Manejar cambios de paginación
const handlePageChange = (page: number) =>
⋮----
// Manejar cambios en el tamaño de página
const handlePageSizeChange = (pageSize: number) =>
⋮----
// Manejar búsqueda
const handleSearch = () =>
⋮----
// Manejar cambios en filtros
const handlePosicionChange = (event: SelectChangeEvent) =>
⋮----
const handleEquipoChange = (event: SelectChangeEvent) =>
⋮----
const handleActivosChange = (event: SelectChangeEvent) =>
⋮----
// Manejar creación de jugador
const handleCreatePlayer = () =>
⋮----
// Manejar edición de jugador
const handleEditPlayer = (id: string) =>
⋮----
// Manejar cierre de formulario
const handleCloseForm = () =>
⋮----
// Manejar confirmación de eliminación
const handleConfirmDelete = (id: string) =>
⋮----
// Manejar eliminación de jugador
const handleDeletePlayer = () =>
⋮----
// Recargar datos después de eliminar
⋮----
// Marcar la actualización como completada
⋮----
// Función para capitalizar texto
const capitalizeFirstLetter = (str: string | null | undefined): string =>
⋮----
// Manejar vista detallada del jugador
const handleViewPlayerDetail = (id: string) =>
⋮----
// Obtener el nombre del equipo dado un ID o un objeto de equipo
const getTeamName = (teamId: string | TeamListItem | null | undefined) =>
⋮----
// Definir columnas para la tabla
⋮----
// Cargar jugadores y equipos al montar el componente
⋮----
fetchTeams({ page: 1, limit: 100 }); // Cargamos todos los equipos para los filtros
⋮----
{/* Modal de confirmación para eliminar */}
⋮----
{/* Aquí iría el formulario de creación/edición de jugadores */}
⋮----
// Recargar datos después de crear/editar
⋮----
// Desactivar el estado de actualización después de un tiempo
````

## File: frontend/src/pages/TeamDetail.tsx
````typescript
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Divider, 
  Avatar, 
  Chip, 
  Button, 
  Paper, 
  IconButton, 
  CircularProgress, 
  Alert, 
  Tab, 
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon, 
  Edit as EditIcon, 
  Person as PersonIcon,
  Group as GroupIcon,
  EmojiEvents as EmojiEventsIcon,
  DataUsage as DataUsageIcon
} from '@mui/icons-material';
import { useTeams } from '../hooks/useTeams';
⋮----
// Tipo de pestañas disponibles
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
⋮----
// Componente para el contenido de las pestañas
⋮----
// Datos ficticios para estadísticas (se reemplazarían con datos reales del API)
⋮----
// Datos ficticios para jugadores (se reemplazarían con datos reales del API)
⋮----
// Función para capitalizar primera letra
⋮----
// Función para formatear el tipo
const formatTipo = (tipo: string): string =>
⋮----
const handleTabChange = (_event: React.SyntheticEvent, newValue: number) =>
⋮----
const handleBackClick = () =>
⋮----
const handleEditClick = () =>
⋮----
{/* Cabecera */}
⋮----
{/* Tarjeta de información general */}
⋮----
{/* Pestañas para diferentes secciones */}
⋮----
{/* Panel de Jugadores */}
⋮----
{/* Panel de Estadísticas */}
⋮----
{/* Panel de Partidos */}
````

## File: frontend/src/pages/UserProfile.tsx
````typescript
import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Grid,
  Avatar,
  Divider,
  Alert,
  Tab,
  Tabs,
  LinearProgress
} from '@mui/material';
import { Person, Edit, Save, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { UpdateProfileData, ChangePasswordData } from '../types';
⋮----
// Componente TabPanel para pestañas
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
⋮----
// Función para crear props de accesibilidad para tabs
⋮----
// Función para calcular la fortaleza de la contraseña
const calculatePasswordStrength = (password: string): number =>
⋮----
// Longitud mínima
⋮----
// Contiene números
⋮----
// Contiene letras minúsculas y mayúsculas
⋮----
// Contiene caracteres especiales
⋮----
// Componente de Perfil de Usuario
⋮----
// Estado para las pestañas
⋮----
// Estados para el formulario de perfil
⋮----
// Estados para el formulario de contraseña
⋮----
// Calcular fortaleza de la contraseña
⋮----
// Efecto para cargar datos del usuario
⋮----
// Manejadores para cambios en las pestañas
const handleTabChange = (_event: React.SyntheticEvent, newValue: number) =>
⋮----
// Resetear mensajes de éxito al cambiar de pestaña
⋮----
// Manejadores para el formulario de perfil
const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
⋮----
// Limpiar mensaje de éxito al editar
⋮----
const handleEditProfile = () =>
⋮----
const handleSaveProfile = async () =>
⋮----
const handleCancelEdit = () =>
⋮----
// Restaurar valores originales
⋮----
// Manejadores para el formulario de contraseña
const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
⋮----
// Validar que las contraseñas coincidan
⋮----
// Si se está cambiando la nueva contraseña, verificar que coincida con la confirmación
⋮----
// Limpiar mensaje de éxito al editar
⋮----
const handleChangePassword = async () =>
⋮----
// Validar que las contraseñas coincidan
⋮----
// Validar fortaleza mínima de la contraseña
⋮----
// Limpiar el formulario
⋮----
// Si no hay usuario autenticado, redirigir al login
⋮----
{/* Pestaña de Información Personal */}
⋮----
{/* Pestaña de Cambio de Contraseña */}
⋮----
{/* Indicador de fortaleza de contraseña */}
````

## File: frontend/src/setupTests.ts
````typescript

````

## File: frontend/src/store/__tests__/middleware/errorMiddleware.test.ts
````typescript
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from '@reduxjs/toolkit';
import errorMiddleware from '../../middleware/errorMiddleware';
import { RootState } from '../../index';
⋮----
// Mock para console.error
⋮----
// Mock de la API de middleware
⋮----
// Arrange
⋮----
// Act
⋮----
// Assert
````

## File: frontend/src/store/__tests__/middleware/index.test.ts
````typescript
import { describe, test, expect } from 'vitest';
import middlewares from '../../middleware';
import errorMiddleware from '../../middleware/errorMiddleware';
import loggerMiddleware from '../../middleware/loggerMiddleware';
````

## File: frontend/src/store/__tests__/slices/auth/authSlice.test.ts
````typescript
import { describe, test, expect, beforeEach, vi } from 'vitest';
import authReducer, { 
  authStart, 
  authSuccess, 
  authFail, 
  logout, 
  updateProfile, 
  clearErrors 
} from '../../../slices/auth/authSlice';
import { Usuario } from '../../../../types';
⋮----
// Mock de localStorage para las pruebas
⋮----
// Sobrescribir localStorage global en los tests
⋮----
// Estado inicial esperado cuando no hay datos en localStorage
⋮----
// Resetear mocks entre pruebas
⋮----
// Simular que no hay datos en localStorage
⋮----
// Estado inicial cuando localStorage está vacío
⋮----
// Verificar que el estado se actualiza correctamente
⋮----
// Verificar que localStorage se actualiza
⋮----
// Estado inicial con usuario autenticado
⋮----
// Verificar que el estado se resetea
⋮----
// Verificar que localStorage se limpia
⋮----
// Estado inicial con usuario autenticado
⋮----
// Verificar que solo se actualiza el usuario
⋮----
// Verificar que localStorage se actualiza
⋮----
// Estado inicial con error
⋮----
// Verificar que solo se limpia el error
````

## File: frontend/src/store/__tests__/slices/auth/selectors.test.ts
````typescript
import { describe, test, expect } from 'vitest';
import { 
  selectUser, 
  selectToken, 
  selectIsAuthenticated, 
  selectLoading, 
  selectError, 
  selectUserRole,
  selectHasRole
} from '../../../slices/auth/selectors';
import { RootState } from '../../../index';
import { Usuario } from '../../../../types';
⋮----
// Mock de usuario para pruebas
⋮----
// Mock del estado de la aplicación
⋮----
// Estado con error
⋮----
// Estado con loading
⋮----
// Estado sin autenticación
⋮----
// Usuario con rol 'admin'
⋮----
// Probar mapeo de roles del backend al frontend
⋮----
// Cuando no hay usuario
````

## File: frontend/src/store/__tests__/slices/auth/thunks.test.ts
````typescript
import { describe, test, expect } from 'vitest';
import { authStart, authSuccess, authFail, logout as logoutAction } from '../../../slices/auth/authSlice';
import { Usuario } from '../../../../types';
⋮----
// Mock para la respuesta de la API
````

## File: frontend/src/store/__tests__/slices/teams/selectors.test.ts
````typescript
import { describe, test, expect } from 'vitest';
import { 
  selectTeams,
  selectSelectedTeam,
  selectLoading,
  selectError,
  selectTotal,
  selectPage,
  selectLimit,
  selectPagination,
  selectHasTeams,
  selectTeamById
} from '../../../slices/teams/selectors';
import { RootState } from '../../../index';
import { TeamListItem } from '../../../../types';
⋮----
// Mock de equipos para pruebas
⋮----
// Mock del estado de la aplicación
````

## File: frontend/src/store/__tests__/slices/teams/teamsSlice.test.ts
````typescript
import { describe, test, expect } from 'vitest';
import teamsReducer, { 
  teamsLoading, 
  teamsLoadSuccess, 
  teamLoadSuccess, 
  teamCreateSuccess, 
  teamUpdateSuccess, 
  teamDeleteSuccess, 
  teamsFail, 
  clearSelectedTeam, 
  clearErrors 
} from '../../../slices/teams/teamsSlice';
import { TeamListItem } from '../../../../types';
⋮----
// Estado inicial esperado
⋮----
// Mock de datos de equipo para pruebas
⋮----
// El nuevo equipo debe ser añadido al principio del array
⋮----
// Verificar que se ha actualizado el equipo en la lista
⋮----
// Verificar que se ha actualizado el equipo seleccionado
⋮----
// Verificar que se ha actualizado el equipo en la lista
⋮----
// Verificar que NO se ha actualizado el equipo seleccionado porque es distinto
⋮----
// Verificar que se ha eliminado el equipo
⋮----
// Verificar que se ha eliminado el equipo y el selectedTeam se ha puesto a null
⋮----
// Verificar que no se modifican otros campos
````

## File: frontend/src/store/__tests__/slices/users/selectors.test.ts
````typescript
import { describe, test, expect } from 'vitest';
import { 
  selectUsers,
  selectSelectedUser,
  selectLoading,
  selectError,
  selectTotal,
  selectPage,
  selectLimit,
  selectPagination,
  selectHasUsers,
  selectUserById
} from '../../../slices/users/selectors';
import { RootState } from '../../../index';
import { UserListItem } from '../../../../types';
⋮----
// Mock de usuarios para pruebas
⋮----
// Mock del estado de la aplicación
⋮----
// Estado vacío
⋮----
// Estado con carga
⋮----
// Estado con error
⋮----
expect(pagination.totalPages).toBe(2); // 10/5 = 2 páginas
⋮----
expect(pagination.totalPages).toBe(3); // 11/5 = 2.2 -> 3 páginas
⋮----
expect(selectUserById(mockRootState, '3')).toBeNull(); // ID no existente
expect(selectUserById(emptyState, '1')).toBeNull(); // Estado vacío
````

## File: frontend/src/store/__tests__/slices/users/usersSlice.test.ts
````typescript
import { describe, test, expect } from 'vitest';
import usersReducer, { 
  usersLoading, 
  usersLoadSuccess, 
  userLoadSuccess, 
  userCreateSuccess, 
  userUpdateSuccess, 
  userDeleteSuccess, 
  usersFail, 
  clearSelectedUser, 
  clearErrors 
} from '../../../slices/users/usersSlice';
import { UserListItem } from '../../../../types';
⋮----
// Estado inicial esperado
⋮----
// Mock de datos de usuario para pruebas
⋮----
// El nuevo usuario debe ser añadido al principio del array
⋮----
// Verificar que se ha actualizado el usuario en la lista
⋮----
// Verificar que se ha actualizado el usuario seleccionado
⋮----
// Verificar que se ha actualizado el usuario en la lista
⋮----
// Verificar que NO se ha actualizado el usuario seleccionado porque es distinto
⋮----
// Verificar que se ha eliminado el usuario
⋮----
// Verificar que se ha eliminado el usuario y el selectedUser se ha puesto a null
⋮----
// Verificar que no se modifican otros campos
````

## File: frontend/src/store/middleware/errorMiddleware.ts
````typescript
import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';
⋮----
// Middleware para manejo de errores de API
const errorMiddleware: Middleware = (/* { dispatch } */) => (next) => (action) => {
// Cuando una acción asíncrona (thunk) es rechazada
⋮----
// Podemos obtener el payload del error
⋮----
// Aquí podríamos despachar una acción para mostrar un mensaje de error
// o enviar el error a un servicio de monitoreo
⋮----
// También podríamos manejar diferentes tipos de errores según su código
⋮----
// Manejo de errores de autenticación (401)
⋮----
// Aquí podríamos despachar una acción para redirigir al login
// dispatch(logout());
⋮----
// Manejo de errores de permisos (403)
⋮----
// Aquí podríamos despachar una acción para mostrar un mensaje
⋮----
// Manejo de errores de servidor (500)
⋮----
// Aquí podríamos despachar una acción para mostrar un mensaje
⋮----
// Siempre pasar la acción al siguiente middleware
````

## File: frontend/src/store/middleware/index.ts
````typescript
import errorMiddleware from './errorMiddleware';
import loggerMiddleware from './loggerMiddleware';
⋮----
// Exportar todos los middlewares desde un único punto
````

## File: frontend/src/store/slices/auth/authSlice.ts
````typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Usuario } from '../../../types';
⋮----
// Definir interfaces para el estado
interface AuthState {
  user: Usuario | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
⋮----
// Estado inicial
⋮----
// Crear slice
⋮----
// Iniciar proceso de login/registro
⋮----
// Login/registro exitoso
⋮----
// Guardar en localStorage
⋮----
// Login/registro fallido
⋮----
// Logout
⋮----
// Limpiar localStorage
⋮----
// Actualizar datos de perfil
⋮----
// Limpiar errores
⋮----
// Exportar acciones y reducer
````

## File: frontend/src/store/slices/players/index.ts
````typescript
import playersReducer, { 
  playersLoading, 
  playersLoadSuccess, 
  playerLoadSuccess, 
  playerCreateSuccess, 
  playerUpdateSuccess,
  playerStatsUpdateSuccess,
  playerDeleteSuccess, 
  playersFail, 
  clearSelectedPlayer, 
  clearErrors,
  resetPlayers
} from './playersSlice';
````

## File: frontend/src/store/slices/players/playersSlice.ts
````typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Player, PlayersState } from '../../../types';
⋮----
// Estado inicial
⋮----
// Crear slice
⋮----
// Iniciar carga de datos
⋮----
// Carga de lista de jugadores exitosa
⋮----
// Carga de un solo jugador exitosa
⋮----
// Creación de jugador exitosa
⋮----
// Añadir el nuevo jugador a la lista si ya hay jugadores cargados
⋮----
// Actualización de jugador exitosa
⋮----
// Asegurarse de que el jugador actualizado reemplace completamente al anterior en la lista
⋮----
// Creamos una nueva referencia del array completo para forzar la actualización en React
⋮----
// Reemplazamos el jugador con una nueva referencia para asegurar re-render
⋮----
// Actualizamos el estado con el nuevo array
⋮----
// Actualización de estadísticas de jugador exitosa
⋮----
// Actualizar el jugador en la lista si ya está cargado
⋮----
// Eliminación de jugador exitosa
⋮----
// Si el jugador eliminado es el que está seleccionado, limpiarlo
⋮----
// Eliminar el jugador de la lista o marcarlo como inactivo
⋮----
// Error en operaciones de jugadores
⋮----
// Limpiar jugador seleccionado
⋮----
// Limpiar errores
⋮----
// Resetear estado
⋮----
// Exportar acciones y reducer
````

## File: frontend/src/store/slices/players/selectors.ts
````typescript
import { RootState } from '../../index';
import { createSelector } from '@reduxjs/toolkit';
⋮----
// Selector para obtener la lista de jugadores
export const selectPlayers = (state: RootState)
⋮----
// Selector para obtener el jugador seleccionado
export const selectSelectedPlayer = (state: RootState)
⋮----
// Selector para verificar si se están cargando datos
export const selectLoading = (state: RootState)
⋮----
// Selector para obtener errores
export const selectError = (state: RootState)
⋮----
// Selector para obtener el estado de éxito
export const selectSuccess = (state: RootState)
⋮----
// Selector para obtener la paginación
export const selectPagination = (state: RootState)
⋮----
// Selector para verificar si existen jugadores
export const selectHasPlayers = (state: RootState)
⋮----
// Selector para obtener jugador por ID
export const selectPlayerById = (state: RootState, playerId: string)
⋮----
// Selector para obtener jugadores por equipo
⋮----
// Selector para obtener jugadores por posición
⋮----
// Selector para obtener jugadores activos
````

## File: frontend/src/store/slices/players/thunks.ts
````typescript
import { createAsyncThunk } from '@reduxjs/toolkit';
import { playerService } from '../../../api';
import { 
  PlayerFilters, 
  CreatePlayerData, 
  UpdatePlayerData,
  UpdatePlayerStatsData 
} from '../../../types';
import {
  playersLoading,
  playersLoadSuccess,
  playerLoadSuccess,
  playerCreateSuccess,
  playerUpdateSuccess,
  playerStatsUpdateSuccess,
  playerDeleteSuccess,
  playersFail
} from './playersSlice';
import { AppDispatch } from '../../index';
⋮----
// Obtener listado de jugadores
⋮----
// Obtener un jugador por ID
⋮----
// Crear un nuevo jugador
⋮----
// Actualizar un jugador existente
⋮----
// Actualizar estadísticas de un jugador
⋮----
// Eliminar un jugador
````

## File: frontend/src/store/slices/teams/index.ts
````typescript
import teamsReducer, { 
  teamsLoading, 
  teamsLoadSuccess, 
  teamLoadSuccess, 
  teamCreateSuccess, 
  teamUpdateSuccess, 
  teamDeleteSuccess, 
  teamsFail, 
  clearSelectedTeam, 
  clearErrors 
} from './teamsSlice';
````

## File: frontend/src/store/slices/teams/selectors.ts
````typescript
import { RootState } from '../../index';
import { createSelector } from '@reduxjs/toolkit';
⋮----
// Selector para obtener la lista de equipos
export const selectTeams = (state: RootState)
⋮----
// Selector para obtener el equipo seleccionado
export const selectSelectedTeam = (state: RootState)
⋮----
// Selector para verificar si se están cargando datos
export const selectLoading = (state: RootState)
⋮----
// Selector para obtener errores
export const selectError = (state: RootState)
⋮----
// Selector para obtener el total de equipos
export const selectTotal = (state: RootState)
⋮----
// Selector para obtener la página actual
export const selectPage = (state: RootState)
⋮----
// Selector para obtener el límite de equipos por página
export const selectLimit = (state: RootState)
⋮----
// Selector para obtener información de paginación (usando memoización)
⋮----
// Selector para verificar si existen equipos
export const selectHasTeams = (state: RootState)
⋮----
// Selector para obtener equipo por ID
export const selectTeamById = (state: RootState, teamId: string)
````

## File: frontend/src/store/slices/users/index.ts
````typescript
import usersReducer, { 
  usersLoading, 
  usersLoadSuccess, 
  userLoadSuccess, 
  userCreateSuccess, 
  userUpdateSuccess, 
  userDeleteSuccess, 
  usersFail, 
  clearSelectedUser, 
  clearErrors 
} from './usersSlice';
````

## File: frontend/src/store/slices/users/thunks.ts
````typescript
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userService } from '../../../api';
import { UserFormData, PaginationParams } from '../../../types';
import { 
  usersLoading, 
  usersLoadSuccess, 
  userLoadSuccess, 
  userCreateSuccess, 
  userUpdateSuccess, 
  userDeleteSuccess, 
  usersFail 
} from './usersSlice';
import { AppDispatch } from '../../index';
⋮----
// Obtener listado de usuarios
⋮----
// Obtener un usuario por ID
⋮----
// Crear un nuevo usuario
⋮----
// Actualizar un usuario
⋮----
// Eliminar un usuario
````

## File: frontend/src/store/slices/users/usersSlice.ts
````typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserListItem } from '../../../types';
⋮----
// Definir interfaces para el estado
interface UsersState {
  users: UserListItem[];
  selectedUser: UserListItem | null;
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  limit: number;
}
⋮----
// Estado inicial
⋮----
// Crear slice
⋮----
// Iniciar carga de datos
⋮----
// Carga de lista de usuarios exitosa
⋮----
// Carga de usuario individual exitosa
⋮----
// Creación de usuario exitosa
⋮----
// Actualización de usuario exitosa
⋮----
// Eliminación de usuario exitosa
⋮----
// Fallo en operaciones de usuarios
⋮----
// Limpiar usuario seleccionado
⋮----
// Limpiar errores
⋮----
// Exportar acciones y reducer
````

## File: frontend/src/test/setup.ts
````typescript
import { vi } from 'vitest'
⋮----
// Mock para elementos que no existen en JSDOM
````

## File: frontend/src/test/setup/__mocks__/@mui_x-data-grid/index.js
````javascript
// Mock para el DataGrid de MUI
const DataGrid = vi.fn().mockImplementation(({ loading, localeText, columns }) => {
return React.createElement('div', { 'data-testid': 'data-grid' }, [
loading && React.createElement('div', { 'data-testid': 'loading-indicator', key: 'loading' }, 'Cargando...'),
⋮----
React.createElement('div', { 'data-testid': 'pagination-text', key: 'pagination' }, localeText.MuiTablePagination.labelRowsPerPage),
⋮----
React.createElement('div', { key: 'columns-count' }, [
⋮----
Array.isArray(columns) ? columns.length : 0
⋮----
columns && Array.isArray(columns) && columns.map((col, index) =>
⋮----
React.createElement('div', { key: index, 'data-testid': `column-${col.field}` },
React.createElement('div', { 'data-testid': 'estado-cell' },
col.renderCell({
⋮----
// Exportar los componentes mockeados
⋮----
// Exportar clases y tipos mockeados
export function GridColDef() {}
export function GridRenderCellParams() {}
⋮----
// Exportar por defecto
````

## File: frontend/src/test/setup/hooks/index.ts
````typescript
// Exportamos los mocks de hooks desde un único punto de entrada
````

## File: frontend/src/test/setup/hooks/useUsersMock.ts
````typescript
import { vi } from 'vitest';
import { createMockUsers } from '../test-helpers';
⋮----
// Definición del tipo para el mock de useUsers
export type MockUseUsersType = ReturnType<typeof createBaseMockUseUsers>;
⋮----
// Función para crear el mock básico del hook useUsers
export const createBaseMockUseUsers = () => (
⋮----
// Mock para el hook useUsers
export const mockUseUsers = () =>
⋮----
// Mockeamos el módulo completo
⋮----
// Importamos el módulo mockeado dinámicamente
⋮----
// Usamos import dinámico para evitar el require
// eslint-disable-next-line @typescript-eslint/no-explicit-any
⋮----
// Configuramos el valor de retorno del mock
⋮----
// Variación con paginación
export const createPaginatedMockUseUsers = (page = 3) =>
⋮----
// Variación con estado de carga
export const createLoadingMockUseUsers = () =>
⋮----
// Variación con error
export const createErrorMockUseUsers = (errorMessage = 'Error al cargar usuarios') =>
````

## File: frontend/src/test/setup/index.ts
````typescript
// Re-exportamos todo desde un único punto de entrada
````

## File: frontend/src/test/setup/mocks/index.ts
````typescript
// Exportamos todos los mocks desde un único punto de entrada
⋮----
// Re-exportamos inicializeMocks como función principal
````

## File: frontend/src/test/setup/mocks/ui-components.tsx
````typescript
import React from 'react';
import { vi } from 'vitest';
⋮----
// No usamos JSX directamente aquí para evitar problemas de transpilación
// Mock simplificado para Box y otros componentes de MUI
export function mockMUIComponents()
⋮----
// Iconos como componentes simples
⋮----
// Mock para DataGrid de MUI X
export function mockDataGridComponents()
⋮----
// Exportamos una función para inicializar todos los mocks
export function initializeMocks()
````

## File: frontend/src/test/setup/test-helpers.tsx
````typescript
import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import usersReducer from '../../store/slices/users/usersSlice';
import authReducer from '../../store/slices/auth/authSlice';
import teamsReducer from '../../store/slices/teams/teamsSlice';
⋮----
// Interfaz para las opciones extendidas de renderizado
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Record<string, unknown>;
  routePath?: string;
}
⋮----
// Función para crear una tienda con datos preestablecidos
export const setupStore = (preloadedState =
⋮----
// Función de renderizado personalizada con Redux Provider y Router
export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    routePath = '/',
    ...renderOptions
  }: ExtendedRenderOptions = {}
)
⋮----
function Wrapper(
⋮----
// Funciones de utilidad para crear datos de prueba
export const createMockUser = (overrides =
⋮----
export const createMockUsers = (count: number) =>
⋮----
// Estado inicial para las pruebas de usuarios
export const createInitialUsersState = (usersCount = 2) =>
⋮----
// Estado inicial para las pruebas de autenticación
export const createInitialAuthState = (isAuthenticated = false) =>
````

## File: frontend/src/test/setup/test-setup.ts
````typescript
import { vi, expect } from 'vitest';
⋮----
// Extender los matchers de Vitest con los de jest-dom
⋮----
// Mock global para localStorage
⋮----
// Configurar localStorage global para todas las pruebas
⋮----
// Helpers para crear mocks comunes
export const createMockAuthHook = (overrides =
⋮----
// Reset de mocks después de cada prueba
````

## File: frontend/src/test/setup/test-utils.ts
````typescript
// Re-exportamos todo desde test-helpers.tsx para mantener compatibilidad
````

## File: frontend/src/test/setup/utils/index.ts
````typescript

````

## File: frontend/src/test/setup/utils/setupMocks.ts
````typescript
import { vi } from 'vitest';
import type { MockUseUsersType } from '../hooks/useUsersMock';
import { createBaseMockUseUsers } from '../hooks/useUsersMock';
⋮----
// Variable compartida para almacenar el mock y poder manipularlo desde los tests
⋮----
/**
 * Configura todos los mocks necesarios para las pruebas.
 * Esta función debe ser llamada antes de todos los tests que necesiten estos mocks.
 */
export function setupMocks()
⋮----
// Mock para el hook useUsers
⋮----
// Crear instancia inicial del mock
⋮----
// Configuración inicial del mock
⋮----
// Devolvemos referencias a los mocks para que puedan ser manipulados en los tests
⋮----
// Funciones para actualizar los mocks en los tests
⋮----
// Función para reiniciar todos los mocks
````

## File: frontend/src/test/setup/vitest.setup.ts
````typescript
// Este archivo se carga automáticamente antes de todas las pruebas
// gracias a la configuración setupFiles en vitest.config.ts
⋮----
import { afterEach, vi, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
⋮----
// Inicializar los mocks globales que se comparten entre pruebas
import { initializeMocks } from './mocks';
⋮----
// Configurar el timeout para las pruebas para que fallen más rápido
⋮----
testTimeout: 5000, // Reducir el timeout por defecto a 5 segundos
⋮----
// Limpiar después de cada prueba
⋮----
// Configurar matchers adicionales
⋮----
// Inicializamos los mocks centralizados
⋮----
// Otras configuraciones globales
// Ignorar warnings de React específicos si es necesario
⋮----
// ignorar mensajes específicos
⋮----
// Configurar mocks globales (como fetch, localStorage, etc.)
// Esto mejora significativamente el rendimiento al reutilizar los mocks
⋮----
// Sobrescribir solo los componentes/funciones que necesitamos mockear
````

## File: frontend/src/types/css.d.ts
````typescript

````

## File: frontend/src/types/players.ts
````typescript
import { TeamListItem } from './teams';
⋮----
export interface PlayerStats {
  goles: number;
  asistencias: number;
  tarjetasAmarillas: number;
  tarjetasRojas: number;
  partidosJugados: number;
  minutos: number;
}
⋮----
export interface Player {
  _id: string;
  nombre: string;
  apellido: string;
  fechaNacimiento?: string;
  fotoPerfil?: string;
  numeroIdentificacion: string;
  posicion: 'indefinida' | 'portero' | 'defensa' | 'mediocampista' | 'delantero';
  numeroCamiseta?: number;
  equipo?: string | TeamListItem;
  equiposAnteriores?: string[] | TeamListItem[];
  activo: boolean;
  altura?: number;
  peso?: number;
  piePreferido?: 'izquierdo' | 'derecho' | 'ambos';
  estadisticas?: PlayerStats;
  createdAt?: string;
  updatedAt?: string;
}
⋮----
export interface PlayersState {
  players: Player[];
  player: Player | null;
  loading: boolean;
  error: string | null;
  success: boolean;
  pagination: {
    totalPlayers: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  } | null;
}
⋮----
export interface PlayersResponse {
  players: Player[];
  pagination: {
    totalPlayers: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}
⋮----
export interface PlayerFilters {
  nombre?: string;
  apellido?: string;
  posicion?: string;
  equipo?: string;
  activo?: boolean;
  page?: number;
  limit?: number;
}
⋮----
export interface CreatePlayerData {
  nombre: string;
  apellido: string;
  fechaNacimiento?: string;
  fotoPerfil?: string;
  numeroIdentificacion: string;
  posicion: 'indefinida' | 'portero' | 'defensa' | 'mediocampista' | 'delantero';
  numeroCamiseta?: number;
  equipo?: string;
  altura?: number;
  peso?: number;
  piePreferido?: 'izquierdo' | 'derecho' | 'ambos';
}
⋮----
export interface UpdatePlayerData extends Partial<CreatePlayerData> {
  activo?: boolean;
  estadisticas?: PlayerStats;
}
⋮----
export interface UpdatePlayerStatsData {
  estadisticas: PlayerStats;
}
````

## File: frontend/src/utils/dataGridLocale.ts
````typescript
import { GridLocaleText } from '@mui/x-data-grid';
⋮----
// Texto personalizado en español para MUI DataGrid
⋮----
// Texto del footer/paginación
⋮----
// Columnas y filas
⋮----
// Filtros
⋮----
// Barra de herramientas
````

## File: frontend/src/utils/randomTeamGenerator.ts
````typescript
import { TeamFormData } from '../types';
import teamService from '../api/teamService';
⋮----
// Arrays de nombres para generar equipos aleatorios
⋮----
// Sufijos para combinaciones
⋮----
// Categorías disponibles
⋮----
// Tipos de equipo disponibles
⋮----
// URLs de logos válidas
⋮----
/**
 * Genera un nombre de equipo aleatorio
 * @returns Nombre de equipo aleatorio
 */
const generarNombreEquipo = (): string =>
⋮----
// 30% de probabilidad de añadir un sufijo
⋮----
/**
 * Genera datos aleatorios para un equipo
 * @returns Objeto con datos de equipo aleatorios
 */
export const generarEquipoAleatorio = (): TeamFormData =>
⋮----
// Dejamos entrenador vacío (opcional para creación)
⋮----
activo: Math.random() > 0.2 // 80% de probabilidad de estar activo
⋮----
/**
 * Crea un equipo con datos aleatorios
 * @returns Promise con la respuesta del servidor
 */
export const crearEquipoAleatorio = async () =>
⋮----
/**
 * Crea múltiples equipos con datos aleatorios
 * @param cantidad Número de equipos a crear
 * @returns Promise con array de respuestas
 */
export const crearEquiposAleatorios = async (cantidad: number) =>
⋮----
// Pequeña pausa entre creaciones para evitar sobrecarga
````

## File: frontend/src/vite-env.d.ts
````typescript
/// <reference types="vite/client" />
⋮----
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Agrega más variables de entorno según sea necesario
}
⋮----
// Agrega más variables de entorno según sea necesario
⋮----
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
````

## File: frontend/src/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config';
⋮----
// Configuración para acelerar las pruebas
bail: 1, // Detener las pruebas después del primer error
testTimeout: 10000, // Tiempo máximo por prueba en milisegundos (10 segundos)
// Establecer un límite de memoria más bajo para detectar fugas rápidamente
````

## File: frontend/tsconfig.app.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
````

## File: frontend/tsconfig.node.json
````json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
````

## File: liga-futbol-prd.md
````markdown
# PRD: Sistema de Gestión de Ligas de Fútbol 8v8

## 1. Visión General y Objetivos

### Propósito
Crear una plataforma web y móvil que facilite la administración integral de ligas de fútbol 8v8, con capacidad para gestionar equipos, jugadores, partidos, estadísticas y contenido multimedia. La plataforma está diseñada para ser vendida como servicio a múltiples ligas, ofreciendo una solución completa y personalizable.

### Objetivos Clave
- Proporcionar herramientas eficientes para la gestión administrativa de ligas de fútbol 8v8
- Facilitar la comunicación entre administradores, entrenadores y jugadores
- Centralizar la información de la liga (estadísticas, calendario, sanciones)
- Aumentar el engagement mediante contenido multimedia y noticias
- Crear una plataforma escalable y adaptable a diferentes ligas
- Monetizar el sistema mediante la venta a otras organizaciones

## 2. Público Objetivo

### Usuarios Primarios
1. **Administradores de Liga**
   - Control total del sistema
   - Gestión de equipos, jugadores, calendario y contenido
   - Acceso a reportes y configuraciones del sistema

2. **Veedores**
   - Registro de resultados de partidos
   - Carga de eventos (goles, asistencias, tarjetas)
   - Generación de informes de partidos
   - Sin acceso a configuraciones del sistema

3. **Entrenadores/Delegados de Equipo**
   - Gestión de su propio equipo
   - Consulta de información de otros equipos
   - Seguimiento de estadísticas y calendario

4. **Jugadores**
   - Visualización de información general
   - Gestión de su perfil personal
   - Consulta de estadísticas y calendario

### Clientes Potenciales (para venta del sistema)
- Organizadores de ligas amateur de fútbol 8v8
- Asociaciones deportivas locales
- Complejos deportivos con múltiples ligas
- Torneos corporativos o universitarios

## 3. Características y Funcionalidades

### Gestión de Equipos
- **Criterios de Aceptación:**
  - Crear, editar y eliminar equipos
  - Asignar entrenadores/delegados
  - Gestionar plantilla de jugadores
  - Visualizar estadísticas del equipo
  - Mantener un historial del equipo

### Fichaje y Gestión de Jugadores
- **Criterios de Aceptación:**
  - Crear perfiles de jugadores con datos personales
  - Asignar jugadores a equipos
  - Registrar estadísticas individuales
  - Gestionar fichajes y traspasos entre equipos
  - Mostrar historial de equipos por jugador

### Calendarización de Partidos
- **Criterios de Aceptación:**
  - Crear calendarios de temporada automáticos o manuales
  - Asignar fechas, horarios y campos a los partidos
  - Modificar calendario según necesidades
  - Notificar cambios a los equipos afectados
  - Visualizar calendario por equipo, jornada o fecha

### Estadísticas Básicas
- **Criterios de Aceptación:**
  - Permitir a veedores registrar resultados completos de partidos
  - Cargar información de goles con jugador y asistente
  - Calcular automáticamente la tabla de posiciones
  - Mantener estadísticas básicas por equipo (PJ, PG, PE, PP, GF, GC, DG, PTS)
  - Registrar estadísticas individuales simples (goles, asistencias, tarjetas)
  - Exportar datos en formatos comunes (CSV, Excel)
  - Generar informes básicos con filtros por temporada/equipo

### Sistema de Arbitraje
- **Criterios de Aceptación:**
  - Gestionar plantel de árbitros
  - Asignar árbitros a partidos
  - Registrar informes arbitrales
  - Seguimiento de pagos a árbitros
  - Evaluar desempeño de árbitros

### Registro de Sanciones y Tarjetas
- **Criterios de Aceptación:**
  - Registrar tarjetas amarillas y rojas por parte de veedores
  - Calcular automáticamente suspensiones basadas en reglas configurables
  - Notificar a equipos sobre jugadores sancionados
  - Gestionar apelaciones
  - Mantener historial de sanciones
  - Generar reportes de disciplina por equipo/jugador

### Sistema de Noticias/Anuncios
- **Criterios de Aceptación:**
  - Publicar noticias y anuncios
  - Categorizar contenido
  - Incluir imágenes y videos
  - Notificar a usuarios sobre nuevas publicaciones
  - Permitir comentarios (opcional)

### Galería de Fotos/Videos
- **Criterios de Aceptación:**
  - Subir y organizar fotos y videos
  - Clasificar por equipo, partido o evento
  - Compartir en redes sociales
  - Controlar permisos de acceso
  - Optimizar para distintos dispositivos

### Tabla de Posiciones
- **Criterios de Aceptación:**
  - Actualización automática basada en resultados
  - Visualización clara con criterios de desempate
  - Histórico de posiciones por jornada
  - Exportación de datos
  - Visualización en formato web y móvil

### Gestión de Configuración de Liga
- **Criterios de Aceptación:**
  - Personalizar logo y colores de la liga
  - Configurar reglas específicas
  - Definir temporadas y fases
  - Establecer criterios de puntuación y desempate
  - Gestionar permisos de usuarios

### Integración con Pasarelas de Pago
- **Criterios de Aceptación:**
  - Procesar pagos de inscripciones
  - Gestionar multas y penalizaciones
  - Generar facturas y recibos
  - Mantener historial de transacciones
  - Soportar múltiples métodos de pago

## 4. Recomendaciones de Stack Técnico

### Frontend
- **Web**: React.js con TypeScript
  - Material UI o Tailwind CSS para componentes
  - Redux o Context API para gestión de estado
  - React Router para navegación

- **Móvil**: React Native
  - Navegación con React Navigation
  - Componentes reutilizables con Styled Components

### Backend
- **API**: Node.js con Express o NestJS (TypeScript)
  - RESTful API con documentación OpenAPI/Swagger
  - Autenticación JWT con refresh tokens
  - Middleware para validación y autorización

### Base de Datos
- **Primaria**: MongoDB (NoSQL)
  - Flexible para cambios en esquemas
  - Buena escalabilidad horizontal
  - MongoDB Atlas para hosting (tiene plan gratuito)

- **Cache**: Redis (opcional para optimización)
  - Almacenamiento de sesiones
  - Caché de datos frecuentes

### Almacenamiento
- **Imágenes/Videos**: AWS S3 o Cloudinary
  - Optimización automática de imágenes
  - CDN para distribución eficiente
  - Gestión de permisos

### Pasarelas de Pago
- **Principal**: Stripe
  - Comisiones competitivas (2.9% + 0.30€ por transacción)
  - Excelente documentación y soporte
  - Fácil integración con Node.js

- **Alternativa regional**: Mercado Pago (para Latinoamérica)

### Despliegue y Hosting
- **Frontend**: Vercel o Netlify
  - CI/CD integrado
  - SSL gratuito
  - Planes gratuitos generosos

- **Backend**: Railway, Render o DigitalOcean App Platform
  - Escalabilidad según demanda
  - Monitoreo incluido

## 5. Modelo Conceptual de Datos

### Entidades Principales

#### Usuario
- id: string (único)
- nombre: string
- apellido: string
- email: string (único)
- contraseña: string (hash)
- rol: enum [ADMIN, VEEDOR, ENTRENADOR, JUGADOR]
- avatar: string (URL)
- fechaCreacion: date
- ultimoAcceso: date

#### Equipo
- id: string (único)
- nombre: string
- logo: string (URL)
- colorPrimario: string
- colorSecundario: string
- entrenadorId: reference(Usuario)
- jugadores: array(reference(Jugador))
- estadisticas: {
  partidosJugados: number,
  partidosGanados: number,
  partidosEmpatados: number,
  partidosPerdidos: number,
  golesAFavor: number,
  golesEnContra: number,
  puntos: number
}
- fechaCreacion: date
- activo: boolean

#### Jugador
- id: string (único)
- usuarioId: reference(Usuario)
- equipoId: reference(Equipo)
- número: number
- posición: string
- fechaNacimiento: date
- estadisticas: {
  goles: number,
  asistencias: number,
  tarjetasAmarillas: number,
  tarjetasRojas: number,
  partidosJugados: number
}
- historialEquipos: array(object)
- activo: boolean

#### Partido
- id: string (único)
- fechaHora: date
- equipoLocal: reference(Equipo)
- equipoVisitante: reference(Equipo)
- resultadoLocal: number
- resultadoVisitante: number
- campo: string
- jornada: number
- temporada: string
- árbitros: array(reference(Árbitro))
- eventos: array(reference(Evento))
- estado: enum [PROGRAMADO, JUGANDO, FINALIZADO, SUSPENDIDO]

#### Árbitro
- id: string (único)
- usuarioId: reference(Usuario)
- calificación: number
- partidos: array(reference(Partido))
- disponibilidad: array(object)

#### Evento
- id: string (único)
- partidoId: reference(Partido)
- jugadorId: reference(Jugador)
- asistenciaJugadorId: reference(Jugador) (opcional, para goles)
- tipo: enum [GOL, TARJETA_AMARILLA, TARJETA_ROJA]
- minuto: number
- descripción: string

#### Noticia
- id: string (único)
- título: string
- contenido: string
- autor: reference(Usuario)
- imagen: string (URL)
- fechaPublicación: date
- categoría: string
- destacada: boolean

#### Multimedia
- id: string (único)
- tipo: enum [IMAGEN, VIDEO]
- url: string
- título: string
- descripción: string
- fechaSubida: date
- equipoId: reference(Equipo)
- partidoId: reference(Partido)
- autorId: reference(Usuario)

#### Liga
- id: string (único)
- nombre: string
- logo: string (URL)
- temporadaActual: string
- configuración: {
  puntosVictoria: number,
  puntosEmpate: number,
  puntosPerdido: number,
  criteriosDesempate: array(string)
}
- administradores: array(reference(Usuario))
- equipos: array(reference(Equipo))

### Relaciones Principales
- Usuario (1) --- (1) Jugador/Entrenador/Árbitro
- Equipo (1) --- (N) Jugador
- Partido (N) --- (2) Equipo
- Partido (1) --- (N) Evento
- Liga (1) --- (N) Equipo
- Liga (1) --- (N) Temporada

## 6. Principios de Diseño de UI

### Lineamientos Generales
- Diseño simple y funcional orientado a la usabilidad
- Interfaces adaptables (responsive) para web y móvil
- Consistencia visual en todas las secciones
- Esquema de colores personalizable por liga

### Componentes Clave
- **Sistema de Navegación**:
  - Menú principal accesible
  - Navegación por roles
  - Breadcrumbs para secciones profundas

- **Dashboards**:
  - Dashboard administrativo con KPIs
  - Dashboard de equipo con información relevante
  - Dashboard de jugador con estadísticas personales

- **Calendario**:
  - Vista mensual, semanal y diaria
  - Filtrado por equipo o jornada
  - Indicadores visuales de estado de partido

- **Tablas de Datos**:
  - Ordenables y filtrables
  - Paginación para grandes volúmenes
  - Exportación a formatos comunes

- **Perfiles**:
  - Tarjetas de perfil para equipos y jugadores
  - Estadísticas visuales
  - Historial accesible

## 7. Consideraciones de Seguridad

### Autenticación y Autorización
- Implementación de JWT para autenticación
- Refresh tokens para sesiones persistentes
- Control granular de permisos por rol
- Protección contra ataques comunes (CSRF, XSS)

### Protección de Datos
- Encriptación de contraseñas con bcrypt
- Validación de datos en frontend y backend
- Sanitización de inputs para prevenir inyecciones
- Auditoría de acciones críticas

### Privacidad
- Conformidad con GDPR/RGPD
- Políticas claras de privacidad
- Opciones para el consentimiento de uso de datos
- Procedimientos para solicitudes de borrado de datos

### API y Servicios
- Limitación de tasa (rate limiting)
- Autorización por token para endpoints sensibles
- Logs de seguridad para detección de anomalías
- HTTPS obligatorio para todas las comunicaciones

## 8. Fases/Hitos de Desarrollo

### Fase 1: MVP (2-3 meses)
- Sistema de usuarios y autenticación
- CRUD básico de equipos y jugadores
- Calendarización simple de partidos
- Tabla de posiciones básica
- Diseño responsive principal

### Fase 2: Funcionalidades Core (2-3 meses)
- Sistema completo de estadísticas
- Gestión de árbitros
- Registro de tarjetas y sanciones
- Mejoras en calendarización
- Dashboard administrativo

### Fase 3: Contenido y Engagement (1-2 meses)
- Sistema de noticias/anuncios
- Galería de fotos/videos
- Integraciones con redes sociales
- Notificaciones y alertas
- Aplicación móvil básica

### Fase 4: Monetización y Escalabilidad (2-3 meses)
- Integración de pasarelas de pago
- Sistema de multi-tenancy para venta a otras ligas
- Personalización por liga (branding)
- Optimizaciones de rendimiento
- Analíticas avanzadas

### Fase 5: Refinamiento y Features Premium (1-2 meses)
- Características avanzadas solicitadas por usuarios
- Opciones de monetización adicionales
- Mejoras de UX basadas en feedback
- Escalabilidad para mayor volumen de ligas

## 9. Desafíos Potenciales y Soluciones

### Escalabilidad
- **Desafío**: Manejar múltiples ligas simultáneamente.
- **Solución**: Arquitectura multi-tenant, sharding de base de datos por liga.

### Almacenamiento de Media
- **Desafío**: Gestionar gran volumen de imágenes y videos.
- **Solución**: Implementación de CDN, compresión inteligente, políticas de retención.

### Concurrencia
- **Desafío**: Múltiples actualizaciones simultáneas a datos compartidos.
- **Solución**: Bloqueos optimistas, resolución de conflictos, versionado de datos.

### Personalización
- **Desafío**: Permitir personalización por liga sin duplicar código.
- **Solución**: Sistema de temas y configuración, inyección de estilos dinámicos.

### Disponibilidad Offline
- **Desafío**: Acceso a datos críticos sin conexión.
- **Solución**: Implementación de PWA, sincronización inteligente, almacenamiento local.

## 10. Posibilidades de Expansión Futura

### Funcionalidades Adicionales
- Sistema de predicciones y apuestas amistosas
- Transmisiones en vivo de partidos
- Análisis avanzado con estadísticas ampliadas
- Marketplace para equipos (compra-venta de jugadores)
- Aplicación móvil nativa con funcionalidades adicionales

### Integraciones
- APIs para federaciones deportivas
- Wearables para seguimiento de rendimiento
- Sistemas de análisis de video automatizado
- Plataformas de streaming

### Monetización Adicional
- Modelo freemium con características premium
- Publicidad contextual
- Patrocinios integrados
- Suscripciones para fans

### Expansión a Otros Deportes
- Adaptación del sistema para baloncesto, voleibol, etc.
- Framework unificado para distintos tipos de competiciones
- Gestión de instalaciones deportivas multidisciplinares

## 11. Indicadores de Éxito

### KPIs Técnicos
- Tiempo de carga < 1.5 segundos
- Disponibilidad > 99.9%
- Tasa de errores < 0.1%
- Puntuación Google Lighthouse > 85

### KPIs de Negocio
- Número de ligas activas
- Retención de clientes > 90% anual
- Conversión de pruebas gratuitas a planes pagados > 30%
- Crecimiento mensual de usuarios registrados

### KPIs de Usuario
- Satisfacción del usuario > 4.5/5
- Uso diario/semanal por rol de usuario
- Tiempo promedio en la plataforma
- Tasa de abandono < 15%

## 12. Conclusiones

Este PRD define una aplicación completa de gestión de ligas de fútbol 8v8 con potencial para convertirse en un producto SaaS vendible a múltiples organizaciones. El enfoque iterativo del desarrollo permitirá lanzar una versión inicial funcional rápidamente mientras se incorporan gradualmente características más avanzadas.

La arquitectura propuesta está diseñada para ser escalable y personalizable, facilitando la adaptación a las necesidades específicas de cada liga cliente. La elección de tecnologías modernas como React, Node.js y MongoDB proporcionará la flexibilidad necesaria para evolucionar el producto según el feedback de los usuarios.

El éxito del producto dependerá en gran medida de su usabilidad, fiabilidad y capacidad para ofrecer valor real a los administradores de ligas, entrenadores y jugadores, simplificando tareas administrativas y mejorando la experiencia general de participación en la liga.
````

## File: tracking/sprints/sprint-1.md
````markdown
# Sprint 1: Configuración y Arquitectura Base
**Período:** [17-03-2025] - [28-03-2025]

## Objetivos del Sprint
1. Configurar repositorio y estructura de proyecto
2. Implementar autenticación JWT básica
3. Definir esquemas MongoDB iniciales
4. Configurar enrutamiento básico React Router
5. Implementar layout principal responsive
6. Establecer base de pruebas y calidad de código

## Tareas Específicas

### 1. Inicializar proyecto React con TypeScript
- [x] Crear proyecto con ~~Create React App~~ Vite + TypeScript
- [x] Configurar ESLint y Prettier
- [x] Configurar estructura de carpetas
- **Estado:** Completado
- **Notas:** Se migró de Create React App a Vite debido a problemas de compatibilidad con TypeScript 5.x. La migración permitió usar dependencias más modernas y mejorar el rendimiento.

### 2. Configurar proyecto Express con TypeScript
- [x] Inicializar proyecto Express
- [x] Configurar TypeScript
- [x] Configurar estructura de carpetas
- [x] Añadir middleware esencial
- [x] Configurar manejo de base de datos flexible
- **Estado:** Completado
- **Notas:** Configuración básica realizada. Dependencias instaladas. Se ha implementado un sistema flexible que permite utilizar una base de datos MongoDB en memoria cuando no hay conexión a MongoDB disponible.

### 3. Definir esquemas MongoDB iniciales
- [x] Diseñar esquema Usuario
- [x] Diseñar esquema Equipo
- [x] Diseñar esquema Jugador
- [x] Diseñar esquema Partido
- [x] Diseñar esquema Liga (adicional)
- **Estado:** Completado
- **Notas:** Se han creado todos los esquemas necesarios, incluyendo un esquema adicional para Liga que no estaba inicialmente previsto pero era necesario para mantener las relaciones entre entidades.

### 4. Implementar autenticación JWT
- [x] Configurar estrategia JWT
- [x] Implementar rutas de autenticación
- [x] Implementar middleware de autorización
- [x] Implementar pruebas para la autenticación
- **Estado:** Completado
- **Notas:** Se ha implementado la autenticación JWT con rutas para registro, login y obtención del perfil del usuario. También se han creado middlewares de autenticación y autorización basada en roles. Se han añadido pruebas automatizadas y manuales para verificar el funcionamiento.

### 5. Configurar enrutamiento básico React Router
- [x] Implementar BrowserRouter en App.tsx
- [x] Configurar rutas principales
- [x] Implementar rutas anidadas con layout
- **Estado:** Completado
- **Notas:** Se han implementado las rutas principales para Home, Login, Register y Dashboard. También se han añadido rutas para las secciones en desarrollo (Equipos, Jugadores, Partidos, Tabla de Posiciones).

### 6. Implementar layout principal responsive
- [x] Crear componente MainLayout
- [x] Implementar AppHeader
- [x] Implementar Sidebar responsive
- [x] Implementar Footer
- **Estado:** Completado
- **Notas:** Se ha creado un layout principal responsive con AppBar, Sidebar (que se adapta a dispositivos móviles) y Footer.

### 7. Establecer base de pruebas y calidad de código
- [x] Configurar entorno de pruebas con Vitest para frontend
- [x] Configurar Jest para pruebas de backend
- [x] Implementar primeras pruebas unitarias para componentes críticos
- [x] Configurar análisis estático de código (ESLint)
- [x] Implementar hooks de pre-commit para verificación de calidad
- **Estado:** Completado
- **Notas:** Se ha configurado el entorno de pruebas con Vitest para frontend y Jest para backend. Se han implementado pruebas para los componentes principales (MainLayout, AppHeader, Sidebar, Footer) y para el controlador de autenticación. Se ha configurado ESLint para ambos proyectos. Se han implementado hooks de pre-commit con husky y lint-staged para verificar que el código cumple con los estándares de calidad antes de ser comprometido.

### 8. Implementar integración frontend-backend para autenticación
- [x] Crear estructura de servicios API en frontend
- [x] Implementar servicio de autenticación (registro, login, perfil)
- [x] Integrar componentes Register y Login con el backend
- [x] Armonizar nombres de campos entre frontend y backend
- [x] Implementar gestión de tokens JWT en frontend
- [x] Añadir protección de rutas para páginas autenticadas
- **Estado:** Completado
- **Notas:** Se ha implementado la integración de autenticación entre frontend y backend. Se ha creado un servicio authService que maneja el registro, login y obtención de perfil de usuario. Se han modificado los componentes Register y Login para usar este servicio en lugar de la lógica simulada. Se han mapeado los nombres de campos y roles entre frontend y backend. Se ha implementado un componente ProtectedRoute para proteger las rutas que requieren autenticación y control de acceso basado en roles.

## Registro Diario

### [18-03-2025]
- **Avances:**
  - Configurado repositorio Git
  - Creada estructura básica de carpetas para frontend y backend
  - Configurados archivos de configuración principales (package.json, tsconfig.json)
  - Creados archivos básicos para frontend y backend
  - Migrado frontend de Create React App a Vite para resolver problemas de compatibilidad con TypeScript 5.x
- **Problemas encontrados:**
  - Incompatibilidad entre react-scripts (Create React App) y TypeScript 5.x
  - Solución: Migración completa a Vite, que ofrece mejor compatibilidad y rendimiento
- **Plan para mañana:**
  - Instalar dependencias y verificar configuración
  - Comenzar implementación de esquemas MongoDB

### [19-03-2025]
- **Avances:**
  - Implementados todos los esquemas MongoDB iniciales (Usuario, Equipo, Jugador, Partido)
  - Añadido esquema adicional de Liga para mejorar las relaciones entre entidades
  - Creado archivo de índice para facilitar la exportación de modelos
- **Problemas encontrados:**
  - Ninguno
- **Plan para mañana:**
  - Comenzar implementación de autenticación JWT

### [20-03-2025]
- **Avances:**
  - Implementada la autenticación JWT completa
  - Creadas utilidades para generar y verificar tokens JWT
  - Implementados middlewares de autenticación y autorización
  - Creados controladores para registro, login y perfil de usuario
  - Configuradas rutas de autenticación
- **Problemas encontrados:**
  - Algunos errores de tipo en la implementación de JWT que fueron resueltos
- **Plan para mañana:**
  - Comenzar con la configuración del enrutamiento en React Router

### [21-03-2025]
- **Avances:**
  - Implementadas pruebas automatizadas para las rutas de autenticación
  - Creado script para pruebas manuales de las APIs
  - Configurado entorno Jest para pruebas
- **Problemas encontrados:**
  - Persistencia de algunos errores de tipado en el módulo JWT, pendientes de resolver
- **Plan para mañana:**
  - Comenzar con la configuración del enrutamiento en React Router

### [22-03-2025]
- **Avances:**
  - Implementado sistema de manejo flexible de base de datos
  - Añadido soporte para MongoDB en memoria para desarrollo y pruebas
  - Mejorado el manejo de conexiones a la base de datos
  - Actualizado archivo .env con variables de entorno para configuración
  - Verificado funcionamiento de rutas de autenticación con base de datos en memoria
- **Problemas encontrados:**
  - Problemas de conexión a MongoDB local (resuelto con implementación de MongoDB en memoria)
  - Algunos problemas de tipado en el soporte de MongoDB en memoria (resueltos)
- **Plan para mañana:**
  - Comenzar con la configuración del enrutamiento en React Router

### [23-03-2025]
- **Avances:**
  - Configurado el enrutamiento básico con React Router
  - Creada la estructura de páginas y componentes
  - Implementado layout principal responsive con AppBar, Sidebar y Footer
  - Implementadas las páginas básicas: Home, Login, Register y Dashboard
  - Verificado y confirmado el correcto funcionamiento del pipeline CI/CD en GitHub Actions
- **Problemas encontrados:**
  - Ninguno significativo
- **Plan para mañana:**
  - Configurar GitHub Actions para CI básico
  - Realizar testing de componentes creados
  - Finalizar la documentación del sprint

## Métricas del Sprint
- **Completado:** 100%
- **Velocidad:** 8 tareas principales completadas en 10 días
- **Calidad de código:** Alta - Código bien estructurado con componentes reutilizables y responsive

## Retrospectiva
- **Lo que salió bien:**
  - Migración exitosa de Create React App a Vite
  - Implementación eficiente de la autenticación JWT
  - Creación de un layout principal responsive y atractivo
  - Buen manejo de la base de datos flexible (MongoDB en memoria)
  - Configuración y verificación exitosa del pipeline CI/CD en GitHub Actions
- **Lo que podría mejorar:**
  - Añadir más pruebas automatizadas para los componentes frontend
  - Mejorar la documentación del código
  - Completar la integración frontend-backend para autenticación
- **Acciones para el próximo sprint:**
  - Completar la integración frontend-backend para autenticación si no se finaliza en el Sprint 1
  - Configurar Redux para gestión de estado global
    - Priorizar la implementación completa de Redux Toolkit
    - Crear slices para autenticación, usuarios y equipos
    - Implementar persistencia del token JWT
    - Desarrollar middlewares personalizados para manejo de errores y logging
    - Crear hooks tipados para facilitar el uso de Redux en componentes
  - Implementar pruebas para componentes de UI
  - Mejorar la integración entre frontend y backend
````

## File: tracking/sprints/sprint-template.md
````markdown
# Sprint [Número]: [Nombre del Sprint]
**Período:** [Fecha inicio] - [Fecha fin]

## Objetivos del Sprint
1. [Objetivo 1]
2. [Objetivo 2]
3. [Objetivo 3]

## Tareas Específicas

### 1. [Tarea 1]
- [ ] [Subtarea 1.1]
- [ ] [Subtarea 1.2]
- **Estado:** Pendiente
- **Notas:** [Notas relevantes]

### 2. [Tarea 2]
- [ ] [Subtarea 2.1]
- [ ] [Subtarea 2.2]
- **Estado:** Pendiente
- **Notas:** [Notas relevantes]

## Registro Diario

### [Fecha]
- **Avances:**
  - [Detallar avances del día]
- **Problemas encontrados:**
  - [Listar problemas, si hay]
- **Plan para mañana:**
  - [Listar tareas para el día siguiente]

## Métricas del Sprint
- **Completado:** 0%
- **Velocidad:** [Tareas completadas]
- **Calidad de código:** [Métricas relevantes]

## Retrospectiva (al finalizar)
- **Lo que salió bien:**
  - [Puntos positivos]
- **Lo que podría mejorar:**
  - [Áreas de mejora]
- **Acciones para el próximo sprint:**
  - [Acciones concretas]
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "files": [],
  "references": [
    { "path": "./backend" },
    { "path": "./frontend" }
  ]
}
````

## File: .cursor/rules/coding-preferences.mdc
````
---
description: Coding pattern preferences
globs: 
alwaysApply: false
---

# Coding pattern preferences

- Always prefer simple solutions
- Avoid duplication of code whenever possible, which means checking for other areas of the codebase that might already have similar code and functionality
- Write code that takes into account the different enviroments: dev, test, and prod
- you are careful to only make changes that are requested or you are confident are well understood and related to the change being requested
- When fixing an issue or bug, do not introduce a new pattern or technology without first exhausting all options for the existing implementation. And if you finally do this, make sure to remove the old implementation afterwards so we don't have duplicate logic.
- Keep the codebase very clean and organized
- Avoid writing scripts in files if possible, especially if the script is likely only to be run once
- Avoid having files over 200-300 lines of code. Refactor at that point.
- Mocking data is only needed for tests, never mock data for dev or prod.
- Never add stubbing or fake data patterns to code that affects the dev or prod environments
- Never overwrite my .env file without first asking and confirming
````

## File: backend/.eslintrc.js
````javascript

````

## File: backend/src/controllers/userController.ts
````typescript
import { Response } from 'express';
import { validationResult } from 'express-validator';
import User from '../models/User';
import { AuthenticatedRequest } from '../middleware/auth';
import mongoose from 'mongoose';
⋮----
/**
 * Obtener todos los usuarios (con paginación y filtros)
 * @route GET /api/usuarios
 * @access Private (Admin)
 */
export const getUsers = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Construir filtros
⋮----
// Filtro de búsqueda por nombre, apellido o email
⋮----
// Filtro por rol
⋮----
// Filtro por estado (activo/inactivo)
⋮----
// Calcular el índice de inicio para la paginación
⋮----
// Ordenamiento
⋮----
// Obtener usuarios paginados y filtrados
⋮----
.select('-password'); // Excluir el campo de contraseña
⋮----
// Contar el total de usuarios que coinciden con los filtros
⋮----
/**
 * Obtener un usuario por ID
 * @route GET /api/usuarios/:id
 * @access Private (Admin/Self)
 */
export const getUserById = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Verificar que el ID tenga un formato válido de MongoDB
⋮----
// Obtener el usuario (sin incluir la contraseña)
⋮----
// Verificar permisos: solo el propio usuario o un admin puede ver los detalles
⋮----
/**
 * Crear un nuevo usuario
 * @route POST /api/usuarios
 * @access Private (Admin)
 */
export const createUser = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Validar errores de la solicitud
⋮----
// Verificar si el usuario ya existe
⋮----
// Si se especifica un rol, verificar que sea válido
⋮----
// Verificar que solo admin pueda crear otros usuarios admin
⋮----
// Crear el usuario
⋮----
// Obtener usuario sin contraseña
⋮----
/**
 * Actualizar un usuario existente
 * @route PUT /api/usuarios/:id
 * @access Private (Admin/Self)
 */
export const updateUser = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Validar errores de la solicitud
⋮----
// Verificar que el ID tenga un formato válido de MongoDB
⋮----
// Buscar el usuario a actualizar
⋮----
// Verificar permisos: solo el propio usuario o un admin puede actualizar
⋮----
// Verificar restricciones adicionales:
// 1. Solo admin puede cambiar roles
⋮----
// 2. Solo admin puede cambiar el estado de activación
⋮----
// 3. Si un usuario se está autoactualizando, no puede desactivarse a sí mismo
⋮----
// 4. Un admin no puede quitarse a sí mismo los privilegios de admin
⋮----
// 5. Si se cambia el email, verificar que no exista ya
⋮----
// Actualizar los campos del usuario
⋮----
// Guardar los cambios
⋮----
// Obtener usuario actualizado sin contraseña
⋮----
/**
 * Cambiar la contraseña de un usuario
 * @route PUT /api/usuarios/:id/password
 * @access Private (Admin/Self)
 */
export const updatePassword = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Validar errores de la solicitud
⋮----
// Verificar que el ID tenga un formato válido de MongoDB
⋮----
// Buscar el usuario
⋮----
// Verificar permisos: solo el propio usuario o un admin puede cambiar la contraseña
⋮----
// Si es el propio usuario actualizando su contraseña, verificar la contraseña actual
⋮----
// Actualizar la contraseña
⋮----
/**
 * Eliminar un usuario
 * @route DELETE /api/usuarios/:id
 * @access Private (Admin)
 */
export const deleteUser = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Verificar que el ID tenga un formato válido de MongoDB
⋮----
// Verificar que solo los admin puedan eliminar usuarios
⋮----
// Verificar que un admin no pueda eliminarse a sí mismo
⋮----
// Buscar el usuario a eliminar
⋮----
// Eliminar el usuario
⋮----
// Exportar controlador como objeto
````

## File: backend/src/models/Player.ts
````typescript
import mongoose, { Document, Schema } from 'mongoose';
⋮----
export interface IPlayer extends Document {
  nombre: string;
  apellido: string;
  fechaNacimiento?: Date;
  fotoPerfil?: string;
  numeroIdentificacion: string;
  posicion: 'indefinida' | 'portero' | 'defensa' | 'mediocampista' | 'delantero';
  numeroCamiseta?: number;
  equipo?: mongoose.Types.ObjectId;
  equiposAnteriores?: mongoose.Types.ObjectId[];
  activo: boolean;
  altura?: number; // en cm
  peso?: number; // en kg
  piePreferido?: 'izquierdo' | 'derecho' | 'ambos';
  estadisticas?: {
    goles: number;
    asistencias: number;
    tarjetasAmarillas: number;
    tarjetasRojas: number;
    partidosJugados: number;
    minutos: number;
  };
}
⋮----
altura?: number; // en cm
peso?: number; // en kg
⋮----
// Índices para mejorar la búsqueda
````

## File: backend/src/routes/teamRoutes.ts
````typescript
import express from 'express';
import { body, param } from 'express-validator';
import teamController from '../controllers/teamController';
import { authenticate, authorize } from '../middleware/auth';
⋮----
/**
 * @route GET /api/equipos
 * @desc Obtener todos los equipos (con paginación y filtros)
 * @access Private
 */
⋮----
/**
 * @route GET /api/equipos/:id
 * @desc Obtener un equipo por ID
 * @access Private
 */
⋮----
/**
 * @route POST /api/equipos
 * @desc Crear un nuevo equipo
 * @access Private (Admin/Entrenador)
 */
⋮----
/**
 * @route PUT /api/equipos/:id
 * @desc Actualizar un equipo existente
 * @access Private (Admin/Entrenador del equipo)
 */
⋮----
/**
 * @route PUT /api/equipos/:id/jugadores
 * @desc Añadir o eliminar jugadores de un equipo
 * @access Private (Admin/Entrenador del equipo)
 */
⋮----
/**
 * @route DELETE /api/equipos/:id
 * @desc Eliminar un equipo
 * @access Private (Admin)
 */
````

## File: backend/src/routes/userRoutes.ts
````typescript
import express from 'express';
import { body, param } from 'express-validator';
import userController from '../controllers/userController';
import { authenticate, authorize } from '../middleware/auth';
⋮----
/**
 * @route GET /api/usuarios
 * @desc Obtener todos los usuarios (con paginación y filtros)
 * @access Private (Admin)
 */
⋮----
/**
 * @route GET /api/usuarios/:id
 * @desc Obtener un usuario por ID
 * @access Private (Admin/Self)
 */
⋮----
/**
 * @route POST /api/usuarios
 * @desc Crear un nuevo usuario
 * @access Private (Admin)
 */
⋮----
/**
 * @route PUT /api/usuarios/:id
 * @desc Actualizar un usuario existente
 * @access Private (Admin/Self)
 */
⋮----
/**
 * @route PUT /api/usuarios/:id/password
 * @desc Cambiar la contraseña de un usuario
 * @access Private (Admin/Self)
 */
⋮----
/**
 * @route DELETE /api/usuarios/:id
 * @desc Eliminar un usuario
 * @access Private (Admin)
 */
````

## File: backend/src/tests/auth.test.ts
````typescript
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../index';
import User from '../models/User';
⋮----
// Desconectar cualquier conexión existente antes de las pruebas
⋮----
// Si hay una conexión activa, cerrarla
⋮----
// Configurar la base de datos en memoria para las pruebas
⋮----
// Limpiar y cerrar conexiones después de las pruebas
⋮----
// Limpiar la colección de usuarios antes de cada prueba
⋮----
// Modificar app para evitar que llame a connectDB() múltiples veces
// Esta es una solución temporal para las pruebas
⋮----
// Test para registro de usuario
⋮----
// Crear usuario primero
⋮----
// Intentar crear otro usuario con el mismo email
⋮----
// Test para login de usuario
⋮----
// Crear un usuario para la prueba
⋮----
// Intentar iniciar sesión
⋮----
// Crear un usuario para la prueba
⋮----
// Intentar iniciar sesión con contraseña incorrecta
⋮----
// Test para obtener perfil de usuario
⋮----
// Crear un usuario y generar un token
⋮----
// Iniciar sesión para obtener un token
⋮----
// Verificar que se puede obtener el perfil con el token
````

## File: backend/src/tests/controllers/authController.test.ts
````typescript
import { Request, Response } from 'express';
import { login } from '../../controllers/authController';
import User from '../../models/User';
import bcrypt from 'bcrypt';
⋮----
// Mock de los módulos necesarios
⋮----
// Preparar mocks para request y response
⋮----
// Limpiar todos los mocks
⋮----
// Mock para User.findOne que retorna null (usuario no encontrado)
⋮----
// Mock para User.findOne que retorna un usuario
⋮----
// Mock para bcrypt.compare que retorna false (contraseña incorrecta)
⋮----
// Mock para User.findOne que retorna un usuario
⋮----
// Mock para bcrypt.compare que retorna true (contraseña correcta)
⋮----
// Mock para generateToken que retorna un token
````

## File: docs/plan-de-pruebas.md
````markdown
# Plan de Pruebas: Sistema de Gestión de Ligas de Fútbol 8v8

## 1. Introducción

Este plan de pruebas está diseñado específicamente para un escenario de desarrollo individual con apoyo de IA. El objetivo es garantizar la calidad del Sistema de Gestión de Ligas de Fútbol 8v8 a través de un enfoque sistemático y eficiente de pruebas, adaptado a los recursos disponibles.

## 2. Estrategia General de Pruebas

La estrategia se basa en un enfoque progresivo que prioriza:

1. **Automatización inteligente**: Maximizar el uso de pruebas automatizadas donde aporten mayor valor
2. **Pruebas incrementales**: Alinear las pruebas con las fases de desarrollo del MVP
3. **Enfoque en componentes críticos**: Priorizar la robustez de las funcionalidades core
4. **Retroalimentación continua**: Implementar ciclos cortos de prueba-corrección

## 3. Tipos de Pruebas

### 3.1 Pruebas Unitarias

| Área | Estrategia | Herramientas | Criterio de Éxito |
|------|------------|--------------|-------------------|
| Backend | Probar funciones y servicios críticos aisladamente | Jest | Cobertura >80% en módulos críticos |
| Frontend | Probar componentes React reutilizables | React Testing Library | Funcionalidad verificada de componentes clave |

**Priorización para desarrollador individual:**

- Centrarse en los módulos de alto riesgo (autenticación, cálculos de estadísticas, integración de pagos)
- Usar generación asistida por IA para crear casos de prueba unitarios

### 3.2 Pruebas de Integración

| Componentes | Estrategia | Herramientas | Criterio de Éxito |
|-------------|------------|--------------|-------------------|
| API + DB | Verificar operaciones CRUD completas | Supertest, MongoDB Memory Server | Todos los endpoints críticos funcionan correctamente |
| Frontend + API | Probar flujos completos de datos | Cypress (pruebas selectivas) | Flujos principales funcionan end-to-end |

**Optimización para desarrollador individual:**

- Automatizar pruebas para rutas API críticas
- Implementar mocks inteligentes para servicios externos
- Utilizar IA para generar casos de prueba basados en especificaciones

### 3.3 Pruebas de Usuario (Manual Asistido)

| Escenario | Estrategia | Herramientas | Criterio de Éxito |
|-----------|------------|--------------|-------------------|
| Flujos de usuario por rol | Probar manualmente con guiones predefinidos | Listas de verificación, Grabación de sesiones | Completar flujos sin errores bloqueantes |
| Usabilidad básica | Evaluar experiencia de usuario en puntos clave | Herramientas de feedback, Heurísticas UX | Identificar problemas críticos de usabilidad |

**Enfoque para desarrollador individual:**

- Crear personas ficticias para cada rol (Admin, Veedor, Entrenador, Jugador)
- Desarrollar scripts de prueba guiados que puedan ejecutarse eficientemente
- Utilizar herramientas de grabación para analizar posteriormente

### 3.4 Pruebas de Seguridad Básicas

| Aspecto | Estrategia | Herramientas | Criterio de Éxito |
|---------|------------|--------------|-------------------|
| Autenticación | Verificar puntos débiles comunes | OWASP ZAP (automatizado) | Sin vulnerabilidades críticas |
| Autorización | Probar accesos por rol | Scripts manuales + automatizados | Separación correcta de permisos |
| Protección de datos | Verificar encriptación y sanitización | Revisión de código asistida | Datos sensibles protegidos adecuadamente |

**Enfoque pragmático:**

- Utilizar análisis de código estático y herramientas automatizadas
- Implementar lista de verificación de seguridad básica
- Enfocarse en las vulnerabilidades de mayor riesgo según OWASP Top 10

### 3.5 Pruebas de Rendimiento Esenciales

| Aspecto | Estrategia | Herramientas | Criterio de Éxito |
|---------|------------|--------------|-------------------|
| Carga básica | Simular uso simultáneo moderado | k6, Artillery (scripts simples) | Respuesta <1s con 50 usuarios concurrentes |
| Optimización | Identificar cuellos de botella | Chrome DevTools, React Profiler | FCP <1.5s, TTI <3s |

**Simplificación para desarrollador individual:**

- Pruebas de carga selectivas solo para operaciones críticas
- Enfoque en optimización de consultas de base de datos
- Mediciones de rendimiento en frontend para páginas clave

## 4. Plan de Pruebas por Fase de Desarrollo

### 4.1 Fase 1 (MVP)

| Módulo | Pruebas Unitarias | Pruebas Integración | Pruebas Manuales | Automatización |
|--------|-------------------|---------------------|------------------|----------------|
| Autenticación | Alta | Alta | Media | Alta |
| Gestión Equipos | Media | Alta | Alta | Media |
| Gestión Jugadores | Media | Alta | Alta | Media |
| Calendarización | Baja | Media | Alta | Baja |
| Tabla Posiciones | Alta | Media | Media | Media |

**Estrategia MVP para desarrollador individual:**

- Crear suite básica de tests unitarios para autenticación y cálculos
- Implementar pruebas de integración para operaciones CRUD principales
- Desarrollar lista de verificación de pruebas manuales esenciales

### 4.2 Fase 2 (Funcionalidades Core)

| Módulo | Pruebas Unitarias | Pruebas Integración | Pruebas Manuales | Automatización |
|--------|-------------------|---------------------|------------------|----------------|
| Estadísticas | Alta | Alta | Media | Alta |
| Gestión Árbitros | Media | Media | Alta | Baja |
| Sanciones | Alta | Alta | Media | Media |
| Dashboard Admin | Baja | Media | Alta | Baja |

**Estrategia para desarrollador individual:**

- Priorizar pruebas para cálculos de estadísticas y sanciones
- Automatizar verificación de reglas de negocio complejas
- Verificar manualmente UX de dashboards

### 4.3 Fase 3-5 (Incrementos posteriores)

Seguir patrón similar, priorizando:

- Integración de pagos (alta prioridad en pruebas)
- Gestión multimedia (pruebas de carga/almacenamiento)
- Multi-tenancy (pruebas de aislamiento)

## 5. Automatización de Pruebas

### 5.1 Estrategia de Automatización

| Nivel | Qué Automatizar | Qué No Automatizar | Herramientas |
|-------|-----------------|---------------------|--------------|
| Unitarias | Lógica de negocio crítica, validaciones | Componentes UI simples, código trivial | Jest, React Testing Library |
| API | Endpoints principales, validación de respuestas | Casos extremos raros | Supertest, Postman |
| E2E | Flujos críticos (2-3 por rol de usuario) | Pruebas de exploración, edge cases | Cypress (selectivamente) |
| CI/CD | Ejecución de suite de tests, linting, build | Pruebas de rendimiento pesadas | GitHub Actions |

**Plan práctico para desarrollador individual:**

- Configurar GitHub Actions para ejecutar tests en cada commit
- Utilizar IA para generar tests basados en criterios de aceptación
- Mantener dashboard simple de cobertura de pruebas

### 5.2 Uso de IA para Pruebas

| Actividad | Enfoque IA | Beneficio |
|-----------|------------|-----------|
| Generación de casos de prueba | Generar casos basados en criterios de aceptación | Ahorro de tiempo, mejor cobertura |
| Mocks y datos de prueba | Crear datos realistas y variados | Pruebas más robustas |
| Análisis de cobertura | Identificar áreas sin pruebas suficientes | Mejor distribución del esfuerzo |
| Depuración | Asistencia en análisis de fallos | Resolución más rápida |

## 6. Entornos de Prueba

### 6.1 Configuración de Entornos

| Entorno | Propósito | Configuración | Datos |
|---------|-----------|---------------|-------|
| Desarrollo | Pruebas durante implementación | Local + MongoDB local/Atlas | Datos sintéticos básicos |
| Staging | Verificación pre-producción | Vercel/Netlify Preview + MongoDB Atlas | Datos sintéticos completos |
| Producción | Verificación final | Vercel/Netlify + MongoDB Atlas | Datos reales (post-lanzamiento) |

**Simplificación para desarrollador individual:**

- Utilizar Docker para simular entornos aislados cuando sea necesario
- Mantener conjunto de datos de prueba pre-generados por IA
- Implementar scripts para restablecer entornos de prueba

## 7. Gestión de Defectos

### 7.1 Proceso de Gestión

| Etapa | Herramienta | Proceso |
|-------|------------|---------|
| Registro | GitHub Issues | Categorizar por severidad y módulo |
| Priorización | GitHub Project | Priorizar por impacto y frecuencia |
| Seguimiento | GitHub Issues | Documentar pasos para reproducir |
| Verificación | Tests automatizados | Crear test que verifique la corrección |

**Optimización para desarrollador individual:**

- Usar plantillas predefinidas para reporte de bugs
- Implementar sesiones dedicadas de corrección de bugs
- Mantener una vista clara de bugs pendientes críticos

### 7.2 Criterios de Severidad

| Nivel | Descripción | Tiempo Objetivo |
|-------|-------------|-----------------|
| Crítico | Impide funcionalidad principal, data corruption | Inmediato |
| Alto | Funcionalidad principal degradada | 1-2 días |
| Medio | Problema en funcionalidad secundaria | 1 semana |
| Bajo | Problema cosmético, mejora | Backlog |

## 8. Estrategia para Pruebas Móviles

### 8.1 Enfoque Web Responsive

| Dispositivo | Estrategia | Herramientas |
|-------------|------------|--------------|
| Móviles | Pruebas en principales breakpoints | Chrome DevTools, BrowserStack (limitado) |
| Tablets | Verificar vistas críticas | Chrome DevTools, pruebas manuales |

**Simplificación para desarrollador individual:**

- Probar en dispositivo físico personal + emuladores
- Verificar puntos de quiebre críticos definidos en CSS
- Utilizar herramientas de inspección para simular dispositivos

### 8.2 Aplicación Móvil (Fase 3+)

| Aspecto | Estrategia | Herramientas |
|---------|------------|--------------|
| Funcionalidad | Probar flujos críticos | Pruebas manuales, Expo |
| Compatibilidad | Verificar en iOS/Android principales | Dispositivos físicos, Expo |

## 9. Criterios de Aceptación y Salida

### 9.1 Criterios Generales

| Categoría | Criterio de Éxito |
|-----------|-------------------|
| Funcional | 100% de pruebas críticas pasan, 0 defectos bloqueantes |
| Rendimiento | Tiempo de carga <2s en condiciones normales |
| Usabilidad | Flujos principales completables sin errores de usuario |
| Seguridad | Sin vulnerabilidades críticas o altas |

### 9.2 Métricas de Calidad

| Métrica | Objetivo | Herramienta |
|---------|----------|------------|
| Cobertura de código | >70% en módulos críticos | Jest Coverage |
| Tasa de defectos | <1 crítico por sprint | GitHub Issues |
| Deuda técnica | <10% del esfuerzo total | SonarQube (o similar) |

## 10. Planificación de Recursos y Calendario

### 10.1 Distribución de Esfuerzo para Desarrollador Individual

| Actividad | % Tiempo | Enfoque |
|-----------|----------|---------|
| Desarrollo | 60-70% | Implementación con TDD cuando sea posible |
| Pruebas automatizadas | 15-20% | Enfoque en tests de alto valor |
| Pruebas manuales | 10-15% | Sesiones programadas de prueba |
| Gestión de defectos | 5-10% | Corrección prioritaria |

### 10.2 Ciclo de Pruebas Recomendado

| Frecuencia | Actividad |
|------------|-----------|
| Diaria | Ejecución de tests unitarios y linting automatizado |
| Fin de feature | Pruebas de integración de la característica |
| Semanal | Sesión de pruebas exploratorias manuales |
| Quincenal | Revisión de cobertura y deuda técnica |
| Por release | Suite completa de pruebas, incluyendo e2e |

## 11. Herramientas Recomendadas

| Categoría | Herramientas | Propósito |
|-----------|--------------|-----------|
| Testing unitario | Jest, React Testing Library | Tests de componentes y lógica |
| Testing API | Supertest, Postman | Verificación de endpoints |
| Testing E2E | Cypress (uso limitado) | Flujos críticos automatizados |
| Testing de carga | k6 (scripts básicos) | Verificar rendimiento básico |
| Testing de seguridad | OWASP ZAP, npm audit | Vulnerabilidades comunes |
| CI/CD | GitHub Actions | Automatizar pipeline de pruebas |
| Monitoreo | Sentry | Capturar errores en producción |

## 12. Riesgos y Mitigación

| Riesgo | Probabilidad | Impacto | Estrategia de Mitigación |
|--------|--------------|---------|--------------------------|
| Tiempo insuficiente para pruebas | Alta | Alto | Priorizar pruebas por criticidad, automatizar inteligentemente |
| Complejidad de pruebas multi-tenant | Media | Alto | Comenzar con arquitectura de pruebas que soporte multi-tenancy desde el inicio |
| Dificultad para simular escenarios reales | Alta | Medio | Crear conjuntos de datos representativos, pruebas de usuario guionizadas |
| Falsos positivos en automatización | Media | Medio | Diseñar pruebas robustas, evitar selectores frágiles |

## 13. Informes y Comunicación

### 13.1 Dashboards Clave

| Dashboard | Contenido | Propósito |
|-----------|-----------|-----------|
| Calidad de código | Cobertura, complejidad, code smells | Visibilidad de salud del código |
| Estado de pruebas | Tests ejecutados/fallidos, historico | Seguimiento de progreso |
| Defectos | Bugs abiertos por severidad, tasa de resolución | Gestión de calidad |

### 13.2 Para Desarrollador Individual

- Mantener tablero simple en GitHub Projects
- Documentar hallazgos importantes para referencia futura
- Establecer KPIs personales de calidad y seguirlos

## 14. Anexos

### 14.1 Templates de Prueba

#### Template para Pruebas Unitarias

```javascript
describe('Módulo: [Nombre del Módulo]', () => {
  describe('Función: [Nombre de la Función]', () => {
    test('Debería [comportamiento esperado] cuando [condición]', () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

#### Template para Pruebas de API

```javascript
describe('API: [Nombre del Endpoint]', () => {
  test('Debería [comportamiento esperado] cuando [condición]', async () => {
    // Arrange
    // Act: Llamada al endpoint
    // Assert: Verificar código de estado y respuesta
  });
});
```

#### Lista de Verificación para Pruebas Manuales

- [ ] Verificar flujo principal
- [ ] Probar casos de borde (valores límite)
- [ ] Verificar mensajes de error
- [ ] Probar en diferentes resoluciones
- [ ] Verificar permisos por rol

### 14.2 Datos de Prueba Esenciales

| Entidad | Datos Mínimos |
|---------|---------------|
| Usuarios | 1 por cada rol (Admin, Veedor, Entrenador, Jugador) |
| Equipos | 4-8 equipos con datos completos |
| Jugadores | 10-15 por equipo |
| Partidos | Calendario completo de una temporada |
| Eventos | Variedad de goles y tarjetas |

## 15. Conclusión

Este plan de pruebas está diseñado específicamente para un escenario de desarrollo individual con apoyo de IA, equilibrando la necesidad de garantizar calidad con los recursos disponibles. Enfatiza:

1. Automatización estratégica en áreas de alto valor
2. Uso inteligente de IA para multiplicar capacidades
3. Ciclos cortos de retroalimentación
4. Enfoque prioritario en componentes críticos

Al seguir este plan adaptado, se maximizará la eficiencia del proceso de pruebas y se garantizará un producto de calidad a pesar de las limitaciones de recursos.
````

## File: frontend/README.md
````markdown
# Frontend - Sistema de Gestión de Ligas de Fútbol 8v8

Este proyecto contiene el frontend del Sistema de Gestión de Ligas de Fútbol 8v8, desarrollado con React, TypeScript, Vite y Material UI.

## Requisitos

- Node.js 14.x o superior
- npm 6.x o superior

## Instalación

1. Clona el repositorio
2. Navega a la carpeta del frontend:
   ```bash
   cd frontend-vite
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Copia el archivo de variables de entorno:
   ```bash
   cp .env.example .env
   ```
5. Edita el archivo `.env` con tus variables de entorno

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

## Comandos disponibles

- `npm start` o `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Compila el código para producción
- `npm run preview`: Previsualiza la compilación de producción localmente
- `npm test`: Ejecuta los tests
- `npm run lint`: Ejecuta el linter
- `npm run format`: Formatea el código

## Estructura del proyecto

```
src/
├── api/          # Servicios y funciones de API
├── assets/       # Recursos estáticos (imágenes, etc.)
├── components/   # Componentes reutilizables
├── features/     # Características (autenticación, equipos, etc.)
├── hooks/        # Hooks personalizados
├── pages/        # Páginas o vistas principales
├── test/         # Configuración y utilidades de prueba
├── utils/        # Utilidades y funciones auxiliares
├── App.tsx       # Componente principal
├── index.css     # Estilos globales
├── main.tsx      # Punto de entrada
└── vite-env.d.ts # Tipos para Vite
```

## Tecnologías principales

- React 19
- TypeScript
- Vite
- Material UI
- React Router
- Redux Toolkit
- Axios
- Formik & Yup
````

## File: frontend/src/components/auth/ProtectedRoute.tsx
````typescript
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { authService } from '../../api';
⋮----
interface ProtectedRouteProps {
  allowedRoles?: string[];
}
⋮----
/**
 * Componente para proteger rutas que requieren autenticación
 * Si no hay un usuario autenticado, redirige a la página de login
 * Si se especifican roles permitidos, verifica que el usuario tenga uno de esos roles
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = (
⋮----
// Si no hay un usuario autenticado, redirigir a login
⋮----
// Si hay roles permitidos especificados, verificar que el usuario tenga uno de ellos
⋮----
// Si no hay datos de usuario en localStorage pero hay un token,
// es posible que la sesión esté corrupta
authService.logout(); // Limpiar la sesión
⋮----
// Mapear rol del backend al frontend si es necesario
⋮----
// Verificar si el rol del usuario está entre los permitidos
⋮----
// El usuario no tiene un rol permitido, redirigir a una página de acceso denegado
⋮----
// Error al parsear los datos del usuario, limpiar la sesión
⋮----
// El usuario está autenticado y tiene los permisos necesarios
````

## File: frontend/src/components/layout/__tests__/Footer.test.tsx
````typescript
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { describe, it, expect } from 'vitest';
⋮----
// Verificar que el año actual está en el documento
⋮----
// Usar una expresión regular para buscar el texto que puede estar separado por elementos
````

## File: frontend/src/components/layout/__tests__/MainLayout.test.tsx
````typescript
import { render, screen } from '@testing-library/react';
import MainLayout from '../MainLayout';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { vi, describe, it, expect } from 'vitest';
⋮----
// Mock de los componentes internos para simplificar las pruebas
⋮----
// Mock para react-router-dom Outlet
⋮----
// Verificar que los componentes principales están presentes
````

## File: frontend/src/components/layout/__tests__/Sidebar.test.tsx
````typescript
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
⋮----
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../../store/slices/auth/authSlice';
⋮----
// Mock para react-router-dom
⋮----
// Mock de funciones
⋮----
// Usamos MemoryRouter real desde el import
⋮----
// Mock para useAuth
⋮----
hasRole: () => true // Simulamos que el usuario tiene rol admin
⋮----
const renderSidebar = (isMobile = false) =>
⋮----
// Crear un store con los reducers necesarios
⋮----
// Usar getAllByText para obtener todos los elementos con el texto específico
// y verificar que existan
⋮----
// Obtener el primer elemento dashboard
⋮----
// Verificar que se llamó onDrawerClose
⋮----
// Obtener el primer elemento dashboard
⋮----
// En vista desktop no debería llamar a onDrawerClose
````

## File: frontend/src/components/layout/Sidebar.tsx
````typescript
import React from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useAuth } from '../../hooks/useAuth';
⋮----
interface SidebarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  onDrawerClose: () => void;
  isMobile: boolean;
}
⋮----
interface MenuItem {
  text: string;
  path: string;
  icon: React.ReactNode;
}
⋮----
// Menú items dinámicos según rol
⋮----
// Menú de administración solo para administradores
⋮----
// Opciones de gestión deportiva
⋮----
{/* Mobile drawer */}
⋮----
keepMounted: true, // Better open performance on mobile
⋮----
{/* Desktop drawer */}
````

## File: frontend/src/components/teams/index.ts
````typescript

````

## File: frontend/src/components/users/UserForm.tsx
````typescript
import React, { useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  CircularProgress,
  Switch,
  FormControlLabel,
  Divider,
  Paper
} from '@mui/material';
import { Formik, Form, FormikHelpers } from 'formik';
⋮----
import { useUsers } from '../../hooks/useUsers';
import { UserFormData } from '../../types';
⋮----
interface UserFormProps {
  userId?: string;
  onCancel: () => void;
}
⋮----
// Esquema de validación
⋮----
is: (val: string) => !val, // Solo requerido si no hay ID (es creación)
⋮----
.transform((value) => value || undefined) // Transformar cadena vacía a undefined
⋮----
// Valores iniciales para el formulario
⋮----
password: '', // Vacío para edición
⋮----
// Manejar envío del formulario
const handleSubmit = async (
    values: UserFormData & { _id?: string },
    { setSubmitting, resetForm }: FormikHelpers<UserFormData & { _id?: string }>
) =>
⋮----
// Si password está vacío en modo edición, eliminarlo para no enviarlo
⋮----
// eslint-disable-next-line @typescript-eslint/no-unused-vars
⋮----
onCancel(); // Cerrar formulario después de guardar exitosamente
⋮----
// Mostrar spinner mientras se carga el usuario para edición
````

## File: frontend/src/hooks/__tests__/useTeams.test.tsx
````typescript
import { describe, test, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useTeams } from '../../hooks/useTeams';
import teamsReducer from '../../store/slices/teams/teamsSlice';
import authReducer from '../../store/slices/auth/authSlice';
import usersReducer from '../../store/slices/users';
⋮----
import { TeamListItem, PaginationParams, TeamFormData } from '../../types';
import { ReactNode } from 'react';
⋮----
// Mock para los thunks
⋮----
// Configuración de la tienda de Redux para las pruebas
const setupStore = (initialState =
⋮----
// Mock de equipo para pruebas
⋮----
// Estado inicial con equipos
⋮----
// Wrapper para el renderHook
const Wrapper = (
⋮----
// Función para renderizar el hook con un store personalizado
const renderTeamHook = (customState =
⋮----
const wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
⋮----
// Limpiar mocks después de cada prueba
⋮----
// Verificar que devuelve los datos del estado
⋮----
// Verificar que devuelve las funciones
⋮----
// Ejecutar la función
⋮----
// Verificar que se llama al thunk con los parámetros correctos
⋮----
// Ejecutar la función
⋮----
// Verificar que se llama al thunk con los parámetros correctos
⋮----
// Ejecutar la función
⋮----
// Verificar que se llama al thunk con los parámetros correctos
⋮----
// Ejecutar la función
⋮----
// Verificar que se llama al thunk con los parámetros correctos
⋮----
// Ejecutar la función
⋮----
// Verificar que se llama al thunk con los parámetros correctos
````

## File: frontend/src/hooks/__tests__/useUsers.test.tsx
````typescript
import { describe, test, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useUsers } from '../../hooks/useUsers';
import usersReducer from '../../store/slices/users/usersSlice';
import authReducer from '../../store/slices/auth/authSlice';
⋮----
import { UserListItem, PaginationParams, UserFormData } from '../../types';
import { ReactNode } from 'react';
⋮----
// Mock para los thunks
⋮----
// Configuración de la tienda de Redux para las pruebas
const setupStore = (initialState =
⋮----
// Mock de usuario para pruebas
⋮----
// Estado inicial con usuarios
⋮----
// Wrapper para el renderHook
const Wrapper = (
⋮----
// Función para renderizar el hook con un store personalizado
const renderUserHook = (customState =
⋮----
const wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
⋮----
// Limpiar mocks después de cada prueba
⋮----
// Verificar que devuelve los datos del estado
⋮----
// Verificar que devuelve las funciones
⋮----
// Ejecutar la función
⋮----
// Verificar que se llama al thunk con los parámetros correctos
⋮----
// Ejecutar la función
⋮----
// Verificar que se llama al thunk con los parámetros correctos
⋮----
// Ejecutar la función
⋮----
// Verificar que se llama al thunk con los parámetros correctos
⋮----
// Ejecutar la función
⋮----
// Verificar que se llama al thunk con los parámetros correctos
⋮----
// Ejecutar la función
⋮----
// Verificar que se llama al thunk con los parámetros correctos
````

## File: frontend/src/hooks/useTeams.ts
````typescript
import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { teamsSelectors, teamsThunks } from '../store/slices/teams';
import { TeamFormData, TeamPaginationParams } from '../types';
⋮----
/**
 * Hook personalizado para gestionar equipos
 * @returns Métodos y estado relacionados con equipos
 */
export const useTeams = () =>
⋮----
// Seleccionar datos del estado
⋮----
// Métodos memorizados para reducir re-renderizados
⋮----
// Objeto con todos los valores y métodos
⋮----
// Datos
⋮----
// Métodos
⋮----
// Utilidades para obtener equipos específicos
````

## File: frontend/src/index.css
````css
/* Estilos globales */
body {
⋮----
code {
⋮----
/* Agregar más estilos globales según sea necesario */
````

## File: frontend/src/main.tsx
````typescript
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
⋮----
import reportWebVitals from './reportWebVitals';
⋮----
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
````

## File: frontend/src/pages/__tests__/Home.test.tsx
````typescript
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { vi, expect } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material';
⋮----
// Mock para react-router-dom
⋮----
// Verificar título principal
⋮----
// Verificar sección de características
⋮----
// Verificar botones principales
⋮----
// Verificar elementos de características
````

## File: frontend/src/reportWebVitals.ts
````typescript
type ReportHandler = (metric: webVitals.Metric) => void;
⋮----
const reportWebVitals = (onPerfEntry?: ReportHandler) =>
````

## File: frontend/src/store/__tests__/middleware/loggerMiddleware.test.ts
````typescript
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from '@reduxjs/toolkit';
import loggerMiddleware from '../../middleware/loggerMiddleware';
import { RootState } from '../../index';
⋮----
// Tipo para las llamadas mock de Vitest
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MockedFunction<T extends (...args: any[]) => any> = {
  mock: {
    calls: Parameters<T>[]
  }
} & T;
⋮----
// Configurar MODE para los tests
⋮----
// Mocks para console
⋮----
vi.unstubAllEnvs(); // Restaurar variables de entorno
⋮----
// Mock de la API de middleware
⋮----
// Arrange
⋮----
// Act
⋮----
// Assert
⋮----
expect(console.log).toHaveBeenCalledTimes(3); // Previous State, Action, Next State
⋮----
// Arrange
⋮----
// Act
⋮----
// Assert
// Verificamos que console.group fue llamado con un mensaje que contiene el tipo de acción
// y un color específico
⋮----
// Arrange
⋮----
// Act
⋮----
// Assert
// Verificamos que console.group fue llamado con un mensaje que contiene el tipo de acción
// y un color específico
⋮----
// Arrange
⋮----
// Act
⋮----
// Assert
// Verificamos que console.group fue llamado con un mensaje que contiene el tipo de acción
// y un color específico
⋮----
// Arrange
⋮----
// Act
⋮----
// Assert
````

## File: frontend/src/store/__tests__/slices/users/thunks.test.ts
````typescript
import { describe, test, expect, beforeEach } from 'vitest';
import {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser
} from '../../../slices/users/thunks';
import {
  usersLoading,
  usersLoadSuccess,
  userLoadSuccess,
  userCreateSuccess,
  userUpdateSuccess,
  userDeleteSuccess,
  usersFail
} from '../../../slices/users/usersSlice';
import { userService } from '../../../../api';
import { UserListItem, UserFormData, PaginationParams } from '../../../../types';
import { vi } from 'vitest';
⋮----
// Mock del servicio de usuarios
⋮----
// Mock de usuario para pruebas
⋮----
// Mock de datos de formulario
⋮----
// Mock de dispatch
⋮----
// Limpiar mocks antes de cada prueba
⋮----
// Configurar mock para retornar datos de éxito
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Verificar llamada al servicio
⋮----
// Configurar mock para retornar datos de error
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Configurar mock para lanzar excepción
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Configurar mock para retornar datos de éxito
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Verificar llamada al servicio
⋮----
// Configurar mock para retornar datos de error
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Configurar mock para retornar datos de éxito
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Verificar llamada al servicio
⋮----
// Configurar mock para retornar datos de error
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Configurar mock para retornar datos de éxito
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Verificar llamada al servicio
⋮----
// Configurar mock para retornar datos de error
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Configurar mock para retornar datos de éxito
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Verificar llamada al servicio
⋮----
// Configurar mock para retornar datos de error
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
````

## File: frontend/src/store/middleware/loggerMiddleware.ts
````typescript
import { Middleware, AnyAction } from '@reduxjs/toolkit';
⋮----
// Middleware para logging de acciones (solo en desarrollo)
const loggerMiddleware: Middleware = store => next => action => {
  // Solo realizar el logging en entorno de desarrollo
if (import.meta.env.MODE !== 'production')
⋮----
// Solo realizar el logging en entorno de desarrollo
⋮----
// Asegurar que action tiene un type
⋮----
// Colorizar diferentes tipos de acciones para mejorar la legibilidad
const getActionColor = () =>
⋮----
// Ejecutar la acción
⋮----
// En producción, simplemente pasar la acción sin logging
````

## File: frontend/src/store/middleware/README.md
````markdown
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
````

## File: frontend/src/store/slices/auth/selectors.ts
````typescript
import { RootState } from '../../index';
⋮----
// Selector para obtener el usuario autenticado
export const selectUser = (state: RootState)
⋮----
// Selector para obtener el token
export const selectToken = (state: RootState)
⋮----
// Selector para verificar si el usuario está autenticado
export const selectIsAuthenticated = (state: RootState)
⋮----
// Selector para obtener el estado de carga
export const selectLoading = (state: RootState)
⋮----
// Selector para obtener errores
export const selectError = (state: RootState)
⋮----
// Selector para obtener el rol del usuario
export const selectUserRole = (state: RootState)
⋮----
// Selector para verificar si el usuario tiene un rol específico
export const selectHasRole = (state: RootState, role: string) =>
⋮----
// Mapear roles del backend al frontend si es necesario
````

## File: frontend/src/store/slices/auth/thunks.ts
````typescript
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../../api';
import { LoginData, RegisterData, UpdateProfileData, ChangePasswordData } from '../../../types';
import { authStart, authSuccess, authFail, logout as logoutAction, clearErrors } from './authSlice';
import { AppDispatch } from '../../index';
⋮----
// Login
⋮----
// Registro
⋮----
// Obtener perfil del usuario
⋮----
// Aquí asumimos que el token ya está almacenado (lo está si el usuario ya inició sesión)
⋮----
// Actualizar perfil de usuario
⋮----
// Cambiar contraseña
⋮----
// Logout
````

## File: frontend/src/store/slices/teams/thunks.ts
````typescript
import { createAsyncThunk } from '@reduxjs/toolkit';
import { teamService } from '../../../api';
import { TeamFormData, TeamPaginationParams } from '../../../types';
import { 
  teamsLoading, 
  teamsLoadSuccess, 
  teamLoadSuccess, 
  teamCreateSuccess, 
  teamUpdateSuccess, 
  teamDeleteSuccess, 
  teamsFail 
} from '../../../store/slices/teams';
import { AppDispatch } from '../../index';
⋮----
/**
 * Thunk para obtener listado de equipos
 */
⋮----
/**
 * Thunk para obtener equipo por ID
 */
⋮----
/**
 * Thunk para crear un nuevo equipo
 */
⋮----
/**
 * Thunk para actualizar un equipo existente
 */
⋮----
/**
 * Thunk para eliminar un equipo
 */
````

## File: frontend/src/store/slices/users/selectors.ts
````typescript
import { RootState } from '../../index';
import { createSelector } from '@reduxjs/toolkit';
⋮----
// Selector para obtener la lista de usuarios
export const selectUsers = (state: RootState)
⋮----
// Selector para obtener el usuario seleccionado
export const selectSelectedUser = (state: RootState)
⋮----
// Selector para verificar si se están cargando datos
export const selectLoading = (state: RootState)
⋮----
// Selector para obtener errores
export const selectError = (state: RootState)
⋮----
// Selector para obtener el total de usuarios
export const selectTotal = (state: RootState)
⋮----
// Selector para obtener la página actual
export const selectPage = (state: RootState)
⋮----
// Selector para obtener el límite de usuarios por página
export const selectLimit = (state: RootState)
⋮----
// Selector para obtener información de paginación (usando memoización)
⋮----
// Selector para verificar si existen usuarios
export const selectHasUsers = (state: RootState)
⋮----
// Selector para obtener usuario por ID
export const selectUserById = (state: RootState, userId: string)
````

## File: frontend/src/types/auth.ts
````typescript
// Interfaz para el usuario
export interface Usuario {
  _id: string;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  activo: boolean;
  fechaCreacion: string;
  ultimoAcceso?: string;
}
⋮----
// Interfaz para datos de registro
export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
⋮----
// Interfaz para datos de login
export interface LoginData {
  email: string;
  password: string;
}
⋮----
// Interfaz para actualización de perfil
export interface UpdateProfileData {
  nombre?: string;
  apellido?: string;
  email?: string;
}
⋮----
// Interfaz para cambio de contraseña
export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}
⋮----
// Interfaz para respuesta de autenticación
export interface AuthResponse {
  success: boolean;
  token?: string;
  usuario?: Usuario;
  message?: string;
}
````

## File: frontend/src/types/users.ts
````typescript
// Interfaz para objetos de usuario en listados
export interface UserListItem {
  _id: string;
  nombre: string;
  apellido: string;
  email: string;
  rol: string;
  activo: boolean;
}
⋮----
// Interfaz para la respuesta de listado de usuarios
export interface UsersResponse {
  success: boolean;
  usuarios?: UserListItem[];
  totalUsuarios?: number;
  message?: string;
}
⋮----
// Interfaz para la respuesta de un solo usuario
export interface UserResponse {
  success: boolean;
  usuario?: UserListItem;
  message?: string;
}
⋮----
// Interfaz para parámetros de paginación en solicitudes
export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
  rol?: string;
  activo?: string;
}
⋮----
// Interfaz para datos para crear/actualizar usuario
export interface UserFormData {
  nombre: string;
  apellido: string;
  email: string;
  password?: string; // Opcional para actualizaciones
  rol: string;
  activo?: boolean;
}
⋮----
password?: string; // Opcional para actualizaciones
````

## File: frontend/tsconfig.json
````json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
````

## File: .github/workflows/ci.yml
````yaml
name: CI

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x]

    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
    
    # Instalar dependencias del proyecto raíz
    - name: Install root dependencies
      run: npm install
    
    # Frontend
    - name: Install frontend dependencies
      working-directory: ./frontend
      run: npm install
      
    - name: Build frontend
      run: npm run build:frontend
      
    - name: Run frontend tests
      run: npm run test:frontend -- --run
      
    - name: Check frontend linting
      run: npm run lint:frontend
      
    # Backend
    - name: Install backend dependencies
      working-directory: ./backend
      run: npm install
      
    - name: Run backend tests
      run: npm run test:backend
````

## File: backend/src/controllers/teamController.ts
````typescript
import { Response } from 'express';
import { validationResult } from 'express-validator';
import Team from '../models/Team';
import User from '../models/User';
import { AuthenticatedRequest } from '../middleware/auth';
import mongoose from 'mongoose';
⋮----
/**
 * Obtener todos los equipos (con paginación y filtros)
 * @route GET /api/equipos
 * @access Private
 */
export const getTeams = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Construir filtros
⋮----
// Filtro de búsqueda por nombre o descripción
⋮----
// Filtro por categoría
⋮----
// Filtro por tipo
⋮----
// Filtro por estado (activo/inactivo)
⋮----
// Calcular el índice de inicio para la paginación
⋮----
// Ordenamiento
⋮----
// Obtener equipos paginados y filtrados
⋮----
// Contar el total de equipos que coinciden con los filtros
⋮----
// Calcular el total de páginas
⋮----
/**
 * Obtener un equipo por ID
 * @route GET /api/equipos/:id
 * @access Private
 */
export const getTeamById = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Verificar que el ID tenga un formato válido de MongoDB
⋮----
// Obtener el equipo con los datos de entrenador y jugadores
⋮----
/**
 * Crear un nuevo equipo
 * @route POST /api/equipos
 * @access Private (Admin/Entrenador)
 */
export const createTeam = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Validar errores de la solicitud
⋮----
// Verificar permisos (solo admin o entrenador pueden crear equipos)
⋮----
// Verificar que el entrenador exista y tenga el rol adecuado
⋮----
// Crear el equipo
⋮----
// Obtener el equipo con los datos de entrenador
⋮----
/**
 * Actualizar un equipo existente
 * @route PUT /api/equipos/:id
 * @access Private (Admin/Entrenador del equipo)
 */
export const updateTeam = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Validar errores de la solicitud
⋮----
// Verificar que el ID tenga un formato válido de MongoDB
⋮----
// Buscar el equipo
⋮----
// Verificar permisos: solo admin o el entrenador del equipo puede actualizar
⋮----
// Verificar que el entrenador exista y tenga el rol adecuado
⋮----
// Actualizar los campos del equipo
⋮----
if (activo !== undefined && isAdmin) team.activo = activo; // Solo admin puede cambiar el estado
⋮----
// Guardar los cambios
⋮----
// Obtener el equipo actualizado con los datos de entrenador
⋮----
/**
 * Añadir/eliminar jugadores de un equipo
 * @route PUT /api/equipos/:id/jugadores
 * @access Private (Admin/Entrenador del equipo)
 */
export const updateTeamPlayers = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Validar errores de la solicitud
⋮----
const { jugadores, accion } = req.body; // accion: 'agregar' o 'eliminar'
⋮----
// Verificar que el ID tenga un formato válido de MongoDB
⋮----
// Verificar que se proporcionó una lista de jugadores
⋮----
// Buscar el equipo
⋮----
// Verificar permisos: solo admin o el entrenador del equipo puede actualizar jugadores
⋮----
// Verificar que todos los IDs de jugadores sean válidos
⋮----
// Inicializar el array de jugadores si no existe
⋮----
// Convertir los IDs de jugadores a ObjectId
⋮----
// Añadir o eliminar jugadores según la acción
⋮----
// Verificar que los jugadores existan
⋮----
// Añadir jugadores que no estén ya en el equipo
⋮----
// Eliminar jugadores del equipo
⋮----
// Guardar los cambios
⋮----
// Obtener equipo actualizado con los datos de jugadores
⋮----
/**
 * Eliminar un equipo
 * @route DELETE /api/equipos/:id
 * @access Private (Admin/Entrenador del equipo)
 */
export const deleteTeam = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Verificar que el ID tenga un formato válido de MongoDB
⋮----
// Buscar el equipo
⋮----
// Verificar permisos: solo admin o el entrenador del equipo puede eliminar
⋮----
// Eliminar el equipo
⋮----
// Exportar controlador como objeto
````

## File: backend/src/models/Team.ts
````typescript
import mongoose, { Document, Schema } from 'mongoose';
⋮----
export interface ITeam extends Document {
  nombre: string;
  descripcion?: string;
  categoria: 'juvenil' | 'adulto' | 'senior' | 'femenino' | 'masculino';
  tipo: 'futbol' | 'futsal' | 'futbol7';
  fechaCreacion: Date;
  entrenador?: mongoose.Types.ObjectId;
  jugadores?: mongoose.Types.ObjectId[];
  logo?: string;
  activo: boolean;
}
⋮----
// Índices para mejorar el rendimiento de búsquedas comunes
````

## File: backend/src/models/User.ts
````typescript
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
⋮----
export interface IUser extends Document {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  rol: 'admin' | 'veedor' | 'entrenador' | 'usuario';
  activo: boolean;
  fechaCreacion: Date;
  ultimoAcceso?: Date;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}
⋮----
// Hash de la contraseña antes de guardar
⋮----
// Método para comparar contraseñas
````

## File: backend/src/routes/authRoutes.ts
````typescript
import express from 'express';
import { body } from 'express-validator';
import authController from '../controllers/authController';
import { authenticate } from '../middleware/auth';
⋮----
/**
 * @route POST /api/auth/register
 * @desc Registrar un nuevo usuario
 * @access Public
 */
⋮----
/**
 * @route POST /api/auth/login
 * @desc Iniciar sesión de usuario
 * @access Public
 */
⋮----
/**
 * @route GET /api/auth/me
 * @desc Obtener el perfil del usuario actual
 * @access Private
 */
⋮----
/**
 * @route PATCH /api/auth/profile
 * @desc Actualizar datos del perfil de usuario
 * @access Private
 */
⋮----
/**
 * @route POST /api/auth/change-password
 * @desc Cambiar contraseña del usuario
 * @access Private
 */
````

## File: backend/src/routes/index.ts
````typescript
import express from 'express';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import teamRoutes from './teamRoutes';
import playerRoutes from './playerRoutes';
⋮----
// Rutas de autenticación
⋮----
// Rutas de usuarios
⋮----
// Rutas de equipos
⋮----
// Rutas de jugadores
````

## File: frontend/src/api/userService.ts
````typescript
import axios from 'axios';
import { UserFormData, UserResponse, UsersResponse, PaginationParams } from '../types';
⋮----
// Configuración del header con token de autenticación
const getConfig = () =>
⋮----
// Obtener listado de usuarios con paginación
const getUsers = async (params: PaginationParams): Promise<UsersResponse> =>
⋮----
// Obtener un usuario por ID
const getUserById = async (id: string): Promise<UserResponse> =>
⋮----
// Crear nuevo usuario
const createUser = async (userData: UserFormData): Promise<UserResponse> =>
⋮----
// Actualizar usuario
const updateUser = async (id: string, userData: UserFormData): Promise<UserResponse> =>
⋮----
// Eliminar usuario
const deleteUser = async (id: string): Promise<
````

## File: frontend/src/components/layout/AppHeader.tsx
````typescript
import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Menu,
  MenuItem,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
⋮----
interface AppHeaderProps {
  drawerWidth: number;
  onDrawerToggle: () => void;
}
⋮----
// Estado para el menú desplegable de usuario
⋮----
const handleClick = (event: React.MouseEvent<HTMLElement>) =>
⋮----
const handleClose = () =>
⋮----
const handleProfile = () =>
⋮----
const handleLogout = () =>
````

## File: frontend/src/components/teams/TeamForm.tsx
````typescript
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
  Paper
} from '@mui/material';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import ImageIcon from '@mui/icons-material/Image';
import { useTeams, useUsers } from '../../hooks';
import { TeamFormData } from '../../types';
⋮----
interface TeamFormProps {
  open: boolean;
  onClose: () => void;
  teamId?: string;
}
⋮----
// Cargar equipo si se está editando
⋮----
// Cargar usuarios para selector de entrenador
⋮----
// Actualizar formulario cuando se carga el equipo seleccionado
⋮----
// Función para obtener la URL con proxy si es necesario
const getProxiedUrl = (url: string): string =>
⋮----
// Usar un servicio proxy de imágenes que permite CORS
⋮----
// Efecto para actualizar la previsualización cuando cambia la URL del logo
⋮----
// Alternar el uso del proxy
const toggleProxy = () =>
⋮----
const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
) =>
⋮----
// Limpiar error del campo
⋮----
const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
⋮----
// Manejador para validar la imagen cuando carga
const handleImageLoad = () =>
⋮----
// Manejador para cuando la imagen falla al cargar
const handleImageError = () =>
⋮----
const validateForm = (): boolean =>
⋮----
const handleSubmit = () =>
⋮----
{/* Previsualización del logo */}
````

## File: frontend/src/hooks/useAuth.ts
````typescript
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { 
  selectUser, 
  selectIsAuthenticated, 
  selectLoading, 
  selectError, 
  selectUserRole
} from '../store/slices/auth/selectors';
import { 
  login, 
  register, 
  logout, 
  getCurrentUser,
  updateUserProfile,
  changeUserPassword
} from '../store/slices/auth/thunks';
import { clearErrors } from '../store/slices/auth/authSlice';
import { LoginData, RegisterData, UpdateProfileData, ChangePasswordData } from '../types';
⋮----
// Hook personalizado para la autenticación
export const useAuth = () =>
⋮----
// Estado
⋮----
// Acciones
⋮----
// Función para verificar si el usuario tiene un rol específico
⋮----
// Mapear roles del backend al frontend si es necesario
⋮----
// Retornar todo lo necesario
⋮----
// Estado
⋮----
// Acciones
````

## File: frontend/src/pages/__tests__/App.test.tsx
````typescript
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { localStorageMock } from '../../test/setup/test-setup';
⋮----
// Mock para getCurrentUser
⋮----
// Mock simplificado de useAuth
⋮----
// Mock mínimo para App
⋮----
// Creamos una función mock que simula el comportamiento básico de App
⋮----
// Simulamos el comportamiento del useEffect en App.tsx
⋮----
// Importamos App directamente (ya está mockeado)
import App from '../../App';
⋮----
// Preparamos localStorage para que retorne null
⋮----
// Simplemente llamamos a la función App (que realmente es nuestro mock)
⋮----
// Verificamos que no se haya llamado a getCurrentUser
⋮----
// Simulamos que hay un token en localStorage
⋮----
// Simplemente llamamos a la función App (que realmente es nuestro mock)
⋮----
// Verificamos que se haya llamado a getCurrentUser
````

## File: frontend/src/pages/__tests__/Login.test.tsx
````typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
⋮----
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';
import { useAuth } from '../../hooks/useAuth';
⋮----
// Mocks
⋮----
// Crear un mock completo para useAuth
const createMockAuthHook = (overrides =
⋮----
// Verificar que los elementos del formulario estén presentes
⋮----
// Intentar enviar el formulario vacío
⋮----
// Nota: La implementación actual podría no mostrar una alerta con role='alert'
// o podría estar implementando la validación de otra manera
⋮----
// Configurar mock más detallado para useAuth
⋮----
// Completar el formulario
⋮----
// Enviar el formulario
⋮----
// Verificar que se llama a la función login con los datos correctos
⋮----
// Configurar mock para simular estado de carga
⋮----
// Verificar que se muestra el indicador de carga
⋮----
// Configurar mock para simular error de autenticación
⋮----
// Verificar que se muestra el mensaje de error
⋮----
// Configurar mock para simular usuario autenticado
⋮----
// Verificar que se intenta redirigir al dashboard
````

## File: frontend/src/pages/Login.tsx
````typescript
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Alert,
  Link,
  InputAdornment,
  IconButton,
  CircularProgress
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../hooks/useAuth';
⋮----
// Redireccionar si ya está autenticado
⋮----
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
⋮----
const handleTogglePassword = () =>
⋮----
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
⋮----
// Validación básica del formulario
⋮----
// Utilizar el hook de autenticación para iniciar sesión
⋮----
// Mostrar error (validación del formulario o error de autenticación)
````

## File: frontend/src/pages/Teams.tsx
````typescript
import { useEffect, useState } from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Button, 
  TextField, 
  IconButton, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  CircularProgress
} from '@mui/material';
import { 
  Add as AddIcon, 
  Delete as DeleteIcon, 
  Edit as EditIcon, 
  Info as InfoIcon
} from '@mui/icons-material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useTeams } from '../hooks/useTeams';
import TeamForm from '../components/teams/TeamForm';
import { TeamPaginationParams } from '../types';
import { RandomTeamsGenerator } from '../components/teams';
import { useNavigate } from 'react-router-dom';
import { esESGrid } from '../utils/dataGridLocale';
⋮----
// Cargar equipos al montar el componente
⋮----
// Manejar cambios de paginación
const handlePageChange = (page: number) =>
⋮----
// Manejar cambios en el tamaño de página
const handlePageSizeChange = (pageSize: number) =>
⋮----
// Manejar búsqueda
const handleSearch = () =>
⋮----
// Manejar cambios en filtros
const handleCategoriaChange = (event: SelectChangeEvent) =>
⋮----
const handleTipoChange = (event: SelectChangeEvent) =>
⋮----
// Manejar creación de equipo
const handleCreateTeam = () =>
⋮----
// Manejar edición de equipo
const handleEditTeam = (id: string) =>
⋮----
// Manejar cierre de formulario
const handleCloseForm = () =>
⋮----
// Recargar datos después de crear/editar
⋮----
// Manejar confirmación de eliminación
const handleConfirmDelete = (id: string) =>
⋮----
// Manejar eliminación de equipo
const handleDeleteTeam = () =>
⋮----
// Función para capitalizar primera letra
const capitalizeFirstLetter = (str: string): string =>
⋮----
// Función para ver detalle del equipo
const handleViewTeamDetail = (id: string) =>
⋮----
// Definir columnas para la tabla
⋮----
{/* Filtros de búsqueda */}
⋮----
{/* Tabla de equipos */}
⋮----
handlePageChange(model.page);
handlePageSizeChange(model.pageSize);
⋮----
{/* Formulario de creación/edición */}
⋮----
{/* Diálogo de confirmación de eliminación */}
````

## File: frontend/src/store/__tests__/slices/teams/thunks.test.ts
````typescript
import { describe, test, expect, beforeEach } from 'vitest';
import {
  fetchTeams,
  fetchTeamById,
  createTeam,
  updateTeam,
  deleteTeam
} from '../../../slices/teams/thunks';
import {
  teamsLoading,
  teamsLoadSuccess,
  teamLoadSuccess,
  teamCreateSuccess,
  teamUpdateSuccess,
  teamDeleteSuccess,
  teamsFail
} from '../../../slices/teams/teamsSlice';
import { teamService } from '../../../../api';
import { TeamListItem, TeamFormData, PaginationParams } from '../../../../types';
import { vi } from 'vitest';
⋮----
// Mock del servicio de equipos
⋮----
// Mock de equipo para pruebas
⋮----
// Mock de datos de formulario
⋮----
// Mock de dispatch
⋮----
// Limpiar mocks antes de cada prueba
⋮----
// Configurar mock para retornar datos de éxito
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Verificar llamada al servicio
⋮----
// Configurar mock para retornar datos de error
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Configurar mock para lanzar excepción
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Configurar mock para retornar datos de éxito
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Verificar llamada al servicio
⋮----
// Configurar mock para retornar datos de error
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Configurar mock para retornar datos de éxito
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Verificar llamada al servicio
⋮----
// Configurar mock para retornar datos de error
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Configurar mock para retornar datos de éxito
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Verificar llamada al servicio
⋮----
// Configurar mock para retornar datos de error
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Configurar mock para retornar datos de éxito
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
⋮----
// Verificar llamada al servicio
⋮----
// Configurar mock para retornar datos de error
⋮----
// Ejecutar el thunk
⋮----
// Verificar que se llama a las acciones correctas
````

## File: frontend/src/store/slices/index.ts
````typescript
import authReducer from './auth/authSlice';
import usersReducer from './users';
import teamsReducer from './teams';
import playersReducer from './players';
// Importar futuros reducers
// import teamsReducer from './teams/teamsSlice';
⋮----
// teamsReducer
````

## File: frontend/src/store/slices/teams/teamsSlice.ts
````typescript
import { createSlice } from '@reduxjs/toolkit';
import { TeamListItem } from '../../../types';
⋮----
// Definir interfaces para el estado
interface TeamsState {
  teams: TeamListItem[];
  selectedTeam: TeamListItem | null;
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  limit: number;
}
⋮----
// Estado inicial
⋮----
// Interfaces para los payloads
interface FetchTeamsPayload {
  teams: TeamListItem[];
  total: number;
  page: number;
  limit: number;
}
⋮----
// Función para adaptar el objeto del servidor al formato del frontend
const adaptTeamResponse = (team: unknown): TeamListItem =>
⋮----
// Crear slice
⋮----
// Limpiar equipo seleccionado
⋮----
// Limpiar errores
⋮----
// Acciones para manejar estados de carga y resultados
⋮----
// Exportar acciones y reducer
````

## File: frontend/src/types/teams.ts
````typescript
// Interfaz para objetos de equipo en listados
export interface TeamListItem {
  _id: string;
  nombre: string;
  categoria: string;
  tipo: string;
  entrenador?: string | { _id: string; nombre: string; apellido: string; email: string };
  logoUrl?: string;
  logo?: string;
  activo: boolean;
}
⋮----
// Interfaz para la respuesta de listado de equipos
export interface TeamsResponse {
  success: boolean;
  equipos?: TeamListItem[];
  totalEquipos?: number;
  message?: string;
}
⋮----
// Interfaz para la respuesta de un solo equipo
export interface TeamResponse {
  success: boolean;
  equipo?: TeamListItem;
  message?: string;
}
⋮----
// Interfaz para parámetros de paginación en solicitudes de equipos
export interface TeamPaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
  categoria?: string;
  tipo?: string;
}
⋮----
// Interfaz para datos para crear/actualizar equipo
export interface TeamFormData {
  nombre: string;
  categoria: string;
  tipo: string;
  entrenador?: string;
  logoUrl?: string;
  activo?: boolean;
}
````

## File: frontend/vitest.config.ts
````typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
⋮----
// https://vitejs.dev/config/
````

## File: package.json
````json
{
  "name": "gestor-liga-futbol",
  "version": "0.1.0",
  "private": true,
  "workspaces": [
    "frontend",
    "backend"
  ],
  "scripts": {
    "dev:frontend": "cd frontend && npm run dev",
    "dev:backend": "cd backend && npm run dev",
    "dev": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
    "build:frontend": "cd frontend && npm run build",
    "build:backend": "cd backend && npm run build",
    "build": "npm run build:frontend && npm run build:backend",
    "test:frontend": "cd frontend && npm test",
    "test:frontend:ci": "cd frontend && npm run test:ci",
    "test:backend": "cd backend && npm test",
    "test": "npm run test:frontend && npm run test:backend",
    "lint:frontend": "cd frontend && npm run lint",
    "lint:backend": "cd backend && npm run lint",
    "lint": "npm run lint:frontend && npm run lint:backend",
    "prepare": "husky"
  },
  "devDependencies": {
    "concurrently": "^8.2.2",
    "husky": "^9.0.11",
    "lint-staged": "^15.2.2"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "lint-staged": {
    "frontend/**/*.{ts,tsx}": [
      "npm run lint:frontend",
      "npm run test:frontend:ci"
    ],
    "backend/**/*.ts": [
      "npm run lint:backend",
      "npm run test:backend -- --passWithNoTests"
    ]
  }
}
````

## File: README.md
````markdown
# Sistema de Gestión de Ligas de Fútbol 8v8

Este repositorio contiene la documentación y el código para un sistema completo de gestión de ligas de fútbol 8v8, diseñado para administrar equipos, jugadores, partidos, estadísticas y contenido multimedia.

## Descripción del Proyecto

El Sistema de Gestión de Ligas de Fútbol 8v8 es una plataforma web y móvil que permite la administración integral de ligas deportivas, con capacidad para gestionar múltiples ligas simultáneamente como servicio SaaS.

### Características Principales

- Gestión completa de equipos y jugadores
- Calendarización y seguimiento de partidos
- Registro de estadísticas y tabla de posiciones
- Sistema de sanciones y arbitraje
- Galería multimedia y sistema de noticias
- Dashboard administrativo con analíticas
- Integración con sistemas de pago
- Soporte multi-liga (multi-tenancy)

## Estructura del Repositorio

```
/
├── docs/                      # Documentación del proyecto
│   ├── plan-de-pruebas.md     # Plan detallado de pruebas
│   └── plan-de-implementacion.md  # Plan de implementación por fases
├── tracking/                  # Sistema de seguimiento de desarrollo
│   ├── TRACKING.md            # Estado general del proyecto
│   ├── SPRINT-ACTUAL.md       # Detalle del sprint en curso
│   ├── NOTAS-DESARROLLO.md    # Notas técnicas y decisiones
│   ├── TAREAS-PENDIENTES.md   # Backlog y tareas pendientes
│   └── sprints/               # Historial de sprints completados
├── liga-futbol-prd.md         # Documento de requisitos del producto (PRD)
└── README.md                  # Este archivo
```

## Documentación Principal

El proyecto incluye los siguientes documentos clave:

1. **PRD (Product Requirements Document)**: [liga-futbol-prd.md](liga-futbol-prd.md)
   - Visión general y objetivos
   - Público objetivo
   - Características y funcionalidades detalladas
   - Recomendaciones técnicas
   - Modelo conceptual de datos
   - Consideraciones de diseño y seguridad
   - Fases de desarrollo propuestas

2. **Plan de Pruebas**: [docs/plan-de-pruebas.md](docs/plan-de-pruebas.md)
   - Estrategia de pruebas adaptada para un solo desarrollador
   - Tipos de pruebas y priorización
   - Plan por fase de desarrollo
   - Automatización y uso de IA para pruebas
   - Gestión de defectos
   - Criterios de aceptación

3. **Plan de Implementación**: [docs/plan-de-implementacion.md](docs/plan-de-implementacion.md)
   - Enfoque y metodología de desarrollo
   - Plan detallado por fases con estimaciones
   - Stack tecnológico y arquitectura
   - Tareas específicas para el MVP
   - Gestión de riesgos
   - Métricas de progreso

## Sistema de Seguimiento

El proyecto utiliza un sistema de seguimiento basado en Markdown diseñado para facilitar la colaboración con asistentes de IA:

1. **Estado General**: [tracking/TRACKING.md](tracking/TRACKING.md)
   - Visión global del progreso del proyecto
   - Estado actual de fases y sprints
   - Métricas de avance

2. **Sprint Actual**: [tracking/SPRINT-ACTUAL.md](tracking/SPRINT-ACTUAL.md)
   - Detalle de tareas del sprint en curso
   - Registro diario de avances
   - Problemas encontrados y soluciones

3. **Notas de Desarrollo**: [tracking/NOTAS-DESARROLLO.md](tracking/NOTAS-DESARROLLO.md)
   - Decisiones técnicas y arquitectónicas
   - Soluciones a problemas encontrados
   - Referencias y recursos útiles

4. **Backlog**: [tracking/TAREAS-PENDIENTES.md](tracking/TAREAS-PENDIENTES.md)
   - Tareas pendientes priorizadas
   - Mejoras técnicas planeadas
   - Ideas para futuras fases

## Cómo Usar Esta Documentación

- **Para entender el producto**: Comienza con el [PRD](liga-futbol-prd.md)
- **Para planificar el desarrollo**: Consulta el [Plan de Implementación](docs/plan-de-implementacion.md)
- **Para definir estrategia de pruebas**: Revisa el [Plan de Pruebas](docs/plan-de-pruebas.md)
- **Para ver el estado actual**: Consulta [TRACKING.md](tracking/TRACKING.md)

## Stack Tecnológico

El proyecto está diseñado para implementarse con las siguientes tecnologías:

- **Frontend**: React 19 con TypeScript, Vite, Material UI
- **Backend**: Node.js, Express, TypeScript
- **Base de Datos**: MongoDB
- **Almacenamiento**: Cloudinary
- **Despliegue**: Vercel (frontend), Railway (backend)
- **Otros**: Stripe para pagos, GitHub Actions para CI/CD

## Estado Actual

Este proyecto se encuentra en fase inicial de desarrollo. Se ha configurado la estructura básica del frontend con Vite y React 19, y el backend con Express y TypeScript.

## Próximos Pasos

1. Configuración del entorno de desarrollo
2. Implementación de la arquitectura base
3. Desarrollo del MVP según el plan de implementación
4. Pruebas continuas siguiendo el plan de pruebas

## Licencia

[MIT License](LICENSE)
````

## File: tracking/sprints/sprint-2.md
````markdown
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
````

## File: .gitignore
````
# Dependencias
node_modules/
.pnp/
.pnp.js

# Producción
/frontend/build
/frontend/dist
/backend/dist
/frontend/public/

# Archivos de desarrollo
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.env.*

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Archivos de cobertura
/coverage

# Archivos de configuración del IDE
.idea/
.vscode/
*.swp
*.swo

# Misc
.DS_Store
*.pem

# Archivos de typescript
*.tsbuildinfo

# Archivos de dependencias
package-lock.json
yarn.lock

# Archivos de debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local history
.history/ 

# Repomix
repomix.config.json
.repomixignore

# Carpetas de caché
.vite/
.vitest-cache/
````

## File: backend/package.json
````json
{
  "name": "liga-futbol-backend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "lint": "eslint src --ext .ts",
    "format": "prettier --write \"src/**/*.ts\"",
    "test": "jest --passWithNoTests"
  },
  "dependencies": {
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "helmet": "^7.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.14.2",
    "mongoose": "^8.0.3",
    "morgan": "^1.10.0",
    "winston": "^3.11.0"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.2",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/jest": "^29.5.10",
    "@types/jsonwebtoken": "^9.0.5",
    "@types/morgan": "^1.9.9",
    "@types/node": "^20.10.4",
    "@types/supertest": "^2.0.16",
    "@typescript-eslint/eslint-plugin": "^6.13.2",
    "@typescript-eslint/parser": "^6.13.2",
    "eslint": "^8.55.0",
    "jest": "^29.7.0",
    "mongodb-memory-server": "^9.5.0",
    "nodemon": "^3.0.2",
    "prettier": "^3.1.0",
    "supertest": "^6.3.3",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.3.3"
  }
}
````

## File: backend/src/index.ts
````typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import routes from './routes';
⋮----
// Cargar variables de entorno
⋮----
// Middleware
⋮----
// Rutas API
⋮----
// Ruta de salud
⋮----
// Variable para almacenar la instancia de MongoMemoryServer
⋮----
// Conexión a la base de datos
export const connectDB = async () =>
⋮----
// Evitar conectarse si ya hay una conexión activa
⋮----
// Intentar conectar a la base de datos configurada en .env
⋮----
// Intentar conectar a MongoDB usando la URI de .env
⋮----
// Si no hay URI configurada o falla la conexión, usar MongoDB en memoria
⋮----
// Función para cerrar la conexión a la base de datos
export const closeDB = async () =>
⋮----
// Función para iniciar el servidor
export const startServer = () =>
⋮----
// Iniciar servidor solo si este archivo es el punto de entrada principal
// y no es importado por otro (como en pruebas)
⋮----
// Manejo de errores no capturados
⋮----
// Manejo de cierre de la aplicación
````

## File: backend/src/middleware/auth.ts
````typescript
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import User from '../models/User';
import mongoose from 'mongoose';
⋮----
// Extender el tipo Request para incluir el usuario autenticado
export interface AuthenticatedRequest extends Request {
  user?: {
    _id: string;
    email: string;
    rol: string;
  };
}
⋮----
/**
 * Middleware para proteger rutas que requieren autenticación
 */
export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) =>
⋮----
// Obtener el token del header Authorization
⋮----
// Extraer el token
⋮----
// Verificar el token
⋮----
// Buscar el usuario en la base de datos
⋮----
// Verificar si el usuario está activo
⋮----
// Añadir el usuario a la solicitud
⋮----
// Actualizar el último acceso del usuario
⋮----
/**
 * Middleware para verificar roles de usuario
 * @param roles Array de roles permitidos
 */
export const authorize = (roles: string[]) =>
````

## File: docs/plan-de-implementacion.md
````markdown
# Plan de Implementación: Sistema de Gestión de Ligas de Fútbol 8v8

## 1. Introducción

Este documento detalla el plan de implementación para el desarrollo del Sistema de Gestión de Ligas de Fútbol 8v8, estructurado específicamente para un escenario de desarrollo individual con apoyo de IA. El plan adopta un enfoque incremental y pragmático, priorizando la entrega de valor y manteniendo una arquitectura escalable.

## 2. Enfoque de Desarrollo

### 2.1 Metodología

La implementación seguirá un enfoque **ágil adaptado para desarrollador individual**:

- **Ciclos de desarrollo**: Sprints de 2 semanas
- **Desarrollo iterativo**: Entregas incrementales funcionales
- **Priorización**: Basada en valor de negocio y dependencias técnicas
- **Revisión continua**: Validación periódica con feedback simulado de usuarios

### 2.2 Principios Guía

| Principio | Aplicación |
|-----------|------------|
| **Simplicidad** | Soluciones directas sobre complejidad prematura |
| **Automatización** | Procesos repetitivos automatizados desde el inicio |
| **Calidad incorporada** | Testing integrado en el proceso de desarrollo |
| **Arquitectura evolutiva** | Diseño que permita cambios sin refactorizaciones masivas |
| **Deuda técnica controlada** | Registro explícito de compromisos técnicos |

## 3. Preparación del Entorno

### 3.1 Setup Inicial

| Tarea | Herramientas | Tiempo Estimado |
|-------|--------------|-----------------|
| Configuración de repositorio | GitHub | 1 día |
| Estructura de proyecto base | Vite + React + TypeScript | 1 día |
| Setup de backend | Express.js + TypeScript | 1 día |
| Configuración de base de datos | MongoDB Atlas | 1 día |
| Integración de CI/CD básica | GitHub Actions | 1 día |

### 3.2 Infraestructura

| Componente | Tecnología | Configuración |
|------------|------------|---------------|
| Frontend Hosting | Vercel | Despliegue automático desde main |
| Backend Hosting | Railway | Despliegue automático desde main |
| Base de Datos | MongoDB Atlas | Cluster compartido (plan gratuito) |
| Almacenamiento | Cloudinary | Plan gratuito para desarrollo |
| Dominio | Personalizado | Configuración en Vercel |

## 4. Plan de Implementación por Fases

### 4.1 Fase 1: MVP (Semanas 1-10)

#### Semanas 1-2: Configuración y Arquitectura Base

- Estructura del proyecto completo
- Configuración de autenticación JWT
- Modelo de datos básico
- Plantillas UI con diseño responsive básico

#### Semanas 3-4: Gestión de Usuarios y Equipos

- CRUD de usuarios con roles
- CRUD de equipos
- Asignación de entrenadores a equipos
- Pantallas y layouts principales

#### Semanas 5-6: Gestión de Jugadores

- CRUD de jugadores
- Asignación de jugadores a equipos
- Perfil de jugador básico
- Lógica de fichajes simple

#### Semanas 7-8: Calendario y Partidos

- Creación manual de calendario
- Gestión de partidos
- Asignación de equipos a partidos
- Visualización de calendario

#### Semanas 9-10: Tabla de Posiciones

- Registro básico de resultados
- Cálculo automático de posiciones
- Visualización de tabla
- Pruebas integradas del MVP

### 4.2 Fase 2: Funcionalidades Core (Semanas 11-20)

#### Semanas 11-12: Sistema de Estadísticas

- Registro detallado de eventos de partido
- Cálculo de estadísticas por equipo
- Cálculo de estadísticas individuales
- Reportes básicos

#### Semanas 13-14: Gestión de Árbitros

- CRUD de árbitros
- Asignación de árbitros a partidos
- Registro de informes arbitrales
- Seguimiento de pagos básico

#### Semanas 15-16: Sistema de Sanciones

- Registro de tarjetas y sanciones
- Cálculo automático de suspensiones
- Notificaciones básicas
- Visualización de sanciones en perfiles

#### Semanas 17-18: Generación Automática de Calendario

- Algoritmo de generación de calendario
- Configuración de restricciones
- Edición manual posterior
- Validación de conflictos

#### Semanas 19-20: Dashboard Administrativo

- KPIs principales
- Visualización de estado de la liga
- Funciones de administración centralizadas
- Revisión y pruebas de Fase 2

### 4.3 Fase 3: Contenido y Engagement (Semanas 21-28)

#### Semanas 21-22: Sistema de Noticias

- CRUD de noticias y anuncios
- Categorización de contenido
- Editor WYSIWYG básico
- Visualización en frontend

#### Semanas 23-24: Galería Multimedia

- Subida y gestión de imágenes
- Organización por categorías
- Optimización de imágenes
- Galería responsive

#### Semanas 25-26: Notificaciones y Alertas

- Sistema de notificaciones in-app
- Alertas por email (básicas)
- Preferencias de notificación
- Centro de notificaciones

#### Semanas 27-28: Optimizaciones y PWA

- Convertir a PWA básica
- Optimizaciones de rendimiento
- Mejoras de UX basadas en feedback
- Revisión completa de Fase 3

### 4.4 Fase 4: Monetización y Escalabilidad (Semanas 29-38)

#### Semanas 29-30: Integración de Pagos

- Integración con Stripe
- Flujo de pago básico
- Gestión de transacciones
- Facturas simples

#### Semanas 31-32: Multi-tenancy Básico

- Separación lógica por liga
- Gestión de configuración por liga
- Aislamiento de datos
- Pruebas de aislamiento

#### Semanas 33-34: Personalización por Liga

- Temas y estilos personalizados
- Configuración de reglas específicas
- Branding por liga
- Configuración visual

#### Semanas 35-36: Optimización de Rendimiento

- Análisis de rendimiento detallado
- Optimización de consultas
- Implementación de caché estratégico
- Lazy loading y code splitting

#### Semanas 37-38: Analíticas Básicas

- Dashboard de análisis de uso
- Métricas clave por liga
- Seguimiento de comportamiento
- Reportes administrativos

### 4.5 Fase 5: Refinamiento (Semanas 39-44)

#### Semanas 39-40: Aplicación Móvil Básica

- Conversión a React Native
- Funcionalidades principales móviles
- Adaptación de UI para móvil
- Pruebas en dispositivos reales

#### Semanas 41-42: Características Premium

- Identificación de features premium
- Implementación de 2-3 features premium
- Sistema de control de acceso granular
- Marketing de características

#### Semanas 43-44: Pulido Final

- Revisión completa de UX
- Corrección de bugs pendientes
- Documentación final
- Preparación para lanzamiento

### 4.6 Tiempo de Calidad y Refactorización

Para asegurar la calidad del código y evitar la acumulación de deuda técnica, se asignará explícitamente tiempo para pruebas y refactorización dentro de cada fase:

| Fase | Tiempo Asignado | Enfoque |
|------|-----------------|---------|
| Fase 1: MVP | 1 día cada 2 semanas | Pruebas unitarias básicas, refactorización de componentes clave |
| Fase 2: Core | 1.5 días cada 2 semanas | Ampliación de cobertura de pruebas, mejora de rendimiento |
| Fase 3: Engagement | 2 días cada 2 semanas | Pruebas de integración, optimización de UX |
| Fase 4: Monetización | 2 días cada 2 semanas | Pruebas de seguridad, optimización de rendimiento |
| Fase 5: Refinamiento | 3 días cada 2 semanas | Pruebas de carga, optimización final |

Adicionalmente, se implementará:

- Sistema de revisión de código periódica (auto-revisión con ayuda de IA)
- Análisis estático de código como parte del pipeline CI/CD
- Documentación continua de decisiones técnicas y compromisos
- Medición periódica de métricas de calidad (cobertura, complejidad, etc.)

## 5. Stack Tecnológico Detallado

### 5.1 Frontend

| Componente | Tecnología | Justificación |
|------------|------------|---------------|
| Framework | React.js + TypeScript | Tipado estático, ecosistema robusto |
| UI Framework | Material UI | Componentes pre-estilizados, temas |
| Estado | Redux Toolkit | Manejo escalable de estado |
| Routing | React Router | Estándar de la industria |
| Formularios | Formik + Yup | Validación y manejo eficiente |
| Gráficos | Recharts | Lightweight, gran personalización |
| Tablas | Material UI DataGrid | Rendimiento con datasets grandes |
| Testing | Jest + RTL | Cobertura completa de testing |

### 5.2 Backend

| Componente | Tecnología | Justificación |
|------------|------------|---------------|
| Runtime | Node.js | Mismo lenguaje en toda la stack |
| Framework | Express.js + TypeScript | Ligero, flexible, tipado |
| Autenticación | JWT + bcrypt | Seguro, stateless |
| Validación | Joi | Esquemas declarativos |
| ORM/ODM | Mongoose | Tipado para MongoDB, hooks |
| API Docs | Swagger/OpenAPI | Documentación interactiva |
| Testing | Jest + Supertest | Cobertura completa |
| Logging | Winston | Flexible, múltiples transports |

### 5.3 DevOps Simplificado

| Componente | Tecnología | Justificación |
|------------|------------|---------------|
| CI | GitHub Actions | Integrado con repositorio |
| CD | Vercel/Railway | Despliegue sencillo y automático |
| Monitoreo | Sentry | Seguimiento de errores |
| Análisis | Lighthouse CI | Métricas de rendimiento |

## 6. Arquitectura de Alto Nivel

### 6.1 Arquitectura de Aplicación

```ascii
┌────────────────┐      ┌────────────────┐      ┌────────────────┐
│   Frontend     │      │    Backend     │      │   Database     │
│                │      │                │      │                │
│  React + MUI   │◄────►│  Express API   │◄────►│   MongoDB      │
│                │      │                │      │                │
└────────────────┘      └─────┬──────────┘      └────────────────┘
                              │
                  ┌───────────┴───────────┐
                  │   External Services   │
                  │                       │
                  │  Cloudinary, Stripe   │
                  │                       │
                  └───────────────────────┘
```

### 6.2 Arquitectura de Datos

```ascii
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Usuario   │─┐   │   Equipo    │─┐   │  Partido    │
│             │ │   │             │ │   │             │
└─────────────┘ │   └─────────────┘ │   └─────────────┘
                │                   │
                ▼                   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Jugador   │◄───►│   Evento    │     │  Árbitro    │
│             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
                │
                ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Noticia   │     │ Multimedia  │     │   Liga      │
│             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
```

## 7. Tareas de Desarrollo Detalladas (Fase 1 - MVP)

### 7.1 Configuración y Arquitectura Base

| Tarea | Prioridad | Dependencias | Estimación |
|-------|-----------|--------------|------------|
| Inicializar proyecto React con TypeScript | Alta | Ninguna | 1 día |
| Configurar proyecto Express con TypeScript | Alta | Ninguna | 1 día |
| Definir esquemas MongoDB iniciales | Alta | Ninguna | 2 días |
| Implementar autenticación JWT | Alta | Backend inicial | 2 días |
| Configurar enrutamiento básico React Router | Media | Frontend inicial | 1 día |
| Configurar Material UI y tema base | Media | Frontend inicial | 1 día |
| Implementar layout principal responsive | Media | Configuración MUI | 2 días |

### 7.2 Gestión de Usuarios y Equipos

| Tarea | Prioridad | Dependencias | Estimación |
|-------|-----------|--------------|------------|
| Modelo y API de Usuarios | Alta | DB Schemas | 1 día |
| Registro e inicio de sesión | Alta | Autenticación JWT | 2 días |
| Gestión de roles y permisos | Alta | Modelo de Usuarios | 2 días |
| Modelo y API de Equipos | Alta | DB Schemas | 1 día |
| CRUD completo de Equipos | Alta | API de Equipos | 2 días |
| Formularios de gestión de Usuarios | Media | Frontend inicial | 2 días |
| Formularios de gestión de Equipos | Media | Frontend inicial | 2 días |

## 8. Gestión de Riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Scope creep | Alta | Alto | Estricta priorización, scope fijo por sprint |
| Deuda técnica acumulada | Alta | Medio | Días dedicados a refactorización |
| Problemas de rendimiento | Media | Alto | Monitorización temprana, optimización progresiva |
| Curva de aprendizaje | Media | Medio | Reservar tiempo para investigación |
| Cambios en APIs externas | Baja | Medio | Abstraer integraciones, monitorear cambios |

## 9. Plan de Mitigación de Riesgos

### 9.1 Estrategias Clave

| Estrategia | Aplicación |
|------------|------------|
| Desarrollo basado en MVPs | Versiones funcionales tempranas para validar |
| Prototipos rápidos | Para características complejas antes de implementar |
| Refactorización planificada | Sessions periódicas dedicadas a mejora de código |
| Desarrollo guiado por pruebas | Para componentes críticos o complejos |
| Documentación continua | Documentar decisiones y compromisos técnicos |

### 9.2 Planes de Contingencia

| Escenario | Plan |
|-----------|------|
| Retraso significativo | Reducir scope manteniendo MVP viable |
| Problemas técnicos bloqueantes | Preparar alternativas técnicas para features complejas |
| Feedback negativo de usuario | Reservar sprints para ajustes basados en feedback |
| Limitaciones de planes gratuitos | Planificar migración escalonada a planes pagos |

## 10. Métricas de Progreso

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| Velocidad | Completar >80% de tareas estimadas por sprint | Tablero de tareas |
| Calidad de código | <5 bugs críticos por feature | Sistema de issues |
| Cobertura de pruebas | >70% en módulos críticos | Reportes Jest |
| Rendimiento | LCP <2.5s, TTI <3.5s | Lighthouse CI |
| Deuda técnica | <15% del código total | SonarQube o similar |

## 11. Herramientas y Recursos

### 11.1 Desarrollo

| Categoría | Herramientas |
|-----------|--------------|
| IDE | VS Code con extensiones recomendadas |
| Control de versiones | Git + GitHub |
| Gestión de tareas | GitHub Projects |
| Diagramas | Draw.io, Figma |
| Documentación | Markdown, Storybook |

### 11.2 Recursos de IA

| Herramienta | Uso |
|-------------|-----|
| GitHub Copilot | Asistencia en codificación |
| ChatGPT | Generación de datos de prueba, debug |
| Midjourney | Generación de imágenes para prototipado |
| Claude | Optimización y revisión de código |

## 12. Conclusión

Este plan de implementación está diseñado específicamente para un desarrollador individual con apoyo de IA, enfocándose en:

1. Entregas incrementales y funcionales
2. Priorización estricta basada en valor
3. Uso estratégico de herramientas y automatización
4. Mejora continua y adaptación

Siguiendo este plan, se espera lograr un desarrollo eficiente y sistemático del Sistema de Gestión de Ligas de Fútbol 8v8, entregando un producto de calidad a pesar de las limitaciones de recursos.
````

## File: frontend/src/api/authService.ts
````typescript
import axios from 'axios';
import { RegisterData, LoginData, AuthResponse, UpdateProfileData, ChangePasswordData } from '../types';
⋮----
// Configuración base para axios
⋮----
// Transformar datos de registro para adaptarlos al backend
const transformRegisterData = (data: RegisterData) =>
⋮----
// Mapeo de roles del frontend al backend
const transformRole = (role: string): string =>
⋮----
// Servicio de autenticación
⋮----
// Registrar usuario
⋮----
// Iniciar sesión
⋮----
// Cerrar sesión
⋮----
// Obtener perfil del usuario
⋮----
// Actualizar datos del perfil
⋮----
// Actualizamos los datos en localStorage
⋮----
// Cambiar contraseña
⋮----
// Verificar si el usuario está autenticado
````

## File: frontend/src/api/index.ts
````typescript

````

## File: frontend/src/api/teamService.ts
````typescript
import axios from 'axios';
import { TeamFormData, TeamResponse, TeamsResponse, TeamPaginationParams } from '../types';
⋮----
/**
 * Servicio para gestionar equipos en el backend
 */
⋮----
/**
   * Obtiene un listado paginado de equipos
   * @param params Parámetros de paginación
   * @returns Respuesta con listado de equipos
   */
async getTeams(params: TeamPaginationParams): Promise<TeamsResponse>
⋮----
/**
   * Obtiene un equipo por su ID
   * @param teamId ID del equipo
   * @returns Respuesta con datos del equipo
   */
async getTeamById(teamId: string): Promise<TeamResponse>
⋮----
/**
   * Crea un nuevo equipo
   * @param teamData Datos del equipo a crear
   * @returns Respuesta con el equipo creado
   */
async createTeam(teamData: TeamFormData): Promise<TeamResponse>
⋮----
// Crear un nuevo objeto con la estructura correcta para el backend
⋮----
// Solo añadir entrenador si existe
⋮----
// Solo añadir logo si existe
⋮----
// Asegurarse de que la URL tenga un protocolo
⋮----
// No añadir el campo logo si no es una URL válida incluso con el protocolo
⋮----
/**
   * Actualiza un equipo existente
   * @param teamId ID del equipo a actualizar
   * @param teamData Datos actualizados del equipo
   * @returns Respuesta con el equipo actualizado
   */
async updateTeam(teamId: string, teamData: TeamFormData): Promise<TeamResponse>
⋮----
// Crear un nuevo objeto con la estructura correcta para el backend
⋮----
// Solo añadir entrenador si existe
⋮----
// Solo añadir logo si existe
⋮----
// Asegurarse de que la URL tenga un protocolo
⋮----
// No añadir el campo logo si no es una URL válida incluso con el protocolo
⋮----
/**
   * Elimina un equipo
   * @param teamId ID del equipo a eliminar
   * @returns Respuesta con resultado de la operación
   */
async deleteTeam(teamId: string): Promise<TeamResponse>
````

## File: frontend/src/components/layout/__tests__/AppHeader.test.tsx
````typescript
import { render, screen, fireEvent } from '@testing-library/react';
import AppHeader from '../AppHeader';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { describe, it, expect, vi, beforeEach } from 'vitest';
⋮----
import { useAuth } from '../../../hooks/useAuth';
⋮----
// Tipo para el mock de usuario
interface MockUser {
  nombre?: string;
  apellido?: string;
  rol?: string;
  [key: string]: unknown;
}
⋮----
// Mock para useAuth
const createMockAuthHook = (overrides =
⋮----
// Mocks globales
⋮----
const renderAppHeader = (isAuthenticated = false, user: MockUser | null = null) =>
⋮----
// Configurar el mock de useAuth según los parámetros
⋮----
// Verificar que el nombre de usuario se muestra
⋮----
// Verificar que el botón de cerrar sesión está presente
⋮----
// Verificar que los botones de inicio de sesión y registro NO están presentes
⋮----
// Verificar que se llama a la función logout
````

## File: frontend/src/hooks/index.ts
````typescript

````

## File: frontend/src/pages/Register.tsx
````typescript
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Alert,
  Link,
  Grid,
  InputAdornment,
  IconButton,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  CircularProgress
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../hooks/useAuth';
⋮----
// Tipos disponibles de usuario
⋮----
// Redireccionar si ya está autenticado
⋮----
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
⋮----
const handleSelectChange = (e: SelectChangeEvent) =>
⋮----
const handleTogglePassword = () =>
⋮----
const handleToggleConfirmPassword = () =>
⋮----
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
⋮----
// Validación básica del formulario
⋮----
// Utilizar el hook de autenticación para registrarse
⋮----
// Mostrar error (validación del formulario o error de autenticación)
````

## File: frontend/src/pages/Users.tsx
````typescript
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Stack,
  Grid,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  CircularProgress
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useUsers } from '../hooks/useUsers';
import UserForm from '../components/users/UserForm';
import { PaginationParams, UserListItem } from '../types';
⋮----
// Estados locales para filtros y paginación
⋮----
// Estados para modales
⋮----
// Cargar usuarios al montar el componente y cuando cambien los filtros
⋮----
page: page + 1, // DataGrid usa índice 0, backend usa índice 1
⋮----
// Manejadores para filtros
const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
⋮----
setPage(0); // Resetear página al cambiar filtros
⋮----
const handleRoleFilterChange = (event: SelectChangeEvent) =>
⋮----
const handleStatusFilterChange = (event: SelectChangeEvent) =>
⋮----
// Manejadores para modales
const handleOpenCreateModal = () =>
⋮----
const handleCloseCreateModal = () =>
⋮----
const handleOpenEditModal = (id: string) =>
⋮----
const handleCloseEditModal = () =>
⋮----
const handleOpenDeleteModal = (id: string) =>
⋮----
const handleCloseDeleteModal = () =>
⋮----
// Confirmar eliminación de usuario
const handleConfirmDelete = () =>
⋮----
// Refrescar lista de usuarios
const refreshUsers = () =>
⋮----
// Definición de columnas para la tabla
⋮----
setPage(model.page);
setPageSize(model.pageSize);
⋮----
{/* Modal para crear usuario */}
⋮----
{/* Modal para editar usuario */}
⋮----
{/* Modal de confirmación para eliminar usuario */}
````

## File: frontend/src/types/index.ts
````typescript

````

## File: tracking/NOTAS-DESARROLLO.md
````markdown
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
````

## File: tracking/TAREAS-PENDIENTES.md
````markdown
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
````

## File: backend/src/controllers/authController.ts
````typescript
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { generateToken } from '../utils/jwt';
import User from '../models/User';
import { AuthenticatedRequest } from '../middleware/auth';
⋮----
/**
 * Registrar un nuevo usuario
 * @route POST /api/auth/register
 * @access Public
 */
export const register = async (req: Request, res: Response) =>
⋮----
// Validar errores de la solicitud
⋮----
// Verificar si el usuario ya existe
⋮----
// Si se especifica un rol, verificar que sea válido
⋮----
// Crear el usuario
⋮----
password, // La contraseña será hasheada en el pre-save hook del modelo
rol: rol || 'usuario', // Por defecto es 'usuario'
⋮----
// Generar token JWT
⋮----
// Responder con el token y los datos del usuario (sin la contraseña)
⋮----
/**
 * Iniciar sesión de usuario
 * @route POST /api/auth/login
 * @access Public
 */
export const login = async (req: Request, res: Response) =>
⋮----
// Verificar si email o password están presentes
⋮----
// Validar errores de la solicitud
⋮----
// Buscar el usuario
⋮----
// Verificar si el usuario está activo
// Solo verificamos si la propiedad activo existe y es explícitamente false
⋮----
// Verificar la contraseña
⋮----
// Actualizar último acceso
⋮----
// Generar token JWT
⋮----
// Responder con el token y los datos del usuario (sin la contraseña)
⋮----
/**
 * Obtener el perfil del usuario actual
 * @route GET /api/auth/me
 * @access Private
 */
export const getMe = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// El usuario ya está en req.user gracias al middleware de autenticación
⋮----
/**
 * Actualizar perfil de usuario
 * @route PATCH /api/auth/profile
 * @access Private
 */
export const updateProfile = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Verificar si el email ya está en uso por otro usuario
⋮----
// Actualizar solo los campos proporcionados
⋮----
// Actualizar usuario
⋮----
// Generar nuevo token con la información actualizada
⋮----
/**
 * Cambiar contraseña de usuario
 * @route POST /api/auth/change-password
 * @access Private
 */
export const changePassword = async (req: AuthenticatedRequest, res: Response) =>
⋮----
// Verificar que ambas contraseñas estén presentes
⋮----
// Obtener usuario con contraseña
⋮----
// Verificar contraseña actual
⋮----
// Actualizar contraseña
⋮----
await user.save(); // Esto ejecutará el pre-save hook para hashear la contraseña
````

## File: backend/src/utils/jwt.ts
````typescript
import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';
import { IUser } from '../models/User';
⋮----
// Obtener la clave secreta del entorno o usar una predeterminada (¡solo para desarrollo!)
⋮----
// 7 días en segundos
const JWT_EXPIRES_IN = 7 * 24 * 60 * 60; // 7 días en segundos
⋮----
/**
 * Genera un token JWT para el usuario especificado
 * @param user Usuario para el que se genera el token
 * @returns Token JWT generado
 */
export const generateToken = (user: IUser): string =>
⋮----
/**
 * Verifica y decodifica un token JWT
 * @param token Token JWT a verificar
 * @returns Payload decodificado o null si el token es inválido
 */
export const verifyToken = (token: string): JwtPayload | null =>
````

## File: frontend/vite.config.ts
````typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'
⋮----
// https://vitejs.dev/config/
````

## File: frontend/package.json
````json
{
  "name": "liga-futbol-frontend",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "start": "vite",
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint src --ext ts,tsx",
    "preview": "vite preview",
    "test": "vitest run",
    "test:ci": "vitest run --passWithNoTests",
    "format": "prettier --write \"src/**/*.{ts,tsx,json,md}\""
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/icons-material": "^6.4.8",
    "@mui/material": "^6.4.8",
    "@mui/x-data-grid": "^7.28.0",
    "@reduxjs/toolkit": "^2.6.1",
    "axios": "^1.8.3",
    "formik": "^2.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.3.0",
    "yup": "^1.6.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/user-event": "^14.6.1",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.21.0",
    "eslint-plugin-react": "^7.37.4",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^15.15.0",
    "jsdom": "^26.0.0",
    "prettier": "^3.5.3",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.24.1",
    "vite": "^6.2.0",
    "vitest": "^3.0.9",
    "web-vitals": "^4.2.4"
  }
}
````

## File: frontend/src/store/index.ts
````typescript
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
⋮----
// Importar reducers
// Nota: Estos serán implementados en los próximos pasos
import authReducer from './slices/auth/authSlice';
import usersReducer from './slices/users';
import teamsReducer from './slices/teams';
import playersReducer from './slices/players';
⋮----
// Importar middlewares personalizados
import middlewares from './middleware';
⋮----
// Configuración del store
⋮----
// Aquí se añadirán los demás reducers a medida que se implementen
⋮----
// Middleware configurados por defecto + middlewares personalizados
⋮----
// Ignorar ciertos campos en acciones específicas si es necesario
⋮----
// Tipos para dispatch y state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
⋮----
// Hooks tipados
export const useAppDispatch = ()
````

## File: tracking/TRACKING.md
````markdown
# Seguimiento del Proyecto: Sistema de Gestión de Ligas de Fútbol 8v8

## Estado Actual
- **Fase:** 1 - MVP
- **Sprint:** 2 (Semanas 3-4)
- **Enfoque actual:** Gestión de Usuarios y Equipos
- **Último avance:** [06-04-2025] Implementación de middlewares personalizados para Redux

## Progreso General
- 🟢 Fase 1 - Configuración y Arquitectura Base (100%)
- 🟡 Fase 1 - Gestión de Usuarios y Equipos (45%)
- ⬜ Fase 1 - Gestión de Jugadores (0%)
- ⬜ Fase 1 - Calendario y Partidos (0%)
- ⬜ Fase 1 - Tabla de Posiciones (0%)

## Métricas de Progreso
- **Tareas completadas:** 19/33
- **Pruebas implementadas:** 25
- **Cobertura de código:** 85% (frontend)

## Bloqueantes/Problemas
- Ninguno por el momento

## Próximos Pasos
1. Comenzar la implementación de la interfaz de gestión de usuarios
2. Avanzar con los endpoints de usuarios en el backend
3. Iniciar el desarrollo de la interfaz de gestión de equipos

## Notas para IA
- **Contexto actual:** Redux Toolkit implementado con slices para autenticación, usuarios y equipos. Middlewares personalizados para manejo de errores y logging también implementados.
- **Necesito ayuda con:** Implementación eficiente de las interfaces de usuario para gestión de usuarios y equipos.
- **Referencias:** Ver `tracking/SPRINT-ACTUAL.md` y `tracking/NOTAS-DESARROLLO.md`
````

## File: frontend/src/App.tsx
````typescript
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
⋮----
// Importar layout principal
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';
⋮----
// Importar páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/Users';
import TeamsPage from './pages/Teams';
import TeamDetail from './pages/TeamDetail';
import UserProfile from './pages/UserProfile';
import PlayersPage from './pages/Players';
⋮----
// Tema personalizado
⋮----
// Componente principal
⋮----
// Verificar el estado de autenticación al iniciar la aplicación
⋮----
{/* Rutas públicas */}
⋮----
{/* Rutas protegidas con layout principal */}
⋮----
{/* Perfil de usuario - accesible para cualquier usuario autenticado */}
⋮----
{/* Rutas con roles específicos */}
⋮----
</Route>
⋮----
{/* Ruta para acceso no autorizado */}
⋮----
{/* Ruta por defecto (404) */}
````

## File: tracking/SPRINT-ACTUAL.md
````markdown
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
- [ ] Implementar endpoints para gestión de plantillas
  - [ ] Crear endpoint para añadir jugadores a equipos
  - [ ] Desarrollar endpoint para eliminar jugadores de equipos
  - [ ] Añadir validación de límites de jugadores por equipo
- [ ] Implementar lógica de asignación
  - [ ] Validar que un jugador solo pertenezca a un equipo
  - [ ] Añadir verificación de categoría y edad
  - [ ] Implementar control de fechas de asignación

#### Frontend
- [ ] Crear componente de gestión de plantilla
  - [ ] Desarrollar listado de jugadores en equipo
  - [ ] Implementar búsqueda de jugadores disponibles
  - [ ] Añadir funcionalidad de arrastrar y soltar para asignación
- [ ] Implementar interfaz de administración de plantillas
  - [ ] Crear vista de plantilla por equipo
  - [ ] Añadir acciones para añadir/eliminar jugadores
  - [ ] Implementar visualización por posiciones
  - [ ] Desarrollar filtros por características

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
- Por completar

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
- **Tareas completadas:** 26/50 (52%)
- **Puntos de historia:** 38/60 (63%)
- **Bloqueantes:** Ninguno por el momento
- **Próximos pasos:** Implementar el sistema de asignación de jugadores a equipos y comenzar con el perfil de jugador con estadísticas básicas

## Métricas del Sprint
- **Completado:** 45%
- **Velocidad:** Buena, avance según lo planificado
- **Calidad de código:** Buena, siguiendo patrones establecidos
- **Cobertura de pruebas:** Pendiente de implementar pruebas para los nuevos componentes

## Retrospectiva (al finalizar)
- **Lo que salió bien:**
  - Por determinar
- **Lo que podría mejorar:**
  - Por determinar
- **Acciones para el próximo sprint:**
  - Por determinar
````
