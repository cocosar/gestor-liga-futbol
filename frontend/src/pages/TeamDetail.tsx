import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Divider, 
  Avatar, 
  Chip, 
  Button, 
  Paper, 
  IconButton, 
  CircularProgress, 
  Alert, 
  Tab, 
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon, 
  Edit as EditIcon, 
  Person as PersonIcon,
  Group as GroupIcon,
  EmojiEvents as EmojiEventsIcon,
  DataUsage as DataUsageIcon
} from '@mui/icons-material';
import { useTeams } from '../hooks/useTeams';

// Tipo de pestañas disponibles
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Componente para el contenido de las pestañas
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`team-tabpanel-${index}`}
      aria-labelledby={`team-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

// Datos ficticios para estadísticas (se reemplazarían con datos reales del API)
const statsData = {
  partidos: 12,
  victorias: 8,
  empates: 2,
  derrotas: 2,
  golesFavor: 24,
  golesContra: 10,
  puntos: 26
};

// Datos ficticios para jugadores (se reemplazarían con datos reales del API)
const playersData = [
  { id: 1, nombre: 'Carlos Rodríguez', posicion: 'Delantero', numero: 9, goles: 8, asistencias: 5 },
  { id: 2, nombre: 'Miguel Fernández', posicion: 'Mediocampista', numero: 10, goles: 5, asistencias: 10 },
  { id: 3, nombre: 'Alejandro López', posicion: 'Defensa', numero: 4, goles: 1, asistencias: 3 },
  { id: 4, nombre: 'Juan Sánchez', posicion: 'Portero', numero: 1, goles: 0, asistencias: 0 },
  { id: 5, nombre: 'David Martínez', posicion: 'Defensa', numero: 3, goles: 0, asistencias: 2 },
];

// Función para capitalizar primera letra
const capitalizeFirstLetter = (str: string): string => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Función para formatear el tipo
const formatTipo = (tipo: string): string => {
  if (!tipo) return '';
  
  if (tipo === 'futbol7') {
    return 'Fútbol 7';
  } else if (tipo === 'futbol') {
    return 'Fútbol';
  } else if (tipo === 'futsal') {
    return 'Futsal';
  } else {
    return capitalizeFirstLetter(tipo);
  }
};

const TeamDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { selectedTeam, loading, error, fetchTeamById } = useTeams();
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (id) {
      fetchTeamById(id);
    }
  }, [id, fetchTeamById]);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleBackClick = () => {
    navigate('/teams');
  };

  const handleEditClick = () => {
    if (id) {
      navigate(`/teams?edit=${id}`);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
        <Button 
          variant="outlined" 
          startIcon={<ArrowBackIcon />} 
          onClick={handleBackClick}
          sx={{ mt: 2 }}
        >
          Volver a equipos
        </Button>
      </Box>
    );
  }

  if (!selectedTeam) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="warning">No se encontró el equipo</Alert>
        <Button 
          variant="outlined" 
          startIcon={<ArrowBackIcon />} 
          onClick={handleBackClick}
          sx={{ mt: 2 }}
        >
          Volver a equipos
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      {/* Cabecera */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Button 
          variant="outlined" 
          startIcon={<ArrowBackIcon />} 
          onClick={handleBackClick}
          sx={{ mr: 2 }}
        >
          Volver
        </Button>
        <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
          Detalle del Equipo
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<EditIcon />} 
          onClick={handleEditClick}
        >
          Editar
        </Button>
      </Box>

      {/* Tarjeta de información general */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {selectedTeam.logoUrl ? (
                <Avatar 
                  src={selectedTeam.logoUrl} 
                  alt={selectedTeam.nombre}
                  sx={{ width: 120, height: 120 }}
                />
              ) : (
                <Avatar 
                  sx={{ width: 120, height: 120, bgcolor: 'primary.main' }}
                >
                  {selectedTeam.nombre.charAt(0)}
                </Avatar>
              )}
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="h4" component="h2" gutterBottom>
                {selectedTeam.nombre}
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                <Chip 
                  label={`Categoría: ${capitalizeFirstLetter(selectedTeam.categoria)}`} 
                  color="primary" 
                  variant="outlined" 
                />
                <Chip 
                  label={`Tipo: ${formatTipo(selectedTeam.tipo)}`} 
                  color="secondary" 
                  variant="outlined" 
                />
                <Chip 
                  label={selectedTeam.activo ? 'Activo' : 'Inactivo'} 
                  color={selectedTeam.activo ? 'success' : 'error'} 
                />
              </Box>
              
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Entrenador:</strong> {
                  typeof selectedTeam.entrenador === 'object' && selectedTeam.entrenador 
                    ? `${selectedTeam.entrenador.nombre} ${selectedTeam.entrenador.apellido}`
                    : 'Sin entrenador asignado'
                }
              </Typography>
              
              {typeof selectedTeam.entrenador === 'object' && selectedTeam.entrenador && (
                <Typography variant="body2" color="text.secondary">
                  <strong>Email del entrenador:</strong> {selectedTeam.entrenador.email}
                </Typography>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Pestañas para diferentes secciones */}
      <Box sx={{ width: '100%', bgcolor: 'background.paper', mb: 4 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab icon={<GroupIcon />} label="Jugadores" />
          <Tab icon={<DataUsageIcon />} label="Estadísticas" />
          <Tab icon={<EmojiEventsIcon />} label="Partidos" />
        </Tabs>

        {/* Panel de Jugadores */}
        <TabPanel value={tabValue} index={0}>
          <Paper elevation={2}>
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">Listado de Jugadores</Typography>
              <Button 
                variant="contained" 
                size="small"
                startIcon={<PersonIcon />}
              >
                Añadir Jugador
              </Button>
            </Box>
            <Divider />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Posición</TableCell>
                    <TableCell align="center">Goles</TableCell>
                    <TableCell align="center">Asistencias</TableCell>
                    <TableCell align="right">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {playersData.map((player) => (
                    <TableRow key={player.id}>
                      <TableCell>{player.numero}</TableCell>
                      <TableCell>{player.nombre}</TableCell>
                      <TableCell>{player.posicion}</TableCell>
                      <TableCell align="center">{player.goles}</TableCell>
                      <TableCell align="center">{player.asistencias}</TableCell>
                      <TableCell align="right">
                        <IconButton size="small" color="primary">
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {playersData.length === 0 && (
              <Box sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary">
                  Este equipo aún no tiene jugadores asignados
                </Typography>
              </Box>
            )}
          </Paper>
        </TabPanel>

        {/* Panel de Estadísticas */}
        <TabPanel value={tabValue} index={1}>
          <Paper elevation={2}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Estadísticas del Equipo</Typography>
            </Box>
            <Divider />
            <Grid container spacing={2} sx={{ p: 3 }}>
              <Grid item xs={12} md={4}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Partidos Jugados
                    </Typography>
                    <Typography variant="h4">{statsData.partidos}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Victorias
                    </Typography>
                    <Typography variant="h4">{statsData.victorias}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Empates
                    </Typography>
                    <Typography variant="h4">{statsData.empates}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Derrotas
                    </Typography>
                    <Typography variant="h4">{statsData.derrotas}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={2}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Puntos
                    </Typography>
                    <Typography variant="h4">{statsData.puntos}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Goles a Favor
                    </Typography>
                    <Typography variant="h4">{statsData.golesFavor}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} md={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Goles en Contra
                    </Typography>
                    <Typography variant="h4">{statsData.golesContra}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom>
                      Diferencia de Goles
                    </Typography>
                    <Typography variant="h4">{statsData.golesFavor - statsData.golesContra}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </TabPanel>

        {/* Panel de Partidos */}
        <TabPanel value={tabValue} index={2}>
          <Paper elevation={2}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">Últimos Partidos</Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                Próximamente: Listado de partidos del equipo
              </Typography>
            </Box>
          </Paper>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default TeamDetail; 