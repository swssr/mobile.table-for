import React from "react";
import RestaurantCard from "../Components/RestaurantCard";
import SearchForm from "../Components/SearchForm";

import useSWR from "swr";
import { fetcher } from "../helpers";
import { useAuthState } from "../context";

export default function Home() {
	const { data, error, loading } = useSWR("/restaurant/list", fetcher);

	const { user } = useAuthState();

	console.log(data);
	return (
		<div className="page page--home">
			<header>
				<h1>
					Hey, {user ? user.fullname.substr(0, user.indexOf(" ") + 1) : "Human"}
					!
				</h1>
				<p>Let's reserve a table for you.</p>
				<br />
				<SearchForm restaurants={[]} />
			</header>
			<div className="list-wrapper">
				{data && data.restaurants.filter((r) => !r.hidden).lenght ? (
					<section className="list">
						{data &&
							data.restaurants
								.filter((r) => !r.hidden)
								.map((_, index) => (
									<RestaurantCard
										key={index}
										name={`Restaurant ${index + 1}`}
									/>
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
