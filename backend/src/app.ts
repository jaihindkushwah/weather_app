import express, { Application } from "express";
import cors from "cors";
import { appRoutes } from "./routes";
import dotenv from "dotenv";
dotenv.config();
function middlewareHelper(app: Application) {
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api", appRoutes.routes());
}

async function start() {
  try {
    const port = process.env.PORT;
    const app = express();
    middlewareHelper(app);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
