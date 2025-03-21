import React, { useState } from 'react';
import { 
  Button, 
  Box, 
  Typography, 
  CircularProgress, 
  Alert, 
  Paper, 
  Snackbar,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import randomTeamService from '../../utils/randomTeamGenerator';
import { TeamResponse } from '../../types';

/**
 * Componente para generar equipos aleatorios para pruebas
 */
const RandomTeamsGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<TeamResponse[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  /**
   * Maneja la generación de equipos aleatorios
   */
  const handleGenerateTeams = async () => {
    setLoading(true);
    setError(null);
    setResults([]);
    
    try {
      const cantidad = 5; // Generamos 5 equipos como solicitó el usuario
      const resultados = await randomTeamService.crearEquiposAleatorios(cantidad);
      
      setResults(resultados);
      
      // Contamos cuántos equipos se crearon con éxito
      const exitosos = resultados.filter(r => r.success).length;
      setSuccess(`Se han creado ${exitosos} de ${cantidad} equipos con éxito.`);
      
    } catch (err) {
      setError('Error al generar equipos aleatorios. Comprueba la consola para más detalles.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Generador de Equipos Aleatorios
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Esta herramienta genera 5 equipos con datos aleatorios para pruebas.
        </Typography>
        
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleGenerateTeams}
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? (
            <>
              <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
              Generando...
            </>
          ) : 'Generar 5 Equipos Aleatorios'}
        </Button>
      </Box>
      
      {results.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          
          <Typography variant="subtitle1" gutterBottom>
            Resultados:
          </Typography>
          
          <List dense>
            {results.map((result, index) => (
              <ListItem key={index} sx={{ 
                bgcolor: result.success ? 'success.light' : 'error.light',
                borderRadius: 1,
                mb: 1
              }}>
                <ListItemText
                  primary={result.success 
                    ? `✅ Equipo creado: ${result.equipo?.nombre}` 
                    : `❌ Error: ${result.message}`}
                  secondary={result.success 
                    ? `ID: ${result.equipo?._id} | Categoría: ${result.equipo?.categoria} | Tipo: ${result.equipo?.tipo}` 
                    : null}
                />
              </ListItem>
            ))}
          </List>
        </>
      )}
      
      {/* Notificaciones */}
      <Snackbar 
        open={!!error} 
        autoHideDuration={6000} 
        onClose={() => setError(null)}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
      
      <Snackbar
        open={!!success}
        autoHideDuration={6000}
        onClose={() => setSuccess(null)}
      >
        <Alert severity="success" onClose={() => setSuccess(null)}>
          {success}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default RandomTeamsGenerator; 