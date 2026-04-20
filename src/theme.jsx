import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Noto Serif", sans-serif`,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
  },
});
