import React from 'react';

import { StyledLink } from './navItem.styles';

type NavItemProps = {
  children: string;
  linkTo: string;
  exact?: boolean;
};

const NavItem = ({ children, linkTo, exact }: NavItemProps) => {
  return (
    <StyledLink to={linkTo} exact={exact}>
      <span className='nav-text-span'>{children}</span>
    </StyledLink>
  );
};

export default NavItem;
