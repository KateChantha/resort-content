import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomInfo from './pages/RoomInfo';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import './App.css';

const App = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={RoomInfo} />
        <Route component={Error} />
      </Switch> 
    </React.Fragment>
  )
}

export default App
