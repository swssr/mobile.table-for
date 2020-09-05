import React, { useEffect, useState } from "react";
import SearchForm from "../Components/SearchForm";
import RestaurantCard from "../Components/RestaurantCard";
import NavTop from "../Components/NavTop";

import GoogleMaps from "google-map-react";

export default function Nearby() {
  const [coord, setCoord] = useState();

  const [pos, error] = useGeoLocation();
  const restaurants = Array(Math.ceil(2 + Math.random() * 10)).fill(null);
  console.log(process.env.GOOGLE_MAPS_KEY);
  if (error) alert("Failed to get your geolocation.");
  return (
    <div className="page page--z-mid">
      <NavTop>
        <SearchForm />
      </NavTop>
      <div className="map">
        <GoogleMaps bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_KEY }} />
      </div>
      <div className="places">
        <h2>Nearby Places</h2>
        <div className="overflow-wrap">
          <section className="list list--overflow-y">
            {restaurants.map((_, index) => (
              <RestaurantCard
                name={`Restaurant ${index + 1}`}
                address={`Restaurant ${index + 1}`}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

function useGeoLocation() {
  const [pos, setPos] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    return navigator.geolocation.getCurrentPosition(
      (_pos) => setPos(_pos),
      (error) => setError(error),
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000,
      }
    );
  }, []);

  return [pos, error];
}
