// USERS

{
  type: AUTH_USER,
  uid,
}

{
  type: UNAUTH_USER,
}

{
  type: FETCHING_USER,
}

{
  type: FETCHING_USER_FAILURE,
  error: 'Error fetching user',
}

{
  type: FETCHING_USER_SUCCESS,
  uid,
  user,
  timestamp,
}


// DUCKS
{
  type: FETCHING_DUCK
}

{
  type: FETCHING_DUCK_ERROR,
  error: 'Error fetching duck',
}

{
  type: FETCHING_DUCK_SUCCESS,
  duck,
}

{
  type: REMOVE_FETCHING,
}

{
  type: ADD_DUCK,
  duck,
}

{
  type: ADD_MULTIPLE_DUCK,
  ducks,
}


// FEED
{
  type: SETTING_FEED_LISTENER,
}

{
  type: SETTING_FEED_LISTENER_ERROR,
  error: 'Error fetching feeds',
}

{
  type: SETTIG_FEED_LISTENER_SUCCESS,
  duckIds,
}

{
  type: ADD_NEW_DUCK_ID_TO_FEED,
  duckId,
}

{
  type: RESET_NEW_DUCKS_AVAILABLE,
}

// LISTENERS
{
  type: ADD_LISTENER,
  listenerId,
}

// MODAL
{
  type: OPEN_MODEL,
}

{
  type: CLOSE_MODEL,
}

{
  type: UPDATE_DUCK_TEXT,
  newDuckText,
}

// REPLIES
{
  type: FETCHING_REPLIES
}

{
  type: FETCHING_REPLIES_ERROR,
  error: 'Error fetching replies',
}

{
  type: FETCHING_REPLIES_SUCCESS,
  replies,
  duckId,
  lastUpdated: Date.now(),
}

{
  type: ADD_REPLY,
  duckId,
  reply,
}

{
  type: ADD_REPLY_ERROR,
  error: 'Error adding reply',
}

{
  type: REMOVE_REPLY,
  replyId,
  duckId,
}

// LIKE_COUNTS
{
  type: FETCHING_COUNT,
}

{
  type: FETCHING_COUNT_ERROR,
  error: 'Error fetching count',
}

{
  type: FETCHING_COUNT_SUCCESS,
  duckId,
  count,
}

// USERS_DUCKS
{
  type: FETCHING_USERS_DUCKS,
  uid,
}

{
  type: FETCHING_USERS_DUCKS_ERROR,
  error: 'Error fetching Users duck Ids',
}

{
  type: FETCHING_USERS_DUCKS_SUCCESS,
  uid,
  duckId,
  lastUpdate,
}

{
  type: ADD_SINGLE_USERS_DUCK,
  uid,
  duckIds,
  lastUpdated,
}

// USERS_LIKES
{
  type: FETCHING_LIKES,
}

{
  type: FETCHING_LIKES_ERROR,
  error: 'Error fetching likes',
}

{
  type: FETCHING_LIKES_SUCCESS,
  likes,
}

{
  type: ADD_LIKE,
  duckId,
}

{
  type: REMOVE_LIKE,
  duckId,
}



