import './App.css';
import * as React from 'react';
import LogIn from './pages/LogIn';

function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from refreshing
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="App">
      <LogIn setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
