import React, { useState } from 'react';
import sponsor1 from '../img/sponsors/sponsor1.webp'; 
import sponsor2 from '../img/sponsors/sponsor2.webp';
import sponsor3 from '../img/sponsors/sponsor3.webp';
import sponsor4 from '../img/sponsors/sponsor4.webp';
import sponsor5 from '../img/sponsors/sponsor5.webp';
import sponsor6 from '../img/sponsors/sponsor6.webp';
import backgroundImg from '../img/BG_01-web.jpg'; 
import awardImage from '../img/statuettes.png';
import logoImage from '../img/logo.png';
import EntryInformation from './EntryInformation'

const testimonials = [
    {
      text: "The prestige of earning a MarCom award is the final culmination of a tremendous amount of effort for our clients and us. It validates the quality of our work and provides our clients with icing on the cake of a project well executed.",
      author: "TONY ROTUNDO PACIFIC TECHNOLOGY SOLUTIONS, IRVINE, CA"
    },
    {
      text: "Winning a Global Marketing Award helped our agency gain the visibility and trust we needed in the industry.",
      author: "JANE DOE MARKETING DIRECTOR, LONDON, UK"
    },
    {
      text: "This recognition pushed our creativity further, leading to an even more significant impact on our clients' businesses.",
      author: "JOHN SMITH CREATIVE DIRECTOR, NY, USA"
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
                    <p>2024 Global Marketing Awards Now Open! | Deadline Sept. 12</p>
                    <button className="enter-button">Enter Now!</button>
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
                    <button className="cta-button">ENTER NOW</button>
                    <button className="cta-button">SEE 2023 WINNERS!</button>
                </div>
            </div>
            <div className="about-statuette-section">
                <div className="about-section">
                <div className="fa-container">
                        <span className="fa fa-stack">
                            <i className="fa fa-trophy"></i>
                        </span>
                    </div>
                    <h3>ABOUT GLOBAL MARKETING AWARDS</h3>
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
                    <h3>THE STATUETTE</h3>
                    <p>
                    Трофей премии Global Marketing Awards представляет собой символ превосходства в сфере маркетинга и креативности. Выполненный из высококачественного прозрачного акрила с контрастной красной основой, трофей визуально напоминает восхождение на вершину успеха. Верхняя часть украшена музыкальными нотами, символизирующими гармонию и ритм маркетинговой кампании, а центральная надпись включает название премии и имя лауреата. Этот трофей служит признанием за значительный вклад в индустрию маркетинга, олицетворяя труд, инновации и креативные достижения победителей.
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
                        <h3>WHY GLOBAL MARKETING AWARDS?</h3>
                        <p>
                            Global Marketing Awards is the choice of top marketing professionals globally. Thousands of creative firms and agencies participate to receive international recognition.
                        </p>
                        <p>
                            Entry fees are affordable, and the judging process is fair and conducted by a team of full-time professionals. Results are timely, and every entrant gets their chance to shine.
                        </p>
                        <p>
                            Our awards also feature the most comprehensive winner listing in the industry, with dedicated profile pages for each entry that is searchable by location and category.
                        </p>
                        <button className="see-winners-button">SEE WINNERS GALLERY</button>
                    </div>
                </div>
                <div className="why-left-image">
                </div>
                <div className="why-right-image">
                </div>
                
            </div>
            <EntryInformation />
                  {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="testimonial-content">
          <p className="testimonial-text">“ {testimonials[activeTestimonial].text} ”</p>
          <p className="testimonial-author">— {testimonials[activeTestimonial].author}</p>
        </div>

        {/* Dots for navigating through testimonials */}
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
