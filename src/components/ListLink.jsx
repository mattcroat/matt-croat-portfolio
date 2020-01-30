import React from 'react';
import { Link } from 'gatsby';

function ListLink(props) {
  return (
    <li>
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
}

export default ListLink;
