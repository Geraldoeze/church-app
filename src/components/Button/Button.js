import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
  
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button ${props.change}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`button ${props.change}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
