import { useEffect, useState } from "react";
import { useLocation } from "../store/useLocation";
import { useLocationFetchers } from "./useLocationFetchers";

export const useLocationsHook = () => {

  const [id, setId] = useState(0);

  const { data, isFetched, isError } = useLocationFetchers.useFetchLocations();
  const { data: getLocation } = useLocationFetchers.useFetchLocationById({ id });

  const locations = useLocation((state) => state.locations );
  const setLocations = useLocation((state) => state.setLocations );

  const location = useLocation((state) => state.location );
  const setLocation = useLocation((state) => state.setLocation );

  useEffect(() => {
    if(!data) return;
    setLocations(data.results);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    if(!getLocation) return;    
    setLocation(getLocation);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getLocation])
      
  return {
    locations,
    location,
    isFetched,
    isError,
    setId,
  }
}
