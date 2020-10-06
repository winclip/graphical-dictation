import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';
import NavigationItem from '../navigation-item';
import NavButton from '../navButton/index';

const navigationsItemsList = require('./navigationsItemsList.json');

const Navigation = () => (
  <div className="nav-block">
    <img
      src="/img/main-menu/children.png"
      className="nav-block__img"
      alt="children"
    />
    {navigationsItemsList.map((menuItem) => (
      <NavigationItem key={menuItem.id} menuItem={menuItem} />
    ))}
    <Link to="/#">
      <NavButton title="Правила" />
    </Link>
  </div>
);
export default Navigation;
