import ForecastCard from "./ForecastCard";
import type { IForecast } from "../@types";

import { Card, CardContent, CardHeader } from "./ui/card";

interface IForecastListProps {
  data: IForecast[];
}
function ForecastList({ data }: IForecastListProps) {
  return (
    <Card className=" text-white gap-1 px-2 py-2 pb-5  bg-slate-800  rounded-4xl outline-0 border-none shadow-[8px_8px_20px_rgba(0,0,0,0)] duration-200 hover:shadow-[10px_10px_20px_rgba(0,0,0,1)] shadow-black">
      <CardHeader className="text-center font-bold text-2xl ">
        Hourly Forecast:
      </CardHeader>
      <CardContent className="overflow-scroll overflow-y-hidden scrollbar-hide flex gap-4 px-10">
        {data.map((item, idx) => (
          <ForecastCard key={`${idx}-forecast`} data={item} />
        ))}
      </CardContent>
    </Card>
  );
}

export default ForecastList;
