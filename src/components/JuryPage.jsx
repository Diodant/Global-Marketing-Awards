import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Juru_1 from '../img/jury/jury_1.jpg'
import Juru_2 from '../img/jury/jury_2.jpg'
import Juru_3 from '../img/jury/jury_3.png'
import Juru_4 from '../img/jury/jury_4.jpg'
import Juru_5 from '../img/jury/jury_5.jpg'
import Juru_6 from '../img/jury/jury_6.png'
import Juru_7 from '../img/jury/jury_7.jpg'
import Juru_8 from '../img/jury/jury_8.png'
import Juru_9 from '../img/jury/jury_9.png'
import Juru_10 from '../img/jury/jury_10.jpg'
import Juru_11 from '../img/jury/jury_11.jpeg'
import Juru_12 from '../img/jury/jury_12.jpg'
import Juru_13 from '../img/jury/jury_13.jpg'
import Juru_14 from '../img/jury/jury_14.jpg'
import Juru_15 from '../img/jury/jury_15.jpg'
import Juru_16 from '../img/jury/jury_16.jpg'
import Juru_17 from '../img/jury/jury_17.jpg'
import Juru_18 from '../img/jury/jury_18.jpg'
import Juru_19 from '../img/jury/jury_19.jpg'
import Juru_20 from '../img/jury/jury_20.jpg'
import Juru_21 from '../img/jury/jury_21.jpg'
import Juru_22 from '../img/jury/jury_22.jpg'
import Juru_23 from '../img/jury/jury_23.jpg'
import Juru_24 from '../img/jury/jury_24.jpeg'
import Juru_25 from '../img/jury/jury_25.jpg'
import Juru_26 from '../img/jury/jury_29.jpg'
import Juru_27 from '../img/jury/78668.jpg'
import Juru_28 from '../img/jury/jury_27.jpg'
import Juru_29 from '../img/jury/jury_26.png'
import Juru_30 from '../img/jury/jury_30.jpg'
import Juru_31 from '../img/jury/jury_31.png'
import Juru_32 from '../img/jury/jury_32.jpg'
import Juru_33 from '../img/jury/jury_33.jpg'
import Juru_34 from '../img/jury/jury_34.jpeg'
import Juru_35 from '../img/jury/jury_36.jpg'
import Juru_36 from '../img/jury/jury_36.jfif'
import Juru_37 from '../img/jury/jury_37.webp'
import Juru_38 from '../img/jury/jury_38.jpg'
import Juru_39 from '../img/jury/jury_39.jpg'
import Juru_40 from '../img/jury/jury_40.jfif'

