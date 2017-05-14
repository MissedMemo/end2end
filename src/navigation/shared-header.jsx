import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {

  const activeLinkStyle = {
    backgroundColor: 'red'
  };

  return <header className='sharedHeader'>
    <h1>Big Shared Header Across Routed Pages!</h1>
    <nav className='navMenu'>
      <NavLink to="/" className='navlink' activeStyle={ activeLinkStyle } >
        Home
      </NavLink>
      <NavLink to="/some" className='navlink' activeStyle={ activeLinkStyle }>
        Some Page
      </NavLink>
      <NavLink to="/another" className='navlink' activeStyle={ activeLinkStyle }>
        Another Page
      </NavLink>
    </nav>
  </header>;
};