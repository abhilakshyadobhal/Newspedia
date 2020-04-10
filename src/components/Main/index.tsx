import React, { useState, useEffect, useCallback } from 'react';
import { getTopNewHeadLines } from '../../services/getTopNewsHeadlines';
import Loader from '../Loader';
import Error from '../Error';
import { CardProps } from '../../interfaces/card.interface';
import { categories } from '../../data/categories.';
import Card from '../Card';
import styles from './styles.module.scss';
import SelectComponent from '../SelectComponent';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [params, setParamas] = useState({
    category: '',
  });

  const fetchNews = useCallback(async (params: any) => {
    setLoading(true);
    try {
      const res = await getTopNewHeadLines(params);
      setNewsData(res.articles);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews(params);
  }, [fetchNews, params]);

  const handleSelectChange = (key: string, value: string) => {
    const temp = {
      ...params,
      [key]: value,
    };
    setParamas(temp);
  };

  const renderData = () => {
    return (
      <div className={styles.main__content}>
        {newsData && newsData.length > 0 && (
          <div className={styles.searchFields}>
            <SelectComponent
              key='category'
              field={categories}
              handleSelectChange={handleSelectChange}
              title='category'
              value={params.category}
            />
          </div>
        )}
        {newsData && newsData.length > 0 && (
          <div className={styles.cardWrapper}>
            {newsData.map(
              (
                {
                  author,
                  title,
                  article,
                  description,
                  url,
                  urlToImage,
                  publishedAt,
                  content,
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
          </div>
        )}
      </div>
    );
  };

  const render = () => {
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return <Error />;
    }
    return renderData();
  };

  return <main className={styles.main}>{render()}</main>;
};

export default Main;
