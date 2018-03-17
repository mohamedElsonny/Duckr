import React from 'react';

import { center, subHeader } from 'sharedStyles';
import styled from 'styled-components';

const Text = styled.p`
  ${center} ${subHeader};
`;

const Logout = props => {
  return <Text>{'You are now logged out'}</Text>;
};

export default Logout;
