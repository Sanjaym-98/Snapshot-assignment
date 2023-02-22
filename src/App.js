// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PhotoProvider } from './components/Photocontext';
import MountainPage from './components/Montainpage';
import BeachPage from './components/Beachpage';
import BirdPage from './components/Birdpage';
import FoodPage from './components/Foodpage';
import SearchPage from './components/Searchpage';

function App() {
  return (
    <Router>
      <PhotoProvider>
        <Switch>
          <Route exact path="/" component={MountainPage} />
          <Route path="/beaches" component={BeachPage} />
          <Route path="/birds" component={BirdPage} />
          <Route path="/food" component={FoodPage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </PhotoProvider>
    </Router>
  );
}

export default App;
