import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

export const Wrapper = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${colors.nav};
  display: flex;
  color: white;
  border-bottom: 2px solid black;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
export const ListTitle = styled.p`
  ${typography.title.lg}
`;

export const Username = styled.p`
  ${typography.text.sm}
`;

export const Faces = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;
