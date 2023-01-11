import { useContext } from 'react';
import { ModalContext } from '../../../context/ModalContext';
import { RefreshDataContext } from '../../../context/RefreshDataContext';
import { updateGoal } from '../../../services/goals';
import Button from '../../Button';
import { FinishGoalWrapper } from '../styles';

function Warning() {
  const { modal, setModal } = useContext(ModalContext);
  const { refresh, setRefresh } = useContext(RefreshDataContext);
  function handleUpdate() {
    const date = Date.now();
    const today = new Date(date);
    const dateFormat = `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`;
    updateGoal(modal.id, { finish_at: dateFormat })
      .then(() => {
        setModal({ isOpen: false, type: null, id: null });
        setRefresh(!refresh);
      })
      .catch(console.log);
  }
  return (
    <FinishGoalWrapper>
      Are you sure you finish the goal?
      <Button
        handler={handleUpdate}
        btnType='accept'
        icon='accept'
        size='rounded'
      />
      <Button
        handler={() => setModal({ isOpen: false, type: null, id: null })}
        btnType='cancel'
        icon='cancel'
        size='rounded'
      />
    </FinishGoalWrapper>
  );
}

export default Warning;
