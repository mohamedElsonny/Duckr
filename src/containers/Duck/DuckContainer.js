import React, { Component } from 'react';
import { Duck } from 'components';
import { bindActionCreators } from 'redux';
import { object, func, number, bool } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as usersLikesActions from 'redux-config/modules/usersLikes';

class DuckContainer extends Component {
  static propTypes = {
    duck: object.isRequired,
    numberOfLikes: number,
    isLiked: bool.isRequired,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    handleDeleteLike: func.isRequired,
    addAndHandleLike: func.isRequired
  };

  static defaultProps = {
    hideReplyBtn: false,
    hideLikeCount: true,
    numberOfLikes: 0
  };

  goToProfile = e => {
    e.stopPropagation();
    console.log(this.props.history);
    this.props.history.push(`/${this.props.duck.uid}`);
  };

  handleClick = e => {
    e.stopPropagation();
    this.props.history.push(`/duckDetail/${this.props.duck.duckId}`);
  };

  render() {
    const {
      isLiked,
      duck,
      hideLikeCount,
      hideReplyBtn,
      numberOfLikes,
      handleDeleteLike,
      addAndHandleLike
    } = this.props;
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={hideReplyBtn === true ? null : this.handleClick}
        isLiked={isLiked}
        duck={duck}
        hideLikeCount={hideLikeCount}
        hideReplyBtn={hideReplyBtn}
        numberOfLikes={numberOfLikes}
        handleDeleteLike={handleDeleteLike}
        addAndHandleLike={addAndHandleLike}
      />
    );
  }
}

export default withRouter(
  connect(
    ({ ducks, likeCount, usersLikes }, { duckId, hideLikeCount, hideReplyBtn }) => ({
      duck: ducks[duckId],
      hideLikeCount,
      hideReplyBtn,
      isLiked: usersLikes[duckId] === true,
      numberOfLikes: likeCount[duckId]
    }),
    dispatch => bindActionCreators(usersLikesActions, dispatch)
  )(DuckContainer)
);
