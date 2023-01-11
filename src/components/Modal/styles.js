import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transform: translate(-50%, -50%);
`;

export const ModalWrapper = styled.div`
  border: 2px solid ${colors.blue};
  width: 70%;
  background-color: ${colors.background};
  padding: 1rem;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const FinishGoalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
