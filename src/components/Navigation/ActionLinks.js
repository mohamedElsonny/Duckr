import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ModalContainer } from 'containers';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;
  &:hover {
    color: #1877e6;
  }
`;

const ActionLinks = ({ isAuthed }) => {
  return isAuthed === true ? (
    <ul>
      <li>
        <ModalContainer />
      </li>
      <li
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <StyledLink to="/logout">{'Log Out'}</StyledLink>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <StyledLink to="/">{'Home'}</StyledLink>
      </li>
      <li>
        <StyledLink to="/auth"> {'Authenticate'}</StyledLink>
      </li>
    </ul>
  );
};

ActionLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
};

export default ActionLinks;
