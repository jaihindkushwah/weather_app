import ForecastList from "./components/ForecastList";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import TimeCard from "./components/TimeCard";
import WeatherCard from "./components/WeatherCard";
import AppProvider, { useAppState } from "./context/AppContext";
import { Spinner } from "@/components/ui/spinner";

function AppHelper() {
  const { loading, forecast, weatherData, location } = useAppState();
  return (
    <div className="w-screen min-h-screen bg-linear-to-br from-neutral-600 via-neutral-400 via-30% to-neutral-300">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <Spinner className="h-20 w-20 max-sm:h-10 max-sm:w-10" />
        </div>
      )}

      <Header />
      <section className="mx-auto my-auto max-w-6xl mt-10 max-sm:mt-5 flex flex-col gap-5 max-sm:mx-5">
        {!loading && (!forecast?.length || !weatherData?.current) && (
          <NotFound />
        )}
        {forecast && forecast.length && weatherData && location ? (
          <>
            <section className="flex justify-between gap-10 max-sm:gap-3  flex-wrap ">
              {/* left side will current city with date time */}
              {location && (
                <TimeCard
                  data={location}
                  dateTime={
                    weatherData?.current?.updatedAt || new Date().toUTCString()
                  }
                />
              )}
              {/* right side will be weather details */}
              {weatherData?.current && (
                <WeatherCard data={weatherData?.current} />
              )}
            </section>
            {/*will upcoming 12 hours forecast */}
            <div>
              {forecast && forecast.length ? (
                <ForecastList data={forecast} />
              ) : null}
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppHelper />
    </AppProvider>
  );
}

export default App;
