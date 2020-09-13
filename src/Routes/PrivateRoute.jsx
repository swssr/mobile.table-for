import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../contexts";

export const PrivateRoute = ({ component: Component, ...rest }) => {
	const { user } = useAuthState();
	const authDispatch = useAuthDispatch();

	const session = localStorage.getItem("session");

	useEffect(() => {
		verifyAuth(authDispatch);
	}, [authDispatch]);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (user || session) {
					return <Component {...props} />;
				} else {
					return (
						<Redirect
							to={{ pathname: "/login", state: { from: props.location } }}
						/>
					);
				}
			}}
		></Route>
	);
};

function verifyAuth(dispatch) {
	const store = localStorage.getItem("session");
	const session = store ? JSON.parse(store) : "";
	dispatch({ type: "LOGIN", payload: session });
	return !!session;
}