const juryMembers = [
  { year: 2019, name: "Иван Козлов", country: "Россия", title: "Руководитель отдела маркетинга крупной IT-компании", imgSrc: Juru_1 },
  { year: 2019, name: "Анна Шевченко", country: "Украина", title: "Специалист по стратегическому маркетингу", imgSrc: Juru_2 },
  { year: 2019, name: "Алихан Сагдиев", country: "Казахстан", title: "Эксперт в области цифрового маркетинга", imgSrc: Juru_3 },
  { year: 2019, name: "Мария Петрова", country: "Беларусь", title: "Директор по маркетингу в ритейл-секторе", imgSrc: Juru_4 },
  { year: 2019, name: "Татьяна Иванова", country: "Молдова", title: "Руководитель отдела маркетинга в FMCG", imgSrc: Juru_5 },
  
  { year: 2020, name: "Дмитрий Соколов", country: "Россия", title: "Специалист по маркетинговым исследованиям", imgSrc: Juru_6 },
  { year: 2020, name: "Ольга Киреева", country: "Беларусь", title: "Эксперт по брендингу", imgSrc: Juru_7 },
  { year: 2020, name: "Азамат Жумабеков", country: "Казахстан", title: "Руководитель отдела цифрового маркетинга", imgSrc: Juru_8 },
  { year: 2020, name: "Виктория Левченко", country: "Украина", title: "Специалист по контент-маркетингу", imgSrc: Juru_9 },
  { year: 2020, name: "Наргыз Аманбекова", country: "Казахстан", title: "Автор методики «Настройка рекламы по психотипу пользователей на основе контента соцсетей»", imgSrc: Juru_10 },
  
  { year: 2021, name: "Игорь Луковский", country: "Беларусь", title: 'Директор по маркетингу ООО "Mega Research"', imgSrc: Juru_19 },
  { year: 2021, name: "Анна Алексеева", country: "Украина", title: "Директор по маркетингу ООО «ОПТИМУМ МЕДИА УКРАИНА»", imgSrc: Juru_20 },
  { year: 2021, name: "Роман Шлыков", country: "Украина", title: 'Директор по маркетингу рекламного агентства Netpeak Украина.', imgSrc: Juru_13 },
  { year: 2021, name: "Дарья Павлова", country: "Украина", title: "Специалист по маркетинговой аналитике", imgSrc: Juru_14 },
  { year: 2021, name: "Тимур Исаев", country: "Узбекистан", title: "Руководитель отдела маркетинга в технологической компании", imgSrc: Juru_15 },
  
  { year: 2022, name: "Партизпанян Айк", country: "Армения", title: "Директор по маркетингу Publicis Armenia", imgSrc: Juru_16 },
  { year: 2022, name: "Александр Смирнов", country: "Россия", title: "Эксперт в области маркетинговых технологий", imgSrc: Juru_17 },
  { year: 2022, name: "Мария Ким", country: "Казахстан", title: "Руководитель отдела маркетинга в крупной розничной сети", imgSrc: Juru_18 },
  { year: 2022, name: "Сергей Волков", country: "Россия", title: "Руководитель маркетингового отдела в IT-компании", imgSrc: Juru_11 },
  { year: 2022, name: "Алия Ибраимова", country: "Казахстан", title: "Специалист по бренд-стратегиям", imgSrc: Juru_12 },
  
  { year: 2023, name: "Андрей Сергеев", country: "Россия", title: "Эксперт по маркетинговым стратегиям", imgSrc: Juru_21 },
  { year: 2023, name: "Елена Новикова", country: "Беларусь", title: "Специалист по маркетинговым исследованиям", imgSrc: Juru_22 },
  { year: 2023, name: "Ерлан Сатыбаев", country: "Казахстан", title: "Руководитель отдела digital-маркетинга", imgSrc: Juru_23 },
  { year: 2023, name: "Светлана Литвиненко", country: "Украина", title: "Специалист по социальным проектам в маркетинге", imgSrc: Juru_24 },
  { year: 2023, name: "Азат Касымов", country: "Узбекистан", title: "Руководитель маркетинговых программ", imgSrc: Juru_25 },
  
  { year: 2024, name: "Анна Алексеева", country: "Украина", title: "Международный эксперт в области стратегического и технологического маркетинга, автор запатентованной системы прогнозирования спроса.", imgSrc: Juru_27 },
  { year: 2024, name: "Михаил Ковалев", country: "Беларусь", title: "Эксперт по маркетинговым стратегиям в IT-секторе", imgSrc: Juru_26 },
  { year: 2024, name: "Айжан Тулебаева", country: "Казахстан", title: "Специалист по брендингу и продвижению на международных рынках", imgSrc: Juru_29 },
  { year: 2024, name: "Алексей Мельников", country: "Украина", title: "Руководитель отдела digital-маркетинга в ведущем e-commerce проекте", imgSrc: Juru_28 },
  { year: 2024, name: "Гульмира Абдрахманова", country: "Узбекистан", title: "Эксперт по социальным и благотворительным маркетинговым кампаниям", imgSrc: Juru_30 },

  { year: 2025, name: "Илья Макаров", country: "Россия", title: "Директор по продуктовый маркетингу в крупной IT-компании. Специализируется на B2B-growth, запуске SaaS-продуктов и построении воронок с опорой на аналитику, LTV/CAC и unit-экономику.", imgSrc: Juru_31 },
  { year: 2025, name: "Кристина Лупу", country: "Молдова", title: "Стратег по маркетингу и развитию брендов. Разрабатывает позиционирование, коммуникационные платформы и go-to-market стратегии для компаний в конкурентных категориях.", imgSrc: Juru_32 },
  { year: 2025, name: "Темирлан Беков", country: "Казахстан", title: "Эксперт по цифровому маркетингу. Фокус: performance-стратегии, оптимизация ROAS/CPA, автоматизация закупки и управление кросс-канальными кампаниями.", imgSrc: Juru_33 },
  { year: 2025, name: "Вероника Степаненко", country: "Беларусь", title: "Директор по маркетингу в ритейле. Опыт в развитии CRM и лояльности, retail media, мерчандайзинге и интеграции онлайн- и офлайн-каналов.", imgSrc: Juru_34 },
  { year: 2025, name: "Екатерина Кухилава", country: "Россия", title: "Международный эксперт в области MarTech, интеллектуальной персонализации и real-time адаптации цифровых коммуникаций. Специализируется на создании высокоточных систем взаимодействия с аудиторией. Автор профессиональных публикаций и правообладатель патентного решения в сфере маркетинговых технологий.", imgSrc: Juru_35 },

  { year: 2026, name: "Анвар Агаев", country: "Азербайджан", title: "Эксперт по стратегическому маркетингу и развитию брендов. Специализируется на построении коммуникационных платформ, brandformance-подходах и управлении эффективностью маркетинговых инвестиций в международных проектах.", imgSrc: Juru_36 },
  { year: 2026, name: "Данияр Алимбаев", country: "Казахстан", title: "Руководитель направления digital и performance-маркетинга. Фокус: омниканальные стратегии, оптимизация CPA/ROAS, автоматизация закупки трафика и внедрение data-driven моделей принятия решений.", imgSrc: Juru_37 },
  { year: 2026, name: "Илья Макаров", country: "Россия", title: "Директор по продуктовому маркетингу в крупной IT-компании. Специализируется на B2B-growth, запуске SaaS-продуктов и построении воронок с опорой на аналитику, LTV/CAC и unit-экономику.", imgSrc: Juru_38 },
  { year: 2026, name: "Кристина Лупу", country: "Молдова", title: "Стратег по маркетингу и развитию брендов. Разрабатывает позиционирование, коммуникационные платформы и go-to-market стратегии для компаний в конкурентных категориях.", imgSrc: Juru_39 },
  { year: 2026, name: "Темирлан Беков", country: "Казахстан", title: "Эксперт по цифровому маркетингу. Фокус: performance-стратегии, оптимизация ROAS/CPA, автоматизация закупки и управление кросс-канальными кампаниями.", imgSrc: Juru_40 },
];

