import { ThemeProvider, createTheme } from '@mui/material';
import HomePage from './pages/HomePage'

function App() {

  const materialTheme = createTheme({
  palette: {
    primary: {
      light: '#4ab1ba',
      main: '#57cbd3',
      dark: '#449ca1',
      contrastText: '#356462',
    },
  },
});

  return (
    <>
    <ThemeProvider theme={materialTheme}>
      <HomePage />
    </ThemeProvider>
    </>
  )
}

export default App
