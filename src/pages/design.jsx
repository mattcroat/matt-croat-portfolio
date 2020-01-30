import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

import cryptoDashboard from '../images/mockups/crypto-dashboard.png'
import cuisine from '../images/mockups/cuisine.jpg'
import dogue from '../images/mockups/dogue.png'
import musicPlayer from '../images/mockups/music-app.png'
import vintage01 from '../images/mockups/vintage-01.png'
import vintage02 from '../images/mockups/vintage-02.png'
import vintage03 from '../images/mockups/vintage-03.png'
import volumen from '../images/mockups/volumen.png'

function Design() {
  return (
    <Layout>
    	<DesignStyle>
		    <MockupCard>
		    	<h2>Vintage</h2>
		    	<img src={vintage01} alt="Vintage"/>
		    	<img src={vintage02} alt="Vintage"/>
		    	<img src={vintage03} alt="Vintage"/>
		    </MockupCard>

		    <MockupCard>
		    	<h2>Cuisine</h2>
		    	<img src={cuisine} alt="Cuisine"/>
		    </MockupCard>

		    <MockupCard>
		    	<h2>Dogue</h2>
		    	<img src={dogue} alt="Dogue"/>
		    </MockupCard>

		    <MockupCard>
		    	<h2>Volumen</h2>
		    	<img src={volumen} alt="Volumen"/>
		    </MockupCard>

		    <MockupCard>
		    	<h2>Music Player</h2>
		    	<img src={musicPlayer} alt="Music player"/>
		    </MockupCard>

		    <MockupCard>
		    	<h2>Crypto Dashboard</h2>
		    	<img src={cryptoDashboard} alt="Crypto dashboard"/>
		    </MockupCard>
    	</DesignStyle>
    </Layout>
  );
}

const DesignStyle = styled.div`
	max-width: 800px;
	margin: 0 auto;
	margin-top: 6rem;
`;

const MockupCard = styled.figure`
	margin-top: 4rem;

	h2 {
		font-size: 4rem;
		font-weight: 300;
		letter-spacing: 0.4px;
		text-align: center;
	}

	img {
		width: 100%;
		background: hsl(0, 0%, 98%);
		padding: 1rem;
		margin: 1rem 0;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
`;


export default Design;
