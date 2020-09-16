import React, { useEffect, useState } from "react";
import useSWR from "swr";
import RestaurantCard from "../Components/RestaurantCard";
import { fetcher } from "../helpers";

export default function Saved() {
	const { data, error, loading } = useSWR("/restaurant/list", fetcher);
	const [saved, set] = useState([]);

	useEffect(() => {
		if (!data) return;
		set(data.restaurants);
	}, [data]);

	return (
		<div className="container container--saved">
			<h1 className="page-head">Saved Restaurants</h1>
			<section className="list">
				{saved.map(() => (
					<RestaurantCard />
				))}
			</section>
		</div>
	);
}
