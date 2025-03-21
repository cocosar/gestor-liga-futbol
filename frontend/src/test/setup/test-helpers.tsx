import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import usersReducer from '../../store/slices/users/usersSlice';
import authReducer from '../../store/slices/auth/authSlice';
import teamsReducer from '../../store/slices/teams/teamsSlice';

// Interfaz para las opciones extendidas de renderizado
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Record<string, unknown>;
  routePath?: string;
}

// Función para crear una tienda con datos preestablecidos
export const setupStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      users: usersReducer,
      auth: authReducer,
      teams: teamsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState
  });
};

// Función de renderizado personalizada con Redux Provider y Router
export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    routePath = '/',
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  const store = setupStore(preloadedState);

  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[routePath]}>
          {children}
        </MemoryRouter>
      </Provider>
    );
  }

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  };
}

// Funciones de utilidad para crear datos de prueba
export const createMockUser = (overrides = {}) => ({
  _id: '1',
  nombre: 'Usuario',
  apellido: 'Prueba',
  email: 'usuario@test.com',
  rol: 'admin',
  activo: true,
  ...overrides
});

export const createMockUsers = (count: number) => {
  return Array.from({ length: count }, (_, i) => createMockUser({
    _id: `${i + 1}`,
    nombre: `Usuario ${i + 1}`,
    email: `usuario${i + 1}@test.com`,
    rol: i % 2 === 0 ? 'admin' : 'usuario'
  }));
};

// Estado inicial para las pruebas de usuarios
export const createInitialUsersState = (usersCount = 2) => {
  const users = createMockUsers(usersCount);
  return {
    users: {
      users,
      selectedUser: null,
      loading: false,
      error: null,
      total: users.length,
      page: 1,
      limit: 10
    }
  };
};

// Estado inicial para las pruebas de autenticación
export const createInitialAuthState = (isAuthenticated = false) => {
  return {
    auth: {
      user: isAuthenticated ? createMockUser() : null,
      token: isAuthenticated ? 'mock-token' : null,
      isAuthenticated,
      loading: false,
      error: null
    }
  };
}; 