const JuryPage = () => {

useEffect(() => {
const rules = [
  // ✅ Анна Алексеева
  { re: /Анна\s+Алексеева/g, to: "Hanna Alieksieieva" },
  { re: /Анны\s+Алексеевой/g, to: "Hanna Alieksieieva" },
  { re: /\bAnna\s+Alekseeva\b/g, to: "Hanna Alieksieieva" },
  { re: /\bAlekseeva\s+Anna\b/g, to: "Hanna Alieksieieva" },
  { re: /\bHanna\s+Alieksieva\b/g, to: "Hanna Alieksieieva" },

  // ✅ Екатерина Кухилава
  { re: /Екатерина\s+Кухилава/g, to: "Ekaterina Kukhilava" },
  { re: /Екатерины\s+Кухилавой/g, to: "Ekaterina Kukhilava" },
  { re: /Екатерине\s+Кухилавой/g, to: "Ekaterina Kukhilava" },
  { re: /Екатерину\s+Кухилаву/g, to: "Ekaterina Kukhilava" },
  { re: /\bEkaterina\s+Kuhilava\b/g, to: "Ekaterina Kukhilava" },
  { re: /\bKuhilava\s+Ekaterina\b/g, to: "Ekaterina Kukhilava" },
  { re: /\bKukhilava\s+Ekaterina\b/g, to: "Ekaterina Kukhilava" },
  { re: /\bCatherine\s+Kuhilava\b/g, to: "Ekaterina Kukhilava" },
  { re: /\bCatherine\s+Kukhilava\b/g, to: "Ekaterina Kukhilava" },

  // ✅ Игорь Луковский
  { re: /Игорь\s+Луковский/g, to: "Ihar Lukouski" },
  { re: /\bIgor\s+Lukovsky\b|\bIhar\s+Lukovsky\b|\bIgor\s+Lukouski\b/g, to: "Ihar Lukouski" }
];
  const normalize = (s) => s.replace(/\s+/g, " ").trim();

  function isBrowserTranslated() {
    const html = document.documentElement;
    // Chrome/Edge translate обычно ставит эти классы
    if (html.classList.contains("translated-ltr") || html.classList.contains("translated-rtl")) return true;
    // иногда виден баннер/iframe
    if (document.querySelector("iframe.goog-te-banner-frame")) return true;
    return false;
  }

  const replaceInside = (root) => {
    // ✅ работаем только когда реально включён перевод
    if (!isBrowserTranslated()) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    let node;

    while ((node = walker.nextNode())) {
      const original = node.nodeValue;
      let updated = original;

      for (const { re, to } of rules) updated = updated.replace(re, to);

      if (normalize(updated) !== normalize(original)) node.nodeValue = updated;
    }
  };

  // небольшой debounce, чтобы не долбить DOM сотни раз
  let raf = 0;
  const run = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      document
        .querySelectorAll('[data-translate-custom="true"]')
        .forEach((el) => replaceInside(el));
    });
  };

  run();

  const observer = new MutationObserver(run);
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });

  // “пинок” на случай, когда переводчик меняет без мутаций
  const t = setInterval(run, 600);

  return () => {
    observer.disconnect();
    clearInterval(t);
    cancelAnimationFrame(raf);
  };
}, []);

  return (
    <>
 <Helmet>
  <title>
    Жюри Global Marketing Awards | Международные эксперты маркетинга
  </title>

  <meta
    name="description"
    content="Жюри Global Marketing Awards — международные эксперты в области маркетинга, стратегий и digital. В составе жюри — Анна Алексеева (Hanna Alieksieieva), Роман Шлыков (Roman Shlykov), Екатерина Кухилава (Ekaterina Kukhilava) и другие признанные специалисты."
  />

  <meta
    name="keywords"
    content="жюри маркетинга, Global Marketing Awards, Анна Алексеева, Hanna Alieksieieva, Роман Шлыков, Roman Shlykov, эксперты маркетинга, digital marketing experts"
  />

<link rel="canonical" href="https://globalmarketingaward.com/judges" />
<meta property="og:url" content="https://globalmarketingaward.com/judges" />

  {/* Open Graph */}
  <meta property="og:title" content="Жюри Global Marketing Awards" />
  <meta
    property="og:description"
    content="Жюри Global Marketing Awards — международные эксперты в области маркетинга, стратегий и digital. В составе жюри — Анна Алексеева (Hanna Alieksieieva), Роман Шлыков (Roman Shlykov), Екатерина Кухилава (Ekaterina Kukhilava) и другие признанные специалисты."
  />
  <meta property="og:type" content="website" />

  {/* JSON-LD */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Жюри Global Marketing Awards",
      "itemListElement": [
        {
          "@type": "Person",
          "name": "Hanna Alieksieieva",
          "alternateName": "Анна Алексеева",
          "jobTitle": "Marketing Expert",
          "description": "Эксперт в области стратегического маркетинга и предиктивной аналитики"
        },
        {
          "@type": "Person",
          "name": "Roman Shlykov",
          "alternateName": "Роман Шлыков",
          "jobTitle": "Marketing Director",
          "description": "SEO-гуру и директор по маркетингу, разработавший систему анализа ключевых слов, увеличившую конверсию сайтов на 80%"
        },
                {
          "@type": "Person",
          "name": "Ekaterina Kukhilava",
          "alternateName": "Екатерина Кухилава",
          "jobTitle": "Marketing Director",
          "description": "Международный эксперт в области MarTech, интеллектуальной персонализации и real-time адаптации цифровых коммуникаций. Специализируется на создании высокоточных систем взаимодействия с аудиторией. Автор профессиональных публикаций и правообладатель патентного решения в сфере маркетинговых технологий."
        }
      ]
    })}
  </script>
