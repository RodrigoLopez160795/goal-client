import Button from '../Button';
import { AsideItem, OptionsWrapper, Wrapper } from './styles';

function Aside() {
  return (
    <Wrapper>
      <OptionsWrapper>
        <AsideItem>Monthly goals</AsideItem>
        <AsideItem>Closed goals</AsideItem>
      </OptionsWrapper>
      <div>
        <Button size='rounded' icon='logout' />
      </div>
    </Wrapper>
  );
}

export default Aside;
