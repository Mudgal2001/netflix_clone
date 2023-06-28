import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Routes} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
function App() {
  return (
    <div className="app">
        <Router>
        <Routes>
        <Route exact path="/login"element={<LoginScreen/>}/>
          <Route exact path="/"element={<HomeScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
