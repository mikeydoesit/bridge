import Home from './components/Home'
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'
import Dashboard from './components/Dashboard'
import Thanks from './components/Thankyou'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from "react"

function App() {

  const [firstAnswer, setFirstAnswer] = useState(null)
  const [secondAnswer, setSecondAnswer] = useState(null)
  const [thirdAnswer, setThirdAnswer] = useState(null)

  const grabFirstAnswer = (event) => {
    setFirstAnswer(event.target.value)
  }
  const grabSecondAnswer = (event) => {
    setSecondAnswer(event.target.value)
  }
  const grabThirdAnswer = (event) => {
    setThirdAnswer(event.target.value)
  }
  return (
    <Router>
      <div className="App">
        <div className="blur">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/question1">
              <Question1 answer1={firstAnswer} onQuestion1Change={grabFirstAnswer}/>
            </Route>
            <Route path="/question2">
              <Question2 answer2={secondAnswer} onQuestion2Change={grabSecondAnswer}/>
            </Route>
            <Route path="/question3">
              <Question3 answer3={thirdAnswer} onQuestion3Change={grabThirdAnswer}/>
            </Route>
            <Route path="/dashboard">
              <Dashboard answer1={firstAnswer} answer2={secondAnswer} answer3={thirdAnswer} />
            </Route>
            <Route path="/thankyou"><Thanks /></Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
