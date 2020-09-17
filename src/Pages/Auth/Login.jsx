import React, { useEffect, useReducer } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { SET_CREDS } from "../../actions";
import Input from "../../Components/Input";
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
			.then((res) => {
				if (res.status === 200) {
					localStorage.setItem("session", JSON.stringify(res));
					// location.state && location.state.from === "register"
					// 	? history.push("/")
					// 	: history.goBack();
					history.push("/");
				} else {
					console.log({ res });
					alert("Invalid credentials!");
				}
			})
			.catch((err) => {
				console.error(err);
				alert("Invalid credentials");
			});
	};
	return (
		<div className="container container--auth">
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<Input
					label="Email Address"
					name="email"
					type="email"
					placeholder="Human@mars.com"
					onChange={handleChange}
				/>
				<Input
					label="Password"
					name="password"
					type="password"
					placeholder="**********"
					onChange={handleChange}
				/>
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
