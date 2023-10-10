import { RequestHandler } from 'express';
/**
 * Echo endpoint
 */
const postRoot: RequestHandler = async (req, res) => {
  return res
    .json({
      message: 'Hello World!',
      body: req.body,
    })
    .status(200);
};

export default postRoot;
