import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';

// Create an Express application
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the product routes
app.use('/api', productRoutes);

// Specify the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle 404 responses
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Sorry, can't find that!");
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});