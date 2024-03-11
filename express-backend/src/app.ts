import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';

// Configure dotenv to load environment variables
dotenv.config();

// Create an Express application
const app = express();

// Use body-parser middleware to parse JSON and url-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the product routes
app.use('/api', productRoutes);

// Catch and handle 404 errors
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Sorry, can't find that!");
});

// Global error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;