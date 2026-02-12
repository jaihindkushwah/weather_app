import axios from "axios";
import dotenv from "dotenv";
import lodash from "lodash";
dotenv.config();
interface IWeatherPayload {
  lat?: number | string;
  lon?: number | string;
  city?: string;
}

export class WeatherService {
  private WEATHER_API_KEY = process.env.WEATHER_API_KEY;
  async getWeather(payload: IWeatherPayload) {
    const locationData = await this.getLocationKeyData(payload);
    const locationKey = locationData[0]?.Key;
    if (!locationKey) return {};
    const url = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?format=json&language=en-us&details=true&getPhotos=true`;
    const response = await axios(url, {
      headers: {
        Authorization: `Bearer ${this.WEATHER_API_KEY}`,
      },
    });
    const location =
      locationData.map((location: any) => ({
        city: location.LocalizedName,
        country: location.Country.LocalizedName,
        countryCode: location.Country.ID,
        state: location.AdministrativeArea.LocalizedName,
      }))?.[0] || {};
    const current =
      response.data?.map((data: any) => ({
        weatherText: data.WeatherText,
        weatherIcon: data.WeatherIcon,
        tempC: data.Temperature.Metric.Value,
        tempF: data.Temperature.Imperial.Value,
        tempRealFeelC: data.RealFeelTemperature.Metric.Value,
        tempRealFeelF: data.RealFeelTemperature.Imperial.Value,
        windSpeedKph: data.Wind.Speed.Metric.Value,
        windSpeedDirection: data.Wind.Direction.Degrees,
        humidity: data.RelativeHumidity,
        updatedAt: data.LocalObservationDateTime,
        photos: data.Photos,
        pressureMb: data.Pressure.Metric.Value,
        isDayTime: data.IsDayTime,
      }))?.[0] || {};
    return {
      location,
      current,
    };
  }
  async getForecast(payload: IWeatherPayload) {
    const locationData = await this.getLocationKeyData(payload);
    const locationKey = locationData[0]?.Key;
    if (!locationKey) return {};
    const urls = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?format=json&language=en-us&details=true&metric=false`;
    const response = await axios(urls, {
      headers: {
        Authorization: `Bearer ${this.WEATHER_API_KEY}`,
      },
    });
    const location =
      locationData.map((location: any) => ({
        city: location.LocalizedName,
        country: location.Country.LocalizedName,
        countryCode: location.Country.ID,
        state: location.AdministrativeArea.LocalizedName,
      }))?.[0] || {};
    const forecast =
      response.data?.map((data: any) => ({
        weatherText: data.IconPhrase,
        weatherIcon: data.WeatherIcon,
        tempF: data.Temperature.Value,
        tempRealFeelF: data.RealFeelTemperature.Value,
        windSpeedMph: data.Wind.Speed.Value,
        windSpeedDirection: data.Wind.Direction.Degrees,
        humidity: data.RelativeHumidity,
        time: data.DateTime,
        photos: data.Photos,
        isDayTime: data.IsDaylight,
      })) || [];
    return {
      location,
      forecast,
    };
  }

  private async getLocationKeyData(payload: IWeatherPayload) {
    const searchParams = new URLSearchParams();
    let url = "";
    if (payload.lat && payload.lon) {
      searchParams.set("q", `${payload.lat},${payload.lon}`);
      url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?${searchParams.toString()}&language=en-us&details=true&format=json&topLevel=false`;
      const response = await axios(url, {
        headers: {
          Authorization: `Bearer ${this.WEATHER_API_KEY}`,
        },
      });
      return [response.data];
    } else if (payload.city) {
      searchParams.set("q", payload.city);
      url = `https://dataservice.accuweather.com/locations/v1/cities/search?${searchParams.toString()}&language=en-us&details=true&format=json&offset=-1&countryCode=&adminCode=&alias=2`;
      const response = await axios(url, {
        headers: {
          Authorization: `Bearer ${this.WEATHER_API_KEY}`,
        },
      });
      return response.data || [];
    } else {
      throw new Error("Invalid payload");
    }
  }
}

// https://dataservice.accuweather.com/currentconditions/v1/204842?format=json&language=en-us&details=false&getPhotos=true
//https://dataservice.accuweather.com/locations/v1/cities/search?q=mumbai&language=en-us&details=false&format=json&offset=-1&countryCode=&adminCode=&alias=2

// A string that indicates the latitude and longitude position.
// https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=20%2C22&language=en-us&details=false&format=json&topLevel=false

// next five days forcast
// https://dataservice.accuweather.com/forecasts/v1/daily/5day/204842?format=json&language=en-us&details=false&metric=false

// next hour forecast
// https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/?format=json&language=en-us&metric=false&details=false
