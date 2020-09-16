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
	const { state: restaurant } = useLocation();

	const [state, dispatch] = useReducer(BookingReducer, {
		date: new Date(),
		seats: 0,
		specialNote: null,
	});

	const handleClick = async () => {
		return await PostData("/booking", state);
	};
	return (
		<div className="container container--booking">
			<p>reservation</p>
			<h1>{restaurant.name}</h1>
			<p>{restaurant.rating}</p>
			<p>{restaurant.seatsAvailable} Seats Available</p>
			<section className="seats-counter-wrapper">
				<div
					title={
						!restaurant.seatsAvailable
							? "No seats available"
							: "How many people are booking are you with?"
					}
					className="counter"
				>
					<button
						disabled={!restaurant.seatsAvailable}
						onClick={() => dispatch({ type: ADD_PERSON })}
					>
						+
					</button>
					<button
						disabled={!restaurant.seatsAvailable}
						onClick={() => dispatch({ type: REMOVE_PERSON })}
					>
						-
					</button>
					<input
						disabled={!restaurant.seatsAvailable}
						type="number"
						name="seats"
						id="seats"
						value={state.seats}
						onChange={(e) =>
							dispatch({ type: SET_PERSONS, payload: +e.target.value })
						}
					/>
				</div>

				<ul class="circle-container">
					{Array(MAX_SEATS)
						.fill(null)
						.map((_, idx) => (idx < state.seats ? true : false))
						.map((checked) => (
							<label
								className={`seat${checked ? " seat--active" : ""}`}
								htmlFor="seats"
							>
								<input
									type="checkbox"
									id="seat"
									checked={checked}
									disabled={!restaurant.seatsAvailable}
									onChange={(e) => {
										if (e.target.checked) {
											dispatch({ type: ADD_PERSON });
										} else {
											dispatch({ type: REMOVE_PERSON });
										}
									}}
								/>
							</label>
						))}
				</ul>
			</section>
			<details>
				<summary>
					<h3>Special Note</h3>
					<p>Anyhing you want to know before you come.</p>
				</summary>
				<textarea
					className="textarea"
					onChange={(e) =>
						dispatch({ type: SET_SPECIAL_NOTE, payload: e.target.value })
					}
					placeholder="I like potatoes"
				></textarea>
			</details>
			<button
				onClick={handleClick}
				disabled={!restaurant.seatsAvailable}
				className="btn btn--primary"
			>
				Reserve
			</button>
		</div>
	);
}
