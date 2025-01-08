import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

export default function AddButton(){
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer}>
        <AddIcon sx={{fontSize: 'max(2vw,100%)'}}/>
      </IconButton>
    </>
  );
}