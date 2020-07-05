import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { render, within } from '@testing-library/react';

import NavItem from './NavItem';

const props = {
  children: 'Popular',
  linkTo: '/',
  exact: true,
};

describe('NavItem', () => {
  test('should render NavItem ', () => {
    render(
      <Router>
        <NavItem {...props} />
      </Router>,
    );
  });
});
