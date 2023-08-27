import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Login from './Component/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
function App() {
  const[authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Login setAuthenticated={setAuthenticated} />} />
      <Route exact path='/dashboard' element={<Dashboard />} />
    </Routes>
      
    </div>
  );
}

export default App;
