import { RequestHandler } from 'express';

/**
 * Health check endpoint
 */
const getStories: RequestHandler = async (_req, res) => {
  try {
    const url =
      'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gsXg80672WIn26CuAAHvLmxTNyrqKDCK';

    const response = await fetch(url);

    const json = await response.json();

    res.status(200).json(json);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default getStories;
