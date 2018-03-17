import React from 'react';
import NavLinks from './NavLinks';
import ActionLinks from './ActionLinks';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  color: #4a90e2;
  font-size: 18px;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  ul {
    display: flex;
    flex-direction: row;
    padding: 0;

    li {
      list-style: none;
      padding: 0 10px;
    }
  }
`;

export const Navigation = ({ isAuthed }) => {
  return (
    <Container>
      <NavContainer>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </NavContainer>
    </Container>
  );
};

Navigation.propTypes = {
  isAuthed: PropTypes.bool.isRequired
};
