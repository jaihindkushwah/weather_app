import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useAppState } from "@/context/AppContext";

export default function SearchBox() {
  const { searchHandler } = useAppState();
  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formD = new FormData(e.currentTarget);
      const city = formD.get("search") as string;
      e.currentTarget.reset();
      console.log(city);
      if (!city?.trim()) return;
      await searchHandler(city);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSearchSubmit} className="w-full max-w-175 ">
      <div className="flex  items-center gap-2 bg-neutral-800 backdrop-blur-md border border-white/30  px-6 rounded-full py-1 shadow-lg focus-within:ring-2 focus-within:ring-white/50">
        <SearchIcon className="w-6 h-6 text-neutral-300 " />
        <Input
          name="search"
          className="bg-transparent border-0 text-white placeholder:text-white/70 focus-visible:ring-0 shadow-none p-0"
          placeholder="Search your city..."
        />
        <Button
          variant={"outline"}
          className="bg-transparent text-white hover:bg-blue-100 cursor-pointer rounded-full"
          type="submit"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
