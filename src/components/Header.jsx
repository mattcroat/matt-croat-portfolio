import React from 'react';
import styled from 'styled-components';

import ListLink from './ListLink';
import Logo from './Logo';

function Header() {
	return (
	  <section>
	    <HeaderStyle>
	      <nav>
	        <ul>
	          <ListLink to="/">Home</ListLink>
	          <ListLink to="/design/">Design</ListLink>
	          <Logo /> 
	          <ListLink to="/about/">About</ListLink>
	          <ListLink to="/contact/">Contact</ListLink>
	        </ul>
	      </nav>
	    </HeaderStyle>
	  </section>
	);
}

const HeaderStyle = styled.header`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 2rem;

  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    li {
      align-self: center;

      a {
        font-size: 1.8rem;
        color: var(--textLight);
        text-decoration: none;
        letter-spacing: 1px;
        position: relative;

        &:hover::after {
          content: '#';
          color: var(--brandRed);
          position: absolute;
          font-size: 2.4rem;
          left: -28%;
          bottom: -12%;
        }
      }
    }
  }
`;

export default Header;
