import React from 'react';
import { object, string, bool } from 'prop-types';
import styled from 'styled-components';

import { baseAvatar, center, clickable, errorMsg, subHeader } from 'sharedStyles';
import { formatTimestamp } from 'helpers/utils';

const Avatar = styled.img`
  ${baseAvatar};
`;
const ErrorMsg = styled.h3`
  ${errorMsg};
`;
const SubHeader = styled.p`
  ${subHeader};
`;
const ReplyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  font-size: 18px;
  margin: 7px;
  padding: 15px;
`;

const Cushion = styled.div`
  padding: 5px 0;
`;

const Header = styled.h1`
  text-align: center;
  font-weight: 100;
  font-size: 50px;
  margin-top: 0;
`;

const Center = styled.h3`
  ${center};
`;

const Author = styled.div`
  font-weight: bold;
  ${clickable};
`;

const Reply = ({ comment }) => {
  console.log(comment);
  return (
    <ReplyContainer>
      <Avatar src={comment.avatar} alt={comment.name} />
      <div>
        <Author>{comment.name}</Author>
        <Cushion>{formatTimestamp(comment.timestamp)}</Cushion>
        <Cushion>{comment.reply}</Cushion>
      </div>
    </ReplyContainer>
  );
};

const Replies = ({ isFetching, error, replies }) => {
  const replyIds = Object.keys(replies);
  return (
    <div>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      {isFetching ? (
        <SubHeader>{'Fetching replies'}</SubHeader>
      ) : (
        <div>
          <Header>{'Replies'}</Header>
          {replyIds.map(replyId => <Reply key={replyId} comment={replies[replyId]} />)}
        </div>
      )}
      {replyIds.length === 0 && <Center>Be the first one to comment.</Center>}
    </div>
  );
};

Replies.propTypes = {
  isFetching: bool.isRequired,
  error: string.isRequired,
  replies: object.isRequired
};
export default Replies;
