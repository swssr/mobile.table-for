import Axios from "axios";
import React, { useReducer, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import { PostData } from "../helpers";
import Input from "../Components/Input";

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
	const history = useHistory();
	const { state: restaurant } = useLocation();

	const [selectedDate, setSelectedDate] = useState(new Date());

	const [state, dispatch] = useReducer(BookingReducer, {
		date: new Date(),
		seats: 0,
		specialNote: null,
	});

	const handleClick = async () => {
		return await PostData("/booking", {
			...state,
			restaurantId: restaurant._id,
		})
			.then(() => history.push("/reserved"))
			.catch((err) => {
				console.log(err);
				alert("Error!");
			});
	};
	return (
		<div className="container container--booking">
			<p>reservation</p>
			<h1>{restaurant.name}</h1>
			<p>{restaurant.rating}</p>
			<p>{restaurant.seatsAvailable} Seats Available</p>
			<Input label="What day" type="date">
				<KeyboardDatePicker
					margin="none"
					id="date-picker-dialog"
					value={selectedDate}
					onChange={handleDateChange}
					disablePast
					KeyboardButtonProps={{
						"aria-label": "change date",
					}}
					inputProps={{
						style: {
							height: "3.188em",
						},
					}}
				/>
			</Input>

			<Input label="What time?">
				<KeyboardTimePicker
					margin="none"
					ampm={true}
					id="time-picker"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						"aria-label": "change time",
					}}
					inputProps={{
						style: {
							height: "3.188em",
							outline: "none",
						},
					}}
				/>
			</Input>

			<section className="seats-counter-wrapper">
				<section>
					<label>How many people are you with</label>
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
				</section>

				<ul
					class="circle-container"
					style={{
						"--v": `${state.seats} ${state.seats > 1 ? "people" : "person"}`,
					}}
				>
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
