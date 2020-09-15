import React, { useEffect, useReducer } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { SET_CREDS } from "../../actions";
import { useAuthDispatch, useAuthState } from "../../context";

import { PostData } from "../../helpers";

export default function Login() {
	const history = useHistory();
	const location = useLocation();

	const state = useAuthState();
	const dispatch = useAuthDispatch();

	const handleChange = (ev) => {
		dispatch({
			type: SET_CREDS,
			payload: { ...state, [ev.target.name]: ev.target.value },
		});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		return PostData("/auth/login", state)
Add 			.then((res) => {
				if (res.status === 200) {
					localStorage.setItem("session", JSON.stringify(res));
					// location.state && location.state.from === "register"
					// 	? history.push("/")
					// 	: history.goBack();
					history.push("/");
				} else {
					alert("Invalid credentials!");
				}
			})
			.catch(() => alert("Invalid credentials"));
	};
	return (
		<div className="container container--auth">
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<section className="input-wrapper">
					<label htmlFor="email">Email Address</label>
					<input
						name="email"
						type="email"
						className="input"
						placeholder="Your Email Address"
						onChange={handleChange}
						required
					/>
				</section>
				<section className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input
						name="password"
						type="password"
						className="input"
						placeholder="Your Email Address"
						onChange={handleChange}
						required
					/>
				</section>
				<button className="btn btn--primary" type="submit">
					Login
				</button>
				<Link className="btn" to="/register">
					Register
				</Link>
			</form>
		</div>
	);
}
