import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

function About() {
  return (
    <Layout>
    	<ContainerStyle>
       <h1>Who am I?</h1>

       <p>
       		My name is Matija. I currently live in Zagreb, Croatia.
       		I enjoy learning, and talking about web technologies.
       		I'm crazy about JavaScript.
       </p>

       <p>
       	One of my passions include <Link to="/design/">design</Link>.
       	With a strong focus on usability, and user experience, I'd like the web to be a
       	more accessible place for everyone.
       </p>

       <p>
       	Some of the tools, and technologies I use include HTML, CSS, JavaScript,
       	React, Gatsby, Next.js. I use Visual Studio Code as my editor, Figma for making designs, and Git
       	for version control.
       </p>    		
    	</ContainerStyle>
    </Layout>
  );
}

const ContainerStyle = styled.div`
	max-width: 600px;
	margin: 0 auto;
	margin-top: 10rem;

	h1 {
		font-size: 3rem;
	}

	p {
		font-size: 2rem;
		letter-spacing: 1px;
		margin-top: 3rem;
		line-height: 1.5;
	}
`;

export default About;
