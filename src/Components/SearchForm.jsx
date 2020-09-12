import React, { useState } from "react";
import Fuse from "fuse.js";

export default function SearchForm({ restaurants, ...props }) {
	const [query, setQuery] = useState("");

	const handleSearch = (event) => {
		event.preventDefault();
		if (!query) return;
		const options = {
			// isCaseSensitive: false,
			// includeScore: false,
			// shouldSort: true,
			// includeMatches: false,
			// findAllMatches: false,
			// minMatchCharLength: 1,
			// location: 0,
			// threshold: 0.6,
			// distance: 100,
			// useExtendedSearch: false,
			// ignoreLocation: false,
			// ignoreFieldNorm: false,
			keys: ["name", "cuisine", ""],
		};

		console.log(query, restaurants);

		const fuse = new Fuse(restaurants, options);
		return fuse.search(query);
	};
	return (
		<form className="form" onSubmit={handleSearch}>
			<div className="input-wrapper">
				<input
					onChange={(ev) => setQuery(ev.target.value)}
					type="search"
					autoFocus
					autoComplete
					required
					className="input"
					placeholder="Search restaurant, cuisine, or location"
				/>
				<button type="submit" className="btn">
					<span className="icon icon--search"></span>
				</button>
			</div>
		</form>
	);
}
