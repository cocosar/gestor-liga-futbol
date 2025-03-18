import { render, screen, fireEvent } from '@testing-library/react';
import AppHeader from '../AppHeader';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { describe, it, expect, vi } from 'vitest';

describe('AppHeader', () => {
  const theme = createTheme();
  const drawerWidth = 240;
  const mockDrawerToggle = vi.fn();
  
  const renderAppHeader = () => {
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
  
  it('renders login and register buttons', () => {
    renderAppHeader();
    expect(screen.getByText('Iniciar Sesión')).toBeInTheDocument();
    expect(screen.getByText('Registrarse')).toBeInTheDocument();
  });
  
  it('calls onDrawerToggle when menu button is clicked', () => {
    renderAppHeader();
    const menuButton = screen.getByLabelText('open drawer');
    fireEvent.click(menuButton);
    expect(mockDrawerToggle).toHaveBeenCalledTimes(1);
  });
}); 