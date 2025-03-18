import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import routes from './routes';

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(helmet());
app.use(morgan('dev'));

// Rutas API
app.use('/api', routes);

// Ruta de salud
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API funcionando correctamente' });
});

// Variable para almacenar la instancia de MongoMemoryServer
let mongoMemoryServer: MongoMemoryServer | null = null;

// Conexión a la base de datos
export const connectDB = async () => {
  try {
    // Evitar conectarse si ya hay una conexión activa
    if (mongoose.connection.readyState !== 0) {
      console.log('MongoDB ya está conectado');
      return;
    }

    // Intentar conectar a la base de datos configurada en .env
    const mongoUri = process.env.MONGODB_URI;
    
    if (mongoUri) {
      try {
        // Intentar conectar a MongoDB usando la URI de .env
        console.log('Intentando conectar a MongoDB usando la URI configurada...');
        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB conectado: ${conn.connection.host}`);
        return;
      } catch (error) {
        console.log('No se pudo conectar a MongoDB usando la URI configurada, usando base de datos en memoria...');
      }
    }
    
    // Si no hay URI configurada o falla la conexión, usar MongoDB en memoria
    console.log('Configurando MongoDB en memoria para desarrollo/pruebas...');
    mongoMemoryServer = await MongoMemoryServer.create();
    const memoryServerUri = mongoMemoryServer.getUri();
    const conn = await mongoose.connect(memoryServerUri);
    console.log(`MongoDB en memoria conectado: ${conn.connection.host}`);
    console.log('ADVERTENCIA: Estás usando una base de datos en memoria. Los datos se perderán al reiniciar la aplicación.');
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error al conectar a MongoDB: ${error.message}`);
    } else {
      console.error('Error desconocido al conectar a MongoDB');
    }
    process.exit(1);
  }
};

// Función para cerrar la conexión a la base de datos
export const closeDB = async () => {
  try {
    await mongoose.disconnect();
    if (mongoMemoryServer) {
      await mongoMemoryServer.stop();
      mongoMemoryServer = null;
    }
    console.log('Conexión a MongoDB cerrada');
  } catch (error) {
    console.error('Error al cerrar la conexión a MongoDB:', error);
  }
};

// Función para iniciar el servidor
export const startServer = () => {
  return app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
  });
};

// Iniciar servidor solo si este archivo es el punto de entrada principal
// y no es importado por otro (como en pruebas)
if (require.main === module) {
  connectDB().then(() => {
    startServer();
  });
}

// Manejo de errores no capturados
process.on('unhandledRejection', (error) => {
  console.error('Error no manejado:', error);
});

// Manejo de cierre de la aplicación
process.on('SIGINT', async () => {
  console.log('Cerrando la aplicación...');
  await closeDB();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Cerrando la aplicación...');
  await closeDB();
  process.exit(0);
});

export default app; 