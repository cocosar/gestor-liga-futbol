import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { vi } from 'vitest';
import { ThemeProvider, createTheme } from '@mui/material';

// Mock para react-router-dom
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  useLocation: vi.fn(),
  Link: ({ to, children, ...rest }: { to: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={to} {...rest}>{children}</a>
  ),
}));

describe('Home', () => {
  const theme = createTheme();
  
  it('renders home page components', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    
    // Verificar título principal
    expect(screen.getByText('Sistema de Gestión de Ligas de Fútbol 8v8')).toBeInTheDocument();
    
    // Verificar sección de características
    expect(screen.getByText('Características Principales')).toBeInTheDocument();
    
    // Verificar botones principales
    expect(screen.getByText('Comenzar Ahora')).toBeInTheDocument();
    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
    
    // Verificar elementos de características
    expect(screen.getByText('Gestión de Equipos')).toBeInTheDocument();
    expect(screen.getByText('Calendario de Partidos')).toBeInTheDocument();
    expect(screen.getByText('Gestión de Jugadores')).toBeInTheDocument();
  });
}); 