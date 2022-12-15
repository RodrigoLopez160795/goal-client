import styled from '@emotion/styled';
import { typography } from '../../styles/typography';

export const Wrapper = styled.div`
  max-width: 60%;
  max-height: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 17px 9px 12px 0px rgba(0, 0, 0, 0.67);
  -webkit-box-shadow: 17px 9px 12px 0px rgba(0, 0, 0, 0.67);
  -moz-box-shadow: 17px 9px 12px 0px rgba(0, 0, 0, 0.67);
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.p`
  ${typography.title.md}
  font-weight: 900;
  text-align: center;
`;
