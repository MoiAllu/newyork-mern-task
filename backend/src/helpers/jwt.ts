import jwt from 'jsonwebtoken';
import config from '../config';

const JWT_SECRET = config.jwt_secret;

export const generateToken = (userId: string, email: string) => {
  return jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '7 days' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
