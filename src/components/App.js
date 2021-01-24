import React from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import { Router, Route, Switch } from 'react-router-dom';
import Search from '../routes/Search';
import Issues from '../routes/Issues';
import Index from '../routes/Index';
import Login from '../routes/Login';
import Profile from '../routes/Profile';
import history from '../history';

const App = () => {
  return (
    <div className="app">
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/:owner/:repo/issues" exact component={Issues} />
          <Route path="/search" exact component={Search} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
