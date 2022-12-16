import PropTypes from 'prop-types';
import { InputWrapper, Label, StyledInput, Wrapper } from './styles';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useState } from 'react';

const handleIcons = (icon) => {
  switch (icon) {
    case 'user':
      return <AiOutlineUserAdd />;
    case 'password':
      return <RiLockPasswordLine />;
  }
};

function Input({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur = null,
  autoComplete = 'off',
  icon = false,
  iconType = '',
}) {
  return (
    <Wrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputWrapper>
        {icon && handleIcons(iconType)}
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
      </InputWrapper>
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
  onClick: PropTypes.func,
};

export default Input;
