import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import ViewPost from './Components/ViewPost';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/:id'} component={ViewPost}/>
      </Switch>
    </Router>
  );
}

export default App;
