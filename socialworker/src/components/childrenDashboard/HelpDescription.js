import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function HelpDescription(){
  return (
    <Paper sx={{ textAlign: 'center', height: '90vh', pl: '100px', pr: '100px'}}>
      <Typography sx={{ fontSize: 35 }} color="primary" gutterBottom>
        How to use this web app?
      </Typography>
      <Typography sx={{ fontSize: 28, mb: 2 }} >
        Click on a field with child to access application forms associated, you can also add or remove children
      </Typography>
      <Typography sx={{ fontSize: 20, mb: 2 }} color="grey">
        click anywhere to close
      </Typography>
    </Paper>
  );
}