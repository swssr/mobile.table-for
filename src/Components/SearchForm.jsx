import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";

import SearchIcon from "../assets/search.svg";

export default function SearchForm({
	restaurants,
	setResults,
	handleClear,
	...props
}) {
	const [query, setQuery] = useState("");

	const handleSearch = (event) => {
		event.preventDefault();
		if (!query) {
			return !query && handleClear && handleClear();
		}

		const options = {
			keys: ["name", "cuisine"],
		};

		console.log(query, restaurants);

		const fuse = new Fuse(restaurants, options);
		return setResults(fuse.search(query));
	};

	return (
		<form className="form form--inline" onSubmit={handleSearch}>
			<div className="input-wrapper">
				<input
					onChange={(ev) => setQuery(ev.target.value)}
					type="search"
					autoComplete
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
