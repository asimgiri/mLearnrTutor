import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomeContainer from './containers/HomeContainer';

import './App.css';
import './Responsive.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.css';

import { Switch, Route } from 'react-router-dom';
import JoinusContainer from './containers/JoinusContainer';
import ClassesContainer from './containers/ClassesContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>

        <Route exact path="/">
          <HomeContainer />
        </Route>

        <Route exact path="/joinus">
          <JoinusContainer />
        </Route>

        <Route exact path="/classes">
          <ClassesContainer />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
