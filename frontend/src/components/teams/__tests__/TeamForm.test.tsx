import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TeamForm from '../TeamForm';
import '@testing-library/jest-dom';

// Mock de useTeams
vi.mock('../../../hooks/useTeams', () => ({
  useTeams: () => ({
    fetchTeamById: vi.fn(),
    createTeam: vi.fn(),
    updateTeam: vi.fn(),
    selectedTeam: null,
    loading: false,
  }),
}));

// Mock de useUsers
vi.mock('../../../hooks/useUsers', () => ({
  useUsers: () => ({
    users: [
      { _id: '1', nombre: 'Juan', apellido: 'Pérez', rol: 'entrenador' },
      { _id: '3', nombre: 'Carlos', apellido: 'López', rol: 'admin' },
    ],
    fetchUsers: vi.fn(),
  }),
}));

const mockStore = configureStore();
const store = mockStore({
  teams: {
    teams: [],
    selectedTeam: null,
    loading: false,
    error: null,
  },
  users: {
    users: [
      { _id: '1', nombre: 'Juan', apellido: 'Pérez', rol: 'entrenador' },
      { _id: '3', nombre: 'Carlos', apellido: 'López', rol: 'admin' },
    ],
    loading: false,
    error: null,
  },
});

const renderWithStore = (ui: React.ReactElement) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe('TeamForm Component', () => {
  const onCloseMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders create team form when no teamId is provided', () => {
    renderWithStore(<TeamForm open={true} onClose={onCloseMock} />);
    
    expect(screen.getByText('Crear Nuevo Equipo')).toBeInTheDocument();
    expect(screen.getByText(/Crear Equipo/i)).toBeInTheDocument();
  });

  test('renders edit team form when teamId is provided', () => {
    renderWithStore(<TeamForm open={true} onClose={onCloseMock} teamId="123" />);
    
    expect(screen.getByText('Editar Equipo')).toBeInTheDocument();
    expect(screen.getByText(/Guardar Cambios/i)).toBeInTheDocument();
  });

  test('validates required fields', async () => {
    renderWithStore(<TeamForm open={true} onClose={onCloseMock} />);
    
    // Limpiar campo obligatorio
    const nombreInput = screen.getByLabelText('Nombre del Equipo');
    userEvent.clear(nombreInput);
    
    // Intentar enviar el formulario
    const submitButton = screen.getByText(/Crear Equipo/i);
    userEvent.click(submitButton);
    
    // Verificar que aparece mensaje de error
    await waitFor(() => {
      expect(screen.getByText('El nombre del equipo es obligatorio')).toBeInTheDocument();
    });
  });

  test('closes the form when cancel button is clicked', () => {
    renderWithStore(<TeamForm open={true} onClose={onCloseMock} />);
    
    const cancelButton = screen.getByText('Cancelar');
    fireEvent.click(cancelButton);
    
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('renders entrenador field correctly', () => {
    renderWithStore(<TeamForm open={true} onClose={onCloseMock} />);
    
    // Este test verifica la presencia del selector de entrenadores
    // Comprobar que podemos encontrar la opción Entrenador en algún lugar usando getAllByText
    // ya que puede haber múltiples elementos con este texto
    const entrenadorElements = screen.getAllByText('Entrenador');
    expect(entrenadorElements.length).toBeGreaterThan(0);
    
    // Verificar que existe un elemento dialog para el formulario
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
}); 