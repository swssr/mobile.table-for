import React, { useEffect, useState } from "react";
import RestaurantCard from "../Components/RestaurantCard";
import SearchForm from "../Components/SearchForm";

import useSWR from "swr";
import { fetcher } from "../helpers";
import { useAuthState } from "../context";

export default function Home() {
	const { data, error, loading } = useSWR("/restaurant/list", fetcher);
	const { data: profile } = useSWR("/auth/profile", fetcher);
	const [filtered, setFiltered] = useState();

	const { user } = useAuthState();
	const [arr, set] = useState([]);

	//Onload
	useEffect(() => {
		console.log({ profile });
	}, [profile]);

	useEffect(() => {
		if (!data) return;
		console.log({ data, error, loading });
		set(data.restaurants);
	}, [data]);

	return (
		<div className="page page--home">
			<header>
				<h1>Hey, {profile ? profile.fullname : "Human"}!</h1>
				<p>Let's reserve a table for you.</p>
				<br />
				<SearchForm
					restaurants={arr}
					setResults={setFiltered}
					handleClear={setFiltered}
				/>
			</header>
			<div className="list-wrapper">
				{arr.length ? (
					<section className="list">
						{filtered ||
							arr.map((r, index) => (
								<RestaurantCard key={r._id} name={r.name} data={r} />
							))}
					</section>
				) : (
					<div className="banner">
						<h4>Wow, Such Awkward!</h4>
						<p>nothing to see here, come back later!</p>
					</div>
				)}
			</div>
		</div>
	);
}
