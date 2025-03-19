import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Importar reducers
// Nota: Estos serán implementados en los próximos pasos
import authReducer from './slices/auth/authSlice';
import usersReducer from './slices/users';
import teamsReducer from './slices/teams';

// Importar middlewares personalizados
import middlewares from './middleware';

// Configuración del store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    teams: teamsReducer,
    // Aquí se añadirán los demás reducers a medida que se implementen
  },
  // Middleware configurados por defecto + middlewares personalizados
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        // Ignorar ciertos campos en acciones específicas si es necesario
        ignoredActions: [],
        ignoredPaths: [],
      },
    })
    .concat(middlewares.errorMiddleware)
    .concat(middlewares.loggerMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Tipos para dispatch y state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks tipados
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 