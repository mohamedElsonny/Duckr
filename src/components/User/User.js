import React from 'react';
import { string, array, bool } from 'prop-types';
import { subHeader, errorMsg } from 'sharedStyles';
import { DuckContainer } from 'containers';
import styled from 'styled-components';

const UserContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  ${subHeader} align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  ${subHeader};
`;
const ErrorMsg = styled.p`
  ${errorMsg};
`;

const User = ({ noUser, isFetching, name, error, duckIds }) => {
  return noUser === true ? (
    <Header>{"This user doesn'n exist"}</Header>
  ) : (
    <React.Fragment>
      {isFetching ? (
        <Header>{'Loading'}</Header>
      ) : (
        <React.Fragment>
          <UserContainer>
            <div>{name}</div>
          </UserContainer>
          {duckIds.map(id => <DuckContainer duckId={id} key={id} />)}
          {duckIds.length === 0 && (
            <Header>
              {' '}
              {`It looks like ${name.split(' ')[0]} hasn't made any duck yet`}{' '}
            </Header>
          )}
        </React.Fragment>
      )}
      {!!error && <ErrorMsg>{error}</ErrorMsg>}
    </React.Fragment>
  );
};

User.propTypes = {
  noUser: bool.isRequired,
  name: string.isRequired,
  isFetching: bool.isRequired,
  error: string.isRequired,
  duckIds: array.isRequired
};

export default User;
