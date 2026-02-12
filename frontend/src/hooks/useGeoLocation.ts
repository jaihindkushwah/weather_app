import { useEffect, useState } from "react";

export const useGeoLocation = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition(pos);
        setError(null);
      },
      (err) => {
        setPosition(null);
        setError(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    getLocation();

    const handleOnline = () => getLocation();
    const handleLoad = () => getLocation();

    window.addEventListener("online", handleOnline);
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return { position, error, refresh: getLocation };
};

export default useGeoLocation;
