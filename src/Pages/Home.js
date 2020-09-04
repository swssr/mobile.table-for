import React from "react";
import RestaurantCard from "../Components/RestaurantCard";
import SearchForm from "../Components/SearchForm";

export default function Home() {
  const restaurants = Array(24);
  return (
    <div>
      <h1>Hey, Simo!</h1>
      <p>Let's reserve a table for you.</p>
      <SearchForm />
      <section className="list">
        {restaurants.map((_, index) => (
          <RestaurantCard name={`Restaurant ${index + 1}`} />
        ))}
      </section>
    </div>
  );
}
