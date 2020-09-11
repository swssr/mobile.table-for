import React from "react";
import RestaurantCard from "../Components/RestaurantCard";
import SearchForm from "../Components/SearchForm";

export default function Home() {
	const restaurants = Array(24).fill(null);
	return (
		<div className="page page--home">
			<h1>Hey, Simo!</h1>
			<p>Let's reserve a table for you.</p>
			<SearchForm restaurants={[]} />
			<section className="list">
				{restaurants.map((_, index) => (
					<RestaurantCard key={index} name={`Restaurant ${index + 1}`} />
				))}
			</section>
		</div>
	);
}
