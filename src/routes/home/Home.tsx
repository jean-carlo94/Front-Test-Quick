import { createRoute } from "@tanstack/react-router"
import { RootRoute } from "../_root"

import { Box, Button, Checkbox, FormControlLabel, FormGroup, Paper, TextField, Typography } from "@mui/material"

import QuickImage from '../../assets/quicklogo.png';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <Paper elevation={3} sx={{ p:5 }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          my: 5,
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: '100%', md:'25%' },
            height: { xs: '100%', md:'25%' },
            borderRadius: 20,
          }}
          alt="quick logo"
          src={QuickImage}
        />

        <Box
          sx={{
            mt: 5,
            width: {xs: '100%', md: 500},
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2.5
          }}
        >
          <Typography variant="h5">Iniciar Sesión</Typography>

          <TextField 
            fullWidth
            label="usuario"
          />

          <TextField 
            fullWidth
            label="contraseña"
          />

          <FormGroup
            sx={{ width: '100%' }}
          >
            <FormControlLabel control={<Checkbox />} label="Recordar usuario" />
          </FormGroup>

          <Button 
            fullWidth 
            variant="contained"
            onClick={() => loginWithRedirect()}
          >Ingresar</Button>
        </Box>
      </Box>
    </Paper>
  )
}

export const HomeRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: Home,
})