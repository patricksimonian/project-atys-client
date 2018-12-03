import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#635973',
      main: '#3d3051',
      dark: '#2a2138',
      contrastText: '#fff',
    },
    secondary: {
      light: '#454992',
      main: '#6369d1',
      dark: '#8287da',
      contrastText: '#fff',
    },
  },
});

export default theme;
