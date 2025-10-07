import { alpha, createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

const brand = {
  light: "hsla(219, 98%, 63%, 1.00)",
  main: "hsla(212, 94%, 81%, 1.00)",
  dark: "hsla(219, 86%, 42%, 1.00)",
  contrastText: "hsla(0, 0%, 0%, 1.00)",
};

const gray = {
  100: "hsl(220, 30%, 94%)",
  300: "hsl(220, 20%, 80%)",
  700: "hsl(220, 20%, 25%)",
  800: "hsl(220, 20%, 15%)",
  900: "hsl(220, 35%, 3%)",
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      ...brand,
    },
    success: {
      main: green[200],
    },
    error: {
      main: red[900],
    },

    background: {
      default: gray[900],
      paper: "hsla(218, 50%, 3%, 1.00)",
    },
    divider: alpha(gray[700], 0.6),
    text: {
      primary: gray[100],
      secondary: gray[300],
      disabled: gray[700],
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: ".9rem",
    },
    body2: {
      fontSize: ".8rem",
    },
    caption: {
      fontSize: ".7rem",
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});
