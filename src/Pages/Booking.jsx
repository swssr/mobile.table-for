import Axios from "axios";
import React, { useReducer, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import { PostData } from "../helpers";
import Input from "../Components/Input";

import { DateTime } from "luxon";

import {
	BookingReducer,
	ADD_PERSON,
	MAX_SEATS,
	REMOVE_PERSON,
	SET_PERSONS,
	SET_SPECIAL_NOTE,
	//
} from "../context/reducers";
import { TextField } from "@material-ui/core";

export default function Booking() {
	const history = useHistory();
	const { state: restaurant } = useLocation();

	const [date, setSelectedDate] = useState(new Date());

	const [state, dispatch] = useReducer(BookingReducer, {
		date: new Date(),
		seats: 1,
		specialNote: null,
	});

	const handleClick = async () => {
		return await PostData("/booking", {
			...state,
			restaurantId: restaurant._id,
			date,
		})
			.then(() => history.push("/reserved"))
			.catch((err) => {
				console.log(err);
				alert("Error!");
			});
	};

	const handleDateChange = (ev) => {
		if (
			new Date(ev.target.value) <
			DateTime.local().plus({ minutes: 30 }).toJSDate()
		) {
			return;
		}
		setSelectedDate(new Date(ev.target.value));
	};
	return (
		<div className="container container--booking">
			<p>reservation</p>
			<h1>{restaurant.name}</h1>
			<p>{restaurant.rating}</p>
			<p>{restaurant.seatsAvailable} Seats Available</p>
			{/* <KeyboardDatePicker
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
			/> */}

			{/* <KeyboardTimePicker
				margin="none"
				ampm={true}
				value={selectedDate.toTimeString()}
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
			/> */}

			<fieldset className="input">
				<TextField
					id="date"
					label="What day?"
					type="date"
					defaultValue={DateTime.local().toFormat("yyyy-MM-dd")}
					placeholder={DateTime.local().toLocaleString(DateTime.DATE_MED)}
					min={DateTime.local().plus({ minutes: 30 })}
					onChange={handleDateChange}
					variant="standard"
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</fieldset>
			<fieldset className="input">
				<TextField
					id="date"
					label="What Time?"
					type="time"
					defaultValue={DateTime.local().toLocaleString(DateTime.TIME_SIMPLE)}
					placeholder={DateTime.local().toLocaleString(DateTime.TIME_SIMPLE)}
					onChange={handleDateChange}
					variant="standard"
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</fieldset>

			<section className="seats-counter-wrapper">
				<section className="seats-counter-input">
					<label>
						TABLE<strong>FOR</strong> how many of you?
					</label>
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
					className="circle-container"
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
					<span className="counter-display">
						{state.seats} {state.seats === 1 ? "Person" : "People"}
					</span>
				</ul>
			</section>
			<details>
				<summary>
					<p>Anyhing you want to know before you come.</p>
				</summary>
				<textarea
					className="input textarea"
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
