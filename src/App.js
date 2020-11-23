import React from 'react';
import Home from './pages/Home';
import Politics from './pages/Politics'
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Business from './pages/Business';
import Tech from './pages/Tech';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Login from './pages/Login';
import WelcomePage from './pages/WelcomePage';



function App() {

  return (
    <div className="App">
<Router>  

    <Switch>

      <Route  exact path="/" component={Home} />

      <Route  exact path="/politics" component={Politics} />

      <Route  exact path="/business" component={Business} />

      <Route  exact path="/tech" component={Tech} />

      <Route  exact path="/science" component={Science} />

      <Route  exact path="/sports" component={Sports} />

      <Route  exact path="/login" component={Login} />

      <Route  path="/welcome" component={WelcomePage} />
      
    </Switch>

</Router>
  </div>
  );
}

export default App;
