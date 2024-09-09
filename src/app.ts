import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express';
import logger from './config/logger';
import createHttpError, { HttpError } from 'http-errors';

const app = express();

app.get('/', async (req, res,next) => {
    res.json({})
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: '',
        location: '',
      },
    ],
  });
});

export default app;
