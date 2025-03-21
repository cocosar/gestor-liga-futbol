// Declaraciones de tipos para la aplicación de backend
declare namespace Express {
  export interface Request {
    usuario?: {
      id: string;
      [key: string]: any;
    };
  }
} 