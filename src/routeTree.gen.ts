/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RootImport } from './routes/_root'
import { Route as LocationsLocationsImport } from './routes/locations/Locations'
import { Route as HomeHomeImport } from './routes/home/Home'
import { Route as LocationsStoreUseLocationImport } from './routes/locations/store/useLocation'
import { Route as LocationsHooksUseLocationsHookImport } from './routes/locations/hooks/useLocationsHook'
import { Route as LocationsHooksUseLocationFetchersImport } from './routes/locations/hooks/useLocationFetchers'
import { Route as LocationsComponentsTablePokeImport } from './routes/locations/components/TablePoke'
import { Route as LocationsComponentsMapComponenImport } from './routes/locations/components/MapComponen'

// Create/Update Routes

const RootRoute = RootImport.update({
  id: '/_root',
  getParentRoute: () => rootRoute,
} as any)

const LocationsLocationsRoute = LocationsLocationsImport.update({
  path: '/locations/Locations',
  getParentRoute: () => rootRoute,
} as any)

const HomeHomeRoute = HomeHomeImport.update({
  path: '/home/Home',
  getParentRoute: () => rootRoute,
} as any)

const LocationsStoreUseLocationRoute = LocationsStoreUseLocationImport.update({
  path: '/locations/store/useLocation',
  getParentRoute: () => rootRoute,
} as any)

const LocationsHooksUseLocationsHookRoute =
  LocationsHooksUseLocationsHookImport.update({
    path: '/locations/hooks/useLocationsHook',
    getParentRoute: () => rootRoute,
  } as any)

const LocationsHooksUseLocationFetchersRoute =
  LocationsHooksUseLocationFetchersImport.update({
    path: '/locations/hooks/useLocationFetchers',
    getParentRoute: () => rootRoute,
  } as any)

const LocationsComponentsTablePokeRoute =
  LocationsComponentsTablePokeImport.update({
    path: '/locations/components/TablePoke',
    getParentRoute: () => rootRoute,
  } as any)

const LocationsComponentsMapComponenRoute =
  LocationsComponentsMapComponenImport.update({
    path: '/locations/components/MapComponen',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_root': {
      id: '/_root'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof RootImport
      parentRoute: typeof rootRoute
    }
    '/home/Home': {
      id: '/home/Home'
      path: '/home/Home'
      fullPath: '/home/Home'
      preLoaderRoute: typeof HomeHomeImport
      parentRoute: typeof rootRoute
    }
    '/locations/Locations': {
      id: '/locations/Locations'
      path: '/locations/Locations'
      fullPath: '/locations/Locations'
      preLoaderRoute: typeof LocationsLocationsImport
      parentRoute: typeof rootRoute
    }
    '/locations/components/MapComponen': {
      id: '/locations/components/MapComponen'
      path: '/locations/components/MapComponen'
      fullPath: '/locations/components/MapComponen'
      preLoaderRoute: typeof LocationsComponentsMapComponenImport
      parentRoute: typeof rootRoute
    }
    '/locations/components/TablePoke': {
      id: '/locations/components/TablePoke'
      path: '/locations/components/TablePoke'
      fullPath: '/locations/components/TablePoke'
      preLoaderRoute: typeof LocationsComponentsTablePokeImport
      parentRoute: typeof rootRoute
    }
    '/locations/hooks/useLocationFetchers': {
      id: '/locations/hooks/useLocationFetchers'
      path: '/locations/hooks/useLocationFetchers'
      fullPath: '/locations/hooks/useLocationFetchers'
      preLoaderRoute: typeof LocationsHooksUseLocationFetchersImport
      parentRoute: typeof rootRoute
    }
    '/locations/hooks/useLocationsHook': {
      id: '/locations/hooks/useLocationsHook'
      path: '/locations/hooks/useLocationsHook'
      fullPath: '/locations/hooks/useLocationsHook'
      preLoaderRoute: typeof LocationsHooksUseLocationsHookImport
      parentRoute: typeof rootRoute
    }
    '/locations/store/useLocation': {
      id: '/locations/store/useLocation'
      path: '/locations/store/useLocation'
      fullPath: '/locations/store/useLocation'
      preLoaderRoute: typeof LocationsStoreUseLocationImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  HomeHomeRoute,
  LocationsLocationsRoute,
  LocationsComponentsMapComponenRoute,
  LocationsComponentsTablePokeRoute,
  LocationsHooksUseLocationFetchersRoute,
  LocationsHooksUseLocationsHookRoute,
  LocationsStoreUseLocationRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "children": [
        "/_root",
        "/home/Home",
        "/locations/Locations",
        "/locations/components/MapComponen",
        "/locations/components/TablePoke",
        "/locations/hooks/useLocationFetchers",
        "/locations/hooks/useLocationsHook",
        "/locations/store/useLocation"
      ]
    },
    "/_root": {
      "filePath": "_root.tsx"
    },
    "/home/Home": {
      "filePath": "home/Home.tsx"
    },
    "/locations/Locations": {
      "filePath": "locations/Locations.tsx"
    },
    "/locations/components/MapComponen": {
      "filePath": "locations/components/MapComponen.tsx"
    },
    "/locations/components/TablePoke": {
      "filePath": "locations/components/TablePoke.tsx"
    },
    "/locations/hooks/useLocationFetchers": {
      "filePath": "locations/hooks/useLocationFetchers.ts"
    },
    "/locations/hooks/useLocationsHook": {
      "filePath": "locations/hooks/useLocationsHook.tsx"
    },
    "/locations/store/useLocation": {
      "filePath": "locations/store/useLocation.ts"
    }
  }
}
ROUTE_MANIFEST_END */