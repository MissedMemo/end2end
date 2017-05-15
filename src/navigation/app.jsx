import React from 'react';
import { Route } from 'react-router-dom';

import Header from './shared-header';
import Footer from './shared-footer';

import Home from '../main-feature/home-page';
import SomePage from '../some-feature/some-page';
import AnotherPage from '../another-feature/another-page';


export default () => <div className="shared-layout">
  <Header />
    <div className='main-content'>
      <Route exact path="/" component={ Home } />
      <Route path="/some" component={ SomePage } />
      <Route path="/another" component={ AnotherPage } />
    </div>
  <Footer />
</div>;
