import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Game from './components/Game';
import Rules from './components/Rules';
import Signup from './components/Signup';
import UserPage from './components/UserPage';
import './UserPage.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Game" element={<Game />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<UserPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
