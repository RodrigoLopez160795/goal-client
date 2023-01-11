import { Date, Icon, IconsWrapper, Title, Wrapper } from './styles';
import { dateFormat, finishDate } from './utils';
import { FaCalendarCheck, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

function Goal({ goal, icon = true, finish = false }) {
  const { setModal } = useContext(ModalContext);
  return (
    <Wrapper>
      <div>
        <Title>{goal.name}</Title>
        <p>{goal.description}</p>
        <Date>
          {finish
            ? finishDate(goal.finish_at)
            : `Posted by ${goal.post_by || 'Unknown'} in ${dateFormat(
                goal.created_at
              )}`}
        </Date>
      </div>
      {icon && (
        <IconsWrapper>
          <Icon>
            <FaEdit
              size={'2rem'}
              onClick={() =>
                setModal({ id: goal.id, isOpen: true, type: 'edit' })
              }
            />
          </Icon>
          <Icon>
            <FaCalendarCheck
              size={'2rem'}
              onClick={() =>
                setModal({ id: goal.id, isOpen: true, type: 'warning' })
              }
            />
          </Icon>
        </IconsWrapper>
      )}
    </Wrapper>
  );
}

export default Goal;
