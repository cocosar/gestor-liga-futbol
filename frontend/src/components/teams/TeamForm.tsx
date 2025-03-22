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
  Typography,
  Paper
} from '@mui/material';
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import ImageIcon from '@mui/icons-material/Image';
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
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isValidImage, setIsValidImage] = useState<boolean>(false);
  const [useProxy, setUseProxy] = useState<boolean>(false);
  
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
      const logoUrl = selectedTeam.logoUrl || selectedTeam.logo || '';
      setFormData({
        nombre: selectedTeam.nombre,
        categoria: selectedTeam.categoria,
        tipo: selectedTeam.tipo,
        entrenador: selectedTeam.entrenador && typeof selectedTeam.entrenador === 'object' ? 
          (selectedTeam.entrenador as { _id: string })._id : selectedTeam.entrenador || '',
        logoUrl: logoUrl,
        activo: selectedTeam.activo,
      });
      setPreviewUrl(logoUrl);
    }
  }, [selectedTeam, teamId]);
  
  // Función para obtener la URL con proxy si es necesario
  const getProxiedUrl = (url: string): string => {
    if (useProxy) {
      // Usar un servicio proxy de imágenes que permite CORS
      return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;
    }
    return url;
  };
  
  // Efecto para actualizar la previsualización cuando cambia la URL del logo
  useEffect(() => {
    if (formData.logoUrl) {
      const logoUrl = formData.logoUrl;
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageError;
      img.src = getProxiedUrl(logoUrl);
    } else {
      setPreviewUrl('');
      setIsValidImage(false);
    }
  }, [formData.logoUrl, useProxy, getProxiedUrl]);
  
  // Alternar el uso del proxy
  const toggleProxy = () => {
    setUseProxy(!useProxy);
  };
  
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
  
  // Manejador para validar la imagen cuando carga
  const handleImageLoad = () => {
    console.log('Imagen cargada correctamente');
    setIsValidImage(true);
  };
  
  // Manejador para cuando la imagen falla al cargar
  const handleImageError = () => {
    console.log('Error al cargar la imagen:', previewUrl);
    setIsValidImage(false);
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
                helperText="Puedes ingresar una URL como example.com (se añadirá https:// automáticamente)"
              />
              
              {/* Previsualización del logo */}
              {previewUrl && (
                <Box 
                  mt={2} 
                  display="flex" 
                  flexDirection="column" 
                  alignItems="center"
                >
                  <Typography variant="subtitle2" gutterBottom>
                    Previsualización:
                  </Typography>
                  <Paper 
                    elevation={2} 
                    sx={{ 
                      p: 1, 
                      width: '100%', 
                      display: 'flex', 
                      justifyContent: 'center',
                      overflow: 'hidden',
                      minHeight: 130
                    }}
                  >
                    <Box
                      component="img"
                      src={getProxiedUrl(previewUrl)}
                      alt="Logo Preview"
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      sx={{
                        maxHeight: 120,
                        maxWidth: '100%',
                        objectFit: 'contain',
                        display: isValidImage ? 'block' : 'none'
                      }}
                    />
                    {!isValidImage && (
                      <Box 
                        display="flex" 
                        flexDirection="column" 
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                        sx={{ 
                          width: '100%',
                          height: '100%'
                        }}
                      >
                        <BrokenImageIcon color="error" fontSize="large" />
                        <Typography variant="caption" color="text.secondary" align="center">
                          No se puede cargar la imagen.<br/>
                          Asegúrate de que la URL sea correcta y públicamente accesible.
                        </Typography>
                        <Box mt={1} display="flex" flexDirection="column" alignItems="center">
                          <Button 
                            size="small" 
                            color="primary" 
                            onClick={toggleProxy}
                            variant="outlined"
                            sx={{ mb: 1, fontSize: '0.75rem' }}
                          >
                            {useProxy ? "Desactivar proxy de imágenes" : "Intentar con proxy de imágenes"}
                          </Button>
                          <a 
                            href={previewUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ fontSize: '0.75rem', color: 'blue', textDecoration: 'underline' }}
                          >
                            Abrir enlace en nueva pestaña
                          </a>
                        </Box>
                      </Box>
                    )}
                  </Paper>
                  <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                    {useProxy ? 
                      "Usando servicio proxy para mostrar la imagen. El enlace original se guardará." : 
                      "Nota: Aunque la imagen no se muestre en la previsualización debido a restricciones del navegador, el logo podría guardarse correctamente y mostrarse en otras partes de la aplicación."}
                  </Typography>
                </Box>
              )}
              
              {!previewUrl && (
                <Box 
                  mt={2} 
                  display="flex" 
                  flexDirection="column" 
                  alignItems="center"
                >
                  <Paper 
                    elevation={1} 
                    sx={{ 
                      p: 2, 
                      width: '100%', 
                      display: 'flex', 
                      justifyContent: 'center',
                      backgroundColor: 'action.hover'
                    }}
                  >
                    <Box 
                      display="flex" 
                      flexDirection="column" 
                      alignItems="center"
                    >
                      <ImageIcon color="disabled" fontSize="large" />
                      <Typography variant="caption" color="text.secondary">
                        Ingresa una URL para ver la previsualización
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              )}
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