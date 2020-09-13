import React from "react";
import RestaurantCard from "../Components/RestaurantCard";
import SearchForm from "../Components/SearchForm";

import useSWR from "swr";
import { fetcher } from "../helpers";

export default function Home() {
	const { data, error, loading } = useSWR("/restaurant/list", fetcher);

	console.log(data);
	const restaurants = [];
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