</Helmet>
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Критерии отбора жюри для Global Marketing Awards</h1>
        </div>
      </div>

      <div className="agenda-container">
        <div className="criteria-grid">
          <div className="criteria-item">
            <div className="criteria-number">1</div>
            <h3>Профессиональный опыт</h3>
            <p>
              Кандидат на роль члена жюри должен иметь не менее трех лет опыта работы на
              руководящих позициях в известных маркетинговых компаниях. Это предполагает
              наличие успешного опыта управления крупными маркетинговыми проектами,
              разработки стратегий, внедрения инновационных решений и достижения значимых
              результатов в сфере маркетинга.
            </p>
          </div>

          <div className="criteria-item">
            <div className="criteria-number">2</div>
            <h3>Международный опыт</h3>
            <p>
              Кандидат должен иметь опыт работы на международных рынках, включая проекты
              или кампании, успешно реализованные в разных странах, предпочтительно в
              странах СНГ. Понимание глобальных трендов и способность оценивать проекты с
              учетом международного контекста.
            </p>
          </div>

          <div className="criteria-item">
            <div className="criteria-number">3</div>
            <h3>Экспертность в отрасли</h3>
            <p>
              Кандидат должен быть признанным экспертом в своей области, иметь публикации,
              выступления на международных конференциях или участие в профессиональных
              ассоциациях. Глубокое знание современных маркетинговых технологий, инструментов и
              методов.
            </p>
          </div>

          <div className="criteria-item">
            <div className="criteria-number">4</div>
            <h3>Независимость и объективность</h3>
            <p>
              Члены жюри должны демонстрировать независимость в принятии решений и
              объективность при оценке проектов. Отсутствие конфликтов интересов, связанных с
              участниками премии или их проектами.
            </p>
          </div>

          <div className="criteria-item">
            <div className="criteria-number">5</div>
            <h3>Репутация</h3>
            <p>
              Кандидат должен обладать безупречной профессиональной репутацией,
              подтвержденной рекомендациями коллег и партнёров по бизнесу. Признание в
              профессиональном сообществе, включая награды и другие знаки отличия.
            </p>
          </div>

          <div className="criteria-item">
            <div className="criteria-number">6</div>
            <h3>Этические стандарты</h3>
            <p>
              Члены жюри должны придерживаться высоких этических стандартов, уважать
              конфиденциальность предоставляемой информации и соблюдать правила честной игры.
            </p>
          </div>
        </div>
      </div>

      {/* Jury section */}
      <div className="jury-section">
    <h3 className='jury_h3'>Жюри Global Marketing Awards — это международные эксперты в области маркетинга, digital и стратегий. В состав жюри входят специалисты из Украины, Казахстана, Беларуси и других стран, обладающие практическим опытом работы с крупными брендами и международными проектами.</h3>
        {juryMembers
          .reduce((years, member) => {
            const yearExists = years.find((y) => y.year === member.year);
            if (yearExists) {
              yearExists.members.push(member);
            } else {
              years.push({ year: member.year, members: [member] });
            }
            return years;
          }, [])
          .map((yearGroup) => (
            <div className="jury-cont" key={yearGroup.year}>
              <h3>Жюри {yearGroup.year} год</h3>
              <div className="jury-grid">
                {yearGroup.members.map((member, index) => (
                  <div key={index} className="jury-card">
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="jury-image"
                    />
                    <h2
                    data-translate-custom={
                      ["Анна Алексеева", "Игорь Луковский", "Екатерина Кухилава"].includes(member.name)
                        ? "true"
                        : "false"
                    }
                    >
                      {member.name}
                    </h2>
                    <p>{member.country}</p>
                    <p>{member.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default JuryPage;
