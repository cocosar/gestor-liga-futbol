import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    
    // Verificar que el año actual está en el documento
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });
  
  it('renders application name', () => {
    render(<Footer />);
    expect(screen.getByText('Sistema de Gestión de Ligas de Fútbol 8v8')).toBeInTheDocument();
  });
  
  it('renders version information', () => {
    render(<Footer />);
    expect(screen.getByText('Versión 1.0.0')).toBeInTheDocument();
  });
  
  it('renders "todos los derechos reservados" text', () => {
    render(<Footer />);
    // Usar una expresión regular para buscar el texto que puede estar separado por elementos
    expect(screen.getByText(/Todos los derechos reservados/)).toBeInTheDocument();
  });
}); 