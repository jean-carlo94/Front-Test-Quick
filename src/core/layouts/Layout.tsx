import { useState } from 'react';
import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Box, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';

import { ChevronLeftOutlined, ChevronRightOutlined, MenuOutlined } from '@mui/icons-material';
import { MenuItems } from '../constants';
import QuickImage from '../../assets/quicklogo.png';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export const Layout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuOutlined />
            </IconButton>
            <Typography 
              variant="h6" 
              noWrap 
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box
                component="img"
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 20,
                }}
                alt="quick logo"
                src={QuickImage}
              />
               Quick Test Front Poke
            </Typography>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftOutlined /> : <ChevronRightOutlined />}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <List>
              {
                  MenuItems.map((item) => (
                      <ListItem key={item.id} disablePadding>
                        <Link to={item.route} style={{ color: 'inherit', textDecoration: 'inherit', width:'100%' }}>
                          <ListItemButton
                            onClick={() => setOpen(false)}
                          >
                            <ListItemIcon>
                                { item.icon }
                            </ListItemIcon>
                            <ListItemText primary={item.label} sx={{ opacity: open ? 1 : 0 }} />
                          </ListItemButton>
                        </Link>
                      </ListItem>
                  ))
              }
          </List>

            <Divider />
        </Drawer>

        <Main 
          open={open} 
          sx={{ 
            flexGrow: 1, 
            p: 3,
            display: { xs: open ? 'none' : 'block', md: 'block'},
          }}
        >
            <DrawerHeader />
            <Container 
              fixed
            >
              <Outlet />
              <TanStackRouterDevtools />
            </Container>
        </Main>
    </Box>
    );
}
