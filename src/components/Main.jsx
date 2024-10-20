import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sponsor1 from '../img/sponsors/sponsor1.webp'; 
import sponsor2 from '../img/sponsors/sponsor2.webp';
import sponsor3 from '../img/sponsors/sponsor3.webp';
import sponsor4 from '../img/sponsors/sponsor4.webp';
import sponsor5 from '../img/sponsors/sponsor5.webp';
import sponsor6 from '../img/sponsors/sponsor6.webp';
import backgroundImg from '../img/BG_01-web.jpg'; 
import awardImage from '../img/award.png';
import logoImage from '../img/logo.png';
import EntryInformation from './EntryInformation'

const testimonials = [
    {
      text: "Global Marketing Awards — это уникальная площадка для признания лучших в маркетинге. Каждый год она поднимает стандарты и вдохновляет на новые достижения.",
      author: "Сергей Рожков, директор по Маркетингу."
    },
    {
      text: "Эта премия демонстрирует силу инноваций и креативных подходов, которые меняют индустрию. Для меня честь быть её частью.",
      author: "Анна Петрова, эксперт по стратегическому маркетингу."
    },
    {
      text: "Global Marketing Awards — это знак качества и международного признания для каждого маркетолога, стремящегося быть в авангарде современных тенденций.",
      author: "Дмитрий Васильев, руководитель рекламного агентсва."
    }
  ];

const Main = () => {

    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const handleDotClick = (index) => {
      setActiveTestimonial(index);
    };

    return (
        <>
            <div className="main-content">
                <div className="award-title">
                <div className="award-image">
                    <img src={logoImage} alt="Logo" />
                </div>
                    <h1>Global Marketing Awards</h1>
                    <p>2024 Global Marketing Awards | Открыта с 10 по 20 апреля</p>
                    <Link to="/form" className="enter-button">Подать заявку!</Link>
                </div>
            </div>
            <div className="award-description">
                <h2>
                    Global Marketing Awards – это международная премия, проводимая ежегодно с 2019 года, которая стала символом высочайшего признания профессионализма в сфере маркетинга среди стран СНГ.
                </h2>
                <p className="small-text">
                    На протяжении более пяти лет премия объединяет лучших маркетологов, чьи инновации и выдающиеся достижения формируют будущее индустрии. Премия стала важным событием в мире маркетинга, привлекая внимание профессионалов и организаций, стремящихся к развитию и признанию на международной арене.
                </p>
                <div className='border-b'></div>
                <p className="competition-status">
                Ежегодная премия! | Открыта с 10 по 20 апреля
                </p>
            </div>
            <div className="sponsor-logos">
                <img src={sponsor1} alt="Sponsor 1" />
                <img src={sponsor2} alt="Sponsor 2" />
                <img src={sponsor3} alt="Sponsor 3" />
                <img src={sponsor4} alt="Sponsor 4" />
                <img src={sponsor5} alt="Sponsor 5" />
                <img src={sponsor6} alt="Sponsor 6" />
            </div>
            <div className="cta-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <h2>Международная премия Global Marketing Awards</h2>
                <div className="cta-buttons">
                    <Link to="/form" className="cta-button">Подать заявку</Link>
                    <Link to="/winners" className="cta-button">Смотри победителей</Link> 
                </div>
            </div>
            <div className="about-statuette-section">
                <div className="about-section">
                <div className="fa-container">
                        <span className="fa fa-stack">
                            <i className="fa fa-trophy"></i>
                        </span>
                    </div>
                    <h3>О ПРЕМИИ GLOBAL MARKETING AWARDS</h3>
                    <p>
                    С момента своего основания, Global Marketing Awards стала платформой для обмена опытом и идеями среди ведущих маркетологов СНГ. Ежегодно премия привлекает внимание тысяч специалистов и лидеров отрасли, предоставляя им возможность заявить о себе на международной арене. Премия подчеркивает значимость маркетинга в развитии бизнеса и укреплении брендов, демонстрируя лучшие практики и новаторские подходы.
                    </p>
                </div>
                <div className="statuette-image">
                    <img src={awardImage} alt="Award Statuette" />
                </div>
                <div className="statuette-section">
                <div className="fa-container">
                        <span className="fa fa-stack">
                            <i className="fa fa-trophy"></i>
                        </span>
                    </div>
                    <h3>ТРОФЕЙ</h3>
                    <p>
                    Трофей Global Marketing Awards стал культовым символом превосходства в области маркетинга. Разработанный для того, чтобы олицетворять вершину достижений, этот специально созданный приз является настоящим свидетельством креативности и инноваций. Элегантный, современный дизайн с эффектной звездой наверху признан ведущими маркетинговыми профессионалами по всему миру. Каждый трофей тщательно изготовлен, символизируя заслуженный успех своих обладателей. Награда Global Marketing Awards стоит в одном ряду с самыми престижными наградами в индустрии, отмечая выдающиеся заслуги в маркетинге на международном уровне.
                    </p>
                </div>
                </div>

                <div className="why-global-marketing-section">
                <div className="why-section-content">
                    <div className="why-text">
                        <div className="fa-container">
                            <span className="fa fa-stack fa-3x btn-color-153641 fa-rounded btn-disable-hover">
                                <i className="fa fa-thumbs-up"></i>
                            </span>
                        </div>
                        <h3>Почему выбирают Global Marketing Awards?</h3>
                        <p>
                        Global Marketing Awards – это престижная международная премия, которая признает и отмечает выдающиеся достижения в маркетинге среди стран СНГ.
                        </p>
                        <p>
                        Уникальность премии заключается в строгом отборе участников и международном статусе, что обеспечивает высокие стандарты и признание на международной арене. 
                        </p>
                        <p>
                        Участвуя в Global Marketing Awards, профессионалы получают возможность продемонстрировать свои инновации и достижения, а также обменяться опытом с лидерами индустрии, что помогает им укрепить свои позиции и развивать бизнес на международном уровне.
                        </p>

                        <Link to="/winners" className="see-winners-button">Смотри лист победителей</Link>
                    </div>
                </div>
                <div className="why-left-image">
                </div>
                <div className="why-right-image">
                </div>
                
            </div>
            <EntryInformation />
      <div className="testimonial-section">
        <div className="testimonial-content">
          <p className="testimonial-text">“ {testimonials[activeTestimonial].text} ”</p>
          <p className="testimonial-author">— {testimonials[activeTestimonial].author}</p>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeTestimonial === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
        </>
    );
};

export default Main;
