import React from 'react';
import 'bulma/css/bulma.min.css';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} by Project 3 Group
      </div>
    </footer>
  );
};

export default Footer;