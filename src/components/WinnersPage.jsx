import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const winnersData = [
  {
    year: 2019,
    items: [
      {
        category: 'Маркетолог Года',
        name: 'ВАДИМ ЛАРИКОВ',
        country: 'Украина',
        text1: 'За стратегическое руководство агентством UAMASTER, благодаря которому была реализована масштабная трансформация маркетинговых процессов.',
      },
      {
        category: 'Лучший Digital-Маркетинг Проект',
        name: 'Анна Козлова',
        country: 'Украина',
        text1: 'За создание успешной digital-кампании, охватившей более миллиона пользователей в социальных сетях.',
      },
      {
        category: 'Инновация Года в Маркетинге',
        name: 'Алексей Смирнов',
        country: 'Беларусь',
        text1: 'За внедрение новых технологий в анализ и сегментацию целевой аудитории, что позволило увеличить эффективность кампаний.',
      },
      {
        category: 'Бренд Года',
        name: 'Гульмира Сагиндыкова',
        country: 'Казахстан',
        text1: 'За успешное продвижение национального бренда на международный рынок.',
      },
      {
        category: 'Лучший Социальный Проект',
        name: 'Наталья Лебедева',
        country: 'Молдова',
        text1: 'За реализацию кампании по поддержке экологических инициатив, привлекшей широкое общественное внимание.',
      },
    ],
  },
  {
    year: 2020,
    items: [
      {
        category: 'Маркетолог Года',
        name: 'Татьяна Кузнецова',
        country: 'Беларусь',
        text1: 'За выдающийся вклад в развитие бренда и увеличение его узнаваемости на международном уровне.',
      },
      {
        category: 'Лучший Digital-Маркетинг Проект',
        name: 'Максим Ершов',
        country: 'Россия',
        text1: 'За создание интерактивной платформы для привлечения и удержания клиентов.',
      },
      {
        category: 'Инновация Года в Маркетинге',
        name: 'Дмитрий Соколов',
        country: 'Казахстан',
        text1: 'За внедрение новых подходов в контент-маркетинге, что позволило значительно увеличить вовлеченность аудитории.',
      },
      {
        category: 'Бренд Года',
        name: 'Виктория Грин',
        country: 'Украина',
        text1: 'За успешный ребрендинг и укрепление позиций компании на рынке СНГ.',
      },
      {
        category: 'Лучший Социальный Проект',
        name: 'Алина Рожкова',
        country: 'Россия',
        text1: 'За проведение социальной кампании по поддержке образования среди молодежи.',
      },
    ],
  },
  {
    year: 2021,
    items: [
      {
        category: 'Маркетолог Года',
        name: 'Елена Гласенко',
        country: 'УКРАИНА',
        text1: 'За разработку уникальной digital-кампании, которая привлекла рекордное количество новых клиентов и увеличила онлайн-продажи на 50%.',
      },
      {
        category: 'Лучший Digital-Маркетинг Проект',
        name: 'Гульнара Ахметова',
        country: 'Казахстан',
        text1: 'За успешную digital-кампанию, направленную на продвижение новых продуктов.',
      },
      {
        category: 'Инновация Года в Маркетинге',
        name: 'Мария Ткаченко',
        country: 'Беларусь',
        text1: 'За создание инновационной платформы для анализа потребительского поведения.',
      },
      {
        category: 'Бренд Года',
        name: 'Елена Смирнова',
        country: 'Украина',
        text1: 'За развитие и продвижение бренда на международной арене.',
      },
      {
        category: 'Лучший Социальный Проект',
        name: 'Алексей Васильев',
        country: 'Молдова',
        text1: 'За реализацию кампании по поддержке благотворительных инициатив.',
      },
    ],
  },
  {
    year: 2022,
    items: [
      {
        category: 'Маркетолог Года',
        name: 'Ирина Романова',
        country: 'Украина',
        text1: 'За выдающиеся достижения в области стратегического маркетинга и укрепление позиций компании на рынке.',
      },
      {
        category: 'Лучший Digital-Маркетинг Проект',
        name: 'Сергей Ильин',
        country: 'Россия',
        text1: 'За успешное проведение цифровой маркетинговой кампании, которая привела к значительному увеличению продаж.',
      },
      {
        category: 'Инновация Года в Маркетинге',
        name: 'Айнур Абдрахманова',
        country: 'Казахстан',
        text1: 'За внедрение новых методов в персонализированную рекламу.',
      },
      {
        category: 'Бренд Года',
        name: 'Виктория Грин',
        country: 'Беларусь',
        text1: 'За создание мощного и узнаваемого бренда, который стал лидером на национальном рынке.',
      },
      {
        category: 'Лучший Социальный Проект',
        name: 'Дильшод Ахмедов',
        country: 'Узбекистан',
        text1: 'За разработку и проведение кампании по продвижению здорового образа жизни.',
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        category: 'Маркетолог Года',
        name: 'Наталья Кузнецова',
        country: 'Россия',
        text1: 'За разработку и реализацию стратегии, позволившей компании занять лидирующие позиции в отрасли.',
      },
      {
        category: 'Лучший Digital-Маркетинг Проект',
        name: 'Тимур Сулейманов',
        country: 'Азербайджан',
        text1: 'За создание и успешное внедрение комплексной digital-кампании.',
      },
      {
        category: 'Инновация Года в Маркетинге',
        name: 'Алина Васильева',
        country: 'Беларусь',
        text1: 'За внедрение новых технологий в аналитике маркетинга.',
      },
      {
        category: 'Бренд Года',
        name: 'Александр Иванов',
        country: 'Украина',
        text1: 'За успешный ребрендинг компании, который привел к увеличению ее рыночной доли.',
      },
      {
        category: 'Лучший Социальный Проект',
        name: 'Зарина Абдуллаева',
        country: 'Таджикистан',
        text1: 'За реализацию масштабной социальной кампании, направленной на улучшение качества жизни.',
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        category: 'Маркетолог Года',
        name: 'Марина Иванова',
        country: 'Россия',
        text1: 'За создание и реализацию инновационной маркетинговой стратегии, увеличившей рыночную долю компании на 25%.',
      },
      {
        category: 'Лучший Digital-Маркетинг Проект',
        name: 'Роман Коваленко',
        country: 'Украина',
        text1: 'За успешную реализацию масштабной онлайн-кампании, привлекшей более 1 миллиона новых пользователей.',
      },
      {
        category: 'Инновация Года в Маркетинге',
        name: 'Жанна Бекенова',
        country: 'Казахстан',
        text1: 'За разработку и внедрение уникальной технологии персонализированного маркетинга.',
      },
      {
        category: 'Бренд Года',
        name: 'Виктория Грин',
        country: 'Беларусь',
        text1: 'За создание мощного и узнаваемого бренда, завоевавшего лидирующие позиции на рынке СНГ.',
      },
      {
        category: 'Лучший Социальный Проект',
        name: 'Дильшод Ахмедов',
        country: 'Узбекистан',
        text1: 'За разработку и проведение кампании по продвижению здорового образа жизни, охватившей более 2 миллионов человек.',
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        category: 'Маркетолог Года',
        name: 'АЙГЕРИМ СУЛЕЙМЕНОВА',
        country: 'КАЗАХСТАН',
        text1: 'За лидерство в цифровой трансформации маркетинга и внедрение data-driven подхода, обеспечившего устойчивый рост аудитории и продаж.',
      },
      {
        category: 'Лучший Digital-Маркетинг Проект',
        name: 'ДЕНИС КОВАЛЁВ',
        country: 'БЕЛАРУСЬ',
        text1: 'За запуск performance-кампании с персонализацией на основе AI, которая повысила конверсию и существенно расширила охват в ключевых цифровых каналах.',
      },
      {
        category: 'Инновация Года в Маркетинге',
        name: 'ЛЕЙЛА МАМЕДОВА',
        country: 'АЗЕРБАЙДЖАН',
        text1: 'За внедрение AI-алгоритмов для автоматизации сегментации и персонализации предложений, что заметно увеличило вовлеченность и эффективность маркетинговых инвестиций.',
      },
      {
        category: 'Бренд Года',
        name: 'АРСЕН ГРИГОРЯН',
        country: 'АРМЕНИЯ',
        text1: 'За развитие бренд-стратегии и масштабирование коммуникаций на международных рынках, укрепившее позиции бренда и повысившее узнаваемость.',
      },
      {
        category: 'Лучший Социальный Проект',
        name: 'ЭЛЬВИРА УСМАНОВА',
        country: 'УЗБЕКИСТАН',
        text1: 'За реализацию социально значимой коммуникационной инициативы на стыке ESG и репутационного PR, повысившей доверие аудитории и медийный резонанс.',
      },
    ],
  },
    {
    year: 2026,
    items: [
      {
        category: 'Маркетолог Года',
        name: 'НАТАЛЬЯ ОРЛОВА',
        country: 'РОССИЯ',
        text1: 'За развитие и практическое внедрение запатентованной технологии AI-управляемой real-time адаптации бренд-коммуникации, повысившей эффективность digital-кампаний и стандарты ответственного использования психографических данных.',
      },
      {
        category: 'Лучший Digital-Маркетинг Проект',
        name: 'АРТЁМ САРЫБАЕВ',
        country: 'КАЗАХСТАН',
        text1: 'За запуск омниканальной performance-стратегии с динамической оптимизацией креативов и посадочных сценариев, обеспечившей рост конверсии и снижение стоимости привлечения.',
      },
      {
        category: 'Инновация Года в Маркетинге',
        name: 'СВЕТЛАНА МИРОНОВА',
        country: 'БЕЛАРУСЬ',
        text1: 'За внедрение AI-моделей для прогнозирования поведения аудитории и автоматизации персонализации коммуникаций, что увеличило вовлеченность и окупаемость маркетинговых инвестиций.',
      },
      {
        category: 'Бренд Года',
        name: 'ГЕОРГИЙ АРУТЮНЯН',
        country: 'АРМЕНИЯ',
        text1: 'За создание устойчивой бренд-архитектуры и масштабирование коммуникаций на международных рынках, укрепившее позиции бренда и повысившее узнаваемость в ключевых категориях.',
      },
      {
        category: 'Лучший Социальный Проект',
        name: 'ФАРИДА ЮСУПОВА',
        country: 'УЗБЕКИСТАН',
        text1: 'За реализацию социально значимой инициативы на стыке ESG, просвещения и цифровой безопасности, повысившей доверие аудитории и обеспечившей широкий общественный резонанс.',
      },
    ],
  },
];

