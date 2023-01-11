import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { getListName } from '../../services/user';
import {
  Faces,
  FacesWrapper,
  ListTitle,
  TitleWrapper,
  Username,
  Wrapper,
} from './styles';
import Face1 from '../../images/fase1.jpg';
import Face2 from '../../images/fase2.png';
import Face3 from '../../images/fase3.png';
import Face4 from '../../images/fase4.png';
import Face5 from '../../images/fase5.png';
import Face6 from '../../images/fase6.png';

const today = new Date();
const thisMonth = today.getMonth() + 1;

function selectFace(data) {
  data = data.filter(
    (e) => e.finish_at !== null && e.finish_at.split('/')[1] == thisMonth
  );
  switch (data.length) {
    case 0:
      return Face6;
    case 1:
      return Face5;
    case 2:
      return Face4;
    case 3:
      return Face3;
    case 4:
      return Face2;
    default:
      return Face1;
  }
}

function Navbar({ data }) {
  const finishGoals = data.filter(
    (e) => e.finish_at !== null && e.finish_at.split('/')[1] == thisMonth
  );
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
      <FacesWrapper>
        <Faces src={selectFace(data)} />
        <p>{finishGoals.length} goals this month</p>
      </FacesWrapper>
    </Wrapper>
  );
}

export default Navbar;
