import React from "react";
import { useLocation, Link } from "react-router-dom";
import CarouselImage from "../Components/CarouselImage";

export default function RestaurantDetails() {
	const { state } = useLocation();

	return (
		<div className="container container--details">
			<header>
				<h1>{state.name}</h1>
				<p>now open</p>
				<p>
					Call <strong>079 644 1784</strong> <br />
					Email <strong>restaurant@mail.com</strong>
				</p>
			</header>
			<section className="carousel">
				{state.pictures &&
					state.pictures.length &&
					state.pictures.map((url) => <CarouselImage url={url} />)}
			</section>
			<Link to={{ pathname: "/booking", state }} className="btn btn--primary">
				Book a table
			</Link>
		</div>
	);
}
