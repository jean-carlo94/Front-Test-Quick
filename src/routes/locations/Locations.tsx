import { createRoute } from "@tanstack/react-router"
import { RootRoute } from "../_root"

import { Paper, styled } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

import { MapComponen } from "./components/MapComponen"
import { TablePoke } from "./components/TablePoke"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Locations = () => {

  return(
    <Paper elevation={3} sx={{ p: {md:5}, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Item>
            <TablePoke />
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
          <Item>
            <MapComponen />
          </Item>
        </Grid>
      </Grid>
    </Paper>
  )
}

export const LocationsRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: '/locations',
  component: Locations,
})
