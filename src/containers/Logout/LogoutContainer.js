import React, { Component } from 'react';

import { Logout } from 'components';
import { logoutAndUnauth } from 'redux-config/modules/users';
import { connect } from 'react-redux';

class LogoutContainer extends Component {
  componentDidMount() {
    this.props.logoutAndUnauth();
  }
  render() {
    return (
      <div>
        <Logout />
      </div>
    );
  }
}

export default connect(null, { logoutAndUnauth })(LogoutContainer);
