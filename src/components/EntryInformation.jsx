import React, { useState } from 'react';
import logoImage from '../img/logo.png';
import arrowImage from '../img/right-chevron_9144319.svg';

const EntryInformation = () => {
  const [activeTab, setActiveTab] = useState('criteria');
  const [openSection, setOpenSection] = useState(null); 

  const handleToggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const content = {
    criteria: (
      <>
        <h2>Критерии оценки</h2>
        <p><b>Победители премии Global Marketing Awards определяются на основе следующих критериев:</b></p>
        <ul>
          <li>Инновационность: Насколько уникальными и новаторскими были предложенные маркетинговые решения.</li>
          <li>Эффективность: Результативность кампаний и их влияние на целевую аудиторию и бизнес.</li>
          <li>Влияние на бренд: Вклад в развитие и укрепление бренда на рынке.</li>
          <li>Соответствие целям: Насколько хорошо предложенные стратегии соответствовали заявленным целям и задачам.</li>
          <li>Международное признание: Влияние и признание проектов на международном уровне.</li>
          <li>Профессионализм: Уровень профессиональной подготовки и опыта участников.</li>
        </ul>
        <p>Эти критерии позволяют выделить лучших специалистов, чьи достижения заслуживают признания на высочайшем уровне.</p>
      </>
    ),
    nominations: (
      <>
        <h2>Номинации</h2>
        <ul>
          <li><b>Маркетолог Года</b> – За выдающиеся достижения и вклад в развитие маркетинговой отрасли.</li>
          <li><b>Лучший Digital-Маркетинг Проект</b> – За реализацию наиболее успешной цифровой маркетинговой кампании.</li>
          <li><b>Инновация Года в Маркетинге</b> – За внедрение новых методов и технологий в маркетинг.</li>
          <li><b>Бренд Года</b> – За наиболее успешное продвижение и развитие бренда.</li>
          <li><b>Лучший Социальный Проект</b> – За вклад в продвижение социальных инициатив через маркетинг.</li>
        </ul>
      </>
    ),
    terms: (
      <>
        <h2>Положение о проведении Global Marketing Awards</h2>
        <div>
          <h3 onClick={() => handleToggleSection('section1')} className="toggle-section">
            <img
              src={arrowImage}
              alt="Toggle Arrow"
              className={`arrow-icon ${openSection === 'section1' ? 'open' : ''}`} />
            Общие положения:
          </h3>
          <div className={`collapsible-content ${openSection === 'section1' ? 'open' : ''}`}>
            <p>1.1. Премия Global Marketing Awards проводится ежегодно в период с 10 по 20 апреля.</p>
            <p>1.2. Организатором премии выступает Ассоциация профессиональных маркетологов (официальный сайт: https://profmarketingassociation.ru/).</p>
            <p>1.3. Основной целью премии является выявление и поощрение лучших маркетинговых проектов и специалистов, внесших значительный вклад в развитие отрасли.</p>
            <p>1.4. Премия включает несколько номинаций, каждая из которых охватывает различные аспекты маркетинговой деятельности.</p>
            <p>1.5. Церемония награждения и связанные с ней мероприятия проходят в формате деловых встреч, мастер-классов и нетворкинга, что позволяет участникам обменяться опытом и наладить профессиональные контакты.</p>
          </div>
        </div>
        <div>
          <h3 onClick={() => handleToggleSection('section2')} className="toggle-section">
            <img
              src={arrowImage}
              alt="Toggle Arrow"
              className={`arrow-icon ${openSection === 'section2' ? 'open' : ''}`} />
            Порядок участия:
          </h3>
          <div className={`collapsible-content ${openSection === 'section2' ? 'open' : ''}`}>
              <p>2.1. Заявки на участие в премии принимаются с 20 по 30 марта текущего года.</p>
              <p>2.2. Участниками премии могут быть маркетологи, с опытом работы в отрасли не менее трех лет.</p>
              <p>2.3. Для участия необходимо предоставить полное описание реализованных маркетинговых проектов, включая результаты и достижения, а также подтверждающие документы (отчеты, кейсы, отзывы клиентов и пр.).</p>
              <p>2.4. Участники обязаны соблюдать правила подачи заявок, предоставлять достоверную информацию и действовать в соответствии с этическими нормами.</p>
              <p>2.5. Организаторы оставляют за собой право запросить дополнительную информацию или материалы для более детальной оценки проектов.</p>
              </div>
        </div>
        <div>
          <h3 onClick={() => handleToggleSection('section3')} className="toggle-section">
            <img
              src={arrowImage}
              alt="Toggle Arrow"
              className={`arrow-icon ${openSection === 'section3' ? 'open' : ''}`} />
            Жюри и критерии оценки:
          </h3>
          <div className={`collapsible-content ${openSection === 'section3' ? 'open' : ''}`}>
              <p>3.1. Состав жюри определяется ежегодно и состоит из пяти выдающихся экспертов в области маркетинга с международным признанием, представляющих страны СНГ.</p>
              <p>3.2. Кандидаты на роль жюри отбираются на основе их профессиональных достижений, международного опыта, репутации в профессиональном сообществе и соответствия высоким этическим стандартам.</p>
              <ul>
                <li>Инновационность: Оригинальность и новизна предложенных решений.</li>
                <li>Эффективность: Достижение поставленных целей и результатов.</li>
                <li>Влияние на бренд: Укрепление и развитие бренда.</li>
                <li>Соответствие целевой аудитории: Насколько хорошо проекты отвечают интересам и потребностям целевой аудитории.</li>
                <li>Международное признание: Влияние проектов на международной арене.</li>
                <li>Профессионализм: Уровень профессиональной подготовки и качество выполнения работ.</li>
              </ul>
              <p>3.4. Жюри действует независимо и принимает решения, основываясь на объективных данных, представленных участниками.</p>
              <p>3.5. Каждый член жюри подписывает обязательство о неразглашении информации, связанной с процессом оценки, и обязуется соблюдать принципы независимости и объективности.</p>
              </div>
        </div>
        <div>
          <h3 onClick={() => handleToggleSection('section4')} className="toggle-section">
            <img
              src={arrowImage}
              alt="Toggle Arrow"
              className={`arrow-icon ${openSection === 'section4' ? 'open' : ''}`} />
            Церемония награждения:
          </h3>
          <div className={`collapsible-content ${openSection === 'section4' ? 'open' : ''}`}>
              <p>4.1. Торжественное награждение победителей проходит ежегодно 20 апреля, в финальный день премии.</p>
              <p>4.2. Победители получают дипломы, памятные награды, а также возможность выступить с презентацией своих проектов перед аудиторией, состоящей из лидеров отрасли.</p>
              <p>4.3. В рамках церемонии награждения также организуются панельные дискуссии и мастер-классы с участием членов жюри и приглашенных экспертов.</p>
              <p>4.4. Победители получают широкое медийное освещение, что способствует повышению их профессионального статуса и признанию на международной арене.</p>
              </div>
        </div>
        <div>
          <h3 onClick={() => handleToggleSection('section5')} className="toggle-section">
            <img
              src={arrowImage}
              alt="Toggle Arrow"
              className={`arrow-icon ${openSection === 'section5' ? 'open' : ''}`} />
            Права и обязанности участников:
          </h3>
          <div className={`collapsible-content ${openSection === 'section5' ? 'open' : ''}`}>
              <p>5.1. Участники обязуются соблюдать условия участия, предоставлять достоверную информацию и действовать в рамках установленных правил.</p>
              <p>5.2. Организаторы оставляют за собой право использовать предоставленные материалы для публикаций, презентаций и других информационных целей, связанных с премией.</p>
              <p>5.3. В случае выявления нарушений правил участия или предоставления недостоверной информации, организаторы имеют право дисквалифицировать участника.</p>
              </div>
        </div>
        <div>
          <h3 onClick={() => handleToggleSection('section6')} className="toggle-section">
            <img
              src={arrowImage}
              alt="Toggle Arrow"
              className={`arrow-icon ${openSection === 'section6' ? 'open' : ''}`} />
            Партнеры и спонсоры:
          </h3>
          <div className={`collapsible-content ${openSection === 'section6' ? 'open' : ''}`}>
              <p>6.1. Премия поддерживается ведущими компаниями и организациями, работающими в сфере маркетинга и рекламы.</p>
              <p>6.2. Партнеры премии получают возможность продвижения своих брендов и продуктов в рамках мероприятия, включая упоминание в медийных материалах, размещение логотипов на официальных площадках и участие в церемонии награждения.</p>
              <p>6.3. Спонсоры премии могут предложить свои специальные призы или награды для участников, которые будут вручены на церемонии награждения.</p>
              </div>
        </div>
        <div>
          <h3 onClick={() => handleToggleSection('section7')} className="toggle-section">
            <img
              src={arrowImage}
              alt="Toggle Arrow"
              className={`arrow-icon ${openSection === 'section7' ? 'open' : ''}`} />
            Контактная информация:
          </h3>
          <div className={`collapsible-content ${openSection === 'section7' ? 'open' : ''}`}>
              <p>7.1. Для получения дополнительной информации и разъяснений участники могут связаться с организаторами премии по указанным контактам:</p>
              <ul>
                <li>Телефон: +7 917-75-85-333</li>
                <li>Электронная почта: tvoi.marketolog@yandex.ru</li>
              </ul>
              <p>7.2. Также на нашем официальном сайте доступна форма обратной связи для отправки запросов и предложений.</p>
              </div>
        </div>
      </>
    ),
  };

  return (
    <div className="entry-info-container">

      <div className="entry-header">
        <div className="entry-logo">
          <img src={logoImage} alt="Global Marketing Awards Logo" />
        </div>
        <h1 className="entry-title">ИНФОРМАЦИЯ ДЛЯ УЧАСТНИКОВ</h1>
        <p className="entry-subtitle">Всё, что вам нужно знать для участия в Global Marketing Awards.</p>
      </div>

      <div className="entry-content">
        <div className="category-menu">
          <ul>
            <li className={activeTab === 'criteria' ? 'active' : ''} onClick={() => setActiveTab('criteria')}>
              Критерии оценки
            </li>
            <li className={activeTab === 'nominations' ? 'active' : ''} onClick={() => setActiveTab('nominations')}>
              Номинации
            </li>
            <li className={activeTab === 'terms' ? 'active' : ''} onClick={() => setActiveTab('terms')}>
              Положение о проведении
            </li>
          </ul>
        </div>

        <div className="content-area">{content[activeTab]}</div>
      </div>
    </div>
  );
};

export default EntryInformation;