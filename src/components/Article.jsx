import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articlesData from './articlesData';

const Article = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const article = articlesData.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return <p key={index} className="article-paragraph">{block.text}</p>;
        case 'header':
          return <h5 key={index} className="article-header">{block.text}</h5>;
          case 'sub-header':
            return <h6 key={index} className="article-sub-header">{block.text}</h6>;
        case 'image':
          return <img key={index} src={block.src} alt={block.alt} className="article-page-image" />;
        case 'list':
          return <ul className='position-list'>
            <li key={index}>{block.text}</li>
            </ul>
        default:
          return null;
      }
    });
  };

  return ( 
    <>
          <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>Статья Global Marketing Awards</h1>
        </div>
      </div>
    <div className="article-container">
      <div className="article-page">
        <h1 className="article-page-title">{article.title}</h1>
        <div className="article-meta">
          <span className="article-date"><i className="bi bi-calendar icon"></i>{article.date}</span>
        </div>
        <img src={article.image} alt={article.title} className="article-page-image" />
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
