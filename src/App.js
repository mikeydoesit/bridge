import Home from './components/Home'
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Thanks from './components/Thankyou'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/"><Home /></Route>
          <Route path="/question1"><Question1 /></Route>
          <Route path="/question2"><Question2 /></Route>
          <Route path="/question3"><Question3 /></Route>
          <Route path="/thankyou"><Thanks /></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
