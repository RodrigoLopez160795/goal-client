import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { getListName } from '../../services/user';
import { Faces, ListTitle, TitleWrapper, Username, Wrapper } from './styles';
import MyImage from '../../images/testImage.jpg';

function Navbar() {
  const [list, setList] = useState(null);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getListName().then((data) => setList(data));
  }, []);

  return (
    <Wrapper>
      <TitleWrapper>
        {list && <ListTitle>{list.name}</ListTitle>}
        <Username>Logged as {user.username}</Username>
      </TitleWrapper>
      <Faces src={MyImage} />
    </Wrapper>
  );
}

export default Navbar;
