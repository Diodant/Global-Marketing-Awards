import React from 'react';
import sponsor1 from '../img/sponsors/sponsor1.webp'; 
import sponsor2 from '../img/sponsors/sponsor2.webp';
import sponsor3 from '../img/sponsors/sponsor3.webp';
import sponsor4 from '../img/sponsors/sponsor4.webp';
import sponsor5 from '../img/sponsors/sponsor5.webp';
import sponsor6 from '../img/sponsors/sponsor6.webp';
import backgroundImg from '../img/BG_01-web.jpg'; 
import awardImage from '../img/statuettes.png';
import logoImage from '../img/logo.png';

const Main = () => {
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
                        The Global Marketing Awards recognize excellence in marketing and communication while celebrating creativity, hard work, and achievement by industry professionals.
                    </p>
                    <p>
                        Since its inception in 2019, the Global Marketing Awards have grown into one of the largest and most prestigious competitions in the world, with over 5,000 entries annually. It is administered by the Global Association of Marketing Professionals (GAMP).
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
                        The Global Marketing Award statuette is an iconic symbol of achievement in marketing and communication. Crafted with precision, it graces the shelves of top professionals and organizations globally.
                    </p>
                    <p>
                        This iconic statuette is created by the prestigious Global Awards Design, which also designs trophies for numerous other international competitions.
                    </p>
                </div>
                </div>
        </>
    );
};

export default Main;
