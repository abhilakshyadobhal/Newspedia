import React, { useState, useEffect, useCallback } from 'react';
import { getTopNewHeadLines } from '../../services/getTopNewsHeadlines';
import Card from '../Card';
import { CardProps } from '../../interfaces/card';
import styles from './styles.module.scss';
import Loader from '../Loader';
import Error from '../Error';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsData, setNewsData] = useState([]);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getTopNewHeadLines();
      console.log(res.articles);
      setNewsData(res.articles);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const render = () => {
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <Error />;
    }
  };

  return (
    <main className={styles.main}>
      {render()}
      {newsData &&
        newsData.length > 0 &&
        newsData.map(
          (
            {
              author,
              title,
              article,
              description,
              url,
              urlToImage,
              publishedAt,
              content
            }: CardProps,
            i: number
          ) => (
            <Card
              key={i}
              url={url}
              content={content}
              article={article}
              author={author}
              publishedAt={publishedAt}
              urlToImage={urlToImage}
              description={description}
              title={title}
            />
          )
        )}
    </main>
  );
};

export default Main;
