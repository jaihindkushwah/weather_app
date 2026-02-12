import { WeatherService } from "@/service/weather.service";
import { Response, Request } from "express";
export class AppController {
  private weatherService = new WeatherService();
  constructor() {
    this.getHealth = this.getHealth.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.getForecast = this.getForecast.bind(this);
  }
  async getHealth(req: Request, res: Response) {
    try {
      return res.status(200).json({ message: "ok" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  async getWeather(req: Request, res: Response) {
    try {
      const query = req.query as { lat: string; lon: string; city: string };
      const weather = await this.weatherService.getWeather(query);
      return res.status(200).json(weather);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  async getForecast(req: Request, res: Response) {
    try {
      const query = req.query as { lat: string; lon: string; city: string };
      const forecast = await this.weatherService.getForecast(query);
      return res.status(200).json(forecast);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
