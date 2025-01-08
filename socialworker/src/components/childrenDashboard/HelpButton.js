import * as React from 'react';
import HelpDescription from "./HelpDescription";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { IconButton, Drawer } from '@mui/material';

export default function HelpButton(){
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer}>
        <QuestionMarkIcon sx={{fontSize: 'max(2vw,100%)'}}/>
      </IconButton>

      <Drawer anchor="bottom" open={open} onClick={toggleDrawer}>
        <HelpDescription/>
      </Drawer>
    </>
  );
}