import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Chartreuse XOXO pabst austin brunch. Iceland vinyl raw denim,
            activated charcoal plaid vice synth cliche DSA narwhal. Taiyaki wolf
            bushwick, jean shorts man braid photo booth ugh direct trade.{' '}
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
