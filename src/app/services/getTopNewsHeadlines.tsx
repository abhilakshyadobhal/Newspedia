import axios from 'axios';

export const getTopNewHeadLines = async (_params: any) => {
  const params = {
    ..._params,
  };
  const res = await axios.get('https://newsapi.org/v2/top-headlines', {
    params,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  });
  return res.data;
};
