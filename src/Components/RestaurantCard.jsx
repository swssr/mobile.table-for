import React from "react";
import RandomImage from "./RandomImage";
import { Link } from "react-router-dom";
import { PostData } from "../helpers";
import { mutate } from "swr";

export default function RestaurantCard({
	name,
	address,
	opens,
	closes,
	isSaved,
	data,
	...rest
}) {
	const toggleSaved = async (e) => {
		const url = e.target.checked
			? "/user/save-location"
			: "/user/remove-saved-location";
		await PostData(url, { restaurantId: rest._id });
		mutate("/restaurants/list");
		mutate("/auth/profile");
	};
	return (
		<figure className="card">
			<RandomImage className="img img--bg" />
			<label htmlFor="badge" className="btn btn--badge btn--toggle">
				<input type="checkbox" checked={isSaved} onClick={toggleSaved} />
				{isSaved && <span className="icon icon--saved"></span>}
			</label>
			<Link key={rest._id} to={{ pathname: "/details", state: data }}>
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
						<p className="location">{rest.seatsAvailable} Seats Avalaible</p>
					</div>
				</figcaption>
			</Link>
		</figure>
	);
}
