import React from 'react';
import { CardProps } from '../../interfaces/card.interface';
import styles from './styles.module.scss';

const Card: React.FC<CardProps> = ({
  article,
  author,
  publishedAt,
  urlToImage,
  description,
  title,
  content,
  url
}) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.card__image}
        style={{
          background: `url(${urlToImage}) no-repeat top left`,
          backgroundSize: 'cover'
        }}
      ></div>
      <div className={styles.newsData}>
        <div className={styles.newsData__newsInformation}>
          {author && <span className={styles.author}>{author}</span>}
          {new Date(publishedAt).toLocaleDateString()}
        </div>
        <div className={styles.newsData__title}>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {title}
          </a>
        </div>
        <div className={styles.newsData__description}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
