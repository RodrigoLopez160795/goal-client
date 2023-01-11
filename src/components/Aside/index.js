import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { logout } from '../../services/sessions';
import Button from '../Button';
import { AsideItem, ButtonWrapper, OptionsWrapper, Wrapper } from './styles';

function Aside() {
  const { pathname } = useLocation();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
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
            Goals
          </AsideItem>
        </Link>
        <Link to='/closed-goals'>
          <AsideItem location='/closed-goals' current={pathname}>
            Finish goals
          </AsideItem>
        </Link>
      </OptionsWrapper>
      <ButtonWrapper>
        <Button size='rounded' icon='logout' handler={handleClick} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Aside;
