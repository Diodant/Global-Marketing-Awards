import { FaTwitter, FaInstagram, FaFacebook, FaRss } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className='footer-some'>
          <Link to="/">Главная</Link>
          <Link to="/articles">Статьи</Link>
          <Link to="/gallery">Фото</Link>
          <Link to="/contact">Контакты</Link>
        </div>
        <div>
          <p>© 2019 Global Marketing Awards. All rights reserved.</p>
        </div>
      </div>
      <div className="footer-social-icons">
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://rss.com">
          <FaRss />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
