import { Request, Response } from 'express';
import { login } from '../../controllers/authController';
import User from '../../models/User';
import bcrypt from 'bcrypt';
import * as jwt from '../../utils/jwt';

// Mock de los módulos necesarios
jest.mock('../../models/User');
jest.mock('bcrypt');
jest.mock('../../utils/jwt');

describe('Auth Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let statusMock: jest.Mock;
  let jsonMock: jest.Mock;

  beforeEach(() => {
    // Preparar mocks para request y response
    jsonMock = jest.fn().mockReturnThis();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    
    req = {
      body: {
        email: 'test@example.com',
        password: 'password123'
      }
    };
    
    res = {
      status: statusMock,
      json: jsonMock
    };
    
    // Limpiar todos los mocks
    jest.clearAllMocks();
  });

  describe('login', () => {
    it('should return 400 if email or password is missing', async () => {
      req.body = {};
      
      await login(req as Request, res as Response);
      
      expect(statusMock).toHaveBeenCalledWith(400);
      expect(jsonMock).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: expect.any(String)
        })
      );
    });
    
    it('should return 404 if user does not exist', async () => {
      // Mock para User.findOne que retorna null (usuario no encontrado)
      (User.findOne as jest.Mock).mockResolvedValue(null);
      
      await login(req as Request, res as Response);
      
      expect(statusMock).toHaveBeenCalledWith(404);
      expect(jsonMock).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'Usuario no encontrado'
        })
      );
    });
    
    it('should return 401 if password is incorrect', async () => {
      // Mock para User.findOne que retorna un usuario
      (User.findOne as jest.Mock).mockResolvedValue({
        _id: '123',
        email: 'test@example.com',
        password: 'hashedPassword',
        role: 'user',
        comparePassword: jest.fn().mockResolvedValue(false)
      });
      
      // Mock para bcrypt.compare que retorna false (contraseña incorrecta)
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);
      
      await login(req as Request, res as Response);
      
      expect(statusMock).toHaveBeenCalledWith(401);
      expect(jsonMock).toHaveBeenCalledWith(
        expect.objectContaining({
          success: false,
          message: 'Credenciales inválidas'
        })
      );
    });
    
    it('should return 200 with token if login is successful', async () => {
      const mockUser = {
        _id: '123',
        email: 'test@example.com',
        password: 'hashedPassword',
        role: 'user',
        ultimoAcceso: undefined,
        comparePassword: jest.fn().mockResolvedValue(true),
        save: jest.fn().mockResolvedValue(undefined)
      };
      
      // Mock para User.findOne que retorna un usuario
      (User.findOne as jest.Mock).mockResolvedValue(mockUser);
      
      // Mock para bcrypt.compare que retorna true (contraseña correcta)
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      
      // Mock para generateToken que retorna un token
      (jwt.generateToken as jest.Mock).mockReturnValue('mock-token');
      
      await login(req as Request, res as Response);
      
      expect(statusMock).toHaveBeenCalledWith(200);
      expect(jsonMock).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          token: 'mock-token'
        })
      );
    });
  });
}); 