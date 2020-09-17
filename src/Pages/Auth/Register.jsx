import React, { useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PostData } from "../../helpers";
import { useAuthDispatch, useAuthState } from "../../context";

import { SET_CREDS } from "../../actions/auth.actions";
import Input from "../../Components/Input";

export default function Login() {
	const history = useHistory();

	const state = useAuthState();
	const dispatch = useAuthDispatch();

	const [confirmPassword, setConfirmPassword] = useState();

	const handleChange = (ev) => {
		dispatch({
			type: SET_CREDS,
			payload: { ...state, [ev.target.name]: ev.target.value },
		});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (confirmPassword !== state.password) {
			return alert("Passwords do not match");
		}
		return PostData("/auth/register", state)
			.then((res) => {
				console.log(res);
				alert("Awesome! You're now registered. Email verification sent.");
				history.push("/login", { from: "register" });
			})
			.catch((err) => alert("Hey! we couldn't register, what did you eat?"));
	};
	return (
		<div className="container container--auth">
			<h1>Register and never look back.</h1>
			<form onSubmit={handleSubmit}>
				<section className="input-wrapper">
					<label htmlFor="name">Fullname</label>
					<input
						name="fullname"
						type="text"
						className="input"
						placeholder="Nice Human"
						onChange={handleChange}
					/>
				</section>
				<section className="input-wrapper">
					<label htmlFor="email">Email Address</label>
					<input
						name="email"
						type="email"
						className="input"
						placeholder="Your Email Address"
						onChange={handleChange}
					/>
				</section>
				<Input
					label="Password"
					name="password"
					type="password"
					placeholder="**********"
					onChange={handleChange}
				/>
				<Input
					label="Confirm Password"
					name="confirm-password"
					type="password"
					placeholder="**********"
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<button className="btn btn--primary" type="submit">
					Register
				</button>
				<Link className="btn" to="/login">
					Login
				</Link>
			</form>
		</div>
	);
}
