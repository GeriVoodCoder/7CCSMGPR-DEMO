import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

export default function DeleteButton(){
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer}>
        <DeleteIcon sx={{fontSize: 'max(2vw,100%)'}}/>
      </IconButton>
    </>
  );
}