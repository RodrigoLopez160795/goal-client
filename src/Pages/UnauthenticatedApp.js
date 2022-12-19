import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Login from '../components/Login';

function UnauthenticatedApp() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<p>No lo encuentro</p>} />
    </Routes>
  );
}

export default UnauthenticatedApp;
