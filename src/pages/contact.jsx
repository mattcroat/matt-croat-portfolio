import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

function Contact() {
  return (
    <Layout>
      <ContactStyle>
        <svg width="140" height="140" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M442 106c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM256 346c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zM396 246c-5.523 0-10 4.477-10 10 0 49.626-40.374 90-90 90-5.523 0-10 4.477-10 10s4.477 10 10 10c60.654 0 110-49.346 110-110 0-5.523-4.477-10-10-10z"/><path d="M510.944 151.528L485.775 101.2C474.925 79.488 453.106 66 428.83 66c-19.785 0-38.692 9.384-50.669 25.125l-28.248 31.787c-7.529-10.706-18.573-18.648-31.296-22.277l-50.53-14.44C229.405 75.142 191.584 45.348 164.32 4.453A10.001 10.001 0 00146 10v53.89c0 25.045 3.751 49.743 11.161 73.574a287.274 287.274 0 01-23.391 4.805A289.78 289.78 0 0187.53 146H10a9.999 9.999 0 00-8.479 15.3l59.88 95.811c25.586 40.931 69.65 66.616 117.922 68.732L83.141 434.72c-14.82 15.153-9.668 40.513 9.908 48.663l52.953 26.153c.235.116.474.223.717.32 15.315 6.12 32.773-1.31 38.954-16.608L222.625 406H296c84.561 0 156-68.691 156-150v-60c0-16.542 13.458-30 30-30h20a9.999 9.999 0 008.944-14.472zM166 39.801c27.558 32.281 61.653 55.641 96.592 65.625l50.535 14.441c9.855 2.812 18.161 9.587 22.925 18.644l-26.581 29.911-46.696-28.017a101.028 101.028 0 00-68.185-13.096c-7.506 1.217-12.297 2.744-18.192 4.653A227.334 227.334 0 01166 63.89V39.801zM482 146c-27.57 0-50 22.43-50 50v60c0 70.467-62.28 130-136 130h-80c-28.491 0-54.101 15.829-66.834 41.308l-2.11 4.22c-2.47 4.94-.467 10.946 4.473 13.416s10.947.466 13.416-4.473c1.164-1.55 8.746-24.079 34.945-32.074l-32.667 77.133a6.249 6.249 0 00-.078.189c-1.984 4.965-7.577 7.54-12.697 5.681-56.29-27.79-52.898-26.157-53.574-26.426-6.682-2.672-8.44-11.266-3.351-16.354.345-.346 21.232-24.014 108.482-122.772 36.682-1.63 71.003-16.714 97.067-42.778 3.905-3.905 3.905-10.237 0-14.143-3.905-3.906-10.237-3.905-14.143 0-44.513 44.516-97.354 36.067-103.239 37.073-43.921 0-84.045-22.239-107.33-59.49l-6.394-10.231 7.219 2.817c45.784 17.864 102.954 11.499 142.362-14.775 4.595-3.064 5.836-9.272 2.773-13.868-3.064-4.595-9.272-5.837-13.868-2.773-34.614 23.079-84.445 28.216-123.998 12.784l-32.233-12.575L28.043 166H87.53c16.482 0 33.116-1.342 49.437-3.988 33.624-5.436 47.75-12.842 60.822-14.96a81.208 81.208 0 0154.698 10.503l78.368 47.019c4.734 2.843 10.878 1.308 13.72-3.428 2.842-4.735 1.307-10.878-3.428-13.72l-14.224-8.534c70.257-79.077 66.502-74.788 66.978-75.421C402.105 92.531 415.163 86 428.83 86c16.649 0 31.614 9.25 39.056 24.143L485.818 146H482z"/></svg>
        <h1>
          I'd love to talk! <a href="mattcroat.dev@gmail.com">Email me.</a>
        </h1>
      </ContactStyle>
    </Layout>
  );
}

const ContactStyle = styled.div`
  margin-top: 10rem;
  text-align: center;  

  svg {
    fill: hsl(0, 0%, 98%);
  }

  h1 {
    margin-top: 4rem;
    font-size: 3rem;
    letter-spacing: 1px;
  }
`;

export default Contact;
