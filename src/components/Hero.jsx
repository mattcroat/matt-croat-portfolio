import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import avatar from '../images/avatar/flame.png'
import kicks from '../images/projects/sick-kicks.png';
import bistro from '../images/projects/bistro.png';
import surf from '../images/projects/surf.png';

function Hero() {
	return (
    <main>
      <section>
        <HeroStyle>
          <AvatarStyle />

          <div>
            <h1>Hi, I'm Matija. I'm a <span>front-end</span> developer with a passion for <span>UI/UX design</span>.</h1>
            <h2>
              <Link to="/contact">Let's talk</Link> and bring your ideas to life.
            </h2>
          </div>
        </HeroStyle>
      </section>

      <section>
        <ProjectsStyle>
          <h2>Latest Projects — <a href="https://github.com/mattcroat/">GitHub</a></h2>

          <CardsStyle>
            <div className="project-card">
              <a
                className="project-1"
                href="https://sick-kicks.netlify.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h3>Sick Kicks · shop</h3>
              </a>
            </div>

            <div className="project-card">
              <a
                className="project-2"
                href="https://amorebistro.netlify.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h3>Bistro · restaurant</h3>
              </a>
            </div>

            <div className="project-card">
              <a
                className="project-3"
                href="https://surfsup.netlify.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h3>Surf · landing page</h3>
              </a>
            </div>
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
  font-size: 2rem;
  display: flex;
  align-items: center;
	animation: var(--shortFade);

  @media (max-width: 1000px) {
    width: 90%;
    flex-direction: column;
    margin-top: 6rem;
  }

  @media (max-width: 600px) {
    max-width: 450px;
    flex-direction: column;
    margin-top: 2rem;
    font-size: 1.6rem;
  }

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
    /* background-image: url('https://images.unsplash.com/photo-1520975764749-7397d17130a2'); */
    background-image: url(${avatar});
    background-size: cover;
`;

const ProjectsStyle = styled.div`
  font-family: var(--sansSerif);
  margin: 0 auto;
  margin-top: 8rem;

  h2 {
    font-size: 2.4rem;
    text-align: center;
    letter-spacing: 1px;
    animation: var(--shortFade);
  }
`;

const CardsStyle = styled.div`
  margin-top: 1.4rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  .project-card {
    transition: transform 0.4s;
    margin: 1rem;

    @media (max-width: 1000px) {
      width: 70%;

      a {
        width: 100%;
        background-position: top center;
      }
    }

    @media (max-width: 600px) {
      width: 90%;
    }

    &:hover {
      transform: scale(1.4);
      z-index: 3;

      @media (max-width: 1000px) {
        transform: scale(1.1);
      }

      @media (max-width: 600px) {
        transform: scale(1.08);
      }
    }
  }

  a {
    display: inline-block;
    width: 320px;
    height: 200px;
    position: relative;
    /* background-image: url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5'); */
    background-size: cover;
    background-position: center center;
    border-radius: 2%;
    overflow: hidden;
    transform: translateY(50%);
    animation: var(--shortFade), slide-in 1s forwards;

    &.project-1 {
      background-image: url(${kicks});
      transform: translateX(-50%);
    }
    
    &.project-2 {
      background-image: url(${bistro});
      transform: translateY(50%);
    }
    
    &.project-3 {
      background-image: url(${surf});
      transform: translateX(50%);
    }

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
      box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      &::after {
        opacity: 0;
      }
    }

    &:hover h3 {
      opacity: 0;
    }

    h3 {
      font-size: 1.6rem;
      position: absolute;
      left: 4%;
      bottom: 4%;
      text-transform: uppercase;
      font-weight: 900;
      color: var(--textLight);
      z-index: 2;
      letter-spacing: 1px;
      transition: opacity 1s;
    }
  }
`;

export default Hero;
