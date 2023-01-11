import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Aside from '../components/Aside';
import ClosedGoals from '../components/ClosedGoals';
import Modal from '../components/Modal';
import MonthlyGoals from '../components/MonthlyGoals';
import Navbar from '../components/Navbar';
import { ModalContext } from '../context/ModalContext';
import { RefreshDataContext } from '../context/RefreshDataContext';
import { goalsIndex } from '../services/goals';
import { MainWrapper, Wrapper } from './styles';

function AuthenticatedApp() {
  const [goals, setGoals] = useState([]);
  const [modal, setModal] = useState({
    isOpen: false,
    type: null,
    id: null,
  });
  const [refresh, setRefresh] = useState(true);
  useEffect(() => {
    goalsIndex()
      .then((data) => setGoals(data))
      .catch(console.log);
  }, [refresh]);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <RefreshDataContext.Provider value={{ refresh, setRefresh }}>
        <MainWrapper open={modal.isOpen}>
          <Navbar data={goals} />
          <Wrapper>
            <Aside />
            <Routes>
              <Route
                path='/monthly-goals'
                element={<MonthlyGoals data={goals} />}
              />
              <Route
                path='closed-goals'
                element={<ClosedGoals data={goals} />}
              />
            </Routes>
          </Wrapper>
        </MainWrapper>
        {modal.isOpen && <Modal />}
      </RefreshDataContext.Provider>
    </ModalContext.Provider>
  );
}

export default AuthenticatedApp;
