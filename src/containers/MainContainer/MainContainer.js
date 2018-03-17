import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { HomeContainer, AuthenticateContainer } from 'containers';
import { Navigation } from 'components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  FeedContainer,
  LogoutContainer,
  UserContainer,
  DuckDetailsContainer
} from 'containers';
import { UserRoute, GuestRoute } from 'containers/routes';
import { bindActionCreators } from 'redux';
import * as userActionCreatorsfrom from 'redux-config/modules/users';
import * as usersLikesActionCreators from 'redux-config/modules/usersLikes';
import { formatUserInfo } from 'helpers/utils';
import { firebaseAuth } from '../../constants';

const Container = styled.div`
  width: 100%;
`;

const InnerContainer = styled.div`
  max-width: 900px;
  margin: auto;
`;

class MainContainer extends Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    authUser: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
    removeFetchingUser: PropTypes.func.isRequired,
    setUsersLikes: PropTypes.func.isRequired
  };

  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        const userData = user.providerData[0];
        const userInfo = formatUserInfo(
          userData.displayName,
          userData.photoURL,
          user.uid
        );
        this.props.authUser(user.uid);
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now());
        this.props.setUsersLikes();
        if (this.props.location.pathname === '/') {
          this.props.history.push('/feed');
        }
      } else {
        this.props.removeFetchingUser();
      }
    });
  }

  render() {
    const { isAuthed, isFetching, location } = this.props;
    return isFetching ? null : (
      <Container>
        <Navigation isAuthed={isAuthed} />
        <InnerContainer>
          <Switch>
            <GuestRoute location={location} path="/" exact component={HomeContainer} />
            <GuestRoute
              location={location}
              path="/auth"
              component={AuthenticateContainer}
            />
            <UserRoute location={location} path="/feed" exact component={FeedContainer} />
            <Route location={location} path="/logout" exact component={LogoutContainer} />
            <UserRoute
              location={location}
              path="/duckDetail/:duckId"
              exact
              component={DuckDetailsContainer}
            />
            <UserRoute location={location} path="/:uid" exact component={UserContainer} />
          </Switch>
        </InnerContainer>
      </Container>
    );
  }
}

export default connect(
  ({ users: { isAuthed, isFetching } }) => ({ isAuthed, isFetching }),
  dispatch =>
    bindActionCreators(
      { ...userActionCreatorsfrom, ...usersLikesActionCreators },
      dispatch
    )
)(MainContainer);
