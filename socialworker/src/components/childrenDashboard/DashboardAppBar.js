import Title from './Title';
import SearchBar from './SearchBar';
import AddButton from './AddButton';
import DeleteButton from './DeleteButton';
import HelpButton from './HelpButton';
import SettingsButton from './SettingsButton';

import { Box, AppBar, Toolbar} from '@mui/material';

export default function DashboardAppBar() {
  return (
    <Box>
      <AppBar position="relative" color='primary'>
        <Toolbar>
          <Box sx={{ width: '25vw', marginRight: '5vw'}}>
            <Title/>
          </Box>
          <Box sx={{width: '50vw', marginRight: '5vw'}}>
            <SearchBar/>
          </Box>
          <Box sx={{ width: '30vw', display: 'flex', justifyContent: 'end' }}>
            <AddButton/>
            <DeleteButton />
            <HelpButton />
            <SettingsButton />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}