import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { fetchActivities, register, login, createActivity, fetchRoutinesByUser, 
         editActivity, fetchRoutineActivities, fetchRoutines, createRoutine, 
         editRoutine, deleteRoutine, createRoutineActivity, editRoutineActivity, deleteRoutineActivity } from './api';

import NavBar from './components/NavBar';  
import Home from './components/Home'; 
import Login from './components/Login';
import Register from './components/Register';
import Routines from './components/Routines';
import Activities from './components/Activities';
import MyRoutines from './components/MyRoutines';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  // const [myRoutines, setMyRoutines] = useState([])
  // const [myInfo, setMyInfo] = useState([]);
  const [token, setToken] = useState('');
  // const [activities, setActivities] = useState('');
  const [userData, setUserData] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  // register('poildecarotte1', 'testing01')
  // login('poildecarotte1', 'testing01') 
  // fetchActivities()
  // createActivity()
  // fetchRoutinesByUser()
  // editActivity()
  // fetchRoutineActivities()
  // fetchRoutines()
  // createRoutine()
  // editRoutine()
  // deleteRoutine()
  // createRoutineActivity()
  // editRoutineActivity()
  // deleteRoutineActivity()
  return (
    <div id="App">
      <NavBar token={token} setToken={setToken} userData={userData} setUserData={setUserData}/>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>      
      <Route exact path="/routines">
        <Routines  />
      </Route>
      <Route exact path="/myroutines">
        <MyRoutines userData={userData} setUserData={setUserData} activities={allActivities} setActivities={setAllActivities}/>
      </Route>
      <Route exact path="/activities">
        <Activities token={token} setToken={setToken} activities={allActivities} setActivities={setAllActivities} />
      </Route>

    </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
