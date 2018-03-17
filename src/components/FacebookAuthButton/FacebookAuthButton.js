import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: #3b5998;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  border-width: 0;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    background: #1542a0;
  }
`;

export const FacebookAuthButton = ({ onAuth, isFetching }) => {
  return (
    <Button onClick={onAuth}>{isFetching ? 'Loading' : 'Login with facebook'}</Button>
  );
};

FacebookAuthButton.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};
