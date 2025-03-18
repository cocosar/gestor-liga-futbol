import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Paper, 
  Typography,
  Card,
  CardContent
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link as RouterLink } from 'react-router-dom';

const features = [
  {
    icon: <SportsSoccerIcon sx={{ fontSize: 40 }} />,
    title: 'Gestión de Equipos',
    description: 'Administra todos los equipos de tu liga, incluyendo jugadores, técnicos y estadísticas.'
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />,
    title: 'Calendario de Partidos',
    description: 'Organiza fácilmente el calendario de partidos, con recordatorios y notificaciones automáticas.'
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40 }} />,
    title: 'Gestión de Jugadores',
    description: 'Administra los perfiles de jugadores, ficha técnica, estadísticas y más.'
  }
];

const Home: React.FC = () => {
  return (
    <Box sx={{ py: 4 }}>
      {/* Hero Section */}
      <Paper 
        elevation={0}
        sx={{ 
          py: 8, 
          px: 4, 
          mb: 4, 
          bgcolor: 'primary.main', 
          color: 'white',
          borderRadius: 2
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" gutterBottom>
                Sistema de Gestión de Ligas de Fútbol 8v8
              </Typography>
              <Typography variant="h6" paragraph>
                Una plataforma completa para administrar ligas de fútbol 8v8 con todas las herramientas que necesitas.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  color="secondary"
                  component={RouterLink}
                  to="/register"
                  sx={{ mr: 2 }}
                >
                  Comenzar Ahora
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={{ color: 'white', borderColor: 'white' }}
                  component={RouterLink}
                  to="/login"
                >
                  Iniciar Sesión
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
              <SportsSoccerIcon sx={{ fontSize: 180, opacity: 0.8 }} />
            </Grid>
          </Grid>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Características Principales
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 