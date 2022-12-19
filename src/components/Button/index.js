import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { BiLogOutCircle } from 'react-icons/bi';

const Icons = {
  logout: <BiLogOutCircle />,
};

function Button({
  text = '',
  type = 'button',
  size = 's',
  btnType = 'primary',
  icon,
}) {
  return (
    <Wrapper type={type} btnType={btnType} size={size}>
      {icon && Icons[icon]}
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'rounded']),
  btnType: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.oneOf(['logout']),
};
export default Button;
