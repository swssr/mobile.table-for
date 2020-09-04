import React from "react";
import SearchForm from "../Components/SearchForm";
import RestaurantCard from "../Components/RestaurantCard";

export default function Nearby() {
  const restaurants = Array(Math.ceil(2 + Math.random() * 10));
  return (
    <div>
      <SearchForm />
      <div className="map"></div>
      <div className="places">
        <h2>Nearby Places</h2>
        <section className="list list--overflow-y">
            {restaurants.map((_, index) => <RestaurantCard name={`Restaurant ${index + 1}`} address={`Restaurant ${index + 1}`} />)}
        </section>
      </div>
    </div>
  );
}
