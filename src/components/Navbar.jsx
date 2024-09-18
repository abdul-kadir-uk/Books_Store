import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar_menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-book">Add Book</Link>
        </li>
        <li>
          <Link to="/books-list">Books List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
