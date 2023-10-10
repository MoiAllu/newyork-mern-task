import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

import config from './config';
import errorHandler from './middleware/errorHandler';
import fourOhFour from './middleware/fourOhFour';
import root from './routes/root';
import auth from './routes/auth';
import nytimes from './routes/nytimes';

const app = express();

mongoose.connect(
  'mongodb+srv://talalstudent:pass123@cluster0.hpdfyrk.mongodb.net/root?retryWrites=true&w=majority'
);

// Check for MongoDB connection errors
const db = mongoose.connection;
db.on('error', (error: any) => console.log('MongoDB connection error:', error));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Apply most middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    // @ts-ignore no-implicit-any
    origin: config.clientCorsOrigins[config.nodeEnv] ?? '*',
  })
);

app.use(helmet());
app.use(morgan('tiny'));

// Apply routes before error handling
app.use('/', root);
// app.use('/auth', auth);
app.use('/nytimes', nytimes);

// Apply error handling last
app.use(fourOhFour);
app.use(errorHandler);

export default app;
