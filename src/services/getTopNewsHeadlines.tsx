import axios from 'axios';

export const getTopNewHeadLines = async () => {
  const params = {
    country: 'us',
    apiKey: process.env.REACT_APP_API_KEY
  };
  const res = await axios.get('https://newsapi.org/v2/top-headlines', {
    params
  });
  return res.data;
};
