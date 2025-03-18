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