import React from 'react';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import Departments from './department/pages/Departments';
import OKRDashboard from './okr/pages/OKRDashboard';

import './App.css';
import MainNavigation from './shared/components/Navigation/MainNavigation';


const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" element={<App/>} />
          <Route path="users" element={<Users/>} />
          <Route path="departments" element={<Departments/>} />
          <Route path="okrdashboard" element={<OKRDashboard />} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
