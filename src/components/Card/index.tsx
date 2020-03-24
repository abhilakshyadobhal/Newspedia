import React from 'react';
import styles from './styles.module.scss';
import { CardProps } from '../../interfaces/card';

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
        <div className={styles.newsData__title}>{title}</div>
        <div className={styles.newsData__description}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
