import React from 'react';
import styled from 'styled-components';

function Hero() {
	return (
    <main>
      <section>
        <HeroStyle>
          <AvatarStyle />

          <div>
            <h1>Hi, I'm Matija. I'm a <span>front-end</span> developer with a passion for <span>UI/UX design</span>.</h1>
            <h2>
              <a href="#">Let's talk</a> and bring your ideas to life.
            </h2>
          </div>
        </HeroStyle>
      </section>

      <section>
        <ProjectsStyle>
          <h2>Latest Projects</h2>

          <CardsStyle>
            <a href="#">
              <h3>Project Card</h3>
            </a>

            <a href="#">
              <h3>Project Card</h3>
            </a>

            <a href="#">
              <h3>Project Card</h3>
            </a>
          </CardsStyle>
        </ProjectsStyle>
      </section>
    </main>
	);
}

const HeroStyle = styled.div`
  max-width: 700px;
  margin: 0 auto;
  margin-top: 10rem;
  font-size: 20px;
  display: flex;
  align-items: center;
  animation: fade-in 2s;

  h1 {
    font-weight: 300;
    letter-spacing: 0.2px;

    span {
      font-weight: 900;
    }
  }
`;

const AvatarStyle = styled.div`
    padding: 4rem;
    margin: 2rem;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-image: url('https://images.unsplash.com/photo-1520975764749-7397d17130a2');
    background-size: cover;
`;

const ProjectsStyle = styled.div`
  margin: 0 auto;
  margin-top: 8rem;

  h2 {
    font-size: 2.4rem;
    text-align: center;
    font-weight: 900;
    letter-spacing: 1px;
    animation: fade-in 2s;
  }
`;

const CardsStyle = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  transform: translateY(50%);
  animation: fade-in 2s, slide-in 1s forwards;

  a {
    display: inline-block;
    width: 320px;
    height: 200px;
    margin: 0.4rem;
    position: relative;
    background-image: url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5');
    background-size: cover;
    border-radius: 2%;
    transition: transform 0.4s;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background: hsla(0, 0%, 0%, 0.6);
      opacity: 1;
      transition: opacity 1s;
      z-index: 1;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.4);
      box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      z-index: 3;

      &::after {
        opacity: 0;
      }
    }

    h3 {
      font-size: 1.6rem;
      position: absolute;
      left: 4%;
      bottom: 4%;
      text-transform: uppercase;
      color: var(--textLight);
      z-index: 2;
      letter-spacing: 1px;
    }
  }
`;

export default Hero;
