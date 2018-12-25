import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startSignOut } from '../actions/auth';

export const Header = (props) => (
  <header className="header">
    <div className='content-container'>
      <div className='header__container'>
        <Link to='/' 
          className="header__title"
        >
            <h1>MyReactApp</h1>
        </Link>
       <div>
        <button 
          className='button button--link'
          onClick={props.startSignOut}>
          Log Out
        </button>
       </div>
      </div>
    </div>
  </header>
);

export default connect(null, { startSignOut })(Header);