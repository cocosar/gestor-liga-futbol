# Frontend - Sistema de Gestión de Ligas de Fútbol 8v8

Este proyecto contiene el frontend del Sistema de Gestión de Ligas de Fútbol 8v8, desarrollado con React, TypeScript y Material UI.

## Requisitos

- Node.js 14.x o superior
- npm 6.x o superior

## Instalación

1. Clona el repositorio
2. Navega a la carpeta del frontend:
   ```bash
   cd frontend
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Copia el archivo de variables de entorno:
   ```bash
   cp .env.example .env.local
   ```
5. Edita el archivo `.env.local` con tus variables de entorno

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

## Comandos disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm run build`: Compila la aplicación para producción
- `npm test`: Ejecuta los tests
- `npm run lint`: Ejecuta el linter
- `npm run format`: Formatea el código

## Estructura del proyecto

- `/src/components`: Componentes reutilizables
- `/src/pages`: Páginas principales
- `/src/features`: Características organizadas por dominio
- `/src/api`: Llamadas a API
- `/src/hooks`: Hooks personalizados
- `/src/utils`: Funciones utilitarias 