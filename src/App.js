import Hero from './components/pages/Hero';
import Register from './components/pages/Register';
import PersonalInfo from './components/pages/PersonalInfo';
import Location from './components/pages/Location';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import ModalUps from './components/pages/ModalUps';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (key, value) => {
    if (key === 'name') {
      setName(value);
    } else if (key === 'email') {
      setEmail(value);
    } else if (key === 'password') {
      setPassword(value);
    }
    console.log(name, email, password)
  };

  const emailValidation = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      alert('good')
    } else {
      alert('no good')
    }
  }


  return (
    <div className="app">
      <Hero />
      <main className="main">
        <Switch>
          <Route exact path='/'>
            <Register />
          </Route>
          <Route path='/register/personal_info'>
            <PersonalInfo
              handleInput={handleInput}
              emailValidation={emailValidation}
            />
            <ModalUps />
          </Route>
          <Route path='/register/location'>
            <Location />
          </Route>
        </Switch>
      </main>


    </div>
  );
}

export default App;



