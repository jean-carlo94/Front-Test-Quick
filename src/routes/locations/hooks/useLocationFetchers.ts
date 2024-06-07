import { useQuery } from "@tanstack/react-query";

import PokeApi from "../../../core/api/PokeApi"

import { ILocation, IPagination } from "../../../core";

export const useLocationFetchers = {
  useFetchLocations: () => {
    return useQuery({
      queryKey: ['locations'],
      queryFn: async () => {
        const { data } = await PokeApi.get<IPagination<ILocation>>('/pal-park-area');
        return data
      },
      
    })
  },

  useFetchLocationById:({ id }:{ id:number }) => {        
    return useQuery({
      queryKey: ['locations', id],
      queryFn: async () => {
        if(!id || id === 0) return null;
        const { data } = await PokeApi.get<ILocation>(`/pal-park-area/${id}`);        
        return data;
      },
    })
  }
};