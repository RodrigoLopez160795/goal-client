import Goal from '../Goal';
import { Goals, Title, TitleWrapper, Wrapper } from './styles';

function ClosedGoals({ data }) {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>My finish goals</Title>
      </TitleWrapper>
      <Goals>
        {data
          .filter((goal) => goal.finish_at !== null)
          .map((e) => (
            <Goal goal={e} key={e.id} icon={false} finish={true} />
          ))}
      </Goals>
    </Wrapper>
  );
}

export default ClosedGoals;
