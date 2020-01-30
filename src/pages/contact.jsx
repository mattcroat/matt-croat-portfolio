import React from 'react';

import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
      <div>
        <h1>I'd love to talk! Email me at the address below</h1>
        <p>
          <a href="mailto:me@example.com">me@example.com</a>
        </p>
      </div>
    </Layout>
  );
}

export default Contact;
