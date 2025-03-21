import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from '@mui/material';
import { useTeams, useUsers } from '../../hooks';
import { TeamFormData } from '../../types';

interface TeamFormProps {
  open: boolean;
  onClose: () => void;
  teamId?: string;
}

const initialFormData: TeamFormData = {
  nombre: '',
  categoria: 'adulto',
  tipo: 'futbol',
  entrenador: '',
  logoUrl: '',
  activo: true,
};

const categorias = [
  { value: 'juvenil', label: 'Juvenil' },
  { value: 'adulto', label: 'Adulto' },
  { value: 'senior', label: 'Senior' },
  { value: 'femenino', label: 'Femenino' },
  { value: 'masculino', label: 'Masculino' },
];

const tipos = [
  { value: 'futbol', label: 'Fútbol' },
  { value: 'futsal', label: 'Futsal' },
  { value: 'futbol7', label: 'Fútbol 7' },
];

const TeamForm: React.FC<TeamFormProps> = ({ open, onClose, teamId }) => {
  const [formData, setFormData] = useState<TeamFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { fetchTeamById, selectedTeam, createTeam, updateTeam, loading } = useTeams();
  const { users, fetchUsers } = useUsers();
  
  // Cargar equipo si se está editando
  useEffect(() => {
    if (open && teamId) {
      fetchTeamById(teamId);
    } else {
      setFormData(initialFormData);
    }
  }, [open, teamId, fetchTeamById]);
  
  // Cargar usuarios para selector de entrenador
  useEffect(() => {
    if (open) {
      fetchUsers({ page: 1, limit: 100 });
    }
  }, [open, fetchUsers]);
  
  // Actualizar formulario cuando se carga el equipo seleccionado
  useEffect(() => {
    if (selectedTeam && teamId) {
      setFormData({
        nombre: selectedTeam.nombre,
        categoria: selectedTeam.categoria,
        tipo: selectedTeam.tipo,
        entrenador: selectedTeam.entrenador && typeof selectedTeam.entrenador === 'object' ? 
          (selectedTeam.entrenador as { _id: string })._id : selectedTeam.entrenador || '',
        logoUrl: selectedTeam.logoUrl || '',
        activo: selectedTeam.activo,
      });
    }
  }, [selectedTeam, teamId]);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    if (name) {
      setFormData({
        ...formData,
        [name]: value,
      });
      
      // Limpiar error del campo
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    }
  };
  
  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };
  
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre del equipo es obligatorio';
    }
    
    if (!formData.categoria) {
      newErrors.categoria = 'La categoría es obligatoria';
    }
    
    if (!formData.tipo) {
      newErrors.tipo = 'El tipo de equipo es obligatorio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = () => {
    if (validateForm()) {
      if (teamId) {
        updateTeam(teamId, formData);
      } else {
        createTeam(formData);
      }
      onClose();
    }
  };
  
  const entrenadores = users.filter(user => 
    user.rol === 'entrenador' || user.rol === 'admin'
  );
  
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {teamId ? 'Editar Equipo' : 'Crear Nuevo Equipo'}
      </DialogTitle>
      <DialogContent>
        <Box component="form" noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="nombre"
                label="Nombre del Equipo"
                fullWidth
                value={formData.nombre}
                onChange={handleChange}
                error={!!errors.nombre}
                helperText={errors.nombre}
                disabled={loading}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControl fullWidth error={!!errors.categoria}>
                <InputLabel>Categoría</InputLabel>
                <Select
                  name="categoria"
                  value={formData.categoria}
                  label="Categoría"
                  onChange={handleChange}
                  disabled={loading}
                >
                  {categorias.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.categoria && (
                  <FormHelperText>{errors.categoria}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControl fullWidth error={!!errors.tipo}>
                <InputLabel>Tipo</InputLabel>
                <Select
                  name="tipo"
                  value={formData.tipo}
                  label="Tipo"
                  onChange={handleChange}
                  disabled={loading}
                >
                  {tipos.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                {errors.tipo && (
                  <FormHelperText>{errors.tipo}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Entrenador</InputLabel>
                <Select
                  name="entrenador"
                  value={formData.entrenador}
                  label="Entrenador"
                  onChange={handleChange}
                  disabled={loading}
                >
                  <MenuItem value="">Ninguno</MenuItem>
                  {entrenadores.map(user => (
                    <MenuItem key={user._id} value={user._id}>
                      {user.nombre} {user.apellido}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                name="logoUrl"
                label="URL del Logo"
                fullWidth
                value={formData.logoUrl || ''}
                onChange={handleChange}
                disabled={loading}
              />
            </Grid>
            
            {teamId && (
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Switch
                      name="activo"
                      checked={formData.activo}
                      onChange={handleSwitchChange}
                      disabled={loading}
                    />
                  }
                  label="Equipo activo"
                />
              </Grid>
            )}
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit" disabled={loading}>
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          disabled={loading}
        >
          {teamId ? 'Guardar Cambios' : 'Crear Equipo'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TeamForm; 