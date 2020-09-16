import React from "react";
import RandomImage from "./RandomImage";
import { Link } from "react-router-dom";

export default function RestaurantCard({
	name,
	address,
	opens,
	closes,
	isSaved,
	data,
	...rest
}) {
	return (
		<Link to={{ pathname: "/details", state: data }}>
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
							<strong className="score">
								{(Math.random() * 5).toFixed(1)}
							</strong>
							<i class="fas fa-star"></i>
						</span>
					</div>
					<div>
						<p className="location">{address}</p>
						<p className="location">{data.seatsAvailable} Seats Avalaible</p>
					</div>
				</figcaption>
			</figure>
		</Link>
	);
}
