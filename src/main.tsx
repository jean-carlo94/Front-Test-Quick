import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { RootRoute } from './routes/_root';
import { HomeRoute } from './routes/home/Home';
import { LocationsRoute } from './routes/locations/Locations';

const queryClient = new QueryClient();

const routeTree = RootRoute.addChildren([
  HomeRoute,
  LocationsRoute
])

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="{yourDomain}"
      clientId="{yourClientId}"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
