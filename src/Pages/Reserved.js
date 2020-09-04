import React from "react";
import RestaurantCard from "../Components/RestaurantCard";

export default function Reserved() {
  const restaurant = Array(2);
  return (
    <div>
      <h1>Reserved ({restaurant.length})</h1>
      <ul className="list">
        {restaurant.map((_, index) => (
          <RestaurantCard
            name={`Restaurant ${index + 1}`}
            address={`Location ${index + 1}`}
          />
        ))}
      </ul>
    </div>
  );
}
