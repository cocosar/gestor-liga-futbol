import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  MenuItem,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Stack,
  Grid,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  CircularProgress
} from '@mui/material';
import {
  Add as AddIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useUsers } from '../hooks/useUsers';
import UserForm from '../components/users/UserForm';
import { PaginationParams, UserListItem } from '../types';

const UsersPage: React.FC = () => {
  const {
    users,
    loading,
    error,
    pagination,
    fetchUsers,
    deleteUser
  } = useUsers();

  // Estados locales para filtros y paginación
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [roleFilter, setRoleFilter] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  
  // Estados para modales
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  // Cargar usuarios al montar el componente y cuando cambien los filtros
  useEffect(() => {
    const paginationParams: PaginationParams = {
      page: page + 1, // DataGrid usa índice 0, backend usa índice 1
      limit: pageSize,
      search: searchTerm,
      sort: 'nombre',
      order: 'asc',
      rol: roleFilter,
      activo: statusFilter
    };
    
    fetchUsers(paginationParams);
  }, [fetchUsers, page, pageSize, searchTerm, roleFilter, statusFilter]);

  // Manejadores para filtros
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0); // Resetear página al cambiar filtros
  };

  const handleRoleFilterChange = (event: SelectChangeEvent) => {
    setRoleFilter(event.target.value);
    setPage(0);
  };

  const handleStatusFilterChange = (event: SelectChangeEvent) => {
    setStatusFilter(event.target.value);
    setPage(0);
  };

  // Manejadores para modales
  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
    refreshUsers();
  };

  const handleOpenEditModal = (id: string) => {
    setSelectedUserId(id);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setSelectedUserId(null);
    setOpenEditModal(false);
    refreshUsers();
  };

  const handleOpenDeleteModal = (id: string) => {
    setSelectedUserId(id);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedUserId(null);
    setOpenDeleteModal(false);
  };

  // Confirmar eliminación de usuario
  const handleConfirmDelete = () => {
    if (selectedUserId) {
      deleteUser(selectedUserId);
      handleCloseDeleteModal();
    }
  };

  // Refrescar lista de usuarios
  const refreshUsers = () => {
    const paginationParams: PaginationParams = {
      page: page + 1,
      limit: pageSize,
      search: searchTerm,
      sort: 'nombre',
      order: 'asc',
      rol: roleFilter,
      activo: statusFilter
    };
    
    fetchUsers(paginationParams);
  };

  // Definición de columnas para la tabla
  const columns: GridColDef[] = [
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'apellido', headerName: 'Apellido', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'rol',
      headerName: 'Rol',
      width: 150,
      renderCell: (params) => {
        const rolMap: Record<string, string> = {
          'admin': 'Administrador',
          'veedor': 'Veedor',
          'entrenador': 'Entrenador',
          'usuario': 'Usuario'
        };
        return rolMap[params.value as string] || params.value;
      }
    },
    { 
      field: 'activo', 
      headerName: 'Estado', 
      width: 120,
      renderCell: (params: GridRenderCellParams<UserListItem>) => (
        <Box display="flex" alignItems="center" height="100%">
          <Typography color={params.value ? 'primary' : 'error'}>
            {params.value ? 'Activo' : 'Inactivo'}
          </Typography>
        </Box>
      )
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 120,
      sortable: false,
      renderCell: (params: GridRenderCellParams<UserListItem>) => (
        <Box>
          <IconButton 
            color="primary" 
            aria-label="editar" 
            onClick={() => handleOpenEditModal(params.row._id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton 
            color="error" 
            aria-label="eliminar" 
            onClick={() => handleOpenDeleteModal(params.row._id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      )
    }
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 3, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Gestión de Usuarios
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Administra los usuarios del sistema
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Buscar"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: <SearchIcon color="action" />
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Rol</InputLabel>
              <Select
                value={roleFilter}
                label="Rol"
                onChange={handleRoleFilterChange}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="admin">Administrador</MenuItem>
                <MenuItem value="veedor">Veedor</MenuItem>
                <MenuItem value="entrenador">Entrenador</MenuItem>
                <MenuItem value="usuario">Usuario</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel>Estado</InputLabel>
              <Select
                value={statusFilter}
                label="Estado"
                onChange={handleStatusFilterChange}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="true">Activo</MenuItem>
                <MenuItem value="false">Inactivo</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button 
                variant="outlined" 
                startIcon={<RefreshIcon />}
                onClick={refreshUsers}
              >
                Actualizar
              </Button>
              <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                onClick={handleOpenCreateModal}
              >
                Nuevo Usuario
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box sx={{ height: 400, width: '100%' }}>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <CircularProgress />
            </Box>
          ) : (
            <DataGrid
              rows={users}
              columns={columns}
              rowCount={pagination.total || 0}
              loading={loading}
              pageSizeOptions={[5, 10, 25]}
              paginationModel={{ page, pageSize }}
              paginationMode="server"
              onPaginationModelChange={(model) => {
                setPage(model.page);
                setPageSize(model.pageSize);
              }}
              disableRowSelectionOnClick
              getRowId={(row) => row._id}
              sx={{ border: 'none' }}
              localeText={{
                MuiTablePagination: {
                  labelRowsPerPage: 'Filas por página:',
                },
              }}
            />
          )}
        </Box>
      </Paper>

      {/* Modal para crear usuario */}
      <Dialog 
        open={openCreateModal} 
        onClose={handleCloseCreateModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Crear Nuevo Usuario</DialogTitle>
        <DialogContent>
          <UserForm onCancel={handleCloseCreateModal} />
        </DialogContent>
      </Dialog>

      {/* Modal para editar usuario */}
      <Dialog 
        open={openEditModal} 
        onClose={handleCloseEditModal}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Editar Usuario</DialogTitle>
        <DialogContent>
          {selectedUserId && (
            <UserForm userId={selectedUserId} onCancel={handleCloseEditModal} />
          )}
        </DialogContent>
      </Dialog>

      {/* Modal de confirmación para eliminar usuario */}
      <Dialog
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
      >
        <DialogTitle>Eliminar Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal}>Cancelar</Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UsersPage; 