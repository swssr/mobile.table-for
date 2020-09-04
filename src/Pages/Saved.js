import React from "react";
import RestaurantCard from "../Components/RestaurantCard";

export default function Saved() {
  const restaurants = Array(10);
  return (
    <div>
      <h1>Saved Restaurants</h1>
      <section>
        {restaurants.map(() => (
          <RestaurantCard  />
        ))}
      </section>
    </div>
  );
}
