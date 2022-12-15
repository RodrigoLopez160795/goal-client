import PropTypes from 'prop-types';
import { Label, StyledInput, Wrapper } from './styles';

function Input({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur = null,
  autoComplete = 'off',
}) {
  return (
    <Wrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledInput
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
      />
    </Wrapper>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  onBlur: PropTypes.func,
};

export default Input;
