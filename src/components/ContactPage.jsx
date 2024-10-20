import React from 'react';

const ContactPage = () => {
  return (
    <>
      <div className="hero-section-contact">
        <div className="contact-overlay"></div>
        <div className="hero-text">
          <h1>Контакты</h1>
        </div>
      </div>

      <div className="contact-info-section">
        <h2>Ассоциация профессиональных маркетологов</h2>
        <p><strong>Телефон:</strong> +7 917-75-68-333</p>
        <p><strong>Электронная почта:</strong> <a href="mailto:tvoi.marketolog@gmail.com">tvoi.marketolog@gmail.com</a></p>
      </div>
    </>
  );
};

export default ContactPage;
