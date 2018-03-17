
{
  users: {
    isAuthed,
    isFetching,
    error,
    autheId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar
      }
    }
  },
  modal: {
    duckText,
    isOpen,
  },
  ducks: {
    isFetching,
    error,
    [duckId]: {
      lastUpdated,
      info: {
        avatar,
        postId,
        name,
        text,
        timestamp,
        uid
      }
    }
  },
  usersDucks: {
    isFetching,
    error,
    [uid]: {
      lastUpdated,
      duckIds: [duckId, duckId ...]
    }
  },
  likeCounts: {
    [duckId]: 0
  },
  usersLikes: {
    [duckId]: true
  },
  replies: {
    isFetching,
    error,
    [duckId]: {
      lastUpdated,
      replies: {
        [replyId]: {
          name,
          reply,
          uid,
          timestamp,
          avatar,
          replyId
        }
      }
    }
  },
  listener: {
    [listenersId]: true
  },
  feed: {
    isFetching,
    error,
    newDucksAvailable,
    duckIdsToAdd: [duckId, duckId],
    duckIds: [duckId, duckId],
  }
}





