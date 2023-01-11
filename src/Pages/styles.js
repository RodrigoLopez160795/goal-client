import styled from '@emotion/styled';
import { colors } from '../styles/colors';

export const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  filter: ${({ open }) => (open ? 'brightness(30%)' : '')};
  position: relative;
  z-index: 1;
  background-color: ${colors.background};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
