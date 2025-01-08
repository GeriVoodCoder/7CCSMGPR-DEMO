import * as React from 'react';
// add some icon here
import { IconButton, Typography } from '@mui/material';

export default function NewButton(){
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer}>
        <Typography>
          New
        </Typography>
      </IconButton>
    </>
  );
}