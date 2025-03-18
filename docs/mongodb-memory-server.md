# MongoDB en Memoria para Desarrollo y Pruebas

## Introducción

Este documento describe la implementación de MongoDB en memoria para el Sistema de Gestión de Ligas de Fútbol 8v8. Esta configuración permite a los desarrolladores trabajar en el proyecto sin necesidad de tener una instancia de MongoDB instalada localmente, facilitando el desarrollo y las pruebas.

## Beneficios

- **Desarrollo sin dependencias externas**: No es necesario instalar MongoDB localmente.
- **Entorno de pruebas aislado**: Cada instancia de la aplicación utiliza su propia base de datos en memoria.
- **Configuración flexible**: El sistema intenta primero conectarse a una base de datos MongoDB real, y solo utiliza la versión en memoria si no es posible la conexión.
- **Experiencia de desarrollo mejorada**: Reduce la fricción durante el desarrollo y las pruebas.

## Implementación

La implementación se basa en la biblioteca `mongodb-memory-server`, que proporciona una instancia de MongoDB que se ejecuta completamente en memoria.

### Proceso de conexión

El proceso de conexión a la base de datos sigue esta lógica:

1. Verificar si ya existe una conexión activa a MongoDB.
2. Si no hay conexión activa, intentar conectarse a la base de datos configurada en las variables de entorno.
3. Si la conexión falla o no hay una URI configurada, utilizar MongoDB en memoria.

### Código principal

El código relevante se encuentra en `backend/src/index.ts`:

```typescript
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
```

### Cierre de conexiones

También se implementó un manejo adecuado del cierre de conexiones:

```typescript
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
```

## Configuración

Para configurar la conexión a MongoDB, se utiliza el archivo `.env` en la raíz del directorio `backend`:

```
PORT=5000
CORS_ORIGIN=http://localhost:3000
MONGODB_URI=mongodb+srv://usuario-prueba:contrasena-prueba@cluster0.mongodb.net/liga-futbol?retryWrites=true&w=majority
JWT_SECRET=liga-futbol-jwt-secret-desarrollo
JWT_EXPIRES_IN=7d
```

## Consideraciones

1. **Persistencia de datos**: Los datos almacenados en MongoDB en memoria se pierden cuando se reinicia la aplicación.
2. **Diferencias con MongoDB real**: Aunque MongoDB en memoria se comporta de manera similar a MongoDB real, pueden existir pequeñas diferencias en el rendimiento o comportamiento.
3. **Entorno de producción**: Para producción, siempre se debe utilizar una instancia real de MongoDB, ya sea local o en la nube.
4. **Consumo de recursos**: MongoDB en memoria utiliza la RAM del sistema, lo que puede afectar al rendimiento en equipos con recursos limitados.

## Migración a MongoDB real

Para migrar de MongoDB en memoria a una instancia real de MongoDB:

1. Instalar MongoDB localmente o configurar una instancia en la nube (MongoDB Atlas, por ejemplo).
2. Actualizar la variable `MONGODB_URI` en el archivo `.env` con la URI de conexión correcta.
3. Reiniciar la aplicación.

La aplicación detectará automáticamente la URI configurada e intentará conectarse a la instancia de MongoDB especificada.

## Pruebas

Se han implementado pruebas tanto automatizadas como manuales que utilizan MongoDB en memoria para verificar el funcionamiento de la aplicación sin dependencias externas:

- Pruebas automatizadas: `backend/src/tests/auth.test.ts`
- Pruebas manuales: `backend/src/tests/test-auth-manual.sh`

## Conclusión

La implementación de MongoDB en memoria proporciona un equilibrio entre facilidad de desarrollo y fidelidad al entorno de producción. Permite a los desarrolladores trabajar en el proyecto sin configuraciones complejas, mientras mantiene un comportamiento similar al de una instancia real de MongoDB. 