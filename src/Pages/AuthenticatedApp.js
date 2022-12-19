import { Route, Routes } from 'react-router-dom';
import Aside from '../components/Aside';
import ClosedGoals from '../components/ClosedGoals';
import MonthlyGoals from '../components/MonthlyGoals';
import Navbar from '../components/Navbar';
import { Wrapper } from './styles';

function AuthenticatedApp() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Aside />
        <Routes>
          <Route path='/monthly-goals' element={<MonthlyGoals />} />
          <Route path='closed-goals' element={<ClosedGoals />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default AuthenticatedApp;
