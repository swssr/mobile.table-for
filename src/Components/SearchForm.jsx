import React, { useState } from "react";
import Fuse from "fuse.js";

import SearchIcon from "../assets/search.svg";

export default function SearchForm({ restaurants, ...props }) {
	const [query, setQuery] = useState("");

	const handleSearch = (event) => {
		event.preventDefault();
		if (!query) return;

		const options = {
			keys: ["name", "cuisine"],
		};

		console.log(query, restaurants);

		const fuse = new Fuse(restaurants, options);
		return fuse.search(query);
	};
	return (
		<form className="form form--inline" onSubmit={handleSearch}>
			<div className="input-wrapper">
				<input
					onChange={(ev) => setQuery(ev.target.value)}
					type="search"
					autoComplete
					required
					className="input"
					placeholder="Search restaurant, cuisine, or location"
				/>
				<button type="submit" className="btn btn--primary">
					<img src={SearchIcon} className="icon icon--search" />
				</button>
			</div>
		</form>
	);
}
