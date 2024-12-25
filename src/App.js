import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;