import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../components/Login';

function UnauthenticatedApp() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, []);

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<p>No lo encuentro</p>} />
    </Routes>
  );
}

export default UnauthenticatedApp;
