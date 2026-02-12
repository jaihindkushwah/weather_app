import type { AxiosInstance } from "axios";
import axios from "axios";
const baseURL = import.meta.env.VITE_API_BASE_URL;

interface IPayload {
  lat?: number | string;
  lon?: number | string;
  city?: string;
}

export class ApiService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }
  async getWeatherData(payload: IPayload) {
    const searchParams = new URLSearchParams();
    if (payload.lat) searchParams.set("lat", payload.lat.toString());
    if (payload.lon) searchParams.set("lon", payload.lon.toString());
    if (payload.city) searchParams.set("city", payload.city);
    const response = await this.axiosInstance.get("/weather", {
      params: searchParams,
    });
    return response.data;
  }
  async getForecastData(payload: IPayload) {
    const searchParams = new URLSearchParams();
    if (payload.lat) searchParams.set("lat", payload.lat.toString());
    if (payload.lon) searchParams.set("lon", payload.lon.toString());
    if (payload.city) searchParams.set("city", payload.city);
    const response = await this.axiosInstance.get("/forecast", {
      params: searchParams,
    });
    return response.data;
  }
}

export const apiService = new ApiService();
