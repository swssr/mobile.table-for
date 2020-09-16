import React, { useEffect, useState } from "react";
import useSWR from "swr";
import RandomImage from "../Components/RandomImage";
import RestaurantCard from "../Components/RestaurantCard";
import { fetcher } from "../helpers";

export default function Reserved() {
	const { data, error, loading } = useSWR("/booking", fetcher);
	const { data: restaurants } = useSWR("/booking", fetcher);
	const [reserved, set] = useState([]);

	console.log({ data });
	return (
		<div className="container">
			<h1 className="page-head">Reserved ({reserved.length})</h1>
			<ul className="list">
				{reserved.map((r, index) => (
					<BookingCard {...r} />
				))}
			</ul>
		</div>
	);
}

function BookingCard({ name, address, opens, closes, isSaved, ...rest }) {
	return (
		<figure className="card">
			<RandomImage className="img img--bg" />
			<button className="btn btn--badge">
				{isSaved && <span className="icon icon--saved"></span>}
			</button>
			<figcaption>
				<div>
					<h3>{name}</h3>
					<span className="rating">
						<span className="num-reviews">
							{Math.ceil(2 + Math.random() * 100)}
						</span>
						<strong className="score">{(Math.random() * 5).toFixed(1)}</strong>
						<i class="fas fa-star"></i>
					</span>
				</div>
				<div>
					<p className="location">{address}</p>
					<p className="location">
						Booked <strong>{rest.seatsAvailable}</strong> Seats
					</p>
				</div>
			</figcaption>
		</figure>
	);
}
