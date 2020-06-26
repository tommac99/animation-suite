import React from 'react';
import { WelcomeContainer } from './styles';
import { Box } from '../../components/containers/styles';
import { Space } from '../../components/space';
import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <Space height={200} />
      <Box center={true}>
        <h1>Welcome</h1>
      </Box>
      <Link to="/spring-playground">
        <h2>SPRING PLAYGROUND</h2>
      </Link>
    </WelcomeContainer>
  );
};
