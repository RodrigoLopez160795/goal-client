import { useEffect, useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { tokenKey } from './components/config';
import Loader from './components/Loader';
import { UserContext } from './context/UserContext';
import AuthenticatedApp from './Pages/AuthenticatedApp';
import UnauthenticatedApp from './Pages/UnauthenticatedApp';
import { showUser } from './services/user';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const token = sessionStorage.getItem(tokenKey);
  useEffect(() => {
    if (token) {
      showUser().then((data) => {
        setUser(data);
        setTimeout(() => setIsLoading(false), 1000);
      });
    } else {
      setTimeout(() => setIsLoading(false), 3000);
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        {isLoading ? (
          <Loader />
        ) : user ? (
          <AuthenticatedApp />
        ) : (
          <UnauthenticatedApp />
        )}
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
