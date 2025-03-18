import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from '../Sidebar';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';

// Mock para react-router-dom
vi.mock('react-router-dom', () => {
  return {
    // Importar el MemoryRouter real
    MemoryRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    // Mock de funciones
    useNavigate: () => vi.fn(),
    useLocation: () => ({ pathname: '/' }),
  };
});

describe('Sidebar', () => {
  const drawerWidth = 240;
  const mockDrawerClose = vi.fn();
  
  const renderSidebar = (isMobile = false) => {
    return render(
      <MemoryRouter>
        <Sidebar 
          drawerWidth={drawerWidth} 
          mobileOpen={true} 
          onDrawerClose={mockDrawerClose}
          isMobile={isMobile}
        />
      </MemoryRouter>
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