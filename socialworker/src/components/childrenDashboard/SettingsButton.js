import * as React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';

export default function SettingsButton(){
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer}>
        <SettingsIcon sx={{fontSize: 'max(2vw,100%)'}}/>
      </IconButton>
    </>
  );
}