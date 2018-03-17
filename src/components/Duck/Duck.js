import React from 'react';
import { formatTimestamp } from 'helpers/utils';
import styled from 'styled-components';
import { baseDuckContainer, baseAvatar } from 'sharedStyles';
import Reply from 'react-icons/lib/fa/mail-reply';
import Star from 'react-icons/lib/fa/star';
import { func, bool, string, number, shape } from 'prop-types';

const DuckContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  ${baseDuckContainer} &:hover {
    background: #f1f1f1;
  }
`;

const Avatar = styled.img`
  ${baseAvatar};
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  font-size: 18px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
`;

const Text = styled.p`
  padding: 8px 0;
  font-size: 20px;
  line-height: 25px;
`;

const LikeReplyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Author = styled.div`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const Duck = ({
  isLiked,
  handleDeleteLike,
  addAndHandleLike,
  hideReplyBtn,
  onClick,
  duck: { avatar, duckId, name, text, timestamp, uid },
  numberOfLikes,
  hideLikeCount,
  goToProfile
}) => {
  const starFn = isLiked === true ? handleDeleteLike : addAndHandleLike;
  return (
    <DuckContainer
      style={{ cursor: hideReplyBtn ? 'default' : 'pointer' }}
      onClick={onClick}
    >
      <Avatar src={avatar} />
      <ContentContainer>
        <Header>
          <Author onClick={e => goToProfile(e)}>{name}</Author>
          <div>{formatTimestamp(timestamp)}</div>
        </Header>
        <Text>{text}</Text>
        <LikeReplyContainer>
          {!hideReplyBtn && <Reply className="icon" />}
          <ActionContainer>
            <Star
              className={`${isLiked === true ? 'likedIcon' : 'icon'}`}
              onClick={e => starFn(duckId, e)}
            />
            {!hideLikeCount && <div>{numberOfLikes}</div>}
          </ActionContainer>
        </LikeReplyContainer>
      </ContentContainer>
    </DuckContainer>
  );
};

Duck.propTypes = {
  duck: shape({
    avatar: string.isRequired,
    duckId: string.isRequired,
    name: string.isRequired,
    text: string.isRequired,
    timestamp: number.isRequired,
    uid: string.isRequired
  }).isRequired,
  onClick: func,
  isLiked: bool.isRequired,
  addAndHandleLike: func.isRequired,
  handleDeleteLike: func.isRequired,
  numberOfLikes: number.isRequired,
  hideReplyBtn: bool.isRequired,
  hideLikeCount: bool.isRequired,
  goToProfile: func.isRequired
};

export default Duck;
