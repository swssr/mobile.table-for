import React, { useEffect, useState } from "react";
import useSWR from "swr";
import RestaurantCard from "../Components/RestaurantCard";
import { fetcher } from "../helpers";

export default function Reserved() {
	const { data, error, loading } = useSWR("/restaurant/list", fetcher);
	const [reserved, set] = useState([]);

	useEffect(() => {
		if (!data) return;
		set(data.restaurants);
	}, [data]);

	return (
		<div className="container">
			<h1 className="page-head">Reserved ({reserved.length})</h1>
			<ul className="list">
				{reserved.map((_, index) => (
					<RestaurantCard
						name={`Restaurant ${index + 1}`}
						address={`Location ${index + 1}`}
					/>
				))}
			</ul>
		</div>
	);
}
