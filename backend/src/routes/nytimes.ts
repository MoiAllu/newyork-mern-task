import express from 'express';
import getStories from '../controllers/nytimes/getStories';
const root = express.Router();

root.get('/', getStories);

export default root;
