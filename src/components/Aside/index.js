import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { logout } from '../../services/sessions';
import Button from '../Button';
import { AsideItem, OptionsWrapper, Wrapper } from './styles';

function Aside() {
  const { pathname } = useLocation();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(pathname);
  function handleClick() {
    logout()
      .then(() => {
        navigate('login');
        setUser(null);
      })
      .catch(console.log);
  }
  return (
    <Wrapper>
      <OptionsWrapper>
        <Link to='/monthly-goals'>
          <AsideItem location='/monthly-goals' current={pathname}>
            Monthly goals
          </AsideItem>
        </Link>
        <Link to='/closed-goals'>
          <AsideItem location='/closed-goals' current={pathname}>
            Closed goals
          </AsideItem>
        </Link>
      </OptionsWrapper>
      <div>
        <Button size='rounded' icon='logout' handler={handleClick} />
      </div>
    </Wrapper>
  );
}

export default Aside;
