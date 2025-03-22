import { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Chip,
  Tab,
  Tabs,
  CircularProgress,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent
} from '@mui/material';
import {
  Search as SearchIcon,
  PersonAdd as PersonAddIcon,
  PersonRemove as PersonRemoveIcon
} from '@mui/icons-material';
import { usePlayers } from '../../hooks/usePlayers';

interface TeamPlayersManagerProps {
  teamId: string;
  teamName: string;
  onUpdate?: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

/**
 * Panel para las pestañas de gestión de jugadores
 */
const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`players-tabpanel-${index}`}
      aria-labelledby={`players-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

/**
 * Componente para gestionar los jugadores de un equipo
 */
const TeamPlayersManager = ({ teamId, teamName, onUpdate }: TeamPlayersManagerProps) => {
  const [tabValue, setTabValue] = useState(0);
  const [positionFilter, setPositionFilter] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    players,
    loading,
    error,
    fetchPlayers,
    assignPlayerToTeam,
    removePlayerFromTeam,
    getPlayersByTeam
  } = usePlayers();

  // Cargar todos los jugadores al montar el componente
  useEffect(() => {
    console.log('Cargando jugadores...');
    fetchPlayers({ activo: true });
  }, [fetchPlayers]);

  // Filtrar jugadores del equipo
  const teamPlayers = useMemo(() => {
    console.log('Filtrando jugadores del equipo', teamId);
    console.log('Todos los jugadores:', players);
    const filtered = getPlayersByTeam(teamId);
    console.log('Jugadores del equipo:', filtered);
    return filtered;
  }, [getPlayersByTeam, teamId, players]);

  // IDs de los jugadores del equipo para excluirlos de la lista de disponibles
  const teamPlayerIds = useMemo(() => 
    teamPlayers.map(player => player._id), 
    [teamPlayers]
  );

  // Jugadores disponibles (no pertenecen a este equipo)
  const availablePlayers = useMemo(() => {
    console.log('Calculando jugadores disponibles');
    return players.filter(player => 
      // No está en este equipo
      !teamPlayerIds.includes(player._id) && 
      // Está activo
      player.activo &&
      // No tiene equipo asignado
      !player.equipo &&
      // Filtro por posición
      (!positionFilter || player.posicion === positionFilter) &&
      // Filtro por texto
      (!searchTerm || 
        `${player.nombre} ${player.apellido}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.numeroIdentificacion.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [players, teamPlayerIds, positionFilter, searchTerm]);

  // Jugadores del equipo filtrados
  const filteredTeamPlayers = useMemo(() => 
    teamPlayers.filter(player => 
      (!positionFilter || player.posicion === positionFilter) &&
      (!searchTerm || 
        `${player.nombre} ${player.apellido}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.numeroIdentificacion.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ),
    [teamPlayers, positionFilter, searchTerm]
  );

  // Cambiar pestaña
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Filtrar por posición
  const handlePositionFilterChange = (event: SelectChangeEvent<string>) => {
    setPositionFilter(event.target.value);
  };

  // Buscar jugadores
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Limpiar mensajes
  const clearMessages = () => {
    setTimeout(() => {
      setSuccessMessage(null);
      setErrorMessage(null);
    }, 3000);
  };

  // Añadir jugador al equipo
  const handleAddPlayerToTeam = async (playerId: string) => {
    console.log('Intentando añadir jugador al equipo:', playerId, teamId);
    
    try {
      // Limpiar mensajes anteriores
      setSuccessMessage(null);
      setErrorMessage(null);
      
      const result = await assignPlayerToTeam(playerId, teamId);
      console.log('Resultado de la asignación:', result);
      
      if (result && result.success) {
        setSuccessMessage('Jugador añadido al equipo exitosamente');
        // Refrescar datos
        fetchPlayers({ activo: true });
        
        // Notificar al componente padre sobre la actualización
        if (onUpdate) {
          onUpdate();
        }
      } else {
        const errorMsg = result?.error || 'Error al añadir jugador al equipo';
        setErrorMessage(errorMsg);
        console.error('Error en asignación:', errorMsg);
      }
      
      clearMessages();
    } catch (error) {
      console.error('Excepción al añadir jugador al equipo:', error);
      const errorMsg = error instanceof Error ? error.message : 'Error desconocido';
      setErrorMessage(`Error al añadir jugador: ${errorMsg}`);
      clearMessages();
    }
  };

  // Eliminar jugador del equipo
  const handleRemovePlayerFromTeam = async (playerId: string) => {
    console.log('Intentando eliminar jugador del equipo:', playerId);
    
    try {
      // Limpiar mensajes anteriores
      setSuccessMessage(null);
      setErrorMessage(null);
      
      const result = await removePlayerFromTeam(playerId);
      console.log('Resultado de la eliminación:', result);
      
      if (result && result.success) {
        setSuccessMessage('Jugador eliminado del equipo exitosamente');
        // Refrescar datos
        fetchPlayers({ activo: true });
        
        // Notificar al componente padre sobre la actualización
        if (onUpdate) {
          onUpdate();
        }
      } else {
        const errorMsg = result?.error || 'Error al eliminar jugador del equipo';
        setErrorMessage(errorMsg);
        console.error('Error en eliminación:', errorMsg);
      }
      
      clearMessages();
    } catch (error) {
      console.error('Excepción al eliminar jugador del equipo:', error);
      const errorMsg = error instanceof Error ? error.message : 'Error desconocido';
      setErrorMessage(`Error al eliminar jugador: ${errorMsg}`);
      clearMessages();
    }
  };

  // Función para formatear posición de jugador
  const formatPosition = (position: string): string => {
    const positions: { [key: string]: string } = {
      'portero': 'Portero',
      'defensa': 'Defensa',
      'mediocampista': 'Mediocampista',
      'delantero': 'Delantero',
      'indefinida': 'Sin definir'
    };
    return positions[position] || position;
  };

  // Registrar auth token para propósitos de debugging
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Auth token disponible:', !!token);
  }, []);

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Gestión de Jugadores: {teamName}
      </Typography>
      
      {/* Mensaje de éxito */}
      {successMessage && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {successMessage}
        </Alert>
      )}
      
      {/* Mensaje de error */}
      {errorMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {errorMessage}
        </Alert>
      )}
      
      {/* Error genérico del estado */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      {/* Filtros */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Buscar jugador"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: <SearchIcon />
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Filtrar por posición</InputLabel>
            <Select
              value={positionFilter}
              label="Filtrar por posición"
              onChange={handlePositionFilterChange}
            >
              <MenuItem value="">Todas las posiciones</MenuItem>
              <MenuItem value="portero">Portero</MenuItem>
              <MenuItem value="defensa">Defensa</MenuItem>
              <MenuItem value="mediocampista">Mediocampista</MenuItem>
              <MenuItem value="delantero">Delantero</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      
      {/* Información de depuración */}
      {import.meta.env.DEV && (
        <Box sx={{ mb: 2, p: 1, bgcolor: '#f5f5f5', fontSize: '0.75rem' }}>
          <Typography variant="caption">Debug info:</Typography>
          <Box component="pre" sx={{ m: 0, p: 0, fontSize: 'inherit' }}>
            {`TeamID: ${teamId}
Total Players: ${players.length}
Team Players: ${teamPlayers.length}
Available Players: ${availablePlayers.length}
Loading: ${loading}`}
          </Box>
        </Box>
      )}
      
      {/* Tabs para gestionar las listas de jugadores */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="players management tabs">
          <Tab label="Jugadores del Equipo" id="players-tab-0" aria-controls="players-tabpanel-0" />
          <Tab label="Jugadores Disponibles" id="players-tab-1" aria-controls="players-tabpanel-1" />
        </Tabs>
      </Box>
      
      {/* Panel de jugadores del equipo */}
      <TabPanel value={tabValue} index={0}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : filteredTeamPlayers.length === 0 ? (
          <Alert severity="info">
            No hay jugadores en el equipo que coincidan con los filtros.
          </Alert>
        ) : (
          <List sx={{ maxHeight: '400px', overflow: 'auto' }}>
            {filteredTeamPlayers.map((player) => (
              <ListItem key={player._id} divider>
                <ListItemText
                  primary={`${player.nombre} ${player.apellido}`}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="text.primary">
                        {player.numeroIdentificacion}
                      </Typography>
                      {" — "}
                      <Chip 
                        size="small" 
                        label={formatPosition(player.posicion)} 
                        color={
                          player.posicion === 'portero' ? 'warning' :
                          player.posicion === 'defensa' ? 'error' :
                          player.posicion === 'mediocampista' ? 'info' :
                          player.posicion === 'delantero' ? 'success' : 'default'
                        }
                      />
                    </>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton 
                    edge="end" 
                    aria-label="delete" 
                    onClick={() => handleRemovePlayerFromTeam(player._id)}
                    color="error"
                  >
                    <PersonRemoveIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
      </TabPanel>
      
      {/* Panel de jugadores disponibles */}
      <TabPanel value={tabValue} index={1}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : availablePlayers.length === 0 ? (
          <Alert severity="info">
            No hay jugadores sin equipo que coincidan con los filtros.
          </Alert>
        ) : (
          <>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
              Mostrando únicamente jugadores sin equipo asignado
            </Typography>
            <List sx={{ maxHeight: '400px', overflow: 'auto' }}>
              {availablePlayers.map((player) => (
                <ListItem key={player._id} divider>
                  <ListItemText
                    primary={`${player.nombre} ${player.apellido}`}
                    secondary={
                      <>
                        <Typography component="span" variant="body2" color="text.primary">
                          {player.numeroIdentificacion}
                        </Typography>
                        {" — "}
                        <Chip 
                          size="small" 
                          label={formatPosition(player.posicion)} 
                          color={
                            player.posicion === 'portero' ? 'warning' :
                            player.posicion === 'defensa' ? 'error' :
                            player.posicion === 'mediocampista' ? 'info' :
                            player.posicion === 'delantero' ? 'success' : 'default'
                          }
                        />
                      </>
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton 
                      edge="end" 
                      aria-label="add" 
                      onClick={() => handleAddPlayerToTeam(player._id)}
                      color="primary"
                    >
                      <PersonAddIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </TabPanel>
    </Paper>
  );
};

export default TeamPlayersManager; 