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
