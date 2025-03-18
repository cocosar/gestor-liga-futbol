import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../index';
import User from '../models/User';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  // Configurar la base de datos en memoria para las pruebas
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  // Limpiar y cerrar conexiones después de las pruebas
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  // Limpiar la colección de usuarios antes de cada prueba
  await User.deleteMany({});
});

describe('Pruebas de autenticación', () => {
  // Test para registro de usuario
  describe('POST /api/auth/register', () => {
    it('debería registrar un nuevo usuario', async () => {
      const userData = {
        nombre: 'Test',
        apellido: 'User',
        email: 'test@example.com',
        password: 'password123',
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.token).toBeDefined();
      expect(response.body.usuario).toBeDefined();
      expect(response.body.usuario.email).toBe(userData.email);
    });

    it('debería fallar si el email ya está registrado', async () => {
      // Crear usuario primero
      await User.create({
        nombre: 'Existing',
        apellido: 'User',
        email: 'existing@example.com',
        password: 'password123',
      });

      // Intentar crear otro usuario con el mismo email
      const userData = {
        nombre: 'Test',
        apellido: 'User',
        email: 'existing@example.com',
        password: 'password123',
      };

      const response = await request(app)
        .post('/api/auth/register')
        .send(userData)
        .expect(400);

      expect(response.body.success).toBe(false);
      expect(response.body.message).toContain('registrado');
    });
  });

  // Test para login de usuario
  describe('POST /api/auth/login', () => {
    it('debería iniciar sesión con credenciales correctas', async () => {
      // Crear un usuario para la prueba
      const userData = {
        nombre: 'Login',
        apellido: 'Test',
        email: 'login@example.com',
        password: 'password123',
      };

      await User.create(userData);

      // Intentar iniciar sesión
      const loginData = {
        email: 'login@example.com',
        password: 'password123',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(loginData)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.token).toBeDefined();
      expect(response.body.usuario).toBeDefined();
      expect(response.body.usuario.email).toBe(userData.email);
    });

    it('debería fallar con credenciales incorrectas', async () => {
      // Crear un usuario para la prueba
      const userData = {
        nombre: 'Login',
        apellido: 'Test',
        email: 'login@example.com',
        password: 'password123',
      };

      await User.create(userData);

      // Intentar iniciar sesión con contraseña incorrecta
      const loginData = {
        email: 'login@example.com',
        password: 'wrongpassword',
      };

      const response = await request(app)
        .post('/api/auth/login')
        .send(loginData)
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });

  // Test para obtener perfil de usuario
  describe('GET /api/auth/me', () => {
    it('debería obtener el perfil del usuario autenticado', async () => {
      // Crear un usuario y generar un token
      const user = await User.create({
        nombre: 'Profile',
        apellido: 'Test',
        email: 'profile@example.com',
        password: 'password123',
      });

      // Iniciar sesión para obtener un token
      const loginData = {
        email: 'profile@example.com',
        password: 'password123',
      };

      const loginResponse = await request(app)
        .post('/api/auth/login')
        .send(loginData);

      const token = loginResponse.body.token;

      // Verificar que se puede obtener el perfil con el token
      const response = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.usuario).toBeDefined();
      expect(response.body.usuario.email).toBe(user.email);
    });

    it('debería fallar sin token de autenticación', async () => {
      const response = await request(app)
        .get('/api/auth/me')
        .expect(401);

      expect(response.body.success).toBe(false);
    });
  });
}); 