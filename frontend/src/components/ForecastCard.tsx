import type { IForecast } from "../@types";
import { NavigationIcon } from "lucide-react";
import moment from "moment";
import { WeatherIcon } from "./WeatherIconMapper";
interface IForecastCardProps {
  data: IForecast;
}
function ForecastCard({ data }: IForecastCardProps) {
  // console.log(data);
  return (
    <div className="min-w-22 h-56 bg-slate-700 rounded-full py-5 px-3 flex flex-col items-center justify-between text-white">
      <span className="text-sm font-medium">
        {moment(data.time).format("hh:mm A")}
      </span>

      {/* <SunIcon className="w-10 h-10 text-yellow-300" /> */}
      <WeatherIcon
        className="h-8 w-8 max-sm:h-6 max-sm:w-6"
        code={data.weatherIcon}
      />

      <span className="text-lg font-semibold">{data.tempF}°F</span>

      <div className="flex flex-col items-center gap-1">
        <NavigationIcon
          className="w-6 h-6 text-blue-400 transition-transform duration-300"
          style={{ transform: `rotate(${data.windSpeedDirection}deg)` }}
        />

        <span className="text-xs text-slate-300">{data.windSpeedMph} mph</span>
      </div>
    </div>
  );
}

export default ForecastCard;
