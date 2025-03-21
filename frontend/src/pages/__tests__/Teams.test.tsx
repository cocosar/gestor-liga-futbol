import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { vi } from 'vitest';
import Teams from '../Teams';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// Mock de useTeams
const mockUseTeams = {
  teams: {
    items: [
      { _id: '1', nombre: 'Equipo A', categoria: 'adultos', tipo: 'competición' },
      { _id: '2', nombre: 'Equipo B', categoria: 'infantil', tipo: 'escuela' },
    ],
    total: 2,
    page: 1,
    limit: 10,
    pages: 1
  },
  loading: false,
  error: null,
  fetchTeams: vi.fn(),
  deleteTeam: vi.fn(),
  totalTeams: 2,
  pagination: { total: 2, page: 1, limit: 10, pages: 1 },
  paginationParams: { page: 1, limit: 10 }
};

// Mock del hook useTeams
vi.mock('../../hooks/useTeams', () => ({
  useTeams: vi.fn(() => mockUseTeams)
}));

// Mock de componentes
vi.mock('../../components/teams/TeamForm', () => ({
  default: ({ open, onClose }: { open: boolean, onClose: () => void }) => (
    <div data-testid="team-form-mock">
      {open ? 'Formulario abierto' : 'Formulario cerrado'}
      <button onClick={onClose}>Cerrar</button>
    </div>
  ),
}));

const mockStore = configureStore();
const initialState = {
  teams: {
    teams: {
      items: [
        { _id: '1', nombre: 'Equipo A', categoria: 'adultos', tipo: 'competición' },
        { _id: '2', nombre: 'Equipo B', categoria: 'infantil', tipo: 'escuela' },
      ],
      total: 2,
      page: 1,
      limit: 10,
      pages: 1
    },
    loading: false,
    error: null,
  }
};

const renderWithStoreAndRouter = (ui: React.ReactElement, state = initialState) => {
  const store = mockStore(state);
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </Provider>
  );
};

describe('Teams Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders teams page with header and new team button', () => {
    renderWithStoreAndRouter(<Teams />);
    
    // Verificar que los elementos principales están presentes
    expect(screen.getByText('Gestión de Equipos')).toBeInTheDocument();
    expect(screen.getByText('Nuevo Equipo')).toBeInTheDocument();
  });

  test('opens form when create button is clicked', async () => {
    renderWithStoreAndRouter(<Teams />);
    
    const createButton = screen.getByText('Nuevo Equipo');
    fireEvent.click(createButton);
    
    await waitFor(() => {
      expect(screen.getByTestId('team-form-mock')).toBeInTheDocument();
      expect(screen.getByText('Formulario abierto')).toBeInTheDocument();
    });
  });
}); 