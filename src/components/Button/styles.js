import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { font } from '../../styles/typography';

const handleButton = (type) => {
  switch (type) {
    case 'primary':
      return `background-color:${colors.lightBlue};
      border: 1px solid ${colors.blue};
      &:hover{
        background-color:${colors.blue};
        transform: scale(1.1);
        font-size: 1.2rem;
        transition: all .25s ease;
      }
      `;
    case 'secondary':
      return `
        background:none;
        border: 1px solid ${colors.pink};
        &:hover{
            background-color:${colors.pink};
            color:white;
            transform: scale(1.1);
            font-size: 1.2rem;
            transition: all .25s linear;
          }
        `;
  }
};
const handleSize = (size) => {
  switch (size) {
    case 's':
      return `
        height: 32px;
        width: 145px;
        padding: 4px 8px;
            `;
    case 'm':
      return `
        height: 40px;
        width: 161px;
        padding: 8px 16px;
        `;
    case 'l':
      return `
        height: 56px;
        width: 177px;
        padding: 16px 24px;
        `;
  }
};
export const Wrapper = styled.button`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 700;
  ${font.secondary}
  ${({ btnType }) => handleButton(btnType)};
  ${({ size }) => handleSize(size)};
`;
