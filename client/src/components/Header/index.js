import React from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';

function Header() {

    return (
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
  
          <a
            role='button'
            className={'navbar-burger burger'}
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-end'>
          <a href='/powerupapp' className='navbar-item'>
                Power Up
              </a>
          <a href='/login' className='navbar-item'>
                Log In
              </a>
            <div className='navbar-item'>
              <a href='/signup' className='navbar-item'>
                Sign Up
              </a>

            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header;