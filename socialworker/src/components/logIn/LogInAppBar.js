import { Box, AppBar, Toolbar, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// rgb(100, 47, 108) #642f6c  Main purple
// rgb(215, 7, 135) #d70787  Pink

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const hounslowTheme = createTheme({
  palette: {
    primary: createColor('#642f6c'),
    secondary: createColor('#ffffff'),
  },
});

export default function LogInAppBar() {
  return (
    <ThemeProvider theme={hounslowTheme}>
      <Box>
        <AppBar position="relative" color='primary'>
          <Toolbar>
            <Box>
              <Typography sx={{ fontSize: '5vh' }}>
                London Borough of Hounslow
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}