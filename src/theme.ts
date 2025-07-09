import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // Golden yellow
    },
    secondary: {
      main: '#FFA500', // Orange yellow
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 600,
    },
  },
});

export default theme;
