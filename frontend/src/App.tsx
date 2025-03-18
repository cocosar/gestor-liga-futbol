import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importar layout principal
import MainLayout from './components/layout/MainLayout';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Importar páginas
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// Tema personalizado
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

// Componente principal
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          
          {/* Rutas protegidas con layout principal */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* Rutas con roles específicos */}
              <Route element={<ProtectedRoute allowedRoles={['admin', 'coach']} />}>
                <Route path="/teams" element={<div>Gestión de Equipos (En desarrollo)</div>} />
              </Route>
              
              <Route element={<ProtectedRoute allowedRoles={['admin', 'coach']} />}>
                <Route path="/players" element={<div>Gestión de Jugadores (En desarrollo)</div>} />
              </Route>
              
              <Route path="/matches" element={<div>Gestión de Partidos (En desarrollo)</div>} />
              <Route path="/standings" element={<div>Tabla de Posiciones (En desarrollo)</div>} />
            </Route>
          </Route>
          
          {/* Ruta para acceso no autorizado */}
          <Route path="/unauthorized" element={<div>No tienes permisos para acceder a esta página</div>} />
          
          {/* Ruta por defecto (404) */}
          <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App; 