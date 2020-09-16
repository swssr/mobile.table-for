import React, { useEffect, useState } from "react";
import SearchForm from "../Components/SearchForm";
import RestaurantCard from "../Components/RestaurantCard";
import NavTop from "../Components/NavTop";

import GoogleMaps from "google-map-react";
import { fetcher } from "../helpers";
import useSWR from "swr";

export default function Nearby() {
	
	const [coord, setCoord] = useState();
	
	const [pos, error] = useGeoLocation();
	
	const [restaurants, setRest] = useState([]);
	const { data, loading } = useSWR("/restaurant/list", fetcher);
	useEffect(() => data && setRest(data.restaurants), [data]);

	if (error) alert("Failed to get your geolocation.");
	return (
		<div className="page page--z-mid">
			<NavTop>
				<SearchForm />
			</NavTop>
			<div className="map">
				{/* <GoogleMaps
          bootstrapURLKeys={{ key: "AIzaSyDNHKQef6oDl_NCAQyBg6-7RT5spD-h_3U" }}
          center={pos}
        /> */}
				<iframe
					title="map"
					frameborder="0"
					// style="border:0"
					src="https://www.google.com/maps/embed/v1/place?q=durban&key=AIzaSyAysy8EdONqEynAfNCBtw3INDkvkEdOLuI"
					allowfullscreen
				></iframe>
			</div>
			<div className="places">
				<h2>Nearby Places</h2>
				<div className="overflow-wrap">
					<section className="list list--overflow-y">
						{restaurants.length ? (
							restaurants.map((r, index) => (
								<RestaurantCard key={r._id} name={r.name} {...r} />
							))
						) : (
							<section className="banner banner--empty">
								Nothing to see here
							</section>
						)}
					</section>
				</div>
			</div>
		</div>
	);
}

function useGeoLocation() {
	const [pos, setPos] = useState({
		lat: -28.530553899999997,
		lng: 30.895824200000003,
	});
	const [error, setError] = useState();

	// useEffect(() => {
	//   return navigator.geolocation.getCurrentPosition(
	//     (_pos) =>
	//       setPos({
	//         lat: _pos.coords.latitude,
	//         lng: _pos.coords.longitude,
	//         ..._pos,
	//       }),
	//     (error) => setError(error),
	//     {
	//       enableHighAccuracy: true,
	//       maximumAge: 0,
	//       timeout: 10000,
	//     }
	//   );
	// }, []);

	return [pos, error];
}
