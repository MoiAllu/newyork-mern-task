import { RequestHandler } from 'express';

/**
 * Health check endpoint
 */
const getStories: RequestHandler = async (_req, res) => {
  try {
    const url =
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Dwf1NHPF6LVmaM40f1rHGdaIVYw9TcRO';

    const response = await fetch(url);

    const json = await response.json();

    res.status(200).json(json);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export default getStories;
