import express from 'express';
import getStories from '../controllers/nytimes/getStories';
import getSpecificStories from '../controllers/nytimes/getSpecficStories';
const root = express.Router();

root.get('/', getStories);
root.get('/topstories/:section', getSpecificStories);

export default root;
