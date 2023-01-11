import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { font, typography } from '../../styles/typography';

export const Wrapper = styled.div`
  border: 3px dashed ${colors.pink};
  background-color: ${colors.lightPink};
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  ${typography.title.md}
`;

export const Date = styled.p`
  ${typography.text.sm}
  ${font.secondary}
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Icon = styled.div`
  color: ${colors.purple};
  cursor: pointer;
  width: fit-content;

  &:hover {
    color: ${colors.fontColor};
    transition: all 0.5s ease;
  }
`;
