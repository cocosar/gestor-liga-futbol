import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar 
} from '@mui/material';
import {
  SportsSoccer as SoccerIcon,
  People as PeopleIcon,
  CalendarToday as CalendarIcon,
  Notifications as NotificationsIcon
} from '@mui/icons-material';

// Datos de ejemplo para el dashboard
const statsData = [
  { title: 'Equipos', value: 8, icon: <PeopleIcon sx={{ fontSize: 40 }} />, color: '#1976d2' },
  { title: 'Jugadores', value: 125, icon: <SoccerIcon sx={{ fontSize: 40 }} />, color: '#2e7d32' },
  { title: 'Partidos', value: 24, icon: <CalendarIcon sx={{ fontSize: 40 }} />, color: '#ed6c02' },
  { title: 'Notificaciones', value: 5, icon: <NotificationsIcon sx={{ fontSize: 40 }} />, color: '#9c27b0' }
];

const upcomingMatches = [
  { id: 1, team1: 'Rapid FC', team2: 'Atlético Gol', date: '2025-04-01 16:00', location: 'Campo Principal' },
  { id: 2, team1: 'Deportivo Águilas', team2: 'Real Club', date: '2025-04-03 18:30', location: 'Campo Secundario' },
  { id: 3, team1: 'Nueva Era FC', team2: 'Atlético Campeón', date: '2025-04-05 10:00', location: 'Campo Principal' }
];

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom component="h1">
          Dashboard
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          Bienvenido al panel de control de tu liga de fútbol 8v8
        </Typography>
        
        {/* Estadísticas rápidas */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {statsData.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: 140,
                  boxShadow: 3,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -15,
                    right: -15,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: stat.color,
                    opacity: 0.2,
                    zIndex: 0
                  }}
                />
                <Typography variant="h6" component="h2" gutterBottom sx={{ zIndex: 1 }}>
                  {stat.title}
                </Typography>
                <Box sx={{ color: stat.color, mb: 1, mt: 1, zIndex: 1 }}>
                  {stat.icon}
                </Box>
                <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', zIndex: 1 }}>
                  {stat.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        <Grid container spacing={3}>
          {/* Próximos partidos */}
          <Grid item xs={12} md={7}>
            <Card sx={{ height: '100%' }}>
              <CardHeader title="Próximos Partidos" />
              <Divider />
              <CardContent>
                <List>
                  {upcomingMatches.map((match) => (
                    <React.Fragment key={match.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: '#1976d2' }}>
                            <SoccerIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={`${match.team1} vs ${match.team2}`}
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {new Date(match.date).toLocaleString('es-ES', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </Typography>
                              <Typography component="span" variant="body2">
                                {match.location}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Tabla de posiciones resumida */}
          <Grid item xs={12} md={5}>
            <Card sx={{ height: '100%' }}>
              <CardHeader title="Tabla de Posiciones" />
              <Divider />
              <CardContent>
                <Box sx={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                        <th style={{ padding: '16px 8px', textAlign: 'left' }}>Pos</th>
                        <th style={{ padding: '16px 8px', textAlign: 'left' }}>Equipo</th>
                        <th style={{ padding: '16px 8px', textAlign: 'center' }}>PJ</th>
                        <th style={{ padding: '16px 8px', textAlign: 'center' }}>G</th>
                        <th style={{ padding: '16px 8px', textAlign: 'center' }}>E</th>
                        <th style={{ padding: '16px 8px', textAlign: 'center' }}>P</th>
                        <th style={{ padding: '16px 8px', textAlign: 'center' }}>Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                        <td style={{ padding: '16px 8px' }}>1</td>
                        <td style={{ padding: '16px 8px' }}>Rapid FC</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>8</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>6</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center', fontWeight: 'bold' }}>19</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                        <td style={{ padding: '16px 8px' }}>2</td>
                        <td style={{ padding: '16px 8px' }}>Atlético Campeón</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>8</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>5</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>2</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center', fontWeight: 'bold' }}>17</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                        <td style={{ padding: '16px 8px' }}>3</td>
                        <td style={{ padding: '16px 8px' }}>Deportivo Águilas</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>8</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>4</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>3</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center', fontWeight: 'bold' }}>15</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}>
                        <td style={{ padding: '16px 8px' }}>4</td>
                        <td style={{ padding: '16px 8px' }}>Real Club</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>8</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>4</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>1</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center' }}>3</td>
                        <td style={{ padding: '16px 8px', textAlign: 'center', fontWeight: 'bold' }}>13</td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard; 