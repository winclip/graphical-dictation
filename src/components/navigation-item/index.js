/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import NavButton from '../navButton/index';

function NavigationItem(props) {
  return (
    <div className="navigation-item">
      <Link
        to={`/choose-variant/${props.menuItem.levelName}`}
      >
        <NavButton title={props.menuItem.title} />
      </Link>

    </div>
  );
}

export default NavigationItem;
