import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import Post from './Components/Post';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/:id'} component={Post}/>
      </Switch>
    </Router>
  );
}

export default App;
