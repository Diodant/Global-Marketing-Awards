import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import articlesData from './articlesData';

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const replaceTranslatedNames = () => {
      const elements = document.querySelectorAll('[data-translate-custom="true"]');

      elements.forEach((el) => {
        let text = el.textContent;

        text = text
          .replace(/\bVadim Larikov's\b/g, "Vadym Larikov's")
          .replace(/\bVADIM LARIKOV'S\b/g, "VADYM LARIKOV'S")
          .replace(/\bVadim Larikovs\b/g, "Vadym Larikov's")
          .replace(/\bVADIM LARIKOVS\b/g, "VADYM LARIKOV'S")
          .replace(/\bVadim Larrykov's\b/g, "Vadym Larikov's")
          .replace(/\bVADIM LARRYKOV'S\b/g, "VADYM LARIKOV'S")
          .replace(/\bVadim Larrykov\b/g, "Vadym Larikov")
          .replace(/\bVADIM LARRYKOV\b/g, "VADYM LARIKOV")
          .replace(/\bVadim Larikov\b/g, "Vadym Larikov")
          .replace(/\bVADIM LARIKOV\b/g, "VADYM LARIKOV");

        if (el.textContent !== text) {
          el.textContent = text;
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

  const { id } = useParams();
  const article = articlesData.find((article) => article.id === parseInt(id, 10));

  if (!article) {
    return <div>Article not found</div>;
  }

  const siteUrl = 'https://globalmarketingaward.com';
  const articleUrl = article.seoSlug
    ? `${siteUrl}/articles/${article.seoSlug}`
    : `${siteUrl}/articles/${article.id}`;

  const imageUrl =
    typeof article.image === 'string'
      ? `${siteUrl}${article.image.startsWith('/') ? article.image : `/${article.image}`}`
      : `${siteUrl}/preview.png`;

  const description =
    article.seoDescription || article.text || 'Статья Global Marketing Awards';

  const title =
    article.seoTitle || `${article.title} | Global Marketing Awards`;

  const keywords =
    article.seoKeywords || `${article.title}, Global Marketing Awards`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: description,
    image: [imageUrl],
    author: {
      '@type': 'Person',
      name: article.autor,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Global Marketing Awards',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  };

  const hasVadymName = (text) => {
    return (
      text.includes('Вадим Лариков') ||
      text.includes('ВАДИМ ЛАРИКОВ') ||
      text.includes('Вадима Ларикова') ||
      text.includes('ВАДИМА ЛАРИКОВА')
    );
  };

  const splitByVadymName = (text) => {
    return text.split(
      /(Вадим Лариков|ВАДИМ ЛАРИКОВ|Вадима Ларикова|ВАДИМА ЛАРИКОВА)/g
    );
  };

  const renderTextWithReplacement = (text) => {
    const parts = splitByVadymName(text);

    return parts.map((part, partIndex) => {
      if (
        part === 'Вадим Лариков' ||
        part === 'ВАДИМ ЛАРИКОВ' ||
        part === 'Вадима Ларикова' ||
        part === 'ВАДИМА ЛАРИКОВА'
      ) {
        return (
          <span
            key={partIndex}
            data-translate-custom="true"
          >
            {part}
          </span>
        );
      }

      return <React.Fragment key={partIndex}>{part}</React.Fragment>;
    });
  };

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return (
            <p key={index} className="article-paragraph">
              {hasVadymName(block.text)
                ? renderTextWithReplacement(block.text)
                : block.text}
            </p>
          );

        case 'header':
          return (
            <h5 key={index} className="article-header">
              {hasVadymName(block.text)
                ? renderTextWithReplacement(block.text)
                : block.text}
            </h5>
          );

        case 'sub-header':
          return (
            <h6 key={index} className="article-sub-header">
              {hasVadymName(block.text)
                ? renderTextWithReplacement(block.text)
                : block.text}
            </h6>
          );

        case 'image':
          return (
            <img
              key={index}
              src={block.src}
              alt={block.alt}
              className="article-page-image"
            />
          );

        case 'list':
          return (
            <ul key={index} className="position-list">
              <li>
                {hasVadymName(block.text)
                  ? renderTextWithReplacement(block.text)
                  : block.text}
              </li>
            </ul>
          );

        default:
          return null;
      }
    });
  };

  return (
    <>
      <Helmet>
        <html lang="ru" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={articleUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Global Marketing Awards" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Статья Global Marketing Awards</h1>
        </div>
      </div>

      <div className="article-container">
        <div className="article-page">
          <h1 className="article-page-title">
            {hasVadymName(article.title)
              ? renderTextWithReplacement(article.title)
              : article.title}
          </h1>

          <div className="article-meta">
            <span className="article-date">
              <i className="bi bi-calendar icon"></i>
              {article.date}
            </span>
          </div>

          <img
            src={article.image}
            alt={article.imageAlt || article.title}
            className="article-page-image"
          />

          {article.id === 11 && (
            <div className="seo-hidden">
              Vadym Larikov, Вадим Лариков, Global Marketing Awards 2019,
              Marketer of the Year, international marketing award.
            </div>
          )}

          {article.id === 12 && (
            <div className="seo-hidden">
              Vadym Larikov, Вадим Лариков, Global Marketing Awards 2019 winners,
              international marketing award, Marketer of the Year.
            </div>
          )}

          <div className="article-page-content">
            {renderContent(article.content)}
          </div>

          <div className="article-autor">{article.autor}</div>
        </div>
      </div>
    </>
  );
};

export default Article;