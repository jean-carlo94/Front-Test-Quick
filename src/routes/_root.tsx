import { createRootRoute } from '@tanstack/react-router'
import { ThemeProvider } from '@mui/material'

import { Layout, lightTheme } from '../core'

export const RootRoute = createRootRoute({
  component: () => (
    <ThemeProvider theme={lightTheme}>
      <Layout />
    </ThemeProvider>
  ),
})