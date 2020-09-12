import Axios from "axios";
import React, { useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { PostData } from "../helpers";
import {
	BookingReducer,
	ADD_PERSON,
	MAX_SEATS,
	REMOVE_PERSON,
	SET_PERSONS,
	SET_SPECIAL_NOTE,
	//
} from "../context/reducers";

export default function Booking() {
	const location = useLocation();

	console.log({ location });
	const [restaurant] = useState({});

	const [state, dispatch] = useReducer(BookingReducer, {
		date: new Date(),
		seats: 0,
		specialNote: null,
	});

	const handleClick = async () => {
		return await PostData("/booking", state);
	};
	return (
		<div>
			<h1>Book your table</h1>
			<h3>{restaurant.name}</h3>
			<p>{restaurant.rating}</p>

			<div className="counter">
				<button
					onClick={() => dispatch({ type: REMOVE_PERSON })}
					className="btn btn--icon"
				>
					-
				</button>
				<input
					type="number"
					name="seats"
					id="seats"
					value={state.seats}
					onChange={(e) =>
						dispatch({ type: SET_PERSONS, payload: +e.target.value })
					}
				/>
				<button
					onClick={(_) => dispatch({ type: ADD_PERSON })}
					className="btn btn--icon"
				>
					+
				</button>
			</div>

			<div className="table">
				<ul class="circle-container">
					{Array(MAX_SEATS)
						.fill(null)
						.map((_, idx) => (idx < state.seats ? true : false))
						.map((checked) => (
							<input
								type="checkbox"
								id="seat"
								className="seat"
								checked={checked}
								onChange={(e) => {
									if (e.target.checked) {
										dispatch({ type: ADD_PERSON });
									} else {
										dispatch({ type: REMOVE_PERSON });
									}
								}}
							/>
						))}
				</ul>
				<section>
					<h3>Special Note</h3>
					<p>Anyhing you want to know before you come.</p>
					<textarea
						onChange={(e) =>
							dispatch({ type: SET_SPECIAL_NOTE, payload: e.target.value })
						}
						placeholder="I like potatoes"
					></textarea>
				</section>
				<button onClick={handleClick} className="btn btn--primary">
					Reserve
				</button>
			</div>
		</div>
	);
}
