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
  font-family: var(--sansSerif);

  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 600px) {
      display: block;
      text-align: center;

      li {
        margin: 1rem 0;
        border-bottom: 1px solid hsla(0, 0%, 98%, 0.1);
        padding: 1rem;
      }

      svg {
        display: none;
      }
    }

    li {
      align-self: center;

      a {
        font-size: 1.6rem;
        color: var(--textFaded);
        text-decoration: none;
        letter-spacing: 1px;
        position: relative;

        &:hover::after {
          content: '#';
          color: var(--brandRed);
          position: absolute;
          font-size: 1.8rem;
          left: -30%;
          bottom: -12%;
        }
      }
    }
  }
`;

export default Header;
