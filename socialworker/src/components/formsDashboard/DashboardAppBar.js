import { Box, AppBar, Toolbar, Typography} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const hounslowTheme = createTheme({
  palette: {
    primary: createColor('#642f6c'),
    secondary: createColor('#ffffff'),
  },
});

export default function DashboardAppBar({child_name}) {
  console.log(child_name)
  return (
    <ThemeProvider theme={hounslowTheme}>
      <Box>
        <AppBar position="relative" color='primary'>
          <Toolbar>
            <Box>
              <Typography sx={{ fontSize: '5vh' }}>
                Form dashboard for {child_name}
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}