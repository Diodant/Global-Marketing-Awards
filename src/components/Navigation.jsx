import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import LogoImg from '../img/logo.svg';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-logo">
          {/* <img src={LogoImg} alt="Logo" /> */}
        </div>
        <ul className="navbar-menu">
          <li><NavLink exact to="/" activeClassName="active">Главная</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">О нас</NavLink></li>
          {/* <li><NavLink to="/position" activeClassName="active">Положения</NavLink></li>
          <li><NavLink to="/criteria" activeClassName="active">Критерии оценки</NavLink></li> */}
          <li><NavLink to="/winners" activeClassName="active">Победители</NavLink></li>
          <li><NavLink to="/judges" activeClassName="active">Судьи</NavLink></li>
          <li><NavLink to="/articles" activeClassName="active">Статьи</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
