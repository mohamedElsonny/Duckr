import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { baseDuckContainer, errorMsg } from 'sharedStyles';
import { DuckContainer } from 'containers';

const NewDuckContainer = styled.div`
  background: #4a90e2;
  color: #fff;
  text-align: center;
  ${baseDuckContainer} &:hover {
    background: #1877e6;
    color: #fff;
  }
`;

const Header = styled.p`
  text-align: center;
  font-size: 40px;
  font-weight: 100;
`;

const ErrorMsg = styled.p`
  ${errorMsg};
`;

const NewDucksAvailable = ({ handleClick }) => {
  return (
    <NewDuckContainer onClick={handleClick}>{'New Ducks Available'}</NewDuckContainer>
  );
};

const Feed = ({
  duckIds,
  error,
  isFetching,
  newDucksAvailable,
  resetNewDucksAvailable
}) => {
  return isFetching === true ? (
    <Header>{'Fetching'}</Header>
  ) : (
    <div>
      {newDucksAvailable ? (
        <NewDucksAvailable handleClick={resetNewDucksAvailable} />
      ) : null}
      {duckIds.length === 0 ? (
        <Header>
          {'This is unfortunate.'} <br /> {'It appears there are no ducks yet 😞'}
        </Header>
      ) : null}
      {duckIds.map(id => <DuckContainer duckId={id} key={id} />)}
      {error ? <ErrorMsg>{error}</ErrorMsg> : null}
    </div>
  );
};

Feed.propTypes = {
  duckIds: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  newDucksAvailable: PropTypes.bool.isRequired,
  resetNewDucksAvailable: PropTypes.func.isRequired
};

export default Feed;
