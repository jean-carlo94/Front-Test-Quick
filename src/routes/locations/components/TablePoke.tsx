import { Box } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef, GridEventListener } from '@mui/x-data-grid';
import { useLocationsHook } from '../hooks/useLocationsHook';
import { useMemo } from 'react';
import QuickImage from '../../../assets/quicklogo.png'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'id', width: 20 },
  { field: 'name', headerName: 'Nombre', width: 120 },
  { field: 'location', headerName: 'Localización', width: 300 },
];

export const TablePoke = () => {

  const { locations, setId } = useLocationsHook(); 

  const rows:GridRowsProp = useMemo(() => locations.map((location) => ({
    id: location.id, 
    name: location.name,
    location: `${location.coordinate?.latitude} - ${location.coordinate?.longitude}`,
  })), [locations]);

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    setId(+params.row.id);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
      }}
    >
      <Box
        component="img"
        sx={{
          width: { xs: '50%', md:'25%' },
          height: { xs: '50%', md:'25%' },
          borderRadius: 20,
        }}
        alt="quick logo"
        src={QuickImage}
      />
      <Box sx={{ height: '485px', width: "100%", display: "grid" }}>
        <DataGrid 
          rows={rows} 
          columns={columns}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  )
}
