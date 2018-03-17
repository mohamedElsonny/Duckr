import React, { Component } from 'react';
import { DuckDetails } from 'components';
import { object, string, bool, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as duckActionCreators from 'redux-config/modules/ducks';
import * as likeCountActionCreators from 'redux-config/modules/likeCount';
import * as repliesActionCreators from 'redux-config/modules/replies';

class DuckDetailsContainer extends Component {
  static propTypes = {
    authedUser: object.isRequired,
    duckId: string.isRequired,
    isFetching: bool.isRequired,
    error: string.isRequired,
    duckAlreadyFetched: bool.isRequired,
    removeFetching: func.isRequired,
    fetchAndHandleDuck: func.isRequired,
    initLikeFetch: func.isRequired,
    addAndHandleReply: func.isRequired
  };

  componentDidMount() {
    this.props.initLikeFetch(this.props.duckId);
    if (this.props.duckAlreadyFetched === false) {
      // FETCH DUCK AND SAVE TO OUR STORE
      this.props.fetchAndHandleDuck(this.props.duckId);
    } else {
      // SET ISFETCHING TO FALSE
      this.props.removeFetching();
    }
  }

  render() {
    const { authedUser, duckId, isFetching, error, addAndHandleReply } = this.props;
    return (
      <DuckDetails
        addAndHandleReply={addAndHandleReply}
        authedUser={authedUser}
        duckId={duckId}
        isFetching={isFetching}
        error={error}
      />
    );
  }
}

export default withRouter(
  connect(
    ({ ducks, likeCount, users }, { match }) => ({
      isFetching: ducks.isFetching || likeCount.isFetching,
      error: ducks.error,
      authedUser: users[users.authId].info,
      duckId: match.params.duckId,
      duckAlreadyFetched: !!ducks[match.params.duckId]
    }),
    dispatch =>
      bindActionCreators(
        { ...duckActionCreators, ...likeCountActionCreators, ...repliesActionCreators },
        dispatch
      )
  )(DuckDetailsContainer)
);
