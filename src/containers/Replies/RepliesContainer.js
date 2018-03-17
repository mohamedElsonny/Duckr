import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Replies } from 'components';
import * as repliesActionCreators from 'redux-config/modules/replies';
import { bindActionCreators } from 'redux';
import { staleReplies } from 'helpers/utils';

import PropTypes from 'prop-types';
class RepliesContainer extends Component {
  static defaultProps = {
    lastUpdated: 0,
    replies: {}
  };

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    lastUpdated: PropTypes.number.isRequired,
    replies: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired,
    fetchAndHandleReplies: PropTypes.func.isRequired
  };

  componentDidMount() {
    if (staleReplies(this.props.lastUpdated)) {
      this.props.fetchAndHandleReplies(this.props.duckId);
    }
  }
  render() {
    const { isFetching, error, lastUpdated, replies, duckId } = this.props;
    return (
      <Replies
        isFetching={isFetching}
        error={error}
        lastUpdated={lastUpdated}
        replies={replies}
        duckId={duckId}
      />
    );
  }
}

export default connect(
  (state, { duckId }) => {
    const duckRepliesInfo = state.replies[duckId] || {};
    const { lastUpdated, replies } = duckRepliesInfo;
    return {
      isFetching: state.replies.isFetching,
      error: state.replies.error,
      lastUpdated,
      replies
    };
  },
  dispatch => bindActionCreators({ ...repliesActionCreators }, dispatch)
)(RepliesContainer);
