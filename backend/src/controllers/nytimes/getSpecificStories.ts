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

    const url = `https://api.nytimes.com/svc/topstories/v2/${section.toLowerCase()}.json?api-key=Dwf1NHPF6LVmaM40f1rHGdaIVYw9TcRO`

    const response = await fetch(url);

    const json = await response.json();

    return res.status(200).json(json);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export default getSpecificStories;