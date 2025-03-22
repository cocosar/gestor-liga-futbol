import { useEffect, useState, useCallback } from 'react';
import { 
  Container, 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Button, 
  TextField, 
  IconButton, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  CircularProgress
} from '@mui/material';
import { 
  Add as AddIcon, 
  Delete as DeleteIcon, 
  Edit as EditIcon, 
  Info as InfoIcon
} from '@mui/icons-material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { usePlayers } from '../hooks/usePlayers';
import { useTeams } from '../hooks/useTeams';
import { PlayerFilters } from '../types';
import { TeamListItem } from '../types/teams';
import { useNavigate } from 'react-router-dom';
import { esESGrid } from '../utils/dataGridLocale';
import { PlayerForm } from '../components/players';

const Players: React.FC = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [posicion, setPosicion] = useState('');
  const [equipo, setEquipo] = useState('');
  const [soloActivos, setSoloActivos] = useState<boolean>(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const { 
    players, 
    loading, 
    pagination, 
    fetchPlayers, 
    deletePlayer 
  } = usePlayers();
  
  const { teams, fetchTeams } = useTeams();

  const navigate = useNavigate();

  // Función para aplicar los filtros a la petición - ahora memoizada
  const applyFilters = useCallback((pageNumber: number, pageSize: number): PlayerFilters => {
    const filters: PlayerFilters = {
      page: pageNumber,
      limit: pageSize
    };
    
    if (searchTerm) {
      // Intentamos determinar si es nombre o apellido
      if (searchTerm.includes(' ')) {
        const [nombre, apellido] = searchTerm.split(' ', 2);
        filters.nombre = nombre;
        filters.apellido = apellido;
      } else {
        filters.nombre = searchTerm;
      }
    }
    
    if (posicion) filters.posicion = posicion;
    if (equipo) filters.equipo = equipo;
    
    // Solo aplicamos el filtro de activo cuando queremos ver específicamente los activos
    if (soloActivos) {
      filters.activo = true;
    }
    // Si soloActivos es false, no enviamos el parámetro activo para que el backend devuelva todos
    
    return filters;
  }, [searchTerm, posicion, equipo, soloActivos]);

  // Manejar cambios de paginación
  const handlePageChange = (page: number) => {
    fetchPlayers(applyFilters(page + 1, pagination?.totalPlayers ? 10 : 10));
  };

  // Manejar cambios en el tamaño de página
  const handlePageSizeChange = (pageSize: number) => {
    fetchPlayers(applyFilters(1, pageSize));
  };

  // Manejar búsqueda
  const handleSearch = () => {
    fetchPlayers(applyFilters(1, 10));
  };

  // Manejar cambios en filtros
  const handlePosicionChange = (event: SelectChangeEvent) => {
    setPosicion(event.target.value);
  };

  const handleEquipoChange = (event: SelectChangeEvent) => {
    setEquipo(event.target.value);
  };

  const handleActivosChange = (event: SelectChangeEvent) => {
    setSoloActivos(event.target.value === 'true');
  };

  // Manejar creación de jugador
  const handleCreatePlayer = () => {
    setSelectedPlayerId(null);
    setOpenForm(true);
  };

  // Manejar edición de jugador
  const handleEditPlayer = (id: string) => {
    setSelectedPlayerId(id);
    setOpenForm(true);
  };

  // Manejar cierre de formulario
  const handleCloseForm = () => {
    setOpenForm(false);
  };

  // Manejar confirmación de eliminación
  const handleConfirmDelete = (id: string) => {
    setSelectedPlayerId(id);
    setOpenDeleteDialog(true);
  };

  // Manejar eliminación de jugador
  const handleDeletePlayer = () => {
    if (selectedPlayerId) {
      setIsUpdating(true);
      deletePlayer(selectedPlayerId);
      setOpenDeleteDialog(false);
      
      // Recargar datos después de eliminar
      setTimeout(() => {
        fetchPlayers(applyFilters(pagination?.currentPage || 1, 10));
        
        // Marcar la actualización como completada
        setTimeout(() => {
          setIsUpdating(false);
        }, 300);
      }, 300);
    }
  };

  // Función para capitalizar texto
  const capitalizeFirstLetter = (str: string | null | undefined): string => {
    if (!str) return '-';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Manejar vista detallada del jugador
  const handleViewPlayerDetail = (id: string) => {
    navigate(`/players/${id}`);
  };

  // Obtener el nombre del equipo dado un ID o un objeto de equipo
  const getTeamName = (teamId: string | TeamListItem | null | undefined) => {
    if (!teamId) return '-';
    if (typeof teamId === 'object' && teamId.nombre) return teamId.nombre;
    
    const team = teams.find(t => t._id === teamId);
    return team ? team.nombre : 'Equipo no encontrado';
  };

  // Definir columnas para la tabla
  const columns: GridColDef[] = [
    { 
      field: 'numeroCamiseta', 
      headerName: '#', 
      width: 70, 
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => (
        <Box 
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box 
            sx={{
              backgroundColor: '#e3f2fd',
              borderRadius: '50%',
              width: 30,
              height: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}
          >
            {params.value || '-'}
          </Box>
        </Box>
      )
    },
    { 
      field: 'nombre', 
      headerName: 'Nombre', 
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <Box>
          {params.row.nombre} {params.row.apellido}
        </Box>
      )  
    },
    { 
      field: 'posicion', 
      headerName: 'Posición', 
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <Box>
          {capitalizeFirstLetter(params.row.posicion)}
        </Box>
      )
    },
    { 
      field: 'equipo', 
      headerName: 'Equipo', 
      width: 200,
      renderCell: (params: GridRenderCellParams) => (
        <Box>
          {getTeamName(params.row.equipo)}
        </Box>
      )
    },
    { 
      field: 'piePreferido', 
      headerName: 'Pie preferido', 
      width: 130,
      renderCell: (params: GridRenderCellParams) => (
        <Box>
          {capitalizeFirstLetter(params.row.piePreferido) || '-'}
        </Box>
      )
    },
    { 
      field: 'estadisticas', 
      headerName: 'Goles', 
      width: 100, 
      renderCell: (params: GridRenderCellParams) => (
        <Box>
          {params.row.estadisticas?.goles || 0}
        </Box>
      )
    },
    { 
      field: 'activo', 
      headerName: 'Estado', 
      width: 120, 
      renderCell: (params: GridRenderCellParams) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            height: '100%',
            width: '100%'
          }}
        >
          <Box
            component="span"
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: params.row.activo ? '#4caf50' : '#f44336',
              display: 'inline-block'
            }}
          />
          <Typography 
            variant="body2" 
            sx={{ 
              color: params.row.activo ? '#2e7d32' : '#c62828',
              fontWeight: 500
            }}
          >
            {params.row.activo ? 'Activo' : 'Inactivo'}
          </Typography>
        </Box>
      )
    },
    { 
      field: 'acciones', 
      headerName: 'Acciones', 
      width: 200,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => (
        <Box>
          <IconButton 
            color="info" 
            onClick={() => handleViewPlayerDetail(params.row._id)}
            size="small"
          >
            <InfoIcon />
          </IconButton>
          <IconButton 
            color="primary" 
            onClick={() => handleEditPlayer(params.row._id)}
            size="small"
          >
            <EditIcon />
          </IconButton>
          <IconButton 
            color="error" 
            onClick={() => handleConfirmDelete(params.row._id)}
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      )
    }
  ];

  // Cargar jugadores y equipos al montar el componente
  useEffect(() => {
    fetchPlayers(applyFilters(1, 10));
    fetchTeams({ page: 1, limit: 100 }); // Cargamos todos los equipos para los filtros
  }, [fetchPlayers, fetchTeams, applyFilters]);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h4" component="h1" gutterBottom>
              Gestión de Jugadores
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<AddIcon />}
              onClick={handleCreatePlayer}
              disabled={isUpdating}
            >
              Nuevo Jugador
            </Button>
          </Box>

          <Paper sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Buscar Jugador"
                  variant="outlined"
                  fullWidth
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Nombre o apellido"
                  size="small"
                  disabled={isUpdating}
                />
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth size="small">
                  <InputLabel id="posicion-select-label">Posición</InputLabel>
                  <Select
                    labelId="posicion-select-label"
                    id="posicion-select"
                    value={posicion}
                    label="Posición"
                    onChange={handlePosicionChange}
                    disabled={isUpdating}
                  >
                    <MenuItem value="">Todas</MenuItem>
                    <MenuItem value="indefinida">Indefinida</MenuItem>
                    <MenuItem value="portero">Portero</MenuItem>
                    <MenuItem value="defensa">Defensa</MenuItem>
                    <MenuItem value="mediocampista">Mediocampista</MenuItem>
                    <MenuItem value="delantero">Delantero</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth size="small">
                  <InputLabel id="equipo-select-label">Equipo</InputLabel>
                  <Select
                    labelId="equipo-select-label"
                    id="equipo-select"
                    value={equipo}
                    label="Equipo"
                    onChange={handleEquipoChange}
                    disabled={isUpdating}
                  >
                    <MenuItem value="">Todos</MenuItem>
                    {teams.map((team) => (
                      <MenuItem key={team._id} value={team._id}>
                        {team.nombre}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <FormControl fullWidth size="small">
                  <InputLabel id="activos-select-label">Estado</InputLabel>
                  <Select
                    labelId="activos-select-label"
                    id="activos-select"
                    value={soloActivos.toString()}
                    label="Estado"
                    onChange={handleActivosChange}
                    disabled={isUpdating}
                  >
                    <MenuItem value="true">Activos</MenuItem>
                    <MenuItem value="false">Todos</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button 
                  variant="contained" 
                  onClick={handleSearch} 
                  fullWidth
                  disabled={isUpdating}
                >
                  Buscar
                </Button>
              </Grid>
            </Grid>
          </Paper>

          <Paper 
            style={{ height: 600, width: '100%', position: 'relative' }}
          >
            {(loading || isUpdating) && (
              <Box 
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  zIndex: 10,
                  backdropFilter: 'blur(2px)',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CircularProgress size={40} thickness={4} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        backgroundColor: '#fff'
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            )}
            <DataGrid
              rows={players}
              columns={columns}
              getRowId={(row) => row._id}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                    page: (pagination?.currentPage || 1) - 1
                  }
                }
              }}
              pageSizeOptions={[5, 10, 25, 50]}
              rowCount={pagination?.totalPlayers || 0}
              paginationMode="server"
              onPaginationModelChange={(model) => {
                handlePageChange(model.page);
                if (model.pageSize !== 10) {
                  handlePageSizeChange(model.pageSize);
                }
              }}
              localeText={esESGrid}
              disableRowSelectionOnClick
              sx={{
                '& .MuiDataGrid-cell': {
                  opacity: isUpdating ? 0.6 : 1,
                  transition: 'opacity 0.3s ease'
                }
              }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Modal de confirmación para eliminar */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>Confirmar eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro que deseas eliminar este jugador? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setOpenDeleteDialog(false)} 
            color="primary"
          >
            Cancelar
          </Button>
          <Button 
            onClick={handleDeletePlayer} 
            color="error" 
            autoFocus
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      {/* Aquí iría el formulario de creación/edición de jugadores */}
      <Dialog
        open={openForm}
        onClose={handleCloseForm}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          {selectedPlayerId ? 'Editar Jugador' : 'Crear Nuevo Jugador'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            {selectedPlayerId 
              ? 'Actualiza la información del jugador en el formulario a continuación.'
              : 'Rellena el formulario para crear un nuevo jugador.'}
          </DialogContentText>
          
          <PlayerForm
            playerId={selectedPlayerId || undefined}
            onClose={handleCloseForm}
            onSaved={() => {
              setIsUpdating(true);
              // Recargar datos después de crear/editar
              fetchPlayers(applyFilters(pagination?.currentPage || 1, 10));
              
              // Desactivar el estado de actualización después de un tiempo
              setTimeout(() => {
                setIsUpdating(false);
              }, 500);
            }}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Players; 