const translatableNames = ['Елена Гласенко', 'ВАДИМ ЛАРИКОВ'];

const WinnersPage = () => {
  const [selectedYear, setSelectedYear] = useState(2019);
  const selectedYearData = winnersData.find((data) => data.year === selectedYear);

  useEffect(() => {
    const correctionMap = {
      'Елена Гласенко': {
        'Elena Glasenko': 'Olena Glasenko',
        'Yelena Glasenko': 'Olena Glasenko',
        'Yelena Glasenko': 'Olena Glasenko',
        'HELENA GLASENKO': 'OLENA GLASENKO',
        'ELENA GLASENKO': 'OLENA GLASENKO',
      },
      'ВАДИМ ЛАРИКОВ': {
        'Vadim Larikov': 'Vadym Larikov',
        'VADIM LARIKOV': 'VADYM LARIKOV',
        'Vadim Larrykov': 'Vadym Larikov',
        'Вадим Лариков': 'ВАДИМ ЛАРИКОВ',
      },
    };

    const replaceTranslatedNames = () => {
      const elements = document.querySelectorAll('[data-translate-custom="true"]');

      elements.forEach((el) => {
        const originalName = el.getAttribute('data-original-name');
        const currentText = el.textContent.trim();

        if (
          originalName &&
          correctionMap[originalName] &&
          correctionMap[originalName][currentText]
        ) {
          el.textContent = correctionMap[originalName][currentText];
        }
      });
    };

    replaceTranslatedNames();

    const observer = new MutationObserver(() => {
      replaceTranslatedNames();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  const siteUrl = 'https://globalmarketingaward.com/winners';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Победители Global Marketing Awards',
    url: siteUrl,
    description:
      'Победители Global Marketing Awards за разные годы, включая Vadym Larikov.',
    mentions: [
      {
        '@type': 'Person',
        name: 'Vadym Larikov',
        alternateName: 'Вадим Лариков',
        award: 'Маркетолог Года',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>
          Победители Global Marketing Awards | В списке победителей: Vadym Larikov
          (Вадим Лариков) и другие лауреаты.
        </title>
        <meta
          name="description"
          content="Победители Global Marketing Awards за 2019–2025 годы. В списке победителей: Vadym Larikov (Вадим Лариков) и другие лауреаты."
        />
        <meta
          name="keywords"
          content="Vadym Larikov, Вадим Лариков, Global Marketing Awards, победители маркетинговой премии, маркетолог года"
        />
        <link rel="canonical" href={siteUrl} />

        <meta
          property="og:title"
          content="Победители Global Marketing Awards | Vadym Larikov"
        />
        <meta
          property="og:description"
          content="Победители Global Marketing Awards за 2019–2025 годы, включая Vadym Larikov."
        />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Победители Global Marketing Awards | Vadym Larikov"
        />
        <meta
          name="twitter:description"
          content="Победители Global Marketing Awards, включая Vadym Larikov."
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <span className="seo-hidden">Vadym Larikov</span>

      <div className="winners-page-container">
        <div className="winners-hero-section">
          <div className="overlay"></div>
          <div className="hero-text">
            <h1>Победители Global Marketing Awards</h1>
          </div>
        </div>

        <div className="winners-section">
          <div className="year-buttons">
            {winnersData.map((yearData) => (
              <button
                key={yearData.year}
                onClick={() => setSelectedYear(yearData.year)}
              >
                {yearData.year}
              </button>
            ))}
          </div>

          {selectedYearData && (
            <div className="winners-list">
              <h2 className="winners-title">Победители {selectedYear}</h2>

              {selectedYearData.items.map((item, index) => (
                <div key={index} className="winner-item">
                  <div className="winners-category">{item.category}</div>

                  <h3
                    data-translate-custom={
                      translatableNames.includes(item.name) ? 'true' : 'false'
                    }
                    data-original-name={item.name}
                  >
                    {item.name}
                  </h3>

                  <div className="winners-country">{item.country}</div>
                  <p>{item.text1}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WinnersPage;