import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #FFFFFF;
  cursor: pointer;
  font-size: 15px;
  padding: 3px 10px;
  margin: 10px;
`;

type propTypes = {
  children: any,
  onClick: Function,
};

const Button = ({ children, onClick }: propTypes) => (
  <StyledButton
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export default Button;
