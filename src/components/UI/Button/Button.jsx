import React from 'react';
import { StyledButton } from './ButtonStyled';

const Button = ({
  children,
  radius = '32',
  secondary = false,
  disabled = false,
  onClick = () => '',
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      radius={radius}
      secondary={secondary}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
