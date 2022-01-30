import React from 'react';
import 'bulma/css/bulma.min.css';
function Nav() {

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
          <a href='/' className='navbar-item'>
                Sign In
              </a>
            <div className='navbar-item'>
              <a href='/' className='navbar-item'>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Nav;