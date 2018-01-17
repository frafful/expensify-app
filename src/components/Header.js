import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (  
  <header>
    <h1>Expensify</h1>
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="is-active">Home</NavLink></li>
        <li><NavLink exact to="/create" activeClassName="is-active">Add Expense</NavLink></li>
        <li><NavLink exact to="/help" activeClassName="is-active">Help</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;