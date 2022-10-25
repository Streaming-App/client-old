import React from 'react';
import { HomeContainer, HomeTitle } from './styles';

function Home(): React.FunctionComponentElement<typeof HomeContainer> {
  return (
    <HomeContainer>
      <HomeTitle>Home</HomeTitle>
    </HomeContainer>
  );
}

export default Home;
