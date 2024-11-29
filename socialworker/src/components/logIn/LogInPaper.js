import LogInForm from "./LogInForm";
import { Paper, Box } from "@mui/material";

export default function LogInPaper({setEmail, setPassword, handleSubmit}) {
  return(
    <Paper 
      variant="outlined"
      square={false}
      sx={{
        borderRadius: '0.75%',
        width: 'max(25vw, 400px)',
        padding: '2% 2% 2% 2%', // Top, Right, Bottom, Left
      }}
    >
      <Box>Log in</Box>
      <LogInForm setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit}/>
    </Paper>
  );
}