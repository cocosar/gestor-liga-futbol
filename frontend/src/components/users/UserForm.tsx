import React, { useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  CircularProgress,
  Switch,
  FormControlLabel,
  Divider,
  Paper
} from '@mui/material';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useUsers } from '../../hooks/useUsers';
import { UserFormData } from '../../types';

interface UserFormProps {
  userId?: string;
  onCancel: () => void;
}

// Esquema de validación
const validationSchema = Yup.object({
  nombre: Yup.string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no debe exceder los 50 caracteres'),
  apellido: Yup.string()
    .required('El apellido es obligatorio')
    .min(2, 'El apellido debe tener al menos 2 caracteres')
    .max(50, 'El apellido no debe exceder los 50 caracteres'),
  email: Yup.string()
    .required('El email es obligatorio')
    .email('Email inválido'),
  password: Yup.string()
    .when('_id', {
      is: (val: string) => !val, // Solo requerido si no hay ID (es creación)
      then: (schema) => schema
        .required('La contraseña es obligatoria')
        .min(6, 'La contraseña debe tener al menos 6 caracteres'),
      otherwise: (schema) => schema
        .nullable()
        .transform((value) => value || undefined) // Transformar cadena vacía a undefined
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
    }),
  rol: Yup.string()
    .required('El rol es obligatorio')
    .oneOf(['admin', 'veedor', 'entrenador', 'usuario'], 'Rol inválido'),
  activo: Yup.boolean()
});

const UserForm: React.FC<UserFormProps> = ({ userId, onCancel }) => {
  const { selectedUser, loading, error, fetchUserById, createUser, updateUser } = useUsers();

  useEffect(() => {
    if (userId) {
      fetchUserById(userId);
    }
  }, [userId, fetchUserById]);

  // Valores iniciales para el formulario
  const initialValues: UserFormData & { _id?: string } = userId && selectedUser
    ? {
        _id: selectedUser._id,
        nombre: selectedUser.nombre,
        apellido: selectedUser.apellido,
        email: selectedUser.email,
        password: '', // Vacío para edición
        rol: selectedUser.rol,
        activo: selectedUser.activo
      }
    : {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        rol: 'usuario',
        activo: true
      };

  // Manejar envío del formulario
  const handleSubmit = async (
    values: UserFormData & { _id?: string },
    { setSubmitting, resetForm }: FormikHelpers<UserFormData & { _id?: string }>
  ) => {
    try {
      // Si password está vacío en modo edición, eliminarlo para no enviarlo
      if (values._id && !values.password) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...userData } = values;
        await updateUser(values._id, userData);
      } else if (values._id) {
        await updateUser(values._id, values);
      } else {
        await createUser(values);
        resetForm();
      }
      
      onCancel(); // Cerrar formulario después de guardar exitosamente
    } catch (err) {
      console.error('Error al guardar usuario:', err);
    } finally {
      setSubmitting(false);
    }
  };

  // Mostrar spinner mientras se carga el usuario para edición
  if (userId && loading) {
    return (
      <Box display="flex" justifyContent="center" p={3}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box component={Paper} sx={{ p: 3, mt: 2, maxWidth: '100%' }}>
      {error && (
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, touched, errors, handleChange, isSubmitting }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="nombre"
                  name="nombre"
                  label="Nombre"
                  value={values.nombre}
                  onChange={handleChange}
                  error={touched.nombre && Boolean(errors.nombre)}
                  helperText={touched.nombre && errors.nombre}
                  disabled={isSubmitting}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="apellido"
                  name="apellido"
                  label="Apellido"
                  value={values.apellido}
                  onChange={handleChange}
                  error={touched.apellido && Boolean(errors.apellido)}
                  helperText={touched.apellido && errors.apellido}
                  disabled={isSubmitting}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  disabled={isSubmitting}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label={userId ? "Contraseña (Dejar vacío para no cambiar)" : "Contraseña"}
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  disabled={isSubmitting}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl 
                  fullWidth
                  error={touched.rol && Boolean(errors.rol)}
                >
                  <InputLabel id="rol-label">Rol</InputLabel>
                  <Select
                    labelId="rol-label"
                    id="rol"
                    name="rol"
                    value={values.rol}
                    label="Rol"
                    onChange={handleChange}
                    disabled={isSubmitting}
                  >
                    <MenuItem value="admin">Administrador</MenuItem>
                    <MenuItem value="veedor">Veedor</MenuItem>
                    <MenuItem value="entrenador">Entrenador</MenuItem>
                    <MenuItem value="usuario">Usuario</MenuItem>
                  </Select>
                  {touched.rol && errors.rol && (
                    <FormHelperText>{errors.rol as string}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      id="activo"
                      name="activo"
                      checked={values.activo}
                      onChange={handleChange}
                      disabled={isSubmitting}
                    />
                  }
                  label="Usuario activo"
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button
                variant="outlined"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
              >
                {userId ? 'Actualizar' : 'Crear'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UserForm; 