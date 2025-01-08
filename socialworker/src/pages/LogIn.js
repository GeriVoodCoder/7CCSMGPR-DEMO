import * as React from 'react';
import LogInPaper from "../components/logIn/LogInPaper";
import LogInAppBar from '../components/logIn/LogInAppBar';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from refreshing
    console.log("Email:", email);
    console.log("Password:", password);

    navigate('/childrenDashboard'); // Perform navigation to dashboard
  };

  
  return (
    <React.Fragment>
      <LogInAppBar/>
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
    </React.Fragment>
  );
}