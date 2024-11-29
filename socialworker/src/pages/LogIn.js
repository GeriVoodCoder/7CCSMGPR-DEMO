import LogInPaper from "../components/logIn/LogInPaper";
import { Box } from '@mui/material';

export default function LogIn({setEmail, setPassword, handleSubmit}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2.5vh 2.5vw 2.5vh 2.5vw', // Top, Right, Bottom, Left
      }}
    >
      <LogInPaper setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} />
    </Box>
  );
}