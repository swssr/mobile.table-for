import React, { useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import { PostData } from "../../helpers";
import { AuthReducer, SET_CREDS } from "../../context/reducers/auth.reducer";

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
		return PostData("/auth/login", state)
			.then((res) => localStorage.setItem("session", JSON.stringify(res)))
			.then(() => history.push("/"))
			.catch((err) => console.log(err.message));
	};
	return (
		<div>
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
				<button type="submit">Login</button>
				<Link to="/register">Register</Link>
			</form>
		</div>
	);
}