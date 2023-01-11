import styled from '@emotion/styled';
import { typography } from '../../styles/typography';

export const Wrapper = styled.div`
  max-height: calc(100vh - 107.19px);
  width: 100%;
  padding: 1rem 1rem 1rem 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.p`
  ${typography.title.md}
`;

export const Goals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  height: 100%;
`;
