import useGeoLocation from "@/hooks/useGeoLocation";
import { apiService } from "@/service/api.service";
import { createContext, useContext, useEffect, useState } from "react";
import type { IForecast, ILocation, IWeatherData } from "../@types";

interface IAppContextProps {
  forecast: IForecast[];
  weatherData: { current: IWeatherData; location: ILocation } | null;
  location: ILocation | null;
  loading: boolean;
  onRefresh: () => void;
  searchHandler: (city: string) => Promise<void>;
}

const AppContext = createContext<IAppContextProps | null>(null);

interface IProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppState() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useAppState must be used inside AppProvider");
  return ctx;
}

function AppProvider({ children }: IProps) {
  const { position, error, refresh } = useGeoLocation();
  console.log({ position, error });

  const [forecast, setForecast] = useState<IForecast[]>([]);
  const [weatherData, setWeatherData] = useState<{
    current: IWeatherData;
    location: ILocation;
  } | null>(null);

  const [location, setLocation] = useState<ILocation | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!position?.coords) return;

    const getData = async () => {
      try {
        setLoading(true);

        const lat = Number(position.coords.latitude.toFixed(1));
        const lon = Number(position.coords.longitude.toFixed(1));

        const currentWeather = await apiService.getWeatherData({ lat, lon });
        setWeatherData(currentWeather);

        const fetchData = await apiService.getForecastData({ lat, lon });
        setForecast(fetchData.forecast);
        setLocation(fetchData.location);
      } catch (err) {
        console.error(err);
        window.alert(JSON.stringify(err));
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [position]);

  const searchHandler = async (city: string) => {
    try {
      setLoading(true);
      const currentWeather = await apiService.getWeatherData({ city });
      setWeatherData(currentWeather);

      const fetchData = await apiService.getForecastData({ city });
      setForecast(fetchData.forecast);
      setLocation(fetchData.location);
    } catch (err) {
      console.error(err);
      window.alert(JSON.stringify(err));
    } finally {
      setLoading(false);
    }
  };
  const onRefresh = () => refresh();

  return (
    <AppContext.Provider
      value={{
        forecast,
        weatherData,
        location,
        loading,
        searchHandler,
        onRefresh,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
