import React from 'react';
import { Link } from 'gatsby';

function ListLink(props) {
  return (
    <li>
      <Link
      	activeStyle={{ color: 'hsl(0, 0%, 98%)' }}
      	to={props.to}
      >
      	{props.children}
      </Link>
    </li>
  );
}

export default ListLink;
