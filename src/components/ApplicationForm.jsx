import React, { useState } from 'react';
import logoImage from '../img/logo.png';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track if the form is submitted

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Set form as submitted
    console.log('Form Submitted:', formData);
    // You can send this data to your server or an API endpoint here
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className='form-logo'>
          <img src={logoImage} alt="Logo" />
        </div>
        {isSubmitted ? ( // Display success message if form is submitted
          <div className="success-message">
            <p>Ваше заявление было успешно отправлено!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="phone">Телефон:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <button type="submit" className="submit-button">Отправить заявку</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;
