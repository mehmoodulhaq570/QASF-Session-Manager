import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import SessionsScreen from './components/SessionsDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SessionsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;