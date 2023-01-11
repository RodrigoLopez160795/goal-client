import styled from '@emotion/styled';
import { colors } from '../../styles/colors';
import { font } from '../../styles/typography';

function handleButton(type) {
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
    case 'cancel':
      return `
        background-color:${colors.error};
        border: 1px solid red;
        color:white;
        &:hover{
          background-color:red;
          transform: scale(1.1);
          font-size: 1.2rem;
          transition:all .25s ease;
        }
        `;
    case 'accept':
      return `
        background-color:${colors.accept};
        border: 1px solid green;
        color:white;
        &:hover{
          background-color:green;
          color:white;
          transform: scale(1.1);
          font-size: 1.2rem;
          transition:all .25s ease;
        }
        `;
  }
}
function handleSize(size) {
  switch (size) {
    case 's':
      return `
        height: 32px;
        width: 145px;
        padding: 4px 8px;
        border-radius: 20px;
            `;
    case 'm':
      return `
        height: 40px;
        width: 161px;
        padding: 8px 16px;
        border-radius: 20px;
        `;
    case 'l':
      return `
        height: 56px;
        width: 177px;
        padding: 16px 24px;
        border-radius: 20px;
        `;
    case 'rounded':
      return `
          height: 40px;
          width:40px;
          padding: .5rem;
          border-radius: 50px;
          `;
  }
}
export const Wrapper = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  ${font.secondary}
  ${({ btnType }) => handleButton(btnType)};
  ${({ size }) => handleSize(size)};
`;
