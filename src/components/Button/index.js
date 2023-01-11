import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import { BiLogOutCircle } from 'react-icons/bi';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { ImCancelCircle } from 'react-icons/im';

const Icons = {
  logout: <BiLogOutCircle />,
  accept: <IoIosCheckmarkCircle size='1.5rem' />,
  cancel: <ImCancelCircle size='1.5rem' />,
};

function Button({
  text = '',
  type = 'button',
  size = 's',
  btnType = 'primary',
  icon,
  handler = null,
}) {
  return (
    <Wrapper type={type} btnType={btnType} size={size} onClick={handler}>
      {icon && Icons[icon]}
      {text}
    </Wrapper>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'rounded']),
  btnType: PropTypes.oneOf(['primary', 'secondary', 'cancel', 'accept']),
  icon: PropTypes.oneOf(['logout', 'accept', 'cancel']),
  handler: PropTypes.func,
};
export default Button;
