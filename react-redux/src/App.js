import React from 'react';
import './App.css';
import { LoginComponent } from './components/login/login.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  HomeComponent  from './components/home/home.component';
import { AboutComponent } from './components/aboutItem/about.component';
import Button from './components/buttonTesting/button'
function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header">
        <Button lable="click me please"></Button>

        </header>
        {/* <header className="App-header">
          <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route path="/about" component={AboutComponent} />
          <Route path="/" exact={true} component={LoginComponent} />
          </Switch>
        </header> */}
      </div>
    </Router>
  );
}

export default App;