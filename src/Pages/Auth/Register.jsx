import React, { useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import { PostData } from "../../helpers";
import { AuthReducer, SET_CREDS } from "../../context/reducers";

export default function Login() {
	const history = useHistory();

	const [state, dispatch] = useReducer(AuthReducer, {
		email: "",
		password: "",
		error: "",
	});

	const handleChange = (ev) => {
		dispatch({
			type: SET_CREDS,
			payload: { ...state, [ev.target.name]: ev.target.value },
		});
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		return PostData("/auth/register", state)
			.then((res) => history.push("/login"))
			.catch((err) => console.log(err.message));
	};
	return (
		<div>
			<h1>Regiser</h1>
			<form onSubmit={handleSubmit}>
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
				<button type="submit">Register</button>
				<Link to="/login">Login</Link>
			</form>
		</div>
	);
}
