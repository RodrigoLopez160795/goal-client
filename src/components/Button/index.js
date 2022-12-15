import PropTypes from 'prop-types';
import { Wrapper } from './styles';

function Button({ text, type = 'button', size = 's', btnType }) {
  return (
    <Wrapper type={type} btnType={btnType} size={size}>
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  size: PropTypes.oneOf(['s', 'm', 'l']),
  btnType: PropTypes.oneOf(['primary', 'secondary']),
};
export default Button;
