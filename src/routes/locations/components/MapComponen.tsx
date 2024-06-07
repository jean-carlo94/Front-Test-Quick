import { FC, useEffect, useMemo, useState } from "react";
import { LayersControl, MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
const { BaseLayer, Overlay } = LayersControl;

import { Box, Typography } from "@mui/material";

import { useLocationsHook } from "../hooks/useLocationsHook";

type MapCenterProps = {
  lat : number;
  lng : number;
  zoomLevel : number;
}

const MapRecenter:FC<MapCenterProps> = ({ lat, lng, zoomLevel }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo([lat, lng], zoomLevel );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lng]);

  return null;
};


export const MapComponen = () => {
  
  const { location } = useLocationsHook();

  const [zoom, setZoom] = useState(9);

  const position = useMemo(() => [
    location?.coordinate?.latitude ?? 4.5066,
    location?.coordinate?.longitude ?? -74.1539
  ], [location])

  useEffect(() => {
    setZoom(10);
  }, [position])
  
  return (
    <MapContainer 
      style={{ height: '650px', width: '100%' }}
      center={[position[0], position[1]]}
      zoom={zoom} 
      zoomAnimation={true}
      touchZoom={true}
      scrollWheelZoom={true}
    >
      <MapRecenter lat={position[0]} lng={position[1]} zoomLevel={zoom} />
      <LayersControl position="topright">
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>
        
        <BaseLayer name="OpenTopoMap">
          <TileLayer
            url= "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>
          {
            location?.pokemon_encounters.map((encounter) => (
              <Overlay 
                checked 
                key={encounter.pokemon_species.name}
                name={encounter.pokemon_species.name.toLowerCase()}
              >
                <Marker 
                  key={encounter.pokemon_species.name}
                  position={[encounter.coordinate!.latitude, encounter.coordinate!.longitude]}
                >
                  <Popup>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItem:"center"
                      }}
                    >
                      <Box 
                        component="img"
                        sx={{
                          width: 100,
                          height: 100,
                        }}
                        alt={`Imagen pokemon ${encounter.pokemon_species.name.toUpperCase()}`}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${encounter.pokemon_species.url.split('/')[6]}.png`}
                      />
                      <Typography variant="subtitle1">
                        { encounter.pokemon_species.name.toUpperCase() }
                      </Typography>
                    </Box>
                  </Popup>
                </Marker>
              </Overlay>
            ))
          }
      </LayersControl>
    </MapContainer>
  );
};
