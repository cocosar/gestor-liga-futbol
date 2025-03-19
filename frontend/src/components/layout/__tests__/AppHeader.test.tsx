import { render, screen, fireEvent } from '@testing-library/react';
import AppHeader from '../AppHeader';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useAuth } from '../../../hooks/useAuth';

// Tipo para el mock de usuario
interface MockUser {
  nombre?: string;
  apellido?: string;
  rol?: string;
  [key: string]: unknown;
}

// Mock para useAuth
const createMockAuthHook = (overrides = {}) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  role: undefined,
  login: vi.fn(),
  register: vi.fn(),
  logout: vi.fn(),
  getCurrentUser: vi.fn(),
  clearErrors: vi.fn(),
  hasRole: vi.fn(),
  ...overrides
});

// Mocks globales
vi.mock('../../../hooks/useAuth', () => ({
  useAuth: vi.fn(() => createMockAuthHook())
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

describe('AppHeader', () => {
  const theme = createTheme();
  const drawerWidth = 240;
  const mockDrawerToggle = vi.fn();
  const logoutMock = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  const renderAppHeader = (isAuthenticated = false, user: MockUser | null = null) => {
    // Configurar el mock de useAuth según los parámetros
    vi.mocked(useAuth).mockReturnValue(createMockAuthHook({
      isAuthenticated,
      user,
      logout: logoutMock
    }));
    
    return render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <AppHeader drawerWidth={drawerWidth} onDrawerToggle={mockDrawerToggle} />
        </MemoryRouter>
      </ThemeProvider>
    );
  };
  
  it('renders app title correctly', () => {
    renderAppHeader();
    expect(screen.getByText('Liga Fútbol 8v8')).toBeInTheDocument();
  });
  
  it('renders login and register buttons when user is not authenticated', () => {
    renderAppHeader(false);
    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
    expect(screen.getByText('Registrarse')).toBeInTheDocument();
  });
  
  it('renders logout button when user is authenticated', () => {
    renderAppHeader(true, { nombre: 'Test', apellido: 'User' });
    
    // Verificar que el nombre de usuario se muestra
    expect(screen.getByText('Test User')).toBeInTheDocument();
    
    // Verificar que el botón de cerrar sesión está presente
    expect(screen.getByText('Cerrar Sesión')).toBeInTheDocument();
    
    // Verificar que los botones de inicio de sesión y registro NO están presentes
    expect(screen.queryByText('Iniciar Sesión')).not.toBeInTheDocument();
    expect(screen.queryByText('Registrarse')).not.toBeInTheDocument();
  });
  
  it('calls logout function and navigates when logout button is clicked', () => {
    renderAppHeader(true, { nombre: 'Test', apellido: 'User' });
    
    const logoutButton = screen.getByText('Cerrar Sesión');
    fireEvent.click(logoutButton);
    
    // Verificar que se llama a la función logout
    expect(logoutMock).toHaveBeenCalled();
  });
  
  it('calls onDrawerToggle when menu button is clicked', () => {
    renderAppHeader();
    const menuButton = screen.getByLabelText('open drawer');
    fireEvent.click(menuButton);
    expect(mockDrawerToggle).toHaveBeenCalledTimes(1);
  });
}); 