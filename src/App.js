import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SessionsScreen from './SessionsScreen'; // Import the SessionsScreen
import AttendeeEnrollmentForm from './AttendeeEnrollmentForm'; // Import Attendee Enrollment
import AuthorEnrollmentForm from './AuthorEnrollmentForm'; // Import Author Enrollment
import InstitutionEnrollmentForm from './InstitutionEnrollmentForm'; // Import Institution Enrollment
import TrainerEnrollmentForm from './TrainerEnrollmentForm'; // Import Trainer Enrollment

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SessionsScreen} />
        <Route path="/attendee" component={AttendeeEnrollmentForm} />
        <Route path="/author" component={AuthorEnrollmentForm} />
        <Route path="/institution" component={InstitutionEnrollmentForm} />
        <Route path="/trainer" component={TrainerEnrollmentForm} />
      </Switch>
    </Router>
  );
}

export default App;
