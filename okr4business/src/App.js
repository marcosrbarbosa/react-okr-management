import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Users from './user/pages/Users';
import Departments from './department/pages/Departments';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="users" element={<Users/>} />
        <Route path="departments" element={<Departments/>} />
      </Routes>
    </Router>
  );
}

export default App;
