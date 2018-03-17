import {
  usersDucksExpirationLength,
  userExpirationLength,
  repliesExpirationLength
} from '../constants';

export const formatUserInfo = (name, avatar, uid) => {
  return {
    name,
    avatar,
    uid
  };
};

export const formatDuck = (text, { name, avatar, uid }) => {
  return {
    text,
    name,
    avatar,
    uid,
    timestamp: Date.now()
  };
};

export const formatTimestamp = timestamp => {
  const date = new Date(timestamp);
  return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const getMilliseconds = timestamp => {
  return new Date().getTime() - new Date(timestamp).getTime();
};

export const staleUser = timestamp => {
  return getMilliseconds(timestamp) > userExpirationLength;
};
export const staleDucks = timestamp => {
  return getMilliseconds(timestamp) > usersDucksExpirationLength;
};

export const formatReply = ({ name, uid, avatar }, reply) => {
  return {
    name,
    uid,
    avatar,
    reply,
    timestamp: Date.now()
  };
};

export const staleReplies = timestamp => {
  return getMilliseconds(timestamp) > repliesExpirationLength;
};
