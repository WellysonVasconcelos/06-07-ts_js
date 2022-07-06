import express, { Express, Request, Response } from "express";
import sequelize from "./database/sequelize";

import films from './app/controllers/filmController';

const app: Express = express();
const porta: Number = 3030;

app.use('/films', films);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World Express + TypeScript");
});

app.listen(porta, () => {
  console.log(`Este app está funcionando através da porta ${porta}`);
});

sequelize();
