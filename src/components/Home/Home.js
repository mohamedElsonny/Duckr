import React from 'react';
import { centerdContainer, subHeader, largeHeader } from 'sharedStyles';
import styled from 'styled-components';

const Container = styled.div`
  ${centerdContainer};
`;
const Title = styled.p`
  ${largeHeader};
`;
const Slogan = styled.p`
  ${subHeader};
`;

export const Home = props => {
  return (
    <Container>
      <Title>{'Duckr'}</Title>
      <Slogan>
        {
          'The real time, cloud based, moduler, scalable, growth hack, social platform. In the cloud'
        }
      </Slogan>
    </Container>
  );
};
