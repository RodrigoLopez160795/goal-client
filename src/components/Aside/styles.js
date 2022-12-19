import styled from '@emotion/styled';
import { colors } from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
  height: calc(100vh - 88px);
  color: white;
  background-color: ${colors.nav};
  border-right: 2px solid black;
  padding: 1rem 0;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AsideItem = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0px 51px 51px 0px;
  position: relative;

  &:hover {
    background-color: ${colors.lightBlue};
  }

  &:before {
    content: '';
    position: absolute;
    background-color: ${colors.pink};
    height: 100%;
    width: 7px;
    top: 0;
    left: 0;
  }
`;
