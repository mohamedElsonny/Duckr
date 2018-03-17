import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Feed } from 'components';
import PropTypes from 'prop-types';
import * as feedActionCreators from 'redux-config/modules/feed';

class FeedContainer extends Component {
  static propTypes = {
    duckIds: PropTypes.array.isRequired,
    newDucksAvailable: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    setAndHandleFeedListener: PropTypes.func.isRequired,
    resetNewDucksAvailable: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.setAndHandleFeedListener();
  }

  render() {
    const {
      newDucksAvailable,
      isFetching,
      error,
      resetNewDucksAvailable,
      duckIds
    } = this.props;
    return (
      <Feed
        duckIds={duckIds}
        newDucksAvailable={newDucksAvailable}
        isFetching={isFetching}
        error={error}
        resetNewDucksAvailable={resetNewDucksAvailable}
      />
    );
  }
}

export default connect(
  ({ feed: { newDucksAvailable, isFetching, error, duckIds } }) => ({
    newDucksAvailable,
    isFetching,
    error,
    duckIds
  }),
  dispatch => bindActionCreators(feedActionCreators, dispatch)
)(FeedContainer);
