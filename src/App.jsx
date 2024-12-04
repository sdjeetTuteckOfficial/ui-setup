import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import PublicRoutes from './routes/public-routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PublicRoutes />
    </ThemeProvider>
  );
}

export default App;
