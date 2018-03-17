import React, { Component } from 'react';
import { User } from 'components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bool, string, array, func, number } from 'prop-types';
import * as usersActionCreators from 'redux-config/modules/users';
import * as usersDucksActionCreators from 'redux-config/modules/usersDucks';
import { staleUser, staleDucks } from 'helpers/utils';

import { withRouter } from 'react-router-dom';

class UserContainer extends Component {
  static propTypes = {
    noUser: bool.isRequired,
    name: string.isRequired,
    isFetching: bool.isRequired,
    error: string.isRequired,
    duckIds: array.isRequired,
    fetchAndHandleUsersDucks: func.isRequired,
    fetchAndHandleUser: func.isRequired,
    lastUpdatedUser: number.isRequired,
    lastUpdatedDucks: number.isRequired
  };

  componentDidMount() {
    const { match: { params: { uid } }, lastUpdatedUser, lastUpdatedDucks } = this.props;
    if (this.props.noUser || staleUser(lastUpdatedUser)) {
      this.props.fetchAndHandleUser(uid);
    }
    if (this.props.noUser || staleDucks(lastUpdatedDucks)) {
      this.props.fetchAndHandleUsersDucks(uid);
    }
  }

  render() {
    const { noUser, name, isFetching, error, duckIds } = this.props;
    return (
      <User
        noUser={noUser}
        name={name}
        isFetching={isFetching}
        error={error}
        duckIds={duckIds}
      />
    );
  }
}

export default withRouter(
  connect(
    ({ users, usersDucks }, { match: { params } }) => ({
      noUser: typeof users[params.uid] === 'undefined',
      name: typeof users[params.uid] === 'undefined' ? '' : users[params.uid].info.name,
      isFetching: users.isFetching || usersDucks.isFetching,
      error: users.error || usersDucks.error,
      duckIds: usersDucks[params.uid] ? usersDucks[params.uid].duckIds : [],
      lastUpdatedUser: users[params.uid] ? users[params.uid].lastUpdated : 0,
      lastUpdatedDucks: !!usersDucks[params.uid] ? usersDucks[params.uid].lastUpdated : 0
    }),
    dispatch =>
      bindActionCreators(
        { ...usersActionCreators, ...usersDucksActionCreators },
        dispatch
      )
  )(UserContainer)
);
