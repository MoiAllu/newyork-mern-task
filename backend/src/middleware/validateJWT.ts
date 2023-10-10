// Create Middleware to validate JWT and user in request

// Path: backend/src/middleware/validateJWT.ts

import { RequestHandler, Request } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';

export const validateJWT: RequestHandler = async (req: Request, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Missing authorization header' });
    }

    const token = authorization.split(' ')[1];

    const decodedToken: any = jwt.verify(token, config.jwt_secret);

    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }

    req.user = user.toObject();

    next();
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
