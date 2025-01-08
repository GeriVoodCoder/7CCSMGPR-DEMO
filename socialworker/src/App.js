import './App.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import ChildrenDashboard from './pages/ChildrenDashboard';
import FormsDashboard from './pages/FormsDashboard';

const childrenData = [
  { id: 0, firstName: 'John', lastName: 'Doe', gender: 'Male', dateOfBirth: '01 Jan 2010' },
  { id: 1, firstName: 'Jane', lastName: 'Smith', gender: 'Female', dateOfBirth: '31 Dec 2011' },
  { id: 2, firstName: 'Boeing', lastName: 'Apache', gender: 'Helicopter', dateOfBirth: '29 Feb, 2020' },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<LogIn />} />
        
        {/* ChildrenDashboard Page */}
        <Route path="/childrenDashboard" element={<ChildrenDashboard childrenData={childrenData} />} />

        {/* FormsDashboard Page*/}
        <Route path="/child/:id" element={<FormsDashboard childrenData={childrenData} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
