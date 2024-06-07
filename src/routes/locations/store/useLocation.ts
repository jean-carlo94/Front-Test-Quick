import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { getRandomCoordinateInRadius, getRandomGeolocation, ILocation } from '../../../core';

interface State {
    //States
    location: ILocation | undefined;
    locations: ILocation[];
    isError: boolean
}

interface Actions {
    //Methods
    setLocations: (locations: ILocation[]) => void;
    setLocation: (location: ILocation | undefined) => void;
    reset: () => void;
}

const initialState: State = {
    location: undefined,
    locations: [],
    isError: false,
}

export const useLocation = create<State & Actions>()(
    persist(
        (set, get) => ({
            //States
            ...initialState,
        
            //Methods
            setLocations: (locations: ILocation[]) => {
                locations.forEach((location) => {
                    location.id = +location.url.split('/')[6];
                    location.coordinate = getRandomGeolocation();
                });
        
                set(() => ({ locations }));
            },
        
            setLocation: (location: ILocation | undefined) => {
                const locationArray = get().locations;
        
                if(location?.id){
                    location = {...location, ...locationArray.find((searchLocation) => searchLocation.id === location!.id)}
                }
        
                if(location?.pokemon_encounters){
                    location.pokemon_encounters.forEach((encounter) => 
                        encounter.coordinate = getRandomCoordinateInRadius(
                            location.coordinate?.latitude ?? 4.5066,
                            location.coordinate?.longitude ?? -74.1539,
                            10
                        )
                    );
                }
        
                set(() => ({ location }));
            },
        
            reset: () => {        
              set(initialState);
            },
            
        }),
        {
            name: 'INFO-QUICK',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);