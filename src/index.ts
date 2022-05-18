import "reflect-metadata";
import { createConnection } from "typeorm";
import UserRouter from './routes/User.route';
import AdresseRouter from './routes/Adresse.route';
import AdRouter from './routes/Ad.route';
import AnimalRouter from './routes/Animal.route';
import express from "express";

createConnection()
  .then(async (connection) => {
    // start server
    app.listen(3000, () => console.log('server running on port 3000'));
  })
  .catch((error) => console.log(error));

const app = express();
app.use(express.json());
app.use(AnimalRouter);
app.use(UserRouter);
app.use(AdresseRouter);
app.use(AdRouter);
export default app;
