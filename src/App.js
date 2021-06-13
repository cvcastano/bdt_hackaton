import Hero from './Hero';
import Register from './Register';
import PersonalInfo from './PersonalInfo';
import Location from './Location';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Hero />
      <Switch>
        <Route exact path='/'>
          <Register />
        </Route>
        <Route path='/register/personal_info'>
          <PersonalInfo />
        </Route>
        <Route path='/register/location'>
          <Location />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
