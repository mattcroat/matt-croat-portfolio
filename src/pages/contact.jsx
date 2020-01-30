import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
      <ContactStyle>
        <h1>
          I'd love to talk! <a href="mattcroat.dev@gmail.com">Email me.</a>
        </h1>
      </ContactStyle>
    </Layout>
  );
}

const ContactStyle = styled.div`
  text-align: center;
  margin-top: 10rem;

  h1 {
    font-size: 3rem;
    letter-spacing: 1px;
  }
`;

export default Contact;
