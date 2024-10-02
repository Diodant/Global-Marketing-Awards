import { FaTwitter, FaInstagram, FaFacebook, FaRss } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
        
      <div className="footer-links">
      <div className='footer-some'>
        <a href="#about">About AMCP</a>
        <a href="#faq">FAQ</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#contact">Contact</a>
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
