import React from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useAuth } from '../../hooks/useAuth';

interface SidebarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  onDrawerClose: () => void;
  isMobile: boolean;
}

interface MenuItem {
  text: string;
  path: string;
  icon: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  drawerWidth, 
  mobileOpen, 
  onDrawerClose,
  isMobile
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { hasRole } = useAuth();

  // Menú items dinámicos según rol
  const getMenuItems = (): MenuItem[] => {
    const items: MenuItem[] = [
      { text: 'Inicio', path: '/', icon: <HomeIcon /> },
      { text: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
    ];

    // Menú de administración solo para administradores
    if (hasRole('admin')) {
      items.push(
        { text: 'Usuarios', path: '/users', icon: <SupervisorAccountIcon /> }
      );
    }

    // Opciones de gestión deportiva
    items.push(
      { text: 'Equipos', path: '/teams', icon: <GroupsIcon /> },
      { text: 'Jugadores', path: '/players', icon: <PeopleIcon /> },
      { text: 'Partidos', path: '/matches', icon: <CalendarMonthIcon /> },
      { text: 'Tabla de Posiciones', path: '/standings', icon: <EmojiEventsIcon /> }
    );

    return items;
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    if (isMobile) {
      onDrawerClose();
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Menú
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {getMenuItems().map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton 
              selected={location.pathname === item.path}
              onClick={() => handleNavigate(item.path)}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar; 