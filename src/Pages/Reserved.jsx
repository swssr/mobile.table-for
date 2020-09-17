import React, { useEffect, useState } from "react";
import useSWR from "swr";
import RandomImage from "../Components/RandomImage";
import RestaurantCard from "../Components/RestaurantCard";
import { fetcher } from "../helpers";

export default function Reserved() {
	const { data: book, error, loading } = useSWR("/booking", fetcher);
	const { data: rest } = useSWR("/restaurant/list", fetcher);
	const { data: pro } = useSWR("/auth/profile", fetcher);

	const [reserved, set] = useState([]);

	useEffect(() => {
		if (!(rest && pro && book)) return;
		// return console.log(book);
		set(
			book.bookings.map((b) => {
				const _r = rest.restaurants.find((r) => r._id == b.restaurantId);
				return { ...b, ..._r };
			})
		);
	}, [rest, book, pro]);
	return (
		<div className="container container--reserved">
			<header>
				<h1 className="page-head">Reserved</h1>
				<p>({reserved.length}) historicaly</p>
			</header>

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
					<p>{new Date(rest.date).toLocaleString()}</p>
					<p className="location">{address}</p>
					<p className="location">
						Booked <strong>{rest.seats}</strong> Seats
					</p>
				</div>
			</figcaption>
		</figure>
	);
}
