import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';

export const HeroSection = ({ myData }) => {
    const { name } = myData;
    return (
        <Wrapper>
            <div className="container">
                <div className="grid grid-two-column">
                    <div className='hero-section-data'>
                        <p className="intro-data"> Welcome to </p>
                        <h1>{ name }</h1>
                        <p>
                        We pride ourselves on offering a wide variety of 
                        products to cater to all your needs. From everyday 
                        essentials to unique and exclusive items, we strive 
                        to bring you the best options available.
                        <br/ >
                        <p className="intro-heading">Happy shopping!</p>
                        </p>
                        <NavLink to="/products">
                            <Button>Shop Now</Button>
                        </NavLink>
                    </div>

                        <div className="hero-section-image">
                            <figure>
                                <img 
                                    src="images/hero.jpg"
                                    alt="hero-section"
                                    className="img-style" />
                            </figure>
                        </div>
                </div>
            </div>
        </Wrapper>

    )
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .intro-heading{
    font-weight: 1rem;
    font-weight: bold;
  }
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
      font-size: 1.5rem;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
