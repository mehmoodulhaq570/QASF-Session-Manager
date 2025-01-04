import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen'; // Import the LoadingScreen
import SessionsScreen from './components/SessionsDetails'; // Import the SessionsScreen
import AttendeeEnrollmentForm from './components/AttEnrollmentForm'; // Import Attendee Enrollment
import AuthorEnrollmentForm from './components/AuEnrollmentForm'; // Import Author Enrollment
import InstitutionEnrollmentForm from './components/InstEnrollmentForm'; // Import Institution Enrollment
import TrainerEnrollmentForm from './components/TraEnrollmentForm'; // Import Trainer Enrollment
import GAttendeLogin from './components/GAttendeLogin';
import TrainerLogin from './components/TrainerLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/sessions" element={<SessionsScreen />} />
        <Route path="/attendee" element={<AttendeeEnrollmentForm />} />
        <Route path="/author" element={<AuthorEnrollmentForm />} />
        <Route path="/institution" element={<InstitutionEnrollmentForm />} />
        <Route path="/trainer" element={<TrainerEnrollmentForm />} />
        <Route path="/g-attende" element={<GAttendeLogin />} />
        <Route path="/g-trainer" element={<TrainerLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
