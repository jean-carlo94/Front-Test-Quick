import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#FFC900',
        },
        secondary: {
          main: '#DDD402',
        },
        success: {
            main: '#38C57F',
        },
        error: {
          main: '#FF024E',
        },
        info: {
          main: '#2CCFD2',
        },
        warning: {
          main: '#ED8D00',
        },
      },
});