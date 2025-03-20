import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../../store/slices/auth/authSlice';

// Mock para react-router-dom
vi.mock('react-router-dom', () => ({
  // Mock de funciones
  useNavigate: () => vi.fn(),
  useLocation: () => ({ pathname: '/' }),
  // Usamos MemoryRouter real desde el import
  MemoryRouter: vi.fn(({ children }) => children)
}));

// Mock para useAuth
vi.mock('../../../hooks/useAuth', () => ({
  useAuth: () => ({
    hasRole: () => true // Simulamos que el usuario tiene rol admin
  })
}));

describe('Sidebar', () => {
  const drawerWidth = 240;
  const mockDrawerClose = vi.fn();
  
  const renderSidebar = (isMobile = false) => {
    // Crear un store con los reducers necesarios
    const store = configureStore({
      reducer: {
        auth: authReducer,
      },
    });
    
    return render(
      <Provider store={store}>
        <MemoryRouter>
          <Sidebar 
            drawerWidth={drawerWidth} 
            mobileOpen={true} 
            onDrawerClose={mockDrawerClose}
            isMobile={isMobile}
          />
        </MemoryRouter>
      </Provider>
    );
  };
  
  beforeEach(() => {
    vi.clearAllMocks();
  });
  
  it('renders navigation items correctly', () => {
    renderSidebar();
    
    // Usar getAllByText para obtener todos los elementos con el texto específico
    // y verificar que existan
    expect(screen.getAllByText('Inicio').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Dashboard').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Equipos').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Jugadores').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Partidos').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Tabla de Posiciones').length).toBeGreaterThan(0);
  });
  
  it('calls onDrawerClose when clicked in mobile view', () => {
    renderSidebar(true);
    
    // Obtener el primer elemento dashboard
    const dashboardElements = screen.getAllByText('Dashboard');
    fireEvent.click(dashboardElements[0]);
    
    // Verificar que se llamó onDrawerClose
    expect(mockDrawerClose).toHaveBeenCalledTimes(1);
  });
  
  it('does not call onDrawerClose when clicked in desktop view', () => {
    renderSidebar(false);
    
    // Obtener el primer elemento dashboard
    const dashboardElements = screen.getAllByText('Dashboard');
    fireEvent.click(dashboardElements[0]);
    
    // En vista desktop no debería llamar a onDrawerClose
    expect(mockDrawerClose).not.toHaveBeenCalled();
  });
}); 