export interface IForecast {
  weatherText: string;
  weatherIcon: number;
  tempF: number;
  tempRealFeelF: number;
  windSpeedMph: number;
  windSpeedDirection: number;
  humidity: number;
  time: string;
}

export interface IForecastResponseData {
  forecast: IForecast[];
  location: ILocation;
}

export interface ILocation {
  city: string;
  country: string;
  countryCode: string;
  state: string;
}

export interface IWeatherPhoto {
  DateTaken: string | null;
  Source: string;
  Description: string;
  PortraitLink: string;
  LandscapeLink: string;
}

export interface IWeatherData {
  weatherText: string;
  weatherIcon: number;
  tempC: number;
  tempF: number;
  tempRealFeelC: number;
  tempRealFeelF: number;
  windSpeedKph: number;
  windSpeedDirection: number;
  humidity: number;
  updatedAt: string;
  photos: IWeatherPhoto[];
  pressureMb: number;
  isDayTime: boolean;
}

export interface IWeatherResponseData {
  current: IWeatherData;
  location: ILocation;
}
