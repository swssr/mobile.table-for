import React, { useEffect, useState } from "react";
import SearchForm from "../Components/SearchForm";
import RestaurantCard from "../Components/RestaurantCard";
import NavTop from "../Components/NavTop";

import GoogleMaps from "google-map-react";

export default function Nearby() {
  const [coord, setCoord] = useState();

  const [pos, error] = useGeoLocation();
  const restaurants = Array(Math.ceil(2 + Math.random() * 10)).fill(null);
  if (error) alert("Failed to get your geolocation.");
  return (
    <div className="page page--z-mid">
      <NavTop>
        <SearchForm />
      </NavTop>
      <div className="map">
        {/* <GoogleMaps
          bootstrapURLKeys={{ key: "AIzaSyDNHKQef6oDl_NCAQyBg6-7RT5spD-h_3U" }}
          center={pos}
        /> */}
        <iframe
          title="map"
          width="600"
          height="450"
          frameborder="0"
          // style="border:0"
          src="https://www.google.com/maps/embed/v1/place?q=durban&key=AIzaSyAysy8EdONqEynAfNCBtw3INDkvkEdOLuI"
          allowfullscreen
        ></iframe>
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
  const [pos, setPos] = useState({
    lat: -28.530553899999997,
    lng: 30.895824200000003,
  });
  const [error, setError] = useState();

  // useEffect(() => {
  //   return navigator.geolocation.getCurrentPosition(
  //     (_pos) =>
  //       setPos({
  //         lat: _pos.coords.latitude,
  //         lng: _pos.coords.longitude,
  //         ..._pos,
  //       }),
  //     (error) => setError(error),
  //     {
  //       enableHighAccuracy: true,
  //       maximumAge: 0,
  //       timeout: 10000,
  //     }
  //   );
  // }, []);

  return [pos, error];
}
