import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useState } from 'react';
import { UserMenu } from './UserMenu';
import { Copyright } from './Copyright';

const drawerWidth = 150;

export function Template({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography sx={{ my: 2 }}>
        <LibraryBooksIcon />
      </Typography>
      <Divider />
      <UserMenu type="mobile" />
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ display: { sm: 'none' } }}>Phonebook</Typography>
          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                sm: 'flex',
                gap: 10,
                alignItems: 'center',
              },
            }}
          >
            <LibraryBooksIcon />
            <Typography>Phonebook</Typography>
          </Typography>
          <UserMenu type="desktop" />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'column' }}>
        <Toolbar />
        {children}
      </Box>
      <Copyright />
    </Box>
  );
}
