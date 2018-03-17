import React from 'react';
import styled from 'styled-components';
import {
  baseTextAreaContainer,
  baseTextArea,
  subHeader,
  darkBtn,
  errorMsg
} from 'sharedStyles';
import { object, string, bool, func } from 'prop-types';
import { DuckContainer, RepliesContainer } from 'containers';
import { formatReply } from 'helpers/utils';

const SubHeader = styled.div`
  ${subHeader};
`;
const DarkBtn = styled.button`
  ${darkBtn};
`;
const ErrorMsg = styled.div`
  ${errorMsg};
`;

const MainContainer = styled.div`
  padding: 20px;
  margin: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  flex: 4;
`;

const RepliesContainerStyle = styled.div`
  flex: 3;
`;

const ReplyTextAreaContainer = styled.div`
  width: 70%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  height: 160px;
  ${baseTextAreaContainer};
`;

const ReplyTextArea = styled.textarea`
  border: 1px solid #ccc;
  margin: 10px 0;
  ${baseTextArea};
`;

const Reply = ({ submit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (!Reply.ref.value) {
      return;
    }
    submit(Reply.ref.value, e);
    Reply.ref.value = '';
  };
  return (
    <ReplyTextAreaContainer>
      <ReplyTextArea
        maxLength="140"
        innerRef={ref => (Reply.ref = ref)}
        placeholder="Your response"
        onKeyPress={e => {
          e.key === 'Enter' && handleSubmit(e);
        }}
        type="text"
      />
      <DarkBtn onClick={handleSubmit}>{'Submit'}</DarkBtn>
    </ReplyTextAreaContainer>
  );
};

const DuckDetails = ({ authedUser, duckId, isFetching, error, addAndHandleReply }) => {
  return (
    <MainContainer>
      {isFetching === true ? (
        <SubHeader>{'Fetching'}</SubHeader>
      ) : (
        <Container>
          <Content>
            <DuckContainer duckId={duckId} hideLikeCount={false} hideReplyBtn={true} />
            <Reply
              submit={replyText =>
                addAndHandleReply(duckId, formatReply(authedUser, replyText))
              }
            />
          </Content>
          <RepliesContainerStyle>
            <RepliesContainer duckId={duckId} />
          </RepliesContainerStyle>
        </Container>
      )}
      {!!error && <ErrorMsg>{error}</ErrorMsg>}
    </MainContainer>
  );
};

DuckDetails.propTypes = {
  authedUser: object.isRequired,
  duckId: string.isRequired,
  isFetching: bool.isRequired,
  error: string.isRequired,
  addAndHandleReply: func.isRequired
};
export default DuckDetails;
