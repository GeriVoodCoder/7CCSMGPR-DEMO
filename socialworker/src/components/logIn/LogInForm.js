import InputField from "./InputField";
import { Box } from "@mui/material";

export default function LogInForm({setEmail, setPassword, handleSubmit}) {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <InputField
        label={"Email"}
        placeholder={"Enter your email here"} 
        onChange={setEmail}
      />
      <InputField
        label={"Password"}
        placeholder={"Enter your password here"} 
        onChange={setPassword}
      />
      <button type="submit" className="login-button">
        Login
      </button>
    </Box>
  );
}