import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
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

// Conexión a la base de datos
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/liga-futbol');
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error al conectar a MongoDB: ${error.message}`);
    } else {
      console.error('Error desconocido al conectar a MongoDB');
    }
    process.exit(1);
  }
};

// Iniciar servidor
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
  });
});

// Manejo de errores no capturados
process.on('unhandledRejection', (error) => {
  console.error('Error no manejado:', error);
});

export default app; 