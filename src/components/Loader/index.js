import { NewtonsCradle } from '@uiball/loaders';
import { LoaderWrapper, Wrapper } from './styles';
import MyImage from '../../images/loaderImage.jpg';
function Loader() {
  return (
    <Wrapper>
      <LoaderWrapper>
        <NewtonsCradle size={50} />
      </LoaderWrapper>
      <img src={MyImage} />
    </Wrapper>
  );
}

export default Loader;
