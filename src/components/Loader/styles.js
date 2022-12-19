import styled from '@emotion/styled';
export const Wrapper = styled.div`
  & img {
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 1;
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  display: flex;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
