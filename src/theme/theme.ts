"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#1565C0",
          light: "#42A5F5",
          dark: "#0D47A1",
        },
        secondary: {
          main: "#00838F",
          light: "#4FB3BF",
          dark: "#006064",
        },
        background: {
          default: "#F8FAFC",
          paper: "#FFFFFF",
        },
        text: {
          primary: "#0F172A",
          secondary: "#475569",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#64B5F6",
          light: "#90CAF9",
          dark: "#42A5F5",
        },
        secondary: {
          main: "#4DD0E1",
          light: "#80DEEA",
          dark: "#26C6DA",
        },
        background: {
          default: "#0B1120",
          paper: "#111827",
        },
        text: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
