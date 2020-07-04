import React from 'react';

import Navigation from '../Navigation/Navigation';

import { HeaderContainer, NavigationContainer } from './header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
