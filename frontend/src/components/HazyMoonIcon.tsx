import { Moon, CloudFog } from "lucide-react";

export const HazyMoonIcon = ({ size = 80 }: { size?: number }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <Moon className="w-full h-full text-blue-300" />
      <CloudFog className="absolute bottom-0 right-0 w-1/2 h-1/2 text-slate-400" />
    </div>
  );
};
