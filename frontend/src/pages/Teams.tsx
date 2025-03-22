import { useEffect, useState } from 'react';
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
import { useTeams } from '../hooks/useTeams';
import TeamForm from '../components/teams/TeamForm';
import { TeamPaginationParams } from '../types';
import { RandomTeamsGenerator } from '../components/teams';
import { useNavigate } from 'react-router-dom';
import { esESGrid } from '../utils/dataGridLocale';

const Teams: React.FC = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('');

  const { 
    teams, 
    loading, 
    pagination, 
    fetchTeams, 
    deleteTeam 
  } = useTeams();

  const navigate = useNavigate();

  // Cargar equipos al montar el componente
  useEffect(() => {
    fetchTeams({ page: 1, limit: 10 });
  }, [fetchTeams]);

  // Manejar cambios de paginación
  const handlePageChange = (page: number) => {
    const params: TeamPaginationParams = {
      page: page + 1, 
      limit: pagination.limit
    };
    
    if (searchTerm) params.search = searchTerm;
    if (categoria) params.categoria = categoria;
    if (tipo) params.tipo = tipo;
    
    fetchTeams(params);
  };

  // Manejar cambios en el tamaño de página
  const handlePageSizeChange = (pageSize: number) => {
    const params: TeamPaginationParams = {
      page: 1, 
      limit: pageSize
    };
    
    if (searchTerm) params.search = searchTerm;
    if (categoria) params.categoria = categoria;
    if (tipo) params.tipo = tipo;
    
    fetchTeams(params);
  };

  // Manejar búsqueda
  const handleSearch = () => {
    const params: TeamPaginationParams = {
      page: 1, 
      limit: pagination.limit
    };
    
    if (searchTerm) params.search = searchTerm;
    if (categoria) params.categoria = categoria;
    if (tipo) params.tipo = tipo;
    
    fetchTeams(params);
  };

  // Manejar cambios en filtros
  const handleCategoriaChange = (event: SelectChangeEvent) => {
    setCategoria(event.target.value);
  };

  const handleTipoChange = (event: SelectChangeEvent) => {
    setTipo(event.target.value);
  };

  // Manejar creación de equipo
  const handleCreateTeam = () => {
    setSelectedTeamId(null);
    setOpenForm(true);
  };

  // Manejar edición de equipo
  const handleEditTeam = (id: string) => {
    setSelectedTeamId(id);
    setOpenForm(true);
  };

  // Manejar cierre de formulario
  const handleCloseForm = () => {
    setOpenForm(false);
    // Recargar datos después de crear/editar
    const params: TeamPaginationParams = {
      page: pagination.page, 
      limit: pagination.limit
    };
    
    if (searchTerm) params.search = searchTerm;
    if (categoria) params.categoria = categoria;
    if (tipo) params.tipo = tipo;
    
    fetchTeams(params);
  };

  // Manejar confirmación de eliminación
  const handleConfirmDelete = (id: string) => {
    setSelectedTeamId(id);
    setOpenDeleteDialog(true);
  };

  // Manejar eliminación de equipo
  const handleDeleteTeam = () => {
    if (selectedTeamId) {
      deleteTeam(selectedTeamId);
      setOpenDeleteDialog(false);
    }
  };

  // Función para capitalizar primera letra
  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Función para ver detalle del equipo
  const handleViewTeamDetail = (id: string) => {
    navigate(`/teams/${id}`);
  };

  // Definir columnas para la tabla
  const columns: GridColDef[] = [
    { field: 'nombre', headerName: 'Nombre', flex: 1 },
    { 
      field: 'categoria', 
      headerName: 'Categoría', 
      flex: 0.8,
      renderCell: (params: GridRenderCellParams) => (
        <span>{typeof params.value === 'string' ? capitalizeFirstLetter(params.value) : params.value}</span>
      )
    },
    { 
      field: 'tipo', 
      headerName: 'Tipo', 
      flex: 0.8,
      renderCell: (params: GridRenderCellParams) => (
        <span>{typeof params.value === 'string' ? capitalizeFirstLetter(params.value) : params.value}</span>
      )
    },
    { 
      field: 'entrenador', 
      headerName: 'Entrenador', 
      flex: 1,
      renderCell: (params) => {
        if (params.value && typeof params.value === 'object' && params.value._id) {
          return <span>{`${params.value.nombre || ''} ${params.value.apellido || ''}`}</span>;
        }
        return <span>{params.value || 'No asignado'}</span>;
      }
    },
    { 
      field: 'activo', 
      headerName: 'Estado', 
      flex: 0.7,
      renderCell: (params: GridRenderCellParams) => (
        <Box sx={{ 
          color: params.value ? 'success.main' : 'error.main',
          fontWeight: 'bold'
        }}>
          {params.value ? 'Activo' : 'Inactivo'}
        </Box>
      )
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      sortable: false,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Box>
          <IconButton 
            color="primary" 
            onClick={() => handleEditTeam(params.row._id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton 
            color="error" 
            onClick={() => handleConfirmDelete(params.row._id)}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton 
            color="info" 
            onClick={() => handleViewTeamDetail(params.row._id)}
          >
            <InfoIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <RandomTeamsGenerator />
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h5" component="h2">
                Gestión de Equipos
              </Typography>
              <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                onClick={handleCreateTeam}
              >
                Nuevo Equipo
              </Button>
            </Box>

            {/* Filtros de búsqueda */}
            <FormControl sx={{ mb: 3 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    label="Buscar por nombre"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl fullWidth>
                    <InputLabel>Categoría</InputLabel>
                    <Select
                      value={categoria}
                      label="Categoría"
                      onChange={handleCategoriaChange}
                    >
                      <MenuItem value="">Todas</MenuItem>
                      <MenuItem value="juvenil">Juvenil</MenuItem>
                      <MenuItem value="adulto">Adulto</MenuItem>
                      <MenuItem value="senior">Senior</MenuItem>
                      <MenuItem value="femenino">Femenino</MenuItem>
                      <MenuItem value="masculino">Masculino</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={3}>
                  <FormControl fullWidth>
                    <InputLabel>Tipo</InputLabel>
                    <Select
                      value={tipo}
                      label="Tipo"
                      onChange={handleTipoChange}
                    >
                      <MenuItem value="">Todos</MenuItem>
                      <MenuItem value="futbol">Fútbol</MenuItem>
                      <MenuItem value="futsal">Futsal</MenuItem>
                      <MenuItem value="futbol7">Fútbol 7</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSearch}
                  >
                    Buscar
                  </Button>
                </Grid>
              </Grid>
            </FormControl>

            {/* Tabla de equipos */}
            <Box sx={{ height: 400, width: '100%' }}>
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <DataGrid
                  rows={teams}
                  columns={columns}
                  paginationMode="server"
                  rowCount={pagination.total}
                  pageSizeOptions={[10, 25, 50, 100]}
                  initialState={{
                    pagination: {
                      paginationModel: { 
                        page: pagination.page - 1, 
                        pageSize: pagination.limit 
                      },
                    },
                  }}
                  onPaginationModelChange={(model) => {
                    handlePageChange(model.page);
                    handlePageSizeChange(model.pageSize);
                  }}
                  disableRowSelectionOnClick
                  getRowId={(row) => row._id}
                  localeText={esESGrid}
                />
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Formulario de creación/edición */}
      <TeamForm
        open={openForm}
        onClose={handleCloseForm}
        teamId={selectedTeamId || undefined}
      />

      {/* Diálogo de confirmación de eliminación */}
      <Dialog
        open={openDeleteDialog}
        onClose={() => setOpenDeleteDialog(false)}
      >
        <DialogTitle>Eliminar Equipo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Está seguro que desea eliminar este equipo? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)}>
            Cancelar
          </Button>
          <Button onClick={handleDeleteTeam} color="error" autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Teams; 