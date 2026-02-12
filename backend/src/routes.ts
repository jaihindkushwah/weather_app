import { Router } from "express";
import { AppController } from "./controller/app.controller";

export class AppRoutes {
  private router = Router();
  private appController = new AppController();
  constructor() {}
  routes() {
    this.router.get("/health", this.appController.getHealth);
    this.router.get("/weather", this.appController.getWeather);
    this.router.get("/forecast", this.appController.getForecast);
    return this.router;
  }
}
export const appRoutes = new AppRoutes();
