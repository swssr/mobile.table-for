import React from "react";
import SearchForm from "../Components/SearchForm";
import RestaurantCard from "../Components/RestaurantCard";
import NavTop from "../Components/NavTop";

export default function Nearby() {
  const restaurants = Array(Math.ceil(2 + Math.random() * 10)).fill(null);
  return (
    <div className="page page--z-mid">
      <NavTop>
        <SearchForm />
      </NavTop>
      <div className="map"></div>
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
