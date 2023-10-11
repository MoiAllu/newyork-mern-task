import { RequestHandler } from 'express';

/**
 
Health check endpoint*/
const getSpecificStories: RequestHandler = async (req, res) => {
  try {
    const { section } = req.params;
    console.log(section);
    const sections = ['arts', 'home', 'science', 'us', 'world'];

    if (!sections.includes(section.toLowerCase())) {
      return res.status(400).json({
        error: `Invalid section. Valid sections are: ${sections.join(', ')}`,
      });
    }
    const url = `https://api.nytimes.com/svc/topstories/v2/${section.toLowerCase()}.json?api-key=${process.env['NYTIMES_KEY']}`

    const response = await fetch(url);
   console.log(response)
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export default getSpecificStories;