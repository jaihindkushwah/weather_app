import {
  GaugeIcon,
  SunriseIcon,
  SunsetIcon,
  WavesIcon,
  WindIcon,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import type { IWeatherData } from "@/@types";
import { WeatherIcon } from "./weatherIconMapper";
// import { getWeatherIcon } from "./weatherIconMapper";

interface IProps {
  data: IWeatherData;
}

function WeatherCard({ data }: IProps) {
  // const IconWeather = getWeatherIcon(data.weatherIcon);
  return (
    <Card className=" transition flex-2/5 bg-slate-800 px-10 py-10 max-sm:px-5 max-md:py-5 rounded-4xl outline-0 border-none shadow-[8px_8px_20px_rgba(0,0,0,0)] duration-200 hover:shadow-[10px_10px_20px_rgba(0,0,0,1)] shadow-black">
      <CardContent className="flex gap-6 max-md:gap-2 text-white max-md:flex-col max-sm:items-center">
        <div className="flex flex-col gap-4 flex-1 max-md:flex-row">
          <div className="text-3xl font-bold">
            {data.tempC}°C
            <p className="text-sm font-normal text-gray-300">
              Feels like {data.tempRealFeelC}°C
            </p>
          </div>

          <div className="flex items-center gap-3">
            <SunriseIcon className="w-6 h-6 text-yellow-400" />
            <div className="text-sm">
              <p className="text-gray-400">Sunrise</p>
              <p>06:00 AM</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SunsetIcon className="w-6 h-6 text-orange-400" />
            <div className="text-sm">
              <p className="text-gray-400">Sunset</p>
              <p>06:00 PM</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-1">
          <WeatherIcon code={data.weatherIcon} />
          <p className="text-xl font-semibold mt-2">{data.weatherText}</p>
        </div>

        <div className="flex flex-wrap gap-4 flex-1 text-sm">
          <div className="flex items-center gap-2 flex-col">
            <WavesIcon className="w-8 h-8 max-sm:w-5 max-sm:h-5" />
            <span>{data.humidity}%</span>
            <span>Humidity</span>
          </div>

          <div className="flex items-center gap-2 flex-col">
            <WindIcon className="w-8 h-8 max-sm:w-5 max-sm:h-5" />
            <span> {data.windSpeedKph} km/h</span>
            <span>Wind</span>
          </div>

          <div className="flex items-center gap-2 flex-col">
            <GaugeIcon className="w-8 h-8 max-sm:w-5 max-sm:h-5" />
            <span> {data.pressureMb} mb</span>
            <span>Pressure</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
