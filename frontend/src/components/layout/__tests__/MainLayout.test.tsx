import { render, screen } from '@testing-library/react';
import MainLayout from '../MainLayout';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { vi, describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

// Mock de los componentes internos para simplificar las pruebas
vi.mock('../AppHeader', () => ({
  default: () => <div data-testid="app-header">AppHeader</div>
}));

vi.mock('../Sidebar', () => ({
  default: () => <div data-testid="sidebar">Sidebar</div>
}));

vi.mock('../Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>
}));

// Mock para react-router-dom Outlet
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  Outlet: () => <div data-testid="outlet">Outlet content</div>,
  MemoryRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('MainLayout', () => {
  const theme = createTheme();
  
  it('renders all main components', () => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <MainLayout />
        </MemoryRouter>
      </ThemeProvider>
    );
    
    // Verificar que los componentes principales están presentes
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
}); 