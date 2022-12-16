import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, outlines } from '../../styles/colors';
import { font, typography } from '../../styles/typography';

const inputAnimation = keyframes`
  0%{border:none;}
  20%{outline: 1px solid ${outlines.input};}
  30%{outline: 2px solid ${outlines.input};}
  40%{outline: 4px solid ${outlines.input};}
  80%{outline: 5px solid ${outlines.input};}
  100%{outline: 6px solid ${outlines.input};}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  ${font.secondary}
  ${typography.text.sm}
  color:${colors.pink};
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  ${font.secondary}
  ${typography.text.sm}
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${colors.blue};
  border-radius: 10px;
  padding: 0.5rem;
`;
