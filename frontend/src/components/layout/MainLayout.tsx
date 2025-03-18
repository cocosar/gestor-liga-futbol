import React, { useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import Sidebar from './Sidebar';
import Footer from './Footer';

const drawerWidth = 240;

const MainLayout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppHeader drawerWidth={drawerWidth} onDrawerToggle={handleDrawerToggle} />
      
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar 
          drawerWidth={drawerWidth} 
          mobileOpen={mobileOpen}
          onDrawerClose={() => setMobileOpen(false)}
          isMobile={isMobile}
        />
        
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Box sx={{ marginTop: '64px' }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default MainLayout; 