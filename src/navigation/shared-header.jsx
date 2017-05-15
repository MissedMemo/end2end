import React from 'react';
import { NavLink } from 'react-router-dom';


const CustomLink = (props) =>
  <NavLink {...props} activeStyle={{ backgroundColor: 'lightgreen' }} />;


export default () => {

  return <header className='shared-header'>

    <h1>Big Shared Header Across Routed Pages!</h1>

    <nav className='navMenu'>

      <CustomLink exact to="/" >
        Home
      </CustomLink>

      <CustomLink to="/some" >
        Some Page
      </CustomLink>

      <CustomLink to="/another" >
        Another Page
      </CustomLink>

    </nav>

  </header>;
};