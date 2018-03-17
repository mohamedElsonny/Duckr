import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: 0.2s ease;
  &:hover {
    color: #1877e6;
  }
`;

const NavLinks = ({ isAuthed }) => {
  return isAuthed === true ? (
    <ul>
      <li>
        <StyledLink to="/">{'Home'}</StyledLink>
      </li>
    </ul>
  ) : null;
};

NavLinks.propTypes = {
  isAuthed: PropTypes.bool.isRequired
};

export default NavLinks;
