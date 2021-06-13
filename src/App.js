import Hero from './components/pages/Hero';
import Register from './components/pages/Register';
import PersonalInfo from './components/pages/PersonalInfo';
import Location from './components/pages/Location';
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
