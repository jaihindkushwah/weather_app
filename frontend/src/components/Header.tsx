import { LocateFixedIcon } from "lucide-react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import SearchBox from "./SearchBox";
import { useAppState } from "@/context/AppContext";
function Header() {
  const { onRefresh } = useAppState();
  return (
    <header className="flex justify-between items-center pt-10 max-sm:px-5 px-10">
      <div className="h-full max-sm:hidden">
        <Switch disabled id="airplane-mode" />
        <Label htmlFor="airplane-mode"></Label>
      </div>
      <SearchBox />
      <button
        onClick={onRefresh}
        title="Click here to refetch"
        className="flex text-white bg-green-400 px-3 ml-1 py-2 gap-2 rounded-full cursor-pointer"
      >
        <LocateFixedIcon className="w-6 h-6 text-neutral-800" />
        <span className="text-slate-100 font-medium max-lg:hidden">
          Current Location
        </span>
      </button>
    </header>
  );
}

export default Header;
