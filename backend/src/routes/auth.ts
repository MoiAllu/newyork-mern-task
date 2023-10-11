import express from 'express';
import postLogin from '../controllers/auth/postLogin';
import postRegister from '../controllers/auth/postRegister';

const root = express.Router();

root.post('/login', postLogin);
root.post('/register', postRegister);

export default root;
