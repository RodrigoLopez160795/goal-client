import Goal from '../Goal';
import { Goals, Title, TitleWrapper, Wrapper } from './styles';
import { GrAddCircle } from 'react-icons/gr';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
function MonthlyGoals({ data }) {
  const { modal, setModal } = useContext(ModalContext);
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    setGoals(data.filter((goal) => goal.finish_at === null));
  }, [data]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>My goals</Title>
        <GrAddCircle
          size={'1.5rem'}
          style={{ cursor: 'pointer' }}
          onClick={() =>
            setModal({
              ...modal,
              type: 'create',
              isOpen: true,
            })
          }
        />
      </TitleWrapper>
      <Goals>
        {goals.map((e) => (
          <Goal goal={e} key={e.id} />
        ))}
      </Goals>
    </Wrapper>
  );
}

export default MonthlyGoals;
