import type { ILocation } from "@/@types";
import { Card, CardContent } from "./ui/card";
import moment from "moment";

interface ITimeCardProps {
  data: ILocation;
  dateTime: string;
}

function TimeCard({ data, dateTime }: ITimeCardProps) {
  return (
    <Card className=" transition flex-1/5  text-white bg-slate-800 px-10 py-10 max-sm:px-5 max-md:py-5 rounded-4xl outline-0 border-none shadow-[8px_8px_20px_rgba(0,0,0,0)] duration-200 hover:shadow-[10px_10px_20px_rgba(0,0,0,1)] shadow-black">
      <CardContent className="flex flex-col items-center justify-center">
        <div className="text-2xl font-bold">
          {data.city}, {data.country}
        </div>
        <div className="mt-6 flex flex-col items-center gap-0.5">
          <div className="text-5xl font-bold">
            {moment(dateTime).format("hh:mm A")}
          </div>
          <div className="text-sm font-normal text-gray-400">
            {/* Wednesday, 11th Feb */}
            {moment(dateTime).format("dddd")}, {moment(dateTime).format("LL")}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TimeCard;
