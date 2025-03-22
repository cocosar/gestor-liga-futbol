import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Grid,
  Avatar,
  Divider,
  Alert,
  Tab,
  Tabs,
  LinearProgress
} from '@mui/material';
import { Person, Edit, Save, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { UpdateProfileData, ChangePasswordData } from '../types';

// Componente TabPanel para pestañas
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

// Función para crear props de accesibilidad para tabs
const a11yProps = (index: number) => {
  return {
    id: `profile-tab-${index}`,
    'aria-controls': `profile-tabpanel-${index}`,
  };
};

// Función para calcular la fortaleza de la contraseña
const calculatePasswordStrength = (password: string): number => {
  if (!password) return 0;
  
  let strength = 0;
  
  // Longitud mínima
  if (password.length >= 8) strength += 25;
  
  // Contiene números
  if (/\d/.test(password)) strength += 25;
  
  // Contiene letras minúsculas y mayúsculas
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
  
  // Contiene caracteres especiales
  if (/[^a-zA-Z0-9]/.test(password)) strength += 25;
  
  return strength;
};

// Componente de Perfil de Usuario
const UserProfile: React.FC = () => {
  const { user, loading, error, updateProfile, changePassword } = useAuth();
  const navigate = useNavigate();
  
  // Estado para las pestañas
  const [tabValue, setTabValue] = useState(0);
  
  // Estados para el formulario de perfil
  const [profileForm, setProfileForm] = useState<UpdateProfileData>({
    nombre: '',
    apellido: '',
    email: ''
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState(false);
  
  // Estados para el formulario de contraseña
  const [passwordForm, setPasswordForm] = useState<ChangePasswordData>({
    currentPassword: '',
    newPassword: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  
  // Calcular fortaleza de la contraseña
  const passwordStrength = calculatePasswordStrength(passwordForm.newPassword);
  
  // Efecto para cargar datos del usuario
  useEffect(() => {
    if (user) {
      setProfileForm({
        nombre: user.nombre || '',
        apellido: user.apellido || '',
        email: user.email || ''
      });
    }
  }, [user]);
  
  // Manejadores para cambios en las pestañas
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    
    // Resetear mensajes de éxito al cambiar de pestaña
    setProfileSuccess(false);
    setPasswordSuccess(false);
    setPasswordError('');
  };
  
  // Manejadores para el formulario de perfil
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
    
    // Limpiar mensaje de éxito al editar
    if (profileSuccess) setProfileSuccess(false);
  };
  
  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };
  
  const handleSaveProfile = async () => {
    try {
      await updateProfile(profileForm);
      setIsEditingProfile(false);
      setProfileSuccess(true);
    } catch (err) {
      console.error('Error al actualizar perfil:', err);
    }
  };
  
  const handleCancelEdit = () => {
    // Restaurar valores originales
    if (user) {
      setProfileForm({
        nombre: user.nombre || '',
        apellido: user.apellido || '',
        email: user.email || ''
      });
    }
    setIsEditingProfile(false);
    setProfileSuccess(false);
  };
  
  // Manejadores para el formulario de contraseña
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
      
      // Validar que las contraseñas coincidan
      if (passwordForm.newPassword !== value) {
        setPasswordError('Las contraseñas no coinciden');
      } else {
        setPasswordError('');
      }
    } else {
      setPasswordForm(prev => ({ ...prev, [name]: value }));
      
      // Si se está cambiando la nueva contraseña, verificar que coincida con la confirmación
      if (name === 'newPassword' && confirmPassword) {
        if (value !== confirmPassword) {
          setPasswordError('Las contraseñas no coinciden');
        } else {
          setPasswordError('');
        }
      }
    }
    
    // Limpiar mensaje de éxito al editar
    if (passwordSuccess) setPasswordSuccess(false);
  };
  
  const handleChangePassword = async () => {
    // Validar que las contraseñas coincidan
    if (passwordForm.newPassword !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      return;
    }
    
    // Validar fortaleza mínima de la contraseña
    if (passwordStrength < 50) {
      setPasswordError('La contraseña es demasiado débil');
      return;
    }
    
    try {
      await changePassword(passwordForm);
      setPasswordSuccess(true);
      setPasswordError('');
      
      // Limpiar el formulario
      setPasswordForm({
        currentPassword: '',
        newPassword: ''
      });
      setConfirmPassword('');
    } catch (err) {
      console.error('Error al cambiar contraseña:', err);
    }
  };
  
  // Si no hay usuario autenticado, redirigir al login
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);
  
  if (loading) {
    return (
      <Container maxWidth="md">
        <Box my={4} textAlign="center">
          <LinearProgress />
          <Typography variant="h6" mt={2}>Cargando perfil...</Typography>
        </Box>
      </Container>
    );
  }
  
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mr: 2 }}>
            <Person fontSize="large" />
          </Avatar>
          <Typography variant="h4">Perfil de Usuario</Typography>
        </Box>
        
        <Divider sx={{ mb: 3 }} />
        
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="Pestañas de perfil">
            <Tab label="Información Personal" {...a11yProps(0)} />
            <Tab label="Cambiar Contraseña" {...a11yProps(1)} />
          </Tabs>
        </Box>
        
        {/* Pestaña de Información Personal */}
        <TabPanel value={tabValue} index={0}>
          {profileSuccess && (
            <Alert severity="success" sx={{ mb: 3 }}>
              Perfil actualizado correctamente
            </Alert>
          )}
          
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                value={profileForm.nombre}
                onChange={handleProfileChange}
                disabled={!isEditingProfile}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Apellido"
                name="apellido"
                value={profileForm.apellido}
                onChange={handleProfileChange}
                disabled={!isEditingProfile}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={profileForm.email}
                onChange={handleProfileChange}
                disabled={!isEditingProfile}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                {!isEditingProfile ? (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Edit />}
                    onClick={handleEditProfile}
                  >
                    Editar Perfil
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handleCancelEdit}
                      sx={{ mr: 2 }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<Save />}
                      onClick={handleSaveProfile}
                    >
                      Guardar Cambios
                    </Button>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        
        {/* Pestaña de Cambio de Contraseña */}
        <TabPanel value={tabValue} index={1}>
          {passwordSuccess && (
            <Alert severity="success" sx={{ mb: 3 }}>
              Contraseña actualizada correctamente
            </Alert>
          )}
          
          {passwordError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {passwordError}
            </Alert>
          )}
          
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contraseña Actual"
                name="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                value={passwordForm.currentPassword}
                onChange={handlePasswordChange}
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <Button
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      sx={{ minWidth: 'auto', p: 0.5 }}
                    >
                      {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nueva Contraseña"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={passwordForm.newPassword}
                onChange={handlePasswordChange}
                margin="normal"
                helperText="La contraseña debe tener al menos 6 caracteres"
                InputProps={{
                  endAdornment: (
                    <Button
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      sx={{ minWidth: 'auto', p: 0.5 }}
                    >
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  )
                }}
              />
              
              {/* Indicador de fortaleza de contraseña */}
              {passwordForm.newPassword && (
                <Box sx={{ width: '100%', mt: 1 }}>
                  <LinearProgress 
                    variant="determinate" 
                    value={passwordStrength} 
                    color={
                      passwordStrength < 25 ? "error" : 
                      passwordStrength < 50 ? "warning" : 
                      passwordStrength < 75 ? "info" : "success"
                    }
                  />
                  <Box display="flex" justifyContent="space-between" mt={0.5}>
                    <Typography variant="caption">Débil</Typography>
                    <Typography variant="caption" 
                      color={
                        passwordStrength < 25 ? "error" : 
                        passwordStrength < 50 ? "warning.main" : 
                        passwordStrength < 75 ? "info.main" : "success.main"
                      }
                    >
                      {
                        passwordStrength < 25 ? "Muy débil" : 
                        passwordStrength < 50 ? "Débil" : 
                        passwordStrength < 75 ? "Media" : "Fuerte"
                      }
                    </Typography>
                    <Typography variant="caption">Fuerte</Typography>
                  </Box>
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirmar Contraseña"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={handlePasswordChange}
                margin="normal"
                error={!!passwordError && passwordError.includes('coinciden')}
                helperText={passwordError && passwordError.includes('coinciden') ? passwordError : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Lock />}
                  onClick={handleChangePassword}
                  disabled={
                    !passwordForm.currentPassword || 
                    !passwordForm.newPassword || 
                    !confirmPassword ||
                    passwordForm.newPassword !== confirmPassword ||
                    passwordStrength < 50
                  }
                >
                  Cambiar Contraseña
                </Button>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default UserProfile; 