import React from 'react';

function Nav() {

  return (
    <header>
        <h2>
            <a href="/">
            <span role="img" aria-label="muscle">💪</span> Power Up Workout App
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
            <li className="mx-2">
                <a href="#homepage">
                Home
                </a>
            </li>
            <li>
            <a href="#Login">
                Login
                </a>
            </li>

            <li>
            <a href="#SignUp">
                Sign Up
                </a>
            </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;