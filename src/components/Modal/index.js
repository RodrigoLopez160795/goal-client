import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import Create from './Create';
import Edit from './Edit';
import { ModalWrapper, Wrapper } from './styles';
import Warning from './Warning';

function handleModalType(type) {
  switch (type) {
    case 'create':
      return <Create />;
    case 'edit':
      return <Edit />;
    case 'warning':
      return <Warning />;
  }
}

function Modal() {
  const { modal } = useContext(ModalContext);
  return (
    <Wrapper>
      <ModalWrapper>{handleModalType(modal.type)}</ModalWrapper>
    </Wrapper>
  );
}

export default Modal;
