// weatherIconMapper.ts
import {
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudFog,
  type LucideIcon,
} from "lucide-react";

const WEATHER_ICON_MAP: Record<number, { icon: LucideIcon; color: string }> = {
  1: { icon: Sun, color: "text-yellow-400" },
  33: { icon: Moon, color: "text-blue-300" },

  // Clouds
  2: { icon: Cloud, color: "text-gray-400" },
  3: { icon: Cloud, color: "text-gray-400" },
  4: { icon: Cloud, color: "text-gray-500" },
  34: { icon: Cloud, color: "text-gray-400" },
  35: { icon: Cloud, color: "text-gray-400" },
  36: { icon: Cloud, color: "text-gray-500" },
  38: { icon: Cloud, color: "text-gray-500" },

  // Fog / Haze
  11: { icon: CloudFog, color: "text-gray-300" },

  // Rain
  12: { icon: CloudRain, color: "text-blue-500" },
  13: { icon: CloudRain, color: "text-blue-500" },
  14: { icon: CloudRain, color: "text-blue-600" },
  18: { icon: CloudRain, color: "text-blue-600" },
  39: { icon: CloudRain, color: "text-blue-500" },
  40: { icon: CloudRain, color: "text-blue-600" },

  // Thunderstorms
  15: { icon: CloudLightning, color: "text-purple-500" },
  16: { icon: CloudLightning, color: "text-purple-500" },
  17: { icon: CloudLightning, color: "text-purple-600" },
  41: { icon: CloudLightning, color: "text-purple-500" },
  42: { icon: CloudLightning, color: "text-purple-600" },

  // Snow / Ice
  19: { icon: CloudSnow, color: "text-cyan-400" },
  20: { icon: CloudSnow, color: "text-cyan-400" },
  21: { icon: CloudSnow, color: "text-cyan-400" },
  22: { icon: CloudSnow, color: "text-cyan-400" },
  23: { icon: CloudSnow, color: "text-cyan-500" },
  24: { icon: CloudSnow, color: "text-cyan-500" },
  25: { icon: CloudSnow, color: "text-cyan-500" },
  26: { icon: CloudSnow, color: "text-cyan-500" },
  29: { icon: CloudSnow, color: "text-cyan-500" },
  43: { icon: CloudSnow, color: "text-cyan-500" },
  44: { icon: CloudSnow, color: "text-cyan-500" },
};

interface IWeatherIconProps {
  code: number;
  className?: string;
}

export function WeatherIcon({ code, className }: IWeatherIconProps) {
  const { icon: Icon, color } = WEATHER_ICON_MAP[code] ?? {
    icon: Sun,
    color: "text-yellow-300",
  };
  return <Icon className={`${color} ${className}`} />;
}
