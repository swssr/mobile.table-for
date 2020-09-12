import React, { useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PostData } from "../../helpers";
import { useAuthDispatch, useAuthState } from "../../context";

import { SET_CREDS } from "../../actions/auth.actions";

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
		if (confirmPassword !== state.password) return alert();
		return PostData("/auth/register", state)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err.message));
	};
	return (
		<div>
			<h1>Regiser</h1>
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
				<section className="input-wrapper">
					<label htmlFor="password">Password</label>
					<input
						name="password"
						type="password"
						className="input"
						placeholder="Your Email Address"
						onChange={handleChange}
					/>
				</section>
				<section className="input-wrapper">
					<label htmlFor="confirm-password">Confirm Password</label>
					<input
						name="confirm-password"
						type="password"
						className="input"
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</section>
				<button type="submit">Register</button>
				<Link to="/login">Login</Link>
			</form>
		</div>
	);
}
