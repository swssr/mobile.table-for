import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useSWR from "swr";
import Carousel from "../Components/Carousel";
import CarouselImage from "../Components/CarouselImage";
import { fetcher } from "../helpers";

export default function RestaurantDetails() {
	const { state } = useLocation();
	const { data: profile } = useSWR("/auth/profile", fetcher);

	const [carousel, setCarousel] = useState([
		"https://source.unsplash.com/collection/279876",
	]);

	useEffect(() => {}, []);
	return (
		<div className="container container--details">
			<header>
				<h1>{state.name}</h1>
				<p>now open</p>
				<p>
					Call <strong>{state.phone}</strong> <br />
					Email <strong>{state.emails[0]}</strong>
				</p>
			</header>
			<Carousel />
			<Link to={{ pathname: "/booking", state }} className="btn btn--primary">
				Book a table
			</Link>
		</div>
	);
}
