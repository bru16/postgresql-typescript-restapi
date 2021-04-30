import express, { Application } from 'express'
import userRoutes from './routes/users.routes'

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', userRoutes);

export default app;