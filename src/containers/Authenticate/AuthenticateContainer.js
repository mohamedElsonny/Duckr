import React, { Component } from 'react';
import { Authenticate } from 'components';
import { connect } from 'react-redux';
import { fetchAndHandleAuthUser } from 'redux-config/modules/users';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';

class AuthenticateContainer extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  };

  handleAuth = () => {
    const { fetchAndHandleAuthUser, history } = this.props;
    fetchAndHandleAuthUser().then(() => history.push('/feed'));
  };
  render() {
    const { isFetching, error } = this.props;
    return (
      <Authenticate isFetching={isFetching} error={error} onAuth={this.handleAuth} />
    );
  }
}

const mapStateToProps = ({ users: { isFetching, error } }) => ({
  isFetching,
  error
});

export default withRouter(
  connect(mapStateToProps, { fetchAndHandleAuthUser })(AuthenticateContainer)
);
