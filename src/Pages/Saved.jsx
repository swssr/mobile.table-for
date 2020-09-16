import React, { useEffect, useState } from "react";
import useSWR from "swr";
import RestaurantCard from "../Components/RestaurantCard";
import { fetcher } from "../helpers";

export default function Saved() {
	const { data: rest } = useSWR("/restaurant/list", fetcher);
	const { data: pro } = useSWR("/auth/profile", fetcher);

	const [saved, set] = useState([]);

	useEffect(() => {
		if (!(rest && pro)) return;
		// return console.log(book);
		set(
			pro.saveLocations.map((id) => {
				const _r = rest.restaurants.find((r) => r._id === id);
				return _r;
			})
		);
	}, [rest, pro]);
	return (
		<div className="container container--saved">
			<h1 className="page-head">Saved Restaurants</h1>
			<section className="list">
				{saved.map((r) => (
					<RestaurantCard {...r} />
				))}
			</section>
		</div>
	);
}
