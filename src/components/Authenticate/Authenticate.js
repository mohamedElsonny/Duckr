import React from 'react';
import PropTypes from 'prop-types';
import { FacebookAuthButton } from 'components';
import { centerdContainer, largeHeader, errorMsg } from 'sharedStyles';
import styled from 'styled-components';

const CenterdContainer = styled.div`
  ${centerdContainer};
`;

const LargeHeader = styled.h1`
  ${largeHeader};
`;
const ErrorMsg = styled.p`
  ${errorMsg};
`;

export const Authenticate = ({ error, isFetching, onAuth }) => {
  return (
    <CenterdContainer>
      <LargeHeader>{'Authenticate'}</LargeHeader>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <ErrorMsg>{error}</ErrorMsg> : null}
    </CenterdContainer>
  );
};

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
};
