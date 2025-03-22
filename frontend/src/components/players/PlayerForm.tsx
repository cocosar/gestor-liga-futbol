import { useState, useEffect } from 'react';
import { 
  Grid, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  FormHelperText, 
  Button, 
  Box, 
  CircularProgress, 
  Switch,
  Avatar,
  IconButton,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { useTeams } from '../../hooks/useTeams';
import { usePlayers } from '../../hooks/usePlayers';
import { CreatePlayerData, UpdatePlayerData } from '../../types';

interface PlayerFormProps {
  playerId?: string;
  onClose: () => void;
  onSaved?: () => void; // Callback opcional para notificar cuando se guarda exitosamente
}

const PlayerForm: React.FC<PlayerFormProps> = ({ playerId, onClose, onSaved }) => {
  const { teams, fetchTeams } = useTeams();
  const { selectedPlayer, fetchPlayerById, createPlayer, updatePlayer, loading } = usePlayers();
  
  // Estados iniciales para el formulario
  const [formData, setFormData] = useState<CreatePlayerData & { activo?: boolean; equipo?: string }>({
    nombre: '',
    apellido: '',
    numeroIdentificacion: '',
    posicion: 'indefinida',
    numeroCamiseta: undefined,
    fechaNacimiento: '',
    equipo: '',
    altura: undefined,
    peso: undefined,
    piePreferido: 'derecho',
    activo: true,
  });
  
  // Estado para errores de validación
  const [errors, setErrors] = useState<Partial<Record<keyof CreatePlayerData, string>>>({});
  
  // Estado para foto de perfil
  const [foto, setFoto] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string | undefined>(undefined);
  
  // Cargar equipos al montar
  useEffect(() => {
    fetchTeams({ page: 1, limit: 100 });
  }, [fetchTeams]);
  
  // Si es edición, cargar datos del jugador
  useEffect(() => {
    if (playerId) {
      fetchPlayerById(playerId);
    }
  }, [playerId, fetchPlayerById]);
  
  // Actualizar formulario cuando se carga un jugador
  useEffect(() => {
    if (selectedPlayer && playerId) {
      const playerData = {
        nombre: selectedPlayer.nombre || '',
        apellido: selectedPlayer.apellido || '',
        numeroIdentificacion: selectedPlayer.numeroIdentificacion || '',
        posicion: selectedPlayer.posicion || 'defensa',
        numeroCamiseta: selectedPlayer.numeroCamiseta,
        fechaNacimiento: selectedPlayer.fechaNacimiento || '',
        piePreferido: selectedPlayer.piePreferido || 'derecho',
        altura: selectedPlayer.altura,
        peso: selectedPlayer.peso,
        activo: selectedPlayer.activo,
        equipo: '',
      };
      
      // Si el equipo es un objeto, extraer su ID
      if (selectedPlayer.equipo) {
        playerData.equipo = typeof selectedPlayer.equipo === 'string' 
          ? selectedPlayer.equipo 
          : selectedPlayer.equipo._id;
      }
      
      setFormData(playerData as CreatePlayerData & { activo?: boolean; equipo?: string });
      
      // Si hay foto de perfil, establecer la preview
      if (selectedPlayer.fotoPerfil) {
        setFotoPreview(selectedPlayer.fotoPerfil);
      }
    }
  }, [selectedPlayer, playerId]);
  
  // Manejar cambios en el formulario para inputs de texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name) {
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Limpiar error cuando se modifica un campo
      if (errors[name as keyof CreatePlayerData]) {
        setErrors({
          ...errors,
          [name]: undefined
        });
      }
    }
  };
  
  // Manejar cambios en selects
  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    
    if (name) {
      setFormData({
        ...formData,
        [name]: value
      });
      
      // Limpiar error cuando se modifica un campo
      if (errors[name as keyof CreatePlayerData]) {
        setErrors({
          ...errors,
          [name]: undefined
        });
      }
    }
  };
  
  // Manejar cambio en checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    if (name) {
      setFormData({
        ...formData,
        [name]: checked
      });
    }
  };
  
  // Manejar cambio de foto
  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFoto(file);
      
      // Generar preview
      const reader = new FileReader();
      reader.onload = () => {
        setFotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Validar campos del formulario
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CreatePlayerData, string>> = {};
    
    if (!formData.nombre) {
      newErrors.nombre = 'El nombre es obligatorio';
    }
    
    if (!formData.apellido) {
      newErrors.apellido = 'El apellido es obligatorio';
    }
    
    if (!formData.numeroIdentificacion) {
      newErrors.numeroIdentificacion = 'El número de identificación es obligatorio';
    }
    
    if (!formData.posicion) {
      newErrors.posicion = 'La posición es obligatoria';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Aquí se manejaría la lógica para subir la foto y obtener URL
    // Para este ejemplo, solo simulamos que se guarda la URL actual si existe
    const playerData: CreatePlayerData | UpdatePlayerData = {
      ...formData
    };
    
    // Eliminar el campo equipo si está vacío para evitar error de conversión a ObjectId
    if (playerData.equipo === '') {
      delete playerData.equipo;
    }
    
    // Si hay foto nueva, simular que tenemos una URL (en un caso real, se subiría)
    if (foto) {
      // En un caso real, aquí subiríamos la foto a un servicio como S3
      // Y luego asignaríamos la URL resultante
      playerData.fotoPerfil = fotoPreview; // Simulación
    } else if (fotoPreview) {
      // Mantener la foto existente
      playerData.fotoPerfil = fotoPreview;
    }
    
    try {
      if (playerId) {
        // Actualizar jugador existente
        await updatePlayer(playerId, playerData as UpdatePlayerData);
        
        // Notificar al componente padre antes de cerrar
        if (onSaved) {
          onSaved();
        }
        
        // Cerrar el formulario después de guardar exitosamente
        onClose();
      } else {
        // Crear nuevo jugador
        // Eliminar activo para crear jugador (solo se usa en actualización)
        const createData = { ...playerData };
        // Usar type assertion para asegurarse de que se puede acceder a 'activo'
        const typedCreateData = createData as CreatePlayerData & { activo?: boolean };
        if ('activo' in createData) {
          delete typedCreateData.activo;
        }
        await createPlayer(typedCreateData as CreatePlayerData);
        
        // Notificar al componente padre antes de cerrar
        if (onSaved) {
          onSaved();
        }
        
        // Cerrar el formulario después de guardar exitosamente
        onClose();
      }
    } catch (error) {
      console.error('Error al guardar jugador:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        {/* Foto de perfil */}
        <Grid item xs={12} display="flex" justifyContent="center">
          <Box textAlign="center">
            <Avatar
              src={fotoPreview}
              sx={{ width: 100, height: 100, margin: '0 auto 8px' }}
            />
            <label htmlFor="foto-input">
              <input
                accept="image/*"
                id="foto-input"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFotoChange}
              />
              <IconButton color="primary" component="span" aria-label="subir foto">
                <PhotoCamera />
              </IconButton>
            </label>
          </Box>
        </Grid>
        
        {/* Datos personales */}
        <Grid item xs={12} md={6}>
          <TextField
            name="nombre"
            label="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.nombre}
            helperText={errors.nombre}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            name="apellido"
            label="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.apellido}
            helperText={errors.apellido}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            name="numeroIdentificacion"
            label="Número de Identificación"
            value={formData.numeroIdentificacion}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.numeroIdentificacion}
            helperText={errors.numeroIdentificacion}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            name="fechaNacimiento"
            label="Fecha de Nacimiento"
            type="date"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        
        {/* Datos deportivos */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth required error={!!errors.posicion}>
            <InputLabel id="posicion-label">Posición</InputLabel>
            <Select
              labelId="posicion-label"
              name="posicion"
              value={formData.posicion}
              onChange={handleSelectChange}
              label="Posición"
            >
              <MenuItem value="indefinida">Indefinida</MenuItem>
              <MenuItem value="portero">Portero</MenuItem>
              <MenuItem value="defensa">Defensa</MenuItem>
              <MenuItem value="mediocampista">Mediocampista</MenuItem>
              <MenuItem value="delantero">Delantero</MenuItem>
            </Select>
            {errors.posicion && <FormHelperText>{errors.posicion}</FormHelperText>}
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            name="numeroCamiseta"
            label="Número de Camiseta"
            type="number"
            value={formData.numeroCamiseta || ''}
            onChange={handleChange}
            fullWidth
            InputProps={{ inputProps: { min: 1, max: 99 } }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="equipo-label">Equipo</InputLabel>
            <Select
              labelId="equipo-label"
              name="equipo"
              value={formData.equipo || ''}
              onChange={handleSelectChange}
              label="Equipo"
            >
              <MenuItem value="">Sin equipo</MenuItem>
              {teams.map((team) => (
                <MenuItem key={team._id} value={team._id}>
                  {team.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="pie-label">Pie Preferido</InputLabel>
            <Select
              labelId="pie-label"
              name="piePreferido"
              value={formData.piePreferido || 'derecho'}
              onChange={handleSelectChange}
              label="Pie Preferido"
            >
              <MenuItem value="derecho">Derecho</MenuItem>
              <MenuItem value="izquierdo">Izquierdo</MenuItem>
              <MenuItem value="ambos">Ambos</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        {/* Datos físicos */}
        <Grid item xs={12} md={6}>
          <TextField
            name="altura"
            label="Altura (cm)"
            type="number"
            value={formData.altura || ''}
            onChange={handleChange}
            fullWidth
            InputProps={{ inputProps: { min: 100, max: 250 } }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <TextField
            name="peso"
            label="Peso (kg)"
            type="number"
            value={formData.peso || ''}
            onChange={handleChange}
            fullWidth
            InputProps={{ inputProps: { min: 30, max: 150 } }}
          />
        </Grid>
        
        {/* Estado (solo en edición) */}
        {playerId && (
          <Grid item xs={12}>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                border: '1px solid #e0e0e0', 
                borderRadius: 1, 
                padding: 2,
                backgroundColor: '#f9f9f9' 
              }}
            >
              <Typography variant="body1" sx={{ flexGrow: 1 }}>
                Estado del jugador
              </Typography>
              <Switch
                name="activo"
                checked={formData.activo !== undefined ? formData.activo : true}
                onChange={handleCheckboxChange}
                color="primary"
              />
              <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                {formData.activo ? "Activo" : "Inactivo"}
              </Typography>
            </Box>
          </Grid>
        )}
        
        {/* Botones de acción */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={onClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                playerId ? 'Actualizar' : 'Crear'
              )}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default PlayerForm